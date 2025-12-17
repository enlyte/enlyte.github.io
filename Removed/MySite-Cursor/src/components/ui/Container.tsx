import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: 'container' | 'content' | 'wide' | 'full';
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  maxWidth = 'container',
}) => {
  const maxWidthClasses = {
    container: 'max-w-container',
    content: 'max-w-content',
    wide: 'max-w-wide',
    full: 'max-w-full',
  };

  return (
    <div
      className={`container-custom ${maxWidthClasses[maxWidth]} ${className}`}
    >
      {children}
    </div>
  );
};

