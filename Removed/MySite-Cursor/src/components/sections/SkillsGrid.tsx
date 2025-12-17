'use client';

import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { Tag } from '../ui/Tag';
import { ScrollReveal } from '../animations/ScrollReveal';
import { StaggerContainer } from '../animations/StaggerContainer';
import skillsData from '../../data/skills.json';

type Filter = 'all' | 'ai' | 'infra' | 'frontend' | 'desktop' | 'media';

const filterMap: Record<Filter, string[]> = {
  all: [],
  ai: ['ai'],
  infra: ['infra'],
  frontend: ['frontend'],
  desktop: ['frontend'],
  media: ['ai'],
};

export const SkillsGrid: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<Filter>('all');

  const filters: { id: Filter; label: string }[] = [
    { id: 'all', label: 'All' },
    { id: 'ai', label: 'AI' },
    { id: 'infra', label: 'Infra' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'desktop', label: 'Desktop' },
    { id: 'media', label: 'Media' },
  ];

  const filteredSkills = skillsData.skills.filter((skill) => {
    if (activeFilter === 'all') return true;
    const filterCategories = filterMap[activeFilter];
    return filterCategories.includes(skill.category);
  });

  return (
    <div>
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`px-4 py-2 rounded-button text-sm font-medium transition-all ${
              activeFilter === filter.id
                ? 'bg-accent-ai-media text-white'
                : 'bg-bg-surface border border-bg-surface-light text-text-secondary hover:text-text-primary'
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <StaggerContainer staggerDelay={0.05}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <ScrollReveal key={skill.id}>
              <Card hover className="h-full">
                <h3 className="text-xl font-semibold text-text-primary mb-4">
                  {skill.name}
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {skill.tools.map((tool) => (
                    <Tag key={tool} variant="default" size="sm">
                      {tool}
                    </Tag>
                  ))}
                </div>
                <p className="text-text-secondary text-sm italic">
                  {skill.example}
                </p>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </StaggerContainer>
    </div>
  );
};

