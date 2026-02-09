"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, Video, Phone, Info } from 'lucide-react';

const InstagramScene = () => {
  const messages = [
    { side: 'left', text: "I think we should keep talking...", time: "July 14" },
    { side: 'right', text: "I was thinking the exact same thing. It just clicks, doesn't it? ✨", time: "July 14" },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full max-w-lg mx-auto bg-white border border-gray-200 rounded-[40px] overflow-hidden shadow-2xl flex flex-col h-[550px]"
    >
      {/* Chat Header */}
      <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-white">
        <div className="flex items-center gap-4">
          <ChevronLeft size={28} />
          <div className="relative">
            <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 p-[3px]">
              <img 
                src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Food%20Drink/Avocado.png" 
                alt="Dhruvi" 
                className="w-full h-full rounded-full object-contain bg-white p-1" 
              />
            </div>
            <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full" />
          </div>
          <div>
            <p className="font-black text-lg">Dhruvi</p>
            <p className="text-xs text-gray-500">Active now</p>
          </div>
        </div>
        <div className="flex gap-6 text-gray-700">
          <Phone size={24} />
          <Video size={24} />
          <Info size={24} />
        </div>
      </div>

      {/* Chat Body */}
      <div className="flex-1 p-6 space-y-6 overflow-y-auto bg-gray-50/50">
        {messages.map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: msg.side === 'left' ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.3 }}
            className={`flex ${msg.side === 'right' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[85%] p-5 rounded-[30px] text-lg font-bold ${
              msg.side === 'right' 
                ? 'bg-blue-500 text-white rounded-tr-none' 
                : 'bg-white border border-gray-100 text-gray-800 rounded-tl-none shadow-md'
            }`}>
              {msg.text}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="p-8 text-center border-t border-gray-100 bg-white">
        <p className="text-xl text-gray-800 font-black italic leading-tight">
          "July 2025, we started talking and it just clicked."
        </p>
      </div>
    </motion.div>
  );
};

export default InstagramScene;