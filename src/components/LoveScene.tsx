"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Calendar } from 'lucide-react';

const LoveScene = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full h-[450px] bg-gradient-to-br from-rose-50 to-pink-100 rounded-3xl p-8 flex flex-col items-center justify-center text-center relative overflow-hidden"
    >
      {/* Floating Hearts */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-pink-300/30"
          animate={{ 
            y: [0, -20, 0],
            scale: [1, 1.2, 1],
            rotate: [0, 15, -15, 0]
          }}
          transition={{ repeat: Infinity, duration: 3 + i, delay: i * 0.5 }}
          style={{ 
            top: `${Math.random() * 80}%`, 
            left: `${Math.random() * 80}%` 
          }}
        >
          <Heart fill="currentColor" size={24 + i * 4} />
        </motion.div>
      ))}

      <div className="z-10 space-y-8">
        <div className="flex items-center justify-center gap-6">
          <motion.div 
            animate={{ x: [-5, 5, -5] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="relative"
          >
            <img src="/left-bunny.webp" alt="Samarth" className="w-28 h-28 object-contain" />
            <div className="absolute -top-2 -right-2 bg-white px-2 py-1 rounded-lg shadow-sm text-[10px] font-bold text-rose-500 border border-rose-100">
              Jan 31
            </div>
          </motion.div>

          <motion.div
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <Heart className="text-rose-500 fill-rose-500 w-12 h-12" />
          </motion.div>

          <motion.div 
            animate={{ x: [5, -5, 5] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="relative"
          >
            <img src="/right-bunny.webp" alt="Dhruvi" className="w-28 h-28 object-contain" />
            <div className="absolute -top-2 -left-2 bg-white px-2 py-1 rounded-lg shadow-sm text-[10px] font-bold text-rose-500 border border-rose-100">
              Feb 2
            </div>
          </motion.div>
        </div>

        <div className="bg-white/60 backdrop-blur-sm p-6 rounded-3xl border-2 border-white shadow-sm">
          <h3 className="text-2xl font-serif italic text-rose-600 mb-4">Pure Love</h3>
          <p className="text-rose-900 font-medium leading-relaxed">
            "From saying love you 31st Jan to me saying I love you 2nd Feb. We've grown closer"
          </p>
        </div>

        <div className="flex justify-center gap-2">
          <Calendar className="text-rose-400" size={20} />
          <span className="text-rose-400 font-bold text-sm">Our Timeline</span>
        </div>
      </div>
    </motion.div>
  );
};

export default LoveScene;