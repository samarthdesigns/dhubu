"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Ghost, Sparkles, Trophy } from 'lucide-react';

const GolfScene = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full h-[450px] bg-[#0a0a0a] rounded-3xl border-4 border-purple-500/30 relative overflow-hidden flex flex-col items-center justify-center p-6"
    >
      {/* Neon Glows */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.15),transparent_70%)]" />
      
      {/* Monster Golf Header */}
      <div className="z-10 mb-8 text-center">
        <motion.h2 
          animate={{ textShadow: ["0 0 10px #a855f7", "0 0 20px #a855f7", "0 0 10px #a855f7"] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-4xl font-black text-purple-400 tracking-tighter uppercase italic"
        >
          Monster Golf
        </motion.h2>
        <div className="h-1 w-full bg-gradient-to-r from-transparent via-purple-500 to-transparent mt-1" />
      </div>

      <div className="relative z-10 flex items-center gap-8 mb-8">
        <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 3 }}>
          <img src="/left-bunny.webp" alt="Samarth" className="w-24 h-24 object-contain drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]" />
        </motion.div>

        <div className="flex flex-col items-center">
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-yellow-400"
          >
            <Trophy size={48} />
          </motion.div>
          <Ghost className="text-purple-500 mt-2 animate-pulse" size={32} />
        </div>

        <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 3, delay: 0.5 }}>
          <img src="/right-bunny.webp" alt="Dhruvi" className="w-24 h-24 object-contain drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]" />
        </motion.div>
      </div>

      <div className="z-10 bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl text-center max-w-sm">
        <p className="text-purple-100 text-sm leading-relaxed font-medium">
          "The plushie cornicles started on 16th August 2025, when I won you your first monster golf themed plushie."
        </p>
      </div>

      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-purple-500/20"
          animate={{ 
            y: [0, -100], 
            x: [0, Math.random() * 40 - 20],
            opacity: [0, 1, 0] 
          }}
          transition={{ repeat: Infinity, duration: 3 + Math.random() * 2, delay: i * 0.5 }}
          style={{ left: `${15 + i * 15}%`, bottom: '-20px' }}
        >
          <Sparkles size={16} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default GolfScene;