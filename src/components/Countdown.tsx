import React, { useState, useEffect } from "react";
import { CountdownTime } from "../types";
import { motion, AnimatePresence } from "framer-motion";

interface CountdownProps {
  targetDate: string;
}

export const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<CountdownTime>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(targetDate).getTime() - new Date().getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const TimeUnit: React.FC<{
    value: number;
    label: string;
    animate?: boolean;
  }> = ({ value, label, animate = false }) => {
    // تحويل الرقم إلى خانتين ثم إلى الأرقام العربية (١، ٢، ٣...)
    const formattedValue = value
      .toString()
      .padStart(2, "0")
      .replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[parseInt(d)]);

    return (
      <div className="flex flex-col items-center p-4 bg-white/60 backdrop-blur-sm rounded-xl shadow-md min-w-[80px]">
        <div className="relative h-10 md:h-12 w-full flex items-center justify-center overflow-hidden">
          {animate ? (
            <AnimatePresence mode="popLayout">
              <motion.span
                key={formattedValue}
                initial={{ y: -12, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 12, opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="absolute text-3xl md:text-4xl font-bold text-gold font-amiri"
              >
                {formattedValue}
              </motion.span>
            </AnimatePresence>
          ) : (
            <span className="text-3xl md:text-4xl font-bold text-gold font-amiri">
              {formattedValue}
            </span>
          )}
        </div>

        <span className="text-sm text-charcoal/70 font-tajawal mt-1">
          {label}
        </span>
      </div>
    );
  };

  return (
    <div className="flex justify-center gap-3 md:gap-6 flex-wrap">
      <TimeUnit value={timeLeft.days} label="يوم" />
      <TimeUnit value={timeLeft.hours} label="ساعة" />
      <TimeUnit value={timeLeft.minutes} label="دقيقة" />
      <TimeUnit value={timeLeft.seconds} label="ثانية" animate={true} />
    </div>
  );
};
