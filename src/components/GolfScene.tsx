"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Ghost, Sparkles, Trophy, Zap } from 'lucide-react';
import samarthImg from '@/utils/Samarth.png';
import dhruviImg from '@/utils/Dhruvi.png';

const GolfScene = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full min-h-[500px] md:h-[550px] bg-[#050505] rounded-[30px] md:rounded-[40px] border-4 border-cyan-500/30 relative overflow-hidden flex flex-col items-center justify-center p-6 md:p-8 shadow-[0_0_30px_rgba(6,182,212,0.1)]"
    >
      {/* Neon Grid Background Effect */}
      <div className="absolute inset-0 opacity-20" 
        style={{ 
          backgroundImage: `linear-gradient(to right, #3b82f6 1px, transparent 1px), linear-gradient(to bottom, #3b82f6 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} 
      />
      
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.2),transparent_70%)]" />
      
      <div className="z-10 mb-6 md:mb-10 text-center relative">
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute -top-6 -left-8 md:-top-8 md:-left-10 text-cyan-400"
        >
          <Zap size={24} className="fill-cyan-400" />
        </motion.div>
        
        <h2 className="text-4xl md:text-6xl font-black text-[#a855f7] tracking-tighter uppercase italic relative z-20">
          Monster Golf
        </h2>
        
        <motion.div 
          animate={{ width: ['0%', '100%', '0%'] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mt-2 shadow-[0_0_15px_#22d3ee]" 
        />
      </div>

      <div className="relative z-10 flex items-center gap-6 md:gap-12 mb-8 md:mb-10">
        <motion.div 
          animate={{ y: [0, -10, 0] }} 
          transition={{ repeat: Infinity, duration: 4 }}
          className="relative"
        >
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-purple-500/50 overflow-hidden shadow-[0_0_20px_rgba(168,85,247,0.4)] bg-black/20">
            <img 
              src={samarthImg} 
              alt="Samarth" 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <div className="flex flex-col items-center">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-yellow-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.9)]"
          >
            <Trophy size={48} className="md:w-16 md:h-16" />
          </motion.div>
          <motion.div
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <Ghost className="text-purple-400 mt-2 md:mt-4 drop-shadow-[0_0_10px_rgba(192,132,252,0.8)]" size={32} className="md:w-10 md:h-10" />
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, -10, 0] }} 
          transition={{ repeat: Infinity, duration: 4, delay: 0.5 }}
          className="relative"
        >
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-cyan-500/50 overflow-hidden shadow-[0_0_20px_rgba(34,211,238,0.4)] bg-black/20">
            <img 
              src={dhruviImg} 
              alt="Dhruvi" 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        className="z-10 bg-black/60 backdrop-blur-xl border-2 border-cyan-500/50 p-6 md:p-8 rounded-[24px] md:rounded-[32px] text-center max-w-md shadow-[0_0_25px_rgba(6,182,212,0.3)]"
      >
        <p className="text-cyan-50 text-base md:text-xl leading-relaxed font-bold italic tracking-tight">
          "The plushie <span className="text-cyan-400 underline decoration-cyan-400/50 underline-offset-4">story</span> started on 16th August 2025, when I won you your first monster golf themed plushie."
        </p>
      </motion.div>
    </motion.div>
  );
};

export default GolfScene;