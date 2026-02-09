"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Flag, Trophy, Ghost } from 'lucide-react';

const GolfScene = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-full h-full flex flex-col items-center justify-center space-y-6 p-4 bg-emerald-50 rounded-2xl border-4 border-emerald-200 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-4 right-4 text-emerald-200 rotate-12">
        <Flag size={48} />
      </div>
      <div className="absolute bottom-4 left-4 text-purple-200 -rotate-12">
        <Ghost size={48} />
      </div>

      <div className="relative flex items-end gap-4">
        <motion.div
          animate={{ x: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          <img src="/left-bunny.webp" alt="Samarth" className="w-24 h-24 object-contain" />
        </motion.div>

        <div className="flex flex-col items-center mb-4">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="bg-purple-500 text-white p-2 rounded-xl shadow-lg relative"
          >
            <Trophy size={24} />
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-purple-500 rotate-45" />
          </motion.div>
          <div className="w-4 h-4 rounded-full bg-white border-2 border-gray-200 mt-2 shadow-inner" />
        </div>

        <motion.div
          animate={{ x: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3, delay: 0.5 }}
        >
          <img src="/right-bunny.webp" alt="Dhruvi" className="w-24 h-24 object-contain" />
        </motion.div>
      </div>

      <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border-2 border-emerald-100 shadow-sm text-center max-w-xs">
        <p className="text-emerald-800 font-medium leading-relaxed">
          "The plushie cornicles started on 16th August 2025, when I won you your first monster golf themed plushie."
        </p>
      </div>

      <div className="flex gap-2">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 1, delay: i * 0.2 }}
            className="w-3 h-3 rounded-full bg-emerald-400"
          />
        ))}
      </div>
    </motion.div>
  );
};

export default GolfScene;