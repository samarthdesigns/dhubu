"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from 'lucide-react';

const InstagramScene = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full max-w-sm mx-auto bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm"
    >
      {/* Header */}
      <div className="flex items-center justify-between p-3 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 p-[2px]">
            <div className="w-full h-full rounded-full bg-white p-[1px]">
              <img src="/left-bunny.webp" alt="Samarth" className="w-full h-full rounded-full object-cover" />
            </div>
          </div>
          <span className="font-bold text-sm">samarth_x_dhruvi</span>
        </div>
        <MoreHorizontal size={18} className="text-gray-500" />
      </div>

      {/* Main Content Area */}
      <div className="relative aspect-square bg-pink-50 flex items-center justify-around p-4">
        <div className="flex flex-col items-center gap-2">
          <motion.div 
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="relative"
          >
            <img src="/left-bunny.webp" alt="Samarth" className="w-24 h-24 object-contain" />
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white px-2 py-0.5 rounded-full border border-pink-100 text-[10px] font-bold text-pink-500 shadow-sm">
              Austin
            </div>
          </motion.div>
          <span className="text-xs font-bold text-gray-600">Samarth</span>
        </div>

        <motion.div 
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-pink-400"
        >
          <Heart fill="currentColor" size={32} />
        </motion.div>

        <div className="flex flex-col items-center gap-2">
          <motion.div 
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
            className="relative"
          >
            <img src="/right-bunny.webp" alt="Dhruvi" className="w-24 h-24 object-contain" />
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white px-2 py-0.5 rounded-full border border-pink-100 text-[10px] font-bold text-pink-500 shadow-sm">
              Seattle
            </div>
          </motion.div>
          <span className="text-xs font-bold text-gray-600">Dhruvi</span>
        </div>
      </div>

      {/* Actions */}
      <div className="p-3 space-y-2">
        <div className="flex justify-between">
          <div className="flex gap-4">
            <Heart className="text-red-500 fill-red-500" size={24} />
            <MessageCircle size={24} />
            <Send size={24} />
          </div>
          <Bookmark size={24} />
        </div>
        <div className="text-sm">
          <span className="font-bold">samarth</span> July 2025, we started talking and it just clicked. ✨
        </div>
        <div className="text-[10px] text-gray-400 uppercase">July 14, 2025</div>
      </div>
    </motion.div>
  );
};

export default InstagramScene;