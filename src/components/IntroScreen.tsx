import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function IntroScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8 } }}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-gradient-to-br from-[#090909] to-[#141414] overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,164,92,0.12),transparent_25%)]" />
          
          {/* Animated Rings */}
          <motion.div 
            animate={{ scale: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-[220px] md:w-[320px] h-[220px] md:h-[320px] rounded-full bg-gold-500/10 blur-[28px]"
          />
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
            className="absolute w-[260px] md:w-[360px] h-[260px] md:h-[360px] rounded-full border border-gold-500/20"
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            className="absolute w-[340px] md:w-[460px] h-[340px] md:h-[460px] rounded-full border border-dashed border-white/10"
          />

          <div className="relative z-10 text-center p-5 flex flex-col items-center">
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-4 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-bold tracking-[0.28em]"
            >
              WELCOME
            </motion.div>
            
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[58%] text-[140px] md:text-[280px] font-extrabold text-gold-500/5 select-none pointer-events-none">
              K
            </div>
            
            <motion.h1 
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="text-4xl md:text-7xl font-extrabold tracking-wider uppercase mb-4"
            >
              Karim Hesham El TOKHY
            </motion.h1>
            
            <motion.div 
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 1.2 }}
              className="text-gold-400 text-sm md:text-xl mb-5"
            >
              Senior Creative Director & Brand Strategist
            </motion.div>
            
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="w-40 h-px mx-auto mb-5 bg-gradient-to-l from-transparent via-gold-500 to-transparent"
            />
            
            <motion.button 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              onClick={() => setIsVisible(false)}
              className="border border-white/10 bg-white/5 text-white rounded-full px-5 py-2 hover:border-gold-500/50 hover:text-gold-400 transition-colors cursor-pointer"
            >
              تخطي
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
