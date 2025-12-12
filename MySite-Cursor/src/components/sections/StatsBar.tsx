'use client';

import React from 'react';
import { ScrollReveal } from '../animations/ScrollReveal';

interface Stat {
  label: string;
  value: string;
  icon?: string;
}

const stats: Stat[] = [
  { label: 'Years building products', value: '10+', icon: '📅' },
  { label: 'Current focus', value: 'VidCutAI / Nulite', icon: '🚀' },
  { label: 'Stack depth', value: 'Full-stack + Infra', icon: '⚡' },
];

export const StatsBar: React.FC = () => {
  return (
    <section className="bg-bg-surface border-y border-bg-surface-light">
      <div className="container-custom max-w-container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 0.1}>
              <div className="text-center">
                {stat.icon && (
                  <div className="text-4xl mb-4">{stat.icon}</div>
                )}
                <div className="text-3xl md:text-4xl font-bold text-text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-text-secondary text-sm">{stat.label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

