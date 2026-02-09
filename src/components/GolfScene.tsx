"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Ghost, Sparkles, Trophy } from 'lucide-react';

const GolfScene = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full h-[550px] bg-[#0a0a0a] rounded-[40px] border-8 border-purple-500/30 relative overflow-hidden flex flex-col items-center justify-center p-10"
    >
      {/* Neon Glows */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.2),transparent_70%)]" />
      
      {/* Monster Golf Header */}
      <div className="z-10 mb-12 text-center">
        <motion.h2 
          animate={{ textShadow: ["0 0 15px #a855f7", "0 0 30px #a855f7", "0 0 15px #a855f7"] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-6xl font-black text-purple-400 tracking-tighter uppercase italic"
        >
          Monster Golf
        </motion.h2>
        <div className="h-2 w-full bg-gradient-to-r from-transparent via-purple-500 to-transparent mt-2" />
      </div>

      <div className="relative z-10 flex items-center gap-12 mb-12">
        <motion.div animate={{ y: [0, -15, 0] }} transition={{ repeat: Infinity, duration: 3 }}>
          <img src="/left-bunny.png" alt="Samarth" className="w-32 h-32 object-contain drop-shadow-[0_0_20px_rgba(168,85,247,0.6)]" />
        </motion.div>

        <div className="flex flex-col items-center">
          <motion.div
            animate={{ scale: [1, 1.3, 1], rotate: [0, 15, -15, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-yellow-400"
          >
            <Trophy size={64} />
          </motion.div>
          <Ghost className="text-purple-500 mt-4 animate-pulse" size={40} />
        </div>

        <motion.div animate={{ y: [0, -15, 0] }} transition={{ repeat: Infinity, duration: 3, delay: 0.5 }}>
          <img src="/right-bunny.png" alt="Dhruvi" className="w-32 h-32 object-contain drop-shadow-[0_0_20px_rgba(168,85,247,0.6)]" />
        </motion.div>
      </div>

      <div className="z-10 bg-white/10 backdrop-blur-xl border-2 border-white/20 p-8 rounded-[30px] text-center max-w-lg">
        <p className="text-purple-100 text-xl leading-relaxed font-black">
          "The plushie cornicles started on 16th August 2025, when I won you your first monster golf themed plushie."
        </p>
      </div>

      {/* Floating Particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-purple-500/30"
          animate={{ 
            y: [0, -150], 
            x: [0, Math.random() * 60 - 30],
            opacity: [0, 1, 0] 
          }}
          transition={{ repeat: Infinity, duration: 3 + Math.random() * 2, delay: i * 0.4 }}
          style={{ left: `${10 + i * 12}%`, bottom: '-30px' }}
        >
          <Sparkles size={20} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default GolfScene;