'use client';

import React from 'react';
import { ScrollReveal } from '../animations/ScrollReveal';
import { Card } from '../ui/Card';
import timelineData from '../../data/timeline.json';

const iconMap: Record<string, string> = {
  education: '📚',
  mobile: '📱',
  enterprise: '🏢',
  ai: '🤖',
};

export const TimelineSection: React.FC = () => {
  return (
    <div className="space-y-8">
      {timelineData.timeline.map((item, index) => (
        <ScrollReveal key={item.id} delay={index * 0.1}>
          <Card className="relative pl-8 md:pl-12 border-l-2 border-accent-ai-media/30">
            <div className="absolute left-0 top-0 w-4 h-4 bg-accent-ai-media rounded-full transform -translate-x-[9px] -translate-y-1" />
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{iconMap[item.icon] || '💼'}</span>
                  <div>
                    <div className="text-text-muted text-sm font-mono">{item.period}</div>
                    <h3 className="text-xl font-semibold text-text-primary">{item.title}</h3>
                    <div className="text-text-secondary">{item.organization}</div>
                  </div>
                </div>
                <p className="text-text-secondary mt-2">{item.description}</p>
              </div>
            </div>
          </Card>
        </ScrollReveal>
      ))}
    </div>
  );
};

