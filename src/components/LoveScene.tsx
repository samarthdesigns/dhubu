"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Calendar } from 'lucide-react';

const LoveScene = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full h-[550px] bg-gradient-to-br from-rose-50/50 to-pink-50/50 rounded-[40px] p-8 flex flex-col items-center justify-center text-center relative overflow-hidden shadow-inner border border-pink-100/50"
    >
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-pink-200/30"
          animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 4 + i, delay: i * 0.5 }}
          style={{ top: `${15 + i * 12}%`, left: `${10 + i * 15}%` }}
        >
          <Heart fill="currentColor" size={24} />
        </motion.div>
      ))}

      <div className="z-10 space-y-8 w-full">
        <div className="flex items-center justify-center gap-8">
          <motion.div animate={{ x: [-5, 5, -5] }} transition={{ repeat: Infinity, duration: 5 }} className="relative">
            <img 
              src="/utils/Samarth.png" 
              alt="Samarth" 
              className="w-28 h-28 object-contain drop-shadow-md"
              onError={(e) => e.currentTarget.src = "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&top=shortHair&hairColor=black"}
            />
            <div className="absolute -top-2 -right-2 bg-white px-2 py-1 rounded-lg shadow-sm text-[10px] font-bold text-rose-400 border border-rose-50">
              Jan 31
            </div>
          </motion.div>

          <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2 }}>
            <Heart className="text-rose-400 fill-rose-400 w-10 h-10" />
          </motion.div>

          <motion.div animate={{ x: [5, -5, 5] }} transition={{ repeat: Infinity, duration: 5 }} className="relative">
            <img 
              src="/Dhruvi.png" 
              alt="Dhruvi" 
              className="w-28 h-28 object-contain drop-shadow-md"
              onError={(e) => e.currentTarget.src = "https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka&top=curly&hairColor=black"}
            />
            <div className="absolute -top-2 -left-2 bg-white px-2 py-1 rounded-lg shadow-sm text-[10px] font-bold text-rose-400 border border-rose-50">
              Feb 2
            </div>
          </motion.div>
        </div>

        <div className="bg-white/60 backdrop-blur-sm p-6 rounded-[32px] border border-white/80 shadow-sm">
          <h3 className="text-2xl font-bold text-rose-500 mb-4 tracking-tight italic">Pure Love</h3>
          <p className="text-rose-800 text-lg font-medium leading-relaxed italic tracking-tight">
            "31st Jan we tell each other love you and 2nd Feb I tell you that I love you. Fast? Slow? Perfect?"
          </p>
        </div>

        <div className="flex justify-center gap-2 items-center opacity-60">
          <Calendar className="text-rose-400" size={20} />
          <span className="text-rose-400 font-bold text-xs tracking-widest uppercase">Our Timeline</span>
        </div>
      </div>
    </motion.div>
  );
};

export default LoveScene;