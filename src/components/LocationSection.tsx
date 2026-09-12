import React from 'react';
import { motion } from 'motion/react';
import { Compass } from 'lucide-react';
import { TextHighlight, PopBadge } from './AnimatedText';

export const LocationSection: React.FC = () => {
  const mapQuery = encodeURIComponent(
    "Dr. Deepal's Dental Clinic, Shop No. 9, Gate No. 2, L.D. Ruparel Marg, near Priyadarshini Park, Malabar Hill, Mumbai, Maharashtra 400006"
  );
  const embedUrl = `https://maps.google.com/maps?q=${mapQuery}&t=m&z=16&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="location" className="relative py-8 sm:py-14 -mt-4 sm:-mt-6 px-3 sm:px-8 overflow-hidden z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ type: 'spring', damping: 14, stiffness: 200 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8 gap-3"
        >
          <div>
            <PopBadge className="mb-2">
              <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-black uppercase tracking-widest text-[#293549] bg-amber-100 px-3 py-1 rounded-full shadow-xs font-['Outfit',sans-serif] border border-amber-300/60">
                <Compass className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-600" />
                MALABAR HILL, MUMBAI
              </span>
            </PopBadge>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#293549] font-['Outfit',sans-serif] tracking-tight leading-tight">
              Visit <TextHighlight color="coral" variant="bracket">Our Clinic</TextHighlight>
            </h2>
          </div>
          <p className="text-slate-600 text-xs sm:text-sm max-w-sm font-medium leading-relaxed">
            Shop No. 9, Gate No. 2, L.D. Ruparel Marg, near Priyadarshini Park, Malabar Hill. Curbside parking available.
          </p>
        </motion.div>

        {/* Real Interactive Google Maps Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ delay: 0.1, type: 'spring', damping: 16, stiffness: 180 }}
          className="relative rounded-[24px] sm:rounded-[36px] bg-[#293549] p-2.5 sm:p-4 border-2 border-[#293549] ring-1 ring-white/20 shadow-[0_16px_48px_rgba(15,25,40,0.2)] overflow-hidden"
        >
          
          {/* Real Google Maps Iframe */}
          <div className="relative w-full h-[320px] sm:h-[460px] rounded-[18px] sm:rounded-[28px] overflow-hidden bg-slate-200 shadow-inner">
            <iframe
              id="google-maps-iframe"
              title="Dr. Deepal's Dental Clinic Google Maps Location"
              src={embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>

        </motion.div>

      </div>
    </section>
  );
};
