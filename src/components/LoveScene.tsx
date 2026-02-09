"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Calendar } from 'lucide-react';

const LoveScene = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full h-[550px] bg-gradient-to-br from-rose-50 to-pink-100 rounded-[40px] p-10 flex flex-col items-center justify-center text-center relative overflow-hidden shadow-inner"
    >
      {/* Floating Hearts */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-pink-300/40"
          animate={{ 
            y: [0, -30, 0],
            scale: [1, 1.3, 1],
            rotate: [0, 20, -20, 0]
          }}
          transition={{ repeat: Infinity, duration: 3 + i, delay: i * 0.4 }}
          style={{ 
            top: `${Math.random() * 80}%`, 
            left: `${Math.random() * 80}%` 
          }}
        >
          <Heart fill="currentColor" size={30 + i * 5} />
        </motion.div>
      ))}

      <div className="z-10 space-y-10 w-full">
        <div className="flex items-center justify-center gap-10">
          <motion.div 
            animate={{ x: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="relative"
          >
            <img 
              src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Food%20Drink/Coffee%20Bean.png" 
              alt="Samarth" 
              className="w-36 h-36 object-contain drop-shadow-lg" 
            />
            <div className="absolute -top-4 -right-4 bg-white px-3 py-1.5 rounded-xl shadow-md text-xs font-black text-rose-500 border-2 border-rose-100">
              Jan 31
            </div>
          </motion.div>

          <motion.div
            animate={{ scale: [1, 1.4, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <Heart className="text-rose-500 fill-rose-500 w-16 h-16" />
          </motion.div>

          <motion.div 
            animate={{ x: [10, -10, 10] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="relative"
          >
            <img 
              src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Food%20Drink/Avocado.png" 
              alt="Dhruvi" 
              className="w-36 h-36 object-contain drop-shadow-lg" 
            />
            <div className="absolute -top-4 -left-4 bg-white px-3 py-1.5 rounded-xl shadow-md text-xs font-black text-rose-500 border-2 border-rose-100">
              Feb 2
            </div>
          </motion.div>
        </div>

        <div className="bg-white/70 backdrop-blur-md p-8 rounded-[40px] border-4 border-white shadow-xl">
          <h3 className="text-4xl font-serif italic text-rose-600 mb-6 font-black">Pure Love</h3>
          <p className="text-rose-900 text-2xl font-black leading-relaxed">
            "31st Jan we tell each other love you and 2nd Feb I tell you that I love you. Fast? Slow? Perfect?"
          </p>
        </div>

        <div className="flex justify-center gap-3 items-center">
          <Calendar className="text-rose-500" size={28} />
          <span className="text-rose-500 font-black text-lg tracking-widest uppercase">Our Timeline</span>
        </div>
      </div>
    </motion.div>
  );
};

export default LoveScene;