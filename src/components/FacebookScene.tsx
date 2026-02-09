"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ThumbsUp, MessageSquare, Share2, Heart } from 'lucide-react';

const FacebookScene = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-lg mx-auto bg-white border border-gray-300 rounded-[40px] shadow-2xl overflow-hidden h-[550px] flex flex-col"
    >
      {/* FB Header */}
      <div className="bg-[#1877F2] p-5 flex items-center gap-4">
        <div className="bg-white text-[#1877F2] font-black rounded-xl w-10 h-10 flex items-center justify-center text-2xl">f</div>
        <div className="flex-1 bg-white/20 rounded-full h-10" />
      </div>

      <div className="p-8 flex-1 flex flex-col">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-14 h-14 rounded-full bg-gray-200 overflow-hidden border-2 border-gray-100">
            <img src="/left-bunny.png" alt="Samarth" className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="font-black text-lg">Samarth</p>
            <p className="text-sm text-gray-500">September 16, 2025 • 🌎</p>
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center text-center space-y-8 py-6">
          <div className="relative">
            <motion.div 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="bg-pink-50 p-12 rounded-full"
            >
              <Heart className="text-red-500 fill-red-500 w-24 h-24" />
            </motion.div>
            <div className="absolute -bottom-4 -right-4 bg-white p-2 rounded-full shadow-lg border-2 border-gray-100">
              <ThumbsUp className="text-blue-500 fill-blue-500 w-10 h-10" />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-3xl font-black text-gray-900 leading-tight">
              Samarth and Dhruvi are now in a relationship
            </h3>
            <p className="text-gray-800 text-xl font-black italic px-4">
              "On 16th September 2025 we officially started dating."
            </p>
          </div>
        </div>

        {/* FB Actions */}
        <div className="border-t border-gray-200 pt-6 mt-auto">
          <div className="flex justify-around text-gray-500 font-black text-lg">
            <div className="flex items-center gap-3 text-blue-600"><ThumbsUp size={24} /> Like</div>
            <div className="flex items-center gap-3"><MessageSquare size={24} /> Comment</div>
            <div className="flex items-center gap-3"><Share2 size={24} /> Share</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FacebookScene;