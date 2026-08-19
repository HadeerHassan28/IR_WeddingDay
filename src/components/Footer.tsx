import React from 'react';
import { invitationData } from '../data';
export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 text-center ">
      <p className="text-charcoal/60 font-amiri text-lg opacity-70">
        {invitationData.groomName} 🧡 {invitationData.brideName} — 2026
      </p>

      <p className="text-xs font-tajawal text-charcoal/50 flex items-center justify-center gap-1 mt-2">
        <span>© {currentYear}</span>
        <a
          href="https://new-portfolio-awyy.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-charcoal/70 hover:text-gold transition-colors underline"
        >
          Hadeer
        </a>

        <span>Made with ❤️ by</span>
      </p>
    </footer>
  );
};
