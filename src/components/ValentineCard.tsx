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
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Decorative Stack Layers */}
      <div className="absolute inset-0 bg-white border-2 border-pink-50 rounded-[60px] shadow-sm transform rotate-2 translate-y-2 -z-10" />
      <div className="absolute inset-0 bg-white border-2 border-pink-50 rounded-[60px] shadow-sm transform -rotate-1 translate-y-1 -z-10" />

      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.div
            key="closed"
            initial={{ y: 0, opacity: 1 }}
            exit={{ 
              x: -500, 
              rotate: -15, 
              opacity: 0,
              transition: { duration: 0.6, ease: "anticipate" } 
            }}
            onClick={handleOpen}
            className="cursor-pointer bg-white border-4 border-pink-50 rounded-[60px] p-12 shadow-xl flex flex-col items-center justify-center space-y-10 hover:shadow-pink-100/50 transition-shadow min-h-[700px] relative z-10"
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
            
            <h1 className="text-4xl font-bold text-pink-400 text-center leading-tight italic tracking-tight">
              Click to be my <br />
              <span className="text-6xl text-pink-500 not-italic font-black">Valentine</span>
            </h1>
            
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="flex items-center text-pink-200 gap-3"
            >
              <Heart fill="currentColor" size={16} className="animate-pulse" />
              <span className="font-bold text-sm tracking-widest uppercase italic">Tap to open</span>
              <Heart fill="currentColor" size={16} className="animate-pulse" />
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="opened"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white border-4 border-pink-50 rounded-[60px] p-10 shadow-xl min-h-[800px] flex flex-col relative z-0"
          >
            <div className="flex-1 flex flex-col items-center justify-center w-full">
              <AnimatePresence mode="wait">
                {page === 1 && (
                  <motion.div 
                    key="p1" 
                    initial={{ opacity: 0, y: 10 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    exit={{ opacity: 0, y: -10 }}
                    className="w-full"
                  >
                    <InstagramScene />
                  </motion.div>
                )}
                {page === 2 && (
                  <motion.div 
                    key="p2" 
                    initial={{ opacity: 0, y: 10 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    exit={{ opacity: 0, y: -10 }}
                    className="w-full"
                  >
                    <GolfScene />
                  </motion.div>
                )}
                {page === 3 && (
                  <motion.div 
                    key="p3" 
                    initial={{ opacity: 0, y: 10 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    exit={{ opacity: 0, y: -10 }}
                    className="w-full"
                  >
                    <FacebookScene />
                  </motion.div>
                )}
                {page === 4 && (
                  <motion.div 
                    key="p4" 
                    initial={{ opacity: 0, y: 10 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    exit={{ opacity: 0, y: -10 }}
                    className="w-full"
                  >
                    <LoveScene />
                  </motion.div>
                )}
                {page === 5 && (
                  <motion.div 
                    key="p5" 
                    initial={{ opacity: 0, y: 10 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    exit={{ opacity: 0, y: -10 }}
                    className="w-full"
                  >
                    <FinalScene />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="mt-10 flex justify-between items-center">
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((p) => (
                  <div
                    key={p}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      p === page ? 'bg-pink-400 w-6' : 'bg-pink-50 w-1.5'
                    }`}
                  />
                ))}
              </div>
              
              {page < 5 && (
                <button
                  onClick={nextPage}
                  className="bg-pink-400 hover:bg-pink-500 text-white px-6 py-2.5 rounded-full font-bold text-base flex items-center gap-2 transition-all transform hover:scale-105 active:scale-95 shadow-md shadow-pink-100 italic"
                >
                  Next
                  <ArrowRight size={20} />
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