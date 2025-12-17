'use client';

import React from 'react';
import { ScrollReveal } from '../animations/ScrollReveal';
import { Card } from '../ui/Card';

interface PipelineStageProps {
  stageNumber: number;
  title: string;
  description: string;
  index: number;
}

export const PipelineStage: React.FC<PipelineStageProps> = ({
  stageNumber,
  title,
  description,
  index,
}) => {
  return (
    <ScrollReveal delay={index * 0.1}>
      <Card className="mb-8">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-accent-ai-media/20 rounded-full flex items-center justify-center text-accent-ai-media-light font-bold text-lg">
            {stageNumber}
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-text-primary mb-2">
              {title}
            </h3>
            <p className="text-text-secondary">{description}</p>
          </div>
        </div>
      </Card>
    </ScrollReveal>
  );
};

