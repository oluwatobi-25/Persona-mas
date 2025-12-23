import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import type { Personality } from '../../types';
import { Share2, RefreshCw, Sparkles, Star } from 'lucide-react';
// import html2canvas from 'html2canvas'; // Allow saving later if requested

interface ResultScreenProps {
  personality: Personality;
  onRetake: () => void;
}

export const ResultScreen: React.FC<ResultScreenProps> = ({ personality, onRetake }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'My Nigerian Christmas Spirit',
          text: `I am "${personality.name}" (${personality.alias})! What's your Christmas Spirit?`,
          url: window.location.href,
        });
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      alert("Screenshot this card to share on WhatsApp!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 pb-20 relative z-10 w-full max-w-md mx-auto font-sans">
      <motion.div
        initial={{ scale: 0.9, opacity: 0, rotateY: -10 }}
        animate={{ scale: 1, opacity: 1, rotateY: 0 }}
        transition={{ type: "spring", damping: 12 }}
        className="w-full"
      >
        <div ref={cardRef} className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden p-3 border-4 border-white/20">
          {/* Dashed Inner Border Container */}
          <div className="border-4 border-dashed border-christmas-red/20 rounded-[2rem] p-8 text-center flex flex-col items-center relative overflow-hidden bg-white">
             
            {/* Background Texture/Pattern */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>

            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 bg-christmas-red/5 text-christmas-red text-[0.65rem] font-black px-4 py-1.5 rounded-full mb-8 uppercase tracking-[0.2em] border border-christmas-red/10">
              <Sparkles className="w-3 h-3" />
              Official Spirit Report
              <Sparkles className="w-3 h-3" />
            </div>

            {/* Icon/Image Section */}
            <div className="relative mb-8">
              <motion.div 
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="w-40 h-40 bg-christmas-yellow/5 rounded-full flex items-center justify-center relative z-10"
              >
                <span className="text-8xl drop-shadow-xl select-none">
                  {personality.imageIcon.match(/[^\x00-\x7F]/) ? personality.imageIcon : '🎁'}
                </span>
              </motion.div>
              <div className="absolute -top-4 -left-4 text-christmas-yellow drop-shadow-[0_0_10px_rgba(255,210,63,0.5)] animate-pulse">
                <Star className="w-8 h-8 fill-current" />
              </div>
              <div className="absolute -bottom-2 -right-2 text-christmas-red animate-bounce">
                <Sparkles className="w-8 h-8 fill-current" />
              </div>
            </div>

            {/* Personality Titles */}
            <h1 className="text-4xl font-black text-christmas-red mb-2 leading-none uppercase tracking-tighter">
              {personality.name}
            </h1>
            <p className="text-lg font-bold text-gray-500 mb-6 italic opacity-80">
              "{personality.alias}"
            </p>

            {/* Description */}
            <p className="text-gray-700 leading-relaxed mb-8 font-medium text-lg px-2">
              {personality.description}
            </p>

            {/* Traits */}
            <div className="flex flex-wrap justify-center gap-2 mb-10 text-xs">
              {personality.traits.map((trait, i) => (
                <span key={i} className="bg-gray-50 text-gray-600 font-black px-4 py-2 rounded-xl border border-gray-100 uppercase tracking-wider">
                  {trait}
                </span>
              ))}
            </div>

            <div className="w-full pt-6 border-t border-dashed border-gray-100 flex justify-between items-center text-[0.6rem] font-black text-gray-400 uppercase tracking-[0.1em]">
               <span>Christmas Spirit Test</span>
               <div className="flex gap-1">
                  <span>🇳🇬</span>
               </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Actions */}
      <div className="flex gap-4 mt-8 w-full">
        <button 
          onClick={handleShare}
          className="flex-1 bg-christmas-green text-white font-black py-5 rounded-2xl shadow-lg border-2 border-transparent hover:bg-green-900 transition-all flex items-center justify-center gap-3 active:scale-95"
        >
          <Share2 className="w-5 h-5" />
          Share result
        </button>
        <button 
          onClick={onRetake}
          className="bg-white/90 backdrop-blur-md text-gray-700 font-black py-5 px-8 rounded-2xl shadow-lg border-2 border-white/50 hover:bg-white transition-all flex items-center justify-center gap-3 active:scale-95"
        >
          <RefreshCw className="w-5 h-5" />
          Again
        </button>
      </div>
    </div>
  );
};
