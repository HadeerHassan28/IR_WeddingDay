import { AnimatePresence, motion } from "framer-motion";
import { Heart } from "lucide-react";
export default function FixedHeader({ animationState, showFixedHeader }: { animationState: string; showFixedHeader: boolean }) {
  return (
    <AnimatePresence>
      {(animationState === "revealed" || showFixedHeader) && (
        <motion.header
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className={`fixed top-0 left-0 right-0 z-30 bg-transparent backdrop-blur-md shadow-sm transition-all duration-300 ${
            showFixedHeader ? "py-3" : "py-6"
          }`}
        >
          <div className="container mx-auto px-4 flex items-center justify-center gap-3">
            <Heart
              size={48}
              className="text-gold"
           
              strokeWidth={2}
            />
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
