import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-bg-surface-light bg-bg-surface">
      <div className="container-custom max-w-container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-text-primary font-semibold mb-4">Stephen Moy</h3>
            <p className="text-text-secondary text-sm">
              Technical Founder building AI-powered media tools and systems that scale.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-text-primary font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/about" className="text-text-secondary hover:text-text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/projects" className="text-text-secondary hover:text-text-primary transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="/contact" className="text-text-secondary hover:text-text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-text-primary font-semibold mb-4">Connect</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-text-primary transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-text-primary transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@stephenmoy.com"
                  className="text-text-secondary hover:text-text-primary transition-colors"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-bg-surface-light text-center text-text-muted text-sm">
          <p>&copy; {currentYear} Stephen Moy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

