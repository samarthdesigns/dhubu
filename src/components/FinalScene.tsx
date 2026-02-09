"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';

const FinalScene = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-full h-[550px] flex flex-col items-center justify-center text-center p-8 space-y-10"
    >
      <div className="relative">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="absolute -inset-8 border border-dashed border-pink-200 rounded-full opacity-50"
        />
        <img 
          src="/Landing Image.png" 
          alt="Us" 
          className="w-56 h-56 object-contain relative z-10 drop-shadow-xl"
          onError={(e) => e.currentTarget.src = "https://api.dicebear.com/7.x/avataaars/svg?seed=Us"}
        />
        
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="absolute -top-4 -right-4 text-yellow-400/60"
        >
          <Sparkles size={32} />
        </motion.div>
      </div>

      <div className="space-y-4">
        <h2 className="text-4xl font-bold text-pink-500 italic tracking-tight leading-tight">
          To a life-time of memories
        </h2>
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex justify-center"
        >
          <Heart className="text-red-400 fill-red-400 w-12 h-12" />
        </motion.div>
      </div>

      <p className="text-pink-300 font-bold tracking-[0.2em] uppercase text-sm italic">
        Happy Valentine's Day, Dhruvi!
      </p>
    </motion.div>
  );
};

export default FinalScene;