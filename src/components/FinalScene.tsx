"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';

const FinalScene = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-full h-[450px] flex flex-col items-center justify-center text-center p-8 space-y-8"
    >
      <div className="relative">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="absolute -inset-8 border-2 border-dashed border-pink-200 rounded-full"
        />
        <img src="/Landing Image.webp" alt="Us" className="w-48 h-48 object-contain relative z-10" />
        
        <motion.div
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute -top-4 -right-4 text-yellow-400"
        >
          <Sparkles size={32} />
        </motion.div>
      </div>

      <div className="space-y-4">
        <h2 className="text-4xl font-black text-pink-600 font-serif italic">
          To a life-time of memories
        </h2>
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 1 }}
          className="flex justify-center"
        >
          <Heart className="text-red-500 fill-red-500 w-12 h-12" />
        </motion.div>
      </div>

      <p className="text-pink-400 font-bold tracking-widest uppercase text-sm">
        Happy Valentine's Day, Dhruvi!
      </p>
    </motion.div>
  );
};

export default FinalScene;