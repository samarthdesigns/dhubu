"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, Video, Phone, Info } from 'lucide-react';
import dhruviImg from '@/utils/Dhruvi.png';

const InstagramScene = () => {
  const messages = [
    { side: 'left', text: "I think we should keep talking...", time: "July 14" },
    { side: 'right', text: "I was thinking the exact same thing. It just clicks, doesn't it? ✨", time: "July 14" },
  ];

  return (
    <motion.div 
      className="w-full max-w-lg mx-auto bg-white border border-gray-100 rounded-[40px] overflow-hidden shadow-xl flex flex-col h-[550px]"
    >
      {/* Chat Header */}
      <div className="flex items-center justify-between p-5 border-b border-gray-50 bg-white">
        <div className="flex items-center gap-3">
          <ChevronLeft size={24} className="text-gray-600" />
          <div className="relative">
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 p-[2px]">
              <img 
                src={dhruviImg} 
                alt="Dhruvi" 
                className="w-full h-full rounded-full object-cover bg-white"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
          </div>
          <div>
            <p className="font-bold text-base tracking-tight text-gray-800">Dhruvi</p>
            <p className="text-[10px] text-gray-400 font-medium">Active now</p>
          </div>
        </div>
        <div className="flex gap-5 text-gray-600">
          <Phone size={20} />
          <Video size={20} />
          <Info size={20} />
        </div>
      </div>

      {/* Chat Body */}
      <div className="flex-1 p-5 space-y-5 overflow-y-auto bg-gray-50/30">
        {messages.map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ 
              type: "spring", 
              stiffness: 260, 
              damping: 20,
              delay: 0.1 + i * 0.15 
            }}
            className={`flex ${msg.side === 'right' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[80%] p-4 rounded-[24px] text-sm font-medium tracking-tight ${
              msg.side === 'right' 
                ? 'bg-[#0095F6] text-white rounded-tr-none' 
                : 'bg-white border border-gray-100 text-gray-800 rounded-tl-none shadow-sm'
            }`}>
              {msg.text}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="p-6 text-center border-t border-gray-50 bg-white"
      >
        <p className="text-lg text-gray-700 font-medium italic tracking-tight leading-relaxed">
          "July 2025, we started talking and it just clicked."
        </p>
      </motion.div>
    </motion.div>
  );
};

export default InstagramScene;