"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Ghost, Sparkles, Trophy } from 'lucide-react';
import samarthImg from '@/utils/Samarth.png';
import dhruviImg from '@/utils/Dhruvi.png';

const GolfScene = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full h-[550px] bg-[#0a0a0a] rounded-[40px] border-4 border-purple-500/20 relative overflow-hidden flex flex-col items-center justify-center p-8"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.15),transparent_70%)]" />
      
      <div className="z-10 mb-10 text-center">
        <motion.h2 
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="text-4xl font-bold text-purple-300 tracking-widest uppercase italic"
        >
          Monster Golf
        </motion.h2>
        <div className="h-[1px] w-32 bg-purple-500/50 mx-auto mt-2" />
      </div>

      <div className="relative z-10 flex items-center gap-10 mb-10">
        <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4 }}>
          <img 
            src={samarthImg} 
            alt="Samarth" 
            className="w-28 h-28 object-contain drop-shadow-lg"
          />
        </motion.div>

        <div className="flex flex-col items-center">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-yellow-400/80"
          >
            <Trophy size={48} />
          </motion.div>
          <Ghost className="text-purple-500/60 mt-3 animate-pulse" size={32} />
        </div>

        <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4, delay: 0.5 }}>
          <img 
            src={dhruviImg} 
            alt="Dhruvi" 
            className="w-28 h-28 object-contain drop-shadow-lg"
          />
        </motion.div>
      </div>

      <div className="z-10 bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-[24px] text-center max-w-md">
        <p className="text-purple-100 text-base leading-relaxed font-medium italic tracking-tight">
          "The plushie cornicles started on 16th August 2025, when I won you your first monster golf themed plushie."
        </p>
      </div>

      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-purple-500/20"
          animate={{ y: [0, -100], opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 4, delay: i * 0.8 }}
          style={{ left: `${20 + i * 15}%`, bottom: '10%' }}
        >
          <Sparkles size={16} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default GolfScene;