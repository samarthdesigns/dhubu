"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ThumbsUp, MessageSquare, Share2, Heart } from 'lucide-react';

const FacebookScene = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-md mx-auto bg-white border border-gray-300 rounded-xl shadow-md overflow-hidden h-[450px] flex flex-col"
    >
      {/* FB Header */}
      <div className="bg-[#1877F2] p-3 flex items-center gap-2">
        <div className="bg-white text-[#1877F2] font-black rounded-md w-8 h-8 flex items-center justify-center text-xl">f</div>
        <div className="flex-1 bg-white/20 rounded-full h-8" />
      </div>

      <div className="p-4 flex-1 flex flex-col">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
            <img src="/left-bunny.webp" alt="Samarth" className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="font-bold text-sm">Samarth</p>
            <p className="text-xs text-gray-500">September 16, 2025 • 🌎</p>
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center text-center space-y-6 py-4">
          <div className="relative">
            <motion.div 
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="bg-pink-50 p-8 rounded-full"
            >
              <Heart className="text-red-500 fill-red-500 w-16 h-16" />
            </motion.div>
            <div className="absolute -bottom-2 -right-2 bg-white p-1 rounded-full shadow-sm border border-gray-100">
              <ThumbsUp className="text-blue-500 fill-blue-500 w-6 h-6" />
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-bold text-gray-900">
              Samarth and Dhruvi are now in a relationship
            </h3>
            <p className="text-gray-600 italic px-4">
              "On 16th September 2025 we officially started dating."
            </p>
          </div>
        </div>

        {/* FB Actions */}
        <div className="border-t border-gray-200 pt-3 mt-auto">
          <div className="flex justify-around text-gray-500 font-bold text-sm">
            <div className="flex items-center gap-2 text-blue-600"><ThumbsUp size={18} /> Like</div>
            <div className="flex items-center gap-2"><MessageSquare size={18} /> Comment</div>
            <div className="flex items-center gap-2"><Share2 size={18} /> Share</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FacebookScene;