import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
  as?: 'div' | 'article' | 'section';
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = false,
  onClick,
  as: Component = 'div',
}) => {
  const baseClasses =
    'bg-bg-surface border border-bg-surface-light rounded-card p-4 md:p-6 transition-all duration-300';

  const hoverClasses = hover
    ? 'hover:scale-[1.02] hover:border-accent-ai-media/30 hover:shadow-card-hover cursor-pointer'
    : '';

  if (onClick || hover) {
    return (
      <motion.div
        whileHover={hover ? { scale: 1.02 } : undefined}
        whileTap={onClick ? { scale: 0.98 } : undefined}
        onClick={onClick}
        className={`${baseClasses} ${hoverClasses} ${className}`}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <Component className={`${baseClasses} ${className}`}>{children}</Component>
  );
};

