import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

// نستخدم HTMLMotionProps بدلاً من React.ButtonHTMLAttributes لمنع تعارض الـ types
interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  className = "",
  ...props
}) => {
  const baseStyles =
    "px-6 py-3 rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold-light";

  const variants = {
    primary:
      "bg-gold text-charcoal hover:bg-gold-light shadow-md hover:shadow-lg",
    secondary:
      "bg-transparent border-2 border-gold text-gold hover:bg-gold hover:text-charcoal",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};
