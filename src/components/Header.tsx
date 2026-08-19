import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center py-8 md:py-12 "
    >
      {/* Bismillah */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-2xl md:text-3xl text-gold font-amiri mb-6"
      >
        بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيمِ
      </motion.p>

      {/* Decorative Heart */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.4, type: "spring", damping: 15, stiffness: 200 }}
        className="flex justify-center mb-6"
      >
        <Heart size={48} className="text-gold" fill="#C5A85A" strokeWidth={2} />
      </motion.div>

      {/* Quranic Verse */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-lg md:text-xl text-charcoal/80 font-amiri leading-relaxed max-w-2xl mx-auto px-4"
      >
        وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا
        لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً
      </motion.p>
    </motion.header>
  );
};
