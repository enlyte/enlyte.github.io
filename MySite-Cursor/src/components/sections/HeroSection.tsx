'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { FadeIn } from '../animations/FadeIn';

export const HeroSection: React.FC = () => {
  return (
    <section className="min-h-[90vh] flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-ai-media/10 via-transparent to-accent-infrastructure/10 pointer-events-none" />
      
      <div className="container-custom max-w-container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-6">
            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-hero font-bold text-text-primary leading-tight">
                Technical Founder building{' '}
                <span className="text-accent-ai-media-light">AI-powered</span> media tools and systems that scale.
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <h2 className="text-xl md:text-subheading text-text-secondary font-medium">
                Full-stack builder merging software, infrastructure, and UX to solve real problems
              </h2>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <p className="text-text-secondary text-lg leading-relaxed max-w-2xl">
                Technical Founder of VidCutAI, former Sales Engineer, builder of intelligent tools.
                Works across Python, React, Docker, FFmpeg, and homelab infrastructure.
                Systems-oriented approach to product development.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/projects" variant="primary" size="lg" as="a">
                  View Projects
                </Button>
                <Button href="/process" variant="secondary" size="lg" as="a">
                  How I Work
                </Button>
                <Button href="/contact" variant="ghost" size="lg" as="a">
                  Get in Touch
                </Button>
              </div>
            </FadeIn>
          </div>

          {/* Right: Visual Placeholder */}
          <div className="relative">
            <FadeIn delay={0.5}>
              <div className="aspect-square bg-bg-surface border border-bg-surface-light rounded-card-lg p-8 flex items-center justify-center">
                <div className="text-center text-text-muted">
                  <div className="text-6xl mb-4">👨‍💻</div>
                  <p className="text-sm">Portrait placeholder</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="text-text-muted text-sm">Scroll to explore</div>
      </motion.div>
    </section>
  );
};

