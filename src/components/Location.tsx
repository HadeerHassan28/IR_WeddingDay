import React from 'react';
import { motion } from 'framer-motion';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { MapPin } from 'lucide-react';

interface LocationProps {
  location: string;
  locationUrl: string;
}

export const Location: React.FC<LocationProps> = ({ location, locationUrl }) => {
  return (
    <section className="py-8 md:py-12 px-4">
      <Card className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin size={28} className="text-gold" />
            <h3 className="text-2xl font-bold text-charcoal font-tajawal">
              الْمَوْقِعُ
            </h3>
          </div>

          <p className="text-charcoal/80 font-tajawal text-lg mb-6">
            {location}
          </p>

          <Button
            onClick={() => window.open(locationUrl, "_blank")}
            className="w-full md:w-auto"
          >
            فَتْحُ الْمَوْقِعِ عَلَى الْخَرِيطَةِ
          </Button>
        </motion.div>
      </Card>
    </section>
  );
};
