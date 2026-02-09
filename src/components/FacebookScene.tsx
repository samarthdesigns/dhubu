"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ThumbsUp, MessageSquare, Share2, Heart } from 'lucide-react';

const FacebookScene = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-lg mx-auto bg-white border border-gray-200 rounded-[40px] shadow-xl overflow-hidden h-[550px] flex flex-col"
    >
      <div className="bg-[#1877F2] p-4 flex items-center gap-3">
        <div className="bg-white text-[#1877F2] font-bold rounded-lg w-8 h-8 flex items-center justify-center text-xl">f</div>
        <div className="flex-1 bg-white/10 rounded-full h-8" />
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-full bg-gray-50 overflow-hidden border border-gray-100 flex items-center justify-center">
            <img 
              src="/Samarth.png" 
              alt="Samarth" 
              className="w-full h-full object-cover"
              onError={(e) => e.currentTarget.src = "https://api.dicebear.com/7.x/avataaars/svg?seed=Samarth"}
            />
          </div>
          <div>
            <p className="font-bold text-sm text-gray-800">Samarth</p>
            <p className="text-[10px] text-gray-400 font-medium">September 16, 2025 • 🌎</p>
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center text-center space-y-6 py-4">
          <div className="relative">
            <motion.div 
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="bg-pink-50/50 p-10 rounded-full"
            >
              <Heart className="text-red-500 fill-red-500 w-16 h-16" />
            </motion.div>
            <div className="absolute -bottom-2 -right-2 bg-white p-1.5 rounded-full shadow-md border border-gray-50">
              <ThumbsUp className="text-blue-500 fill-blue-500 w-6 h-6" />
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-gray-800 tracking-tight">
              Samarth and Dhruvi are now in a relationship
            </h3>
            <p className="text-gray-600 text-base font-medium italic px-4 leading-relaxed">
              "On 16th September 2025 we officially started dating."
            </p>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-4 mt-auto">
          <div className="flex justify-around text-gray-400 font-bold text-xs uppercase tracking-wider">
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