import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export const LoadingScreen: React.FC = () => {
  const [messageIndex, setMessageIndex] = useState(0);
  const messages = [
    "Checking the Choir List...",
    "Consulting the Jollof Council...",
    "Verifying Church Attendance...",
    "Scanning Wallet Balance...",
    "Measuring Vibe Levels..."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % messages.length);
    }, 800);
    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center z-20">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="glass p-12 rounded-[2.5rem] flex flex-col items-center"
      >
        <motion.div
          animate={{ rotate: [0, 180, 180, 360, 360] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="mb-8"
        >
          <span className="text-7xl">⏳</span>
        </motion.div>

        <h2 className="text-3xl font-bold text-christmas-yellow mb-4 text-shadow-glow uppercase tracking-tight">
          Checking your spirit...
        </h2>
        
        <motion.p
          key={messageIndex}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-white/60 font-medium italic tracking-wide"
        >
          {messages[messageIndex]}
        </motion.p>

        <div className="mt-8 flex gap-2">
           <Sparkles className="w-5 h-5 text-christmas-yellow animate-pulse" />
           <Sparkles className="w-5 h-5 text-white/20 animate-pulse delay-75" />
           <Sparkles className="w-5 h-5 text-christmas-yellow animate-pulse delay-150" />
        </div>
      </motion.div>
    </div>
  );
};
