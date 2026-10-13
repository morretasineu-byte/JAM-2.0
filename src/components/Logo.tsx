import React from 'react';
import logoLight from '../assets/images/logo.png';
import logoDark from '../assets/images/logo-dark.png';

interface LogoProps {
  variant?: 'header' | 'full' | 'mark' | 'footer';
  theme?: 'light' | 'dark';
  className?: string;
  descriptorLang?: 'ca' | 'es';
}

export const Logo: React.FC<LogoProps> = ({
  theme = 'light',
  className = '',
  descriptorLang = 'ca',
}) => {
  const isDark = theme === 'dark';
  const logoSrc = isDark ? logoDark : logoLight;
  const altText =
    descriptorLang === 'ca'
      ? 'SELLATS JAM - Especialistes en juntes i segellats'
      : 'SELLATS JAM - Especialistas en juntas y sellados';

  return (
    <img
      src={logoSrc}
      alt={altText}
      className={`w-auto object-contain select-none shrink-0 ${className}`}
      loading="eager"
      decoding="async"
    />
  );
};
