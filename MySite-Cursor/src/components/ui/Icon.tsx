import React from 'react';

interface IconProps {
  name: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

// Simple icon component - can be extended with actual icon library
export const Icon: React.FC<IconProps> = ({
  name,
  size = 'md',
  className = '',
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12',
  };

  // Placeholder icon - replace with actual icon library (e.g., react-icons, lucide-react)
  return (
    <div
      className={`${sizeClasses[size]} ${className} flex items-center justify-center`}
      aria-hidden="true"
    >
      <span className="text-text-secondary text-xs font-mono">{name}</span>
    </div>
  );
};

