"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, Video, Phone, Info } from 'lucide-react';

const InstagramScene = () => {
  const messages = [
    { side: 'left', text: "Hey! Just landed in Austin 🤠", time: "July 14" },
    { side: 'right', text: "Welcome! Seattle is missing you already ☔", time: "July 14" },
    { side: 'left', text: "I think we should keep talking...", time: "July 14" },
    { side: 'right', text: "I was thinking the exact same thing. It just clicks, doesn't it? ✨", time: "July 14" },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full max-w-md mx-auto bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-xl flex flex-col h-[450px]"
    >
      {/* Chat Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-100 bg-white">
        <div className="flex items-center gap-3">
          <ChevronLeft size={24} />
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 p-[2px]">
              <img src="/right-bunny.webp" alt="Dhruvi" className="w-full h-full rounded-full object-cover bg-white" />
            </div>
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
          </div>
          <div>
            <p className="font-bold text-sm">Dhruvi</p>
            <p className="text-[10px] text-gray-500">Active now</p>
          </div>
        </div>
        <div className="flex gap-4 text-gray-700">
          <Phone size={20} />
          <Video size={20} />
          <Info size={20} />
        </div>
      </div>

      {/* Chat Body */}
      <div className="flex-1 p-4 space-y-4 overflow-y-auto bg-gray-50/50">
        {messages.map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: msg.side === 'left' ? -10 : 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.3 }}
            className={`flex ${msg.side === 'right' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
              msg.side === 'right' 
                ? 'bg-blue-500 text-white rounded-tr-none' 
                : 'bg-white border border-gray-100 text-gray-800 rounded-tl-none shadow-sm'
            }`}>
              {msg.text}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="p-4 text-center border-t border-gray-100 bg-white">
        <p className="text-xs text-gray-400 font-medium italic">
          "July 2025, we started talking and it just clicked."
        </p>
      </div>
    </motion.div>
  );
};

export default InstagramScene;