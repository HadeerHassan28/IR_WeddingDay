import React from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "./ui/Button";
import { useRef } from "react";

interface RSVPSectionProps {
  onRSVPClick: () => void;
}

export const RSVPSection: React.FC<RSVPSectionProps> = ({ onRSVPClick }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="pt-16 md:py-24 px-4 pb-0">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-2xl mx-auto text-center"
      >
        {/* Decorative Element */}
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-20 h-20 mx-auto relative"
        >
          <div className="absolute inset-0 bg-gold/10 rounded-full blur-xl" />
          <div className="relative w-full h-full flex items-center justify-center">
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            >
              <svg
                className="w-10 h-10 text-gold stroke-[1.5]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </motion.div>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-2xl md:text-4xl font-bold text-charcoal font-amiri mb-4"
        >
          تَأْكِيدُ الْحُضُورِ
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-charcoal/70 font-tajawal text-base md:text-lg mb-8 px-4"
        >
          يُسْعِدُنَا مُشَارَكَتُكُمْ فِي فَرَحَتِنَايُرْجَى تَأْكِيدُ
          حُضُورِكُمْ لِتَتَمَكَّنُوا مِن الْاِسْتِمْتَاعِ بهَذِه اللَّحْظَاتِ
          الْمُمَيَّزَةِ مَعنَا .
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
          }
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Button
            onClick={onRSVPClick}
            className="px-12 py-4 text-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            تَأْكِيدُ الْحُضُورِ
          </Button>
        </motion.div>

        {/* Subtle decorative line */}
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: "100px" } : { width: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="h-0.5 bg-gradient-to-r from-transparent via-gold/50 to-transparent mx-auto mt-12"
        />
      </motion.div>
    </section>
  );
};
