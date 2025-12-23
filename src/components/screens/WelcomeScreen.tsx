import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface WelcomeScreenProps {
  onStart: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4 relative z-10 w-full">
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="glass p-8 md:p-12 rounded-[2.5rem] max-w-md w-full relative"
      >
        {/* Santa Header Icon */}
        <div className="flex justify-center mb-8">
          <motion.div 
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center border-2 border-white/20 backdrop-blur-md shadow-2xl relative"
          >
             <span className="text-7xl">🧑‍🎄</span>
             <div className="absolute -top-2 -right-2 bg-christmas-yellow rounded-full p-2 shadow-lg">
                <Star className="w-4 h-4 text-christmas-red fill-current" />
             </div>
          </motion.div>
        </div>
        
        <div className="mb-8">
          <h1 className="text-5xl md:text-6xl font-black text-white leading-tight">
            Christmas
          </h1>
          <h2 className="text-5xl md:text-6xl font-black text-christmas-yellow tracking-tight text-shadow-glow uppercase">
            Vibe Check
          </h2>
        </div>
        
        <p className="text-white/80 text-lg md:text-xl font-medium mb-10 leading-relaxed max-w-xs mx-auto">
          What's your holiday spirit this year? 🎄
        </p>

        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(255, 210, 63, 0.4)" }}
          whileTap={{ scale: 0.95 }}
          onClick={onStart}
          className="w-full bg-christmas-yellow text-christmas-red text-2xl font-black py-5 rounded-2xl shadow-[0_10px_0_0_#D4A017] hover:translate-y-1 hover:shadow-[0_6px_0_0_#D4A017] transition-all flex items-center justify-center gap-3 active:translate-y-2 active:shadow-none"
        >
          Start Check <Star className="w-6 h-6 fill-current" />
        </motion.button>
      </motion.div>
      
      <div className="mt-8 flex items-center gap-2 text-white/40 text-sm font-semibold tracking-widest uppercase">
        <span>Built for the Culture</span>
      </div>
    </div>
  );
};
