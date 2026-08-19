import React from 'react';
import { motion } from 'framer-motion';
import {  ChevronUp,  HeartPulse } from 'lucide-react';
interface SplashScreenProps {
  onReveal: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onReveal }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-background"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-32 h-32 opacity-10">
          <svg viewBox="0 0 100 100" className="w-full h-full text-gold">
            <path
              d="M50 10 L90 90 L10 90 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            />
          </svg>
        </div>
        <div className="absolute bottom-10 left-10 w-40 h-40 opacity-10">
          <svg viewBox="0 0 100 100" className="w-full h-full text-gold">
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            />
          </svg>
        </div>
      </div>

      {/* Heart Logo with Pulse Animation */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", damping: 15, stiffness: 200 }}
        className="relative z-10"
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gold/20 blur-xl rounded-full" />
          <HeartPulse 

            size={240}
            className="text-gold"
           
            strokeWidth={2}
          />
        </motion.div>
      </motion.div>

      {/* Swipe Up Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="absolute bottom-20 flex flex-col items-center gap-3 cursor-pointer"
        onClick={onReveal}
      >
        <span className="text-charcoal/70 font-tajawal text-lg">
          اسحب للأعلى
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronUp size={32} className="text-gold" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
