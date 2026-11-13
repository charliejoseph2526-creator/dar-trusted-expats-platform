import { FC } from 'react';

export interface LogoProps {
  variant?: 'header' | 'footer' | 'standalone' | 'compact';
  className?: string;
  showTagline?: boolean;
}

export const Logo: FC<LogoProps> = ({
  variant = 'header',
  className = '',
  showTagline = false
}) => {
  const logoSrc = '/assets/aistudio/WhatsApp_Image_2026-11-07_at_16.01.57_394697f5.jpeg';

  if (variant === 'footer') {
    return (
      <div className={`flex items-center gap-3.5 ${className}`}>
        <div className="bg-white rounded-2xl p-1.5 sm:p-2 shadow-xs border border-[#C49A45]/40 inline-flex items-center justify-center shrink-0">
          <img
            src={logoSrc}
            alt="Dar Trusted Expats Link official logo"
            className="h-12 w-12 sm:h-14 sm:w-14 object-contain"
            loading="eager"
          />
        </div>
        <div className="flex flex-col">
          <span className="font-heading font-bold text-lg sm:text-xl text-white tracking-tight">
            Dar Trusted Expats Link
          </span>
          <p className="text-xs text-[#C49A45] font-medium tracking-wider uppercase mt-0.5">
            Find · Move · Settle · Connect
          </p>
        </div>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className={`inline-flex items-center ${className}`}>
        <img
          src={logoSrc}
          alt="Dar Trusted Expats Link"
          className="h-10 w-10 sm:h-12 sm:w-12 object-contain mix-blend-multiply"
          loading="eager"
        />
      </div>
    );
  }

  // Default 'header' or 'standalone'
  return (
    <div className={`flex items-center gap-2 sm:gap-3 py-1 ${className}`}>
      <img
        src={logoSrc}
        alt="Dar Trusted Expats Link"
        className="h-12 sm:h-14 md:h-16 w-auto max-w-[170px] sm:max-w-[210px] object-contain mix-blend-multiply transition-transform hover:scale-[1.02]"
        loading="eager"
      />
      {showTagline && (
        <span className="hidden xl:inline-block pl-2 border-l border-stone-300 text-[10px] font-medium text-stone-500 uppercase tracking-wider">
          Find · Move · Settle · Connect
        </span>
      )}
    </div>
  );
};
