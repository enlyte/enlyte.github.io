'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    interest: [] as string[],
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      interest: checked
        ? [...prev.interest, value]
        : prev.interest.filter((item) => item !== value),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '', interest: [] });
    }, 1000);
  };

  if (submitted) {
    return (
      <Card className="text-center py-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <div className="text-4xl mb-4">✓</div>
          <h3 className="text-xl font-semibold text-text-primary mb-2">
            Message sent!
          </h3>
          <p className="text-text-secondary">
            I typically respond within 24-48 hours.
          </p>
        </motion.div>
      </Card>
    );
  }

  return (
    <Card>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-text-primary mb-2"
          >
            Name <span className="text-accent-ai-media">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-bg-surface border border-bg-surface-light rounded-button text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-ai-media focus:border-transparent"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-text-primary mb-2"
          >
            Email <span className="text-accent-ai-media">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-bg-surface border border-bg-surface-light rounded-button text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-ai-media focus:border-transparent"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-text-primary mb-2"
          >
            Message <span className="text-accent-ai-media">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-bg-surface border border-bg-surface-light rounded-button text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-ai-media focus:border-transparent resize-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-text-primary mb-3">
            Interest (optional)
          </label>
          <div className="space-y-2">
            {[
              { value: 'consulting', label: 'Consulting' },
              { value: 'collaboration', label: 'Collaboration' },
              { value: 'fulltime', label: 'Full-time role' },
              { value: 'other', label: 'Other' },
            ].map((option) => (
              <label
                key={option.value}
                className="flex items-center gap-2 text-text-secondary cursor-pointer hover:text-text-primary transition-colors"
              >
                <input
                  type="checkbox"
                  value={option.value}
                  checked={formData.interest.includes(option.value)}
                  onChange={handleCheckboxChange}
                  className="w-4 h-4 rounded border-bg-surface-light bg-bg-surface text-accent-ai-media focus:ring-accent-ai-media"
                />
                <span>{option.label}</span>
              </label>
            ))}
          </div>
        </div>

        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </form>
    </Card>
  );
};

