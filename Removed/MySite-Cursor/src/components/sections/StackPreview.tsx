'use client';

import React, { useState } from 'react';
import { ScrollReveal } from '../animations/ScrollReveal';
import { StaggerContainer } from '../animations/StaggerContainer';
import { motion } from 'framer-motion';
import stackData from '../../data/stack.json';

export const StackPreview: React.FC = () => {
  const [hoveredTool, setHoveredTool] = useState<string | null>(null);

  return (
    <section className="py-16 md:py-24">
      <div className="container-custom max-w-container mx-auto">
        <ScrollReveal>
          <h2 className="text-2xl md:text-section font-bold text-text-primary mb-4 text-center">
            Tech Stack
          </h2>
          <p className="text-text-secondary text-center mb-12 max-w-2xl mx-auto">
            Tools and technologies I use to build products
          </p>
        </ScrollReveal>

        <StaggerContainer staggerDelay={0.05}>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {stackData.stack.map((tool) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                onHoverStart={() => setHoveredTool(tool.name)}
                onHoverEnd={() => setHoveredTool(null)}
                className="relative"
              >
                <div className="bg-bg-surface border border-bg-surface-light rounded-card p-4 text-center cursor-pointer transition-all hover:border-accent-ai-media/30">
                  <div className="text-text-primary font-medium text-sm mb-1">
                    {tool.name}
                  </div>
                  {hoveredTool === tool.name && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-bg-surface-light border border-bg-surface-light rounded px-3 py-2 text-xs text-text-secondary whitespace-nowrap z-10"
                    >
                      {tool.context}
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
};

