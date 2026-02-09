"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';

const FinalScene = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-full h-[550px] flex flex-col items-center justify-center text-center p-10 space-y-12"
    >
      <div className="relative">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="absolute -inset-12 border-4 border-dashed border-pink-200 rounded-full"
        />
        <img src="/Landing Image.png" alt="Us" className="w-64 h-64 object-contain relative z-10 drop-shadow-2xl" />
        
        <motion.div
          animate={{ scale: [1, 1.6, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute -top-6 -right-6 text-yellow-400"
        >
          <Sparkles size={48} />
        </motion.div>
      </div>

      <div className="space-y-6">
        <h2 className="text-5xl font-black text-pink-600 font-serif italic leading-tight">
          To a life-time of memories
        </h2>
        <motion.div
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ repeat: Infinity, duration: 1 }}
          className="flex justify-center"
        >
          <Heart className="text-red-500 fill-red-500 w-20 h-20" />
        </motion.div>
      </div>

      <p className="text-pink-400 font-black tracking-[0.3em] uppercase text-lg">
        Happy Valentine's Day, Dhruvi!
      </p>
    </motion.div>
  );
};

export default FinalScene;