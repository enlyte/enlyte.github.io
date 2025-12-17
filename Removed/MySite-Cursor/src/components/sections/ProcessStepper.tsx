'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '../ui/Card';

interface Phase {
  id: string;
  title: string;
  description: string;
  points: string[];
}

const phases: Phase[] = [
  {
    id: 'approach',
    title: 'How I Approach a New Problem',
    description: 'Zoom out to systems view before fixing details. Map dependencies and relationships. Identify leverage points.',
    points: [
      'Start with the big picture',
      'Understand system boundaries and interactions',
      'Identify key leverage points',
      'Avoid premature optimization',
    ],
  },
  {
    id: 'research',
    title: 'Research and Validation',
    description: 'Gather context from multiple sources. Validate assumptions with experiments. Use logging and data over intuition.',
    points: [
      'Gather context from multiple sources',
      'Validate assumptions with experiments',
      'Use logging and data over intuition',
      'Document findings and decisions',
    ],
  },
  {
    id: 'mapping',
    title: 'System Mapping and Architecture',
    description: 'Create visual maps of systems. Document decision points. Build tools to offload mental load.',
    points: [
      'Create visual maps of systems',
      'Document decision points',
      'Build tools to offload mental load',
      'Scripts, docs, mapping files',
    ],
  },
  {
    id: 'decisions',
    title: 'Decision-Making and Trade-offs',
    description: 'Explicitly consider trade-offs. Document reasoning. Iterate based on feedback.',
    points: [
      'Explicitly consider trade-offs',
      'Document reasoning',
      'Iterate based on feedback',
      'Balance speed vs quality',
    ],
  },
  {
    id: 'execution',
    title: 'Execution and Iteration',
    description: 'Build incrementally. Test assumptions continuously. Refine based on real usage.',
    points: [
      'Build incrementally',
      'Test assumptions continuously',
      'Refine based on real usage',
      'Ship early, iterate often',
    ],
  },
];

export const ProcessStepper: React.FC = () => {
  const [activePhase, setActivePhase] = useState<string>(phases[0].id);

  const currentPhase = phases.find((p) => p.id === activePhase) || phases[0];

  return (
    <div>
      {/* Stepper Navigation */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {phases.map((phase, index) => (
          <button
            key={phase.id}
            onClick={() => setActivePhase(phase.id)}
            className={`px-4 py-2 rounded-button text-sm font-medium transition-all ${
              activePhase === phase.id
                ? 'bg-accent-ux-product text-white'
                : 'bg-bg-surface border border-bg-surface-light text-text-secondary hover:text-text-primary'
            }`}
          >
            {index + 1}. {phase.title.split(' ')[0]}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activePhase}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left: Description */}
            <div>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">
                {currentPhase.title}
              </h2>
              <p className="text-text-secondary mb-6">{currentPhase.description}</p>
              <ul className="space-y-2">
                {currentPhase.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-text-secondary">
                    <span className="text-accent-ux-product mt-1">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Visual Placeholder */}
            <Card className="bg-bg-surface-light">
              <div className="aspect-square flex items-center justify-center text-text-muted">
                <div className="text-center">
                  <div className="text-4xl mb-4">📊</div>
                  <p className="text-sm">Visual placeholder</p>
                  <p className="text-xs mt-2">Diagram or illustration</p>
                </div>
              </div>
            </Card>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

