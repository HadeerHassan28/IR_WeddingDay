import React from 'react';
import { invitationData } from '../data';
export const Footer: React.FC = () => {
  return (
    <footer className="py-8 px-4 text-center">
      <p className="text-charcoal/60 font-amiri text-lg opacity-70">
       {invitationData.groomName}♥️ {invitationData.brideName} — 2026
      </p>
    </footer>
  );
};
