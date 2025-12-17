import React from 'react';
import { Container } from './Container';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  maxWidth?: 'container' | 'content' | 'wide' | 'full';
  spacing?: 'none' | 'sm' | 'md' | 'lg';
  id?: string;
}

export const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  containerClassName = '',
  maxWidth = 'container',
  spacing = 'md',
  id,
}) => {
  const spacingClasses = {
    none: '',
    sm: 'py-12 md:py-16',
    md: 'section-spacing',
    lg: 'py-24 md:py-section-lg',
  };

  return (
    <section id={id} className={`${spacingClasses[spacing]} ${className}`}>
      <Container maxWidth={maxWidth} className={containerClassName}>
        {children}
      </Container>
    </section>
  );
};

