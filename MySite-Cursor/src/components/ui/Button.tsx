import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  href?: string;
  as?: 'button' | 'a';
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  href,
  as,
  ...props
}) => {
  const variantClasses = {
    primary:
      'bg-accent-ai-media text-white hover:bg-accent-ai-media-light focus-visible-ring',
    secondary:
      'bg-bg-surface border border-bg-surface-light text-text-primary hover:bg-bg-surface-light focus-visible-ring',
    ghost:
      'bg-transparent text-text-primary hover:bg-bg-surface focus-visible-ring',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const baseClasses =
    'inline-flex items-center justify-center rounded-button font-medium transition-all duration-200 focus-visible-ring';

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href || as === 'a') {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={classes}
        {...(props as any)}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={classes}
      {...props}
    >
      {children}
    </motion.button>
  );
};

