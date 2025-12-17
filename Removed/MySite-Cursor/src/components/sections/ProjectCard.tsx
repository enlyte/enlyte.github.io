'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { Tag } from '../ui/Tag';
import { Button } from '../ui/Button';

interface Project {
  id: string;
  name: string;
  role: string;
  summary: string;
  stack: string[];
  tags: string[];
  accentColor: string;
  slug: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const accentColorMap: Record<string, string> = {
    'ai-media': 'accent-ai-media',
    infrastructure: 'accent-infrastructure',
    'ux-product': 'accent-ux-product',
    legacy: 'accent-legacy',
    personal: 'accent-personal',
  };

  const accentClass = accentColorMap[project.accentColor] || 'accent-ai-media';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Card
        hover
        onClick={() => (window.location.href = project.slug)}
        className="h-full flex flex-col"
      >
        {/* Image Placeholder */}
        <div
          className={`aspect-video rounded-card mb-4 flex items-center justify-center border ${
            project.accentColor === 'ai-media'
              ? 'bg-gradient-to-br from-accent-ai-media/20 to-bg-surface border-accent-ai-media/30'
              : project.accentColor === 'infrastructure'
              ? 'bg-gradient-to-br from-accent-infrastructure/20 to-bg-surface border-accent-infrastructure/30'
              : project.accentColor === 'ux-product'
              ? 'bg-gradient-to-br from-accent-ux-product/20 to-bg-surface border-accent-ux-product/30'
              : project.accentColor === 'legacy'
              ? 'bg-gradient-to-br from-accent-legacy/20 to-bg-surface border-accent-legacy/30'
              : 'bg-gradient-to-br from-accent-ai-media/20 to-bg-surface border-accent-ai-media/30'
          }`}
        >
          <div className="text-text-muted text-sm">Screenshot placeholder</div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col">
          <div className="mb-2">
            <Tag variant="default" size="sm" className="mb-2">
              {project.role}
            </Tag>
            <h3 className="text-2xl font-semibold text-text-primary mb-2">
              {project.name}
            </h3>
            <p className="text-text-secondary mb-4">{project.summary}</p>
          </div>

          {/* Stack Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.stack.slice(0, 4).map((tech) => (
              <Tag key={tech} variant="default" size="sm">
                {tech}
              </Tag>
            ))}
            {project.stack.length > 4 && (
              <Tag variant="default" size="sm">
                +{project.stack.length - 4}
              </Tag>
            )}
          </div>

          {/* Project Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <Tag key={tag} variant="ai" size="sm">
                {tag}
              </Tag>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-auto">
            <Button
              href={project.slug}
              variant="secondary"
              size="sm"
              as="a"
              className="w-full"
            >
              View case study
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

