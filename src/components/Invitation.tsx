import React from 'react';
import { motion } from 'framer-motion';
import { Card } from './ui/Card';
import { InvitationData } from '../types';

interface InvitationProps {
  data: InvitationData;
}

export const Invitation: React.FC<InvitationProps> = ({ data }) => {
  return (
    <section className="py-8 md:py-12 px-4">
      <Card className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal font-amiri mb-4">
            دَعْوَة {data.occasion}
          </h2>

          <div className="my-8">
            <p className="text-2xl md:text-3xl text-gold font-amiri mb-2">
              {data.groomName}
            </p>
            <p className="text-charcoal/60 font-tajawal text-lg mb-4">و</p>
            <p className="text-2xl md:text-3xl text-gold font-amiri">
              {data.brideName}
            </p>
          </div>

          <div className="border-t border-b border-gold/20 py-6 my-6">
            <p className="text-charcoal/80 font-tajawal text-lg leading-relaxed">
              يَتَشَرَّفَانِّ بِدَعْوَتِكُمْ لِحَضور {data.occasion}
            </p>
            <p className="text-charcoal/70 font-tajawal mt-4">
              وذَلِك بِمَشِيئَةِ اللَّهِ تَعَالَى{" "}
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-center gap-3">
              <span className="text-gold">📅</span>
              <span className="text-charcoal font-tajawal text-lg">
                {data.date}
              </span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <span className="text-gold">🕐</span>
              <span className="text-charcoal font-tajawal text-lg">
                {data.time}
              </span>
            </div>
          </div>
        </motion.div>
      </Card>
    </section>
  );
};
