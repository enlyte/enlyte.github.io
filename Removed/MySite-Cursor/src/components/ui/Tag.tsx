import React from 'react';

interface TagProps {
  children: React.ReactNode;
  variant?: 'default' | 'ai' | 'infra' | 'ux' | 'legacy' | 'personal';
  size?: 'sm' | 'md';
  className?: string;
}

export const Tag: React.FC<TagProps> = ({
  children,
  variant = 'default',
  size = 'sm',
  className = '',
}) => {
  const variantClasses = {
    default: 'bg-bg-surface-light text-text-secondary',
    ai: 'bg-accent-ai-media/20 text-accent-ai-media-light',
    infra: 'bg-accent-infrastructure/20 text-accent-infrastructure-light',
    ux: 'bg-accent-ux-product/20 text-accent-ux-product-light',
    legacy: 'bg-accent-legacy/20 text-accent-legacy-light',
    personal: 'bg-accent-personal/20 text-accent-personal-light',
  };

  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
  };

  return (
    <span
      className={`inline-flex items-center rounded-button font-medium ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {children}
    </span>
  );
};

