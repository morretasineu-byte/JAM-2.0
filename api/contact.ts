import type { VercelRequest, VercelResponse } from '@vercel/node';

interface ContactPayload {
  name?: unknown;
  contact?: unknown;
  clientType?: unknown;
  service?: unknown;
  municipality?: unknown;
  message?: unknown;
  consent?: unknown;
  lang?: unknown;
  website?: unknown;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // 1. Accept only POST
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // 2. Read environment variables
  const token = process.env.AIRTABLE_TOKEN?.trim();
  const rawBaseId = process.env.AIRTABLE_BASE_ID?.trim();
  // Support both clean base ID (e.g. appl8M2KL7APmvWhk) and full Airtable URLs
  const baseId = rawBaseId?.match(/app[a-zA-Z0-9]+/)?.[0] || rawBaseId;
  const tableName = process.env.AIRTABLE_TABLE_NAME?.trim();

  if (!token || !baseId || !tableName) {
    return res.status(500).json({ error: 'Server configuration error' });
  }

  // 3. Body parsing & Anti-spam check (honeypot)
  const body = (req.body || {}) as ContactPayload;

  // Honeypot field "website": if filled, pretend success without saving
  if (typeof body.website === 'string' && body.website.trim().length > 0) {
    return res.status(200).json({ ok: true });
  }

  // 4. Server-side validation
  const name = typeof body.name === 'string' ? body.name.trim() : '';
  const contact = typeof body.contact === 'string' ? body.contact.trim() : '';
  const consent = body.consent === true;
  const clientType = typeof body.clientType === 'string' ? body.clientType.trim() : '';
  const service = typeof body.service === 'string' ? body.service.trim() : '';
  const municipality = typeof body.municipality === 'string' ? body.municipality.trim() : '';
  const message = typeof body.message === 'string' ? body.message.trim() : '';
  const lang = body.lang === 'es' ? 'es' : 'ca';

  // Validation rules:
  // "name" & "contact" required (contact min 5 chars), "consent" must be true
  // Max lengths: name <= 200, contact <= 200, message <= 3000
  if (
    !name ||
    name.length > 200 ||
    !contact ||
    contact.length < 5 ||
    contact.length > 200 ||
    !consent ||
    message.length > 3000
  ) {
    return res.status(400).json({ error: 'Invalid form data' });
  }

  // 5. Send record to Airtable
  const airtableEndpoint = `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(tableName)}`;

  const airtableBody = {
    fields: {
      'Nom o empresa': name,
      'Contacte': contact,
      'Tipus de client': clientType,
      'Servei': service,
      'Municipi': municipality,
      'Missatge': message,
      'Idioma': lang,
      'Data': new Date().toISOString(),
      'Consentiment': true,
    },
    typecast: true,
  };

  try {
    const airtableRes = await fetch(airtableEndpoint, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(airtableBody),
    });

    if (!airtableRes.ok) {
      return res.status(502).json({ error: 'Service temporarily unavailable' });
    }

    return res.status(200).json({ ok: true });
  } catch {
    return res.status(502).json({ error: 'Service temporarily unavailable' });
  }
}
