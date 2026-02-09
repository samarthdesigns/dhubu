"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ArrowRight, Sparkles } from 'lucide-react';
import InstagramScene from './InstagramScene';
import GolfScene from './GolfScene';
import FacebookScene from './FacebookScene';
import LoveScene from './LoveScene';
import FinalScene from './FinalScene';

const ValentineCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [page, setPage] = useState(1);

  const handleOpen = () => setIsOpen(true);
  const nextPage = () => setPage((prev) => Math.min(prev + 1, 5));

  return (
    <div className="relative w-full max-w-2xl mx-auto perspective-1000">
      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.div
            key="closed"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ rotateY: -180, opacity: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
            onClick={handleOpen}
            className="cursor-pointer bg-white border-4 border-pink-50 rounded-[60px] p-12 shadow-xl flex flex-col items-center justify-center space-y-10 hover:shadow-pink-100/50 transition-shadow min-h-[700px]"
          >
            <div className="relative">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -top-8 -right-8"
              >
                <Sparkles className="text-yellow-400/60 w-12 h-12" />
              </motion.div>
              <img 
                src="/Landing Image.png" 
                alt="Valentine" 
                className="w-64 h-64 object-contain drop-shadow-xl"
                onError={(e) => {
                  e.currentTarget.src = "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Heart%20with%20Arrow.png";
                }}
              />
            </div>
            
            <h1 className="text-5xl font-bold text-pink-400 text-center leading-tight italic tracking-tight">
              Click to be my <br />
              <span className="text-7xl text-pink-500 not-italic font-black">Valentine</span>
            </h1>
            
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="flex items-center text-pink-200 gap-3"
            >
              <Heart fill="currentColor" size={18} className="animate-pulse" />
              <span className="font-bold text-lg tracking-widest uppercase italic">Tap to open</span>
              <Heart fill="currentColor" size={18} className="animate-pulse" />
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="opened"
            initial={{ rotateY: 180, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white border-4 border-pink-50 rounded-[60px] p-10 shadow-xl min-h-[800px] flex flex-col"
          >
            <div className="flex-1 flex flex-col items-center justify-center w-full">
              <AnimatePresence mode="wait">
                {page === 1 && <InstagramScene key="p1" />}
                {page === 2 && <GolfScene key="p2" />}
                {page === 3 && <FacebookScene key="p3" />}
                {page === 4 && <LoveScene key="p4" />}
                {page === 5 && <FinalScene key="p5" />}
              </AnimatePresence>
            </div>

            <div className="mt-10 flex justify-between items-center">
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((p) => (
                  <div
                    key={p}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      p === page ? 'bg-pink-400 w-8' : 'bg-pink-50 w-2'
                    }`}
                  />
                ))}
              </div>
              
              {page < 5 && (
                <button
                  onClick={nextPage}
                  className="bg-pink-400 hover:bg-pink-500 text-white px-8 py-3 rounded-full font-bold text-lg flex items-center gap-3 transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-pink-100 italic"
                >
                  Next Page
                  <ArrowRight size={24} />
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ValentineCard;