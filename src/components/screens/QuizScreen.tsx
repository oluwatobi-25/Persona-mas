import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Question } from '../../types';
import { TreePine } from 'lucide-react';

interface QuizScreenProps {
  question: Question;
  currentQuestionIndex: number;
  totalQuestions: number;
  onAnswer: (personalityId: string) => void;
}

const categoryIconMap: Record<string, string> = {
  'Vibe': '✨',
  'Wallet': '👛',
  'Chow': '🍲'
};

export const QuizScreen: React.FC<QuizScreenProps> = ({
  question,
  currentQuestionIndex,
  totalQuestions,
  onAnswer,
}) => {
  // Only use the first two options as requested
  const displayOptions = question.options.slice(0, 2);

  return (
    <div className="flex flex-col items-center min-h-screen w-full relative z-10 font-sans px-4 py-8">
      
      {/* Header Bar */}
      <div className="w-full max-w-lg mb-12 flex justify-between items-center px-1">
        <div className="flex items-center gap-2">
          <div className="bg-christmas-green p-1.5 rounded-lg">
             <TreePine className="w-5 h-5 text-white" />
          </div>
          <span className="text-white text-xl font-black tracking-tight">VibeCheck</span>
        </div>
        
        {/* Progress Pagination */}
        <div className="flex gap-2">
          {Array.from({ length: totalQuestions }).map((_, i) => (
            <div 
              key={i} 
              className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${
                i <= currentQuestionIndex ? 'bg-christmas-yellow shadow-[0_0_15px_rgba(255,210,63,0.6)]' : 'bg-black/40 border border-white/5'
              }`}
            />
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={question.id}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
          className="bg-white rounded-[2.5rem] shadow-2xl w-full max-w-md overflow-hidden flex flex-col items-center"
        >
          {/* Candy Stripe Top */}
          <div className="w-full h-4 candy-stripe opacity-90" />
          
          <div className="p-8 sm:p-12 flex flex-col items-center text-center w-full">
            {/* Category Icon */}
            <div className="relative mb-8">
               <div className="w-32 h-32 bg-pink-50/50 rounded-full flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-100 to-transparent rounded-full opacity-40" />
                  <span className="text-6xl relative z-10 drop-shadow-sm select-none">
                    {categoryIconMap[question.category] || '✨'}
                  </span>
               </div>
               {/* Sparkle */}
               <div className="absolute -top-1 -right-1 text-christmas-yellow animate-pulse">
                  <span className="text-3xl">✨</span>
               </div>
            </div>

            {/* Question Text */}
            <h2 className="text-2xl sm:text-4xl font-black text-slate-800 leading-tight mb-12 tracking-tight">
              {question.text}
            </h2>

            {/* Options - Two Buttons Side-by-Side */}
            <div className="flex gap-4 w-full">
              {displayOptions.map((option, index) => (
                <button
                  key={index}
                  onClick={() => onAnswer(option.personalityId)}
                  className={`flex-1 py-5 px-4 rounded-2xl font-black text-sm sm:text-[0.9rem] border-2 transition-all active:scale-95 shadow-sm
                    ${index === 0 
                      ? 'text-christmas-red border-christmas-red/10 bg-white hover:bg-christmas-red/5' 
                      : 'text-christmas-green border-christmas-green/10 bg-white hover:bg-christmas-green/5'
                    }`}
                >
                  {option.text}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Footer Branding */}
      <div className="mt-16 flex flex-col items-center gap-2">
        <p className="text-white/40 text-xs font-bold uppercase tracking-[0.3em] flex items-center gap-2 select-none">
          Choose your vibe <span className="text-[0.6rem] flex gap-1">🔔 🍭 ❄️</span>
        </p>
      </div>
    </div>
  );
};
