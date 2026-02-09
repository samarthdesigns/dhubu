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
    <div className="relative w-full max-w-xl mx-auto perspective-1000">
      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.div
            key="closed"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ rotateY: -180, opacity: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
            onClick={handleOpen}
            className="cursor-pointer bg-[#FFF9F9] border-4 border-pink-200 rounded-[40px] p-12 shadow-2xl flex flex-col items-center justify-center space-y-8 hover:shadow-pink-100 transition-shadow min-h-[600px]"
          >
            <div className="relative">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute -top-6 -right-6"
              >
                <Sparkles className="text-yellow-400 w-12 h-12" />
              </motion.div>
              <img 
                src="/Landing Image.webp" 
                alt="Valentine" 
                className="w-64 h-64 object-contain drop-shadow-xl"
                onError={(e) => {
                  e.currentTarget.src = "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Heart%20with%20Arrow.png";
                }}
              />
            </div>
            
            <h1 className="text-5xl font-bold text-pink-500 text-center leading-tight font-serif italic">
              Click to be my <br />
              <span className="text-7xl text-pink-600 not-italic">Valentine</span>
            </h1>
            
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="flex items-center text-pink-300 gap-3"
            >
              <Heart fill="currentColor" size={24} />
              <span className="font-bold text-lg tracking-widest uppercase">Tap to open</span>
              <Heart fill="currentColor" size={24} />
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="opened"
            initial={{ rotateY: 180, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white border-4 border-pink-100 rounded-[40px] p-10 shadow-2xl min-h-[700px] flex flex-col"
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
                    className={`h-3 rounded-full transition-all duration-300 ${
                      p === page ? 'bg-pink-500 w-8' : 'bg-pink-100 w-3'
                    }`}
                  />
                ))}
              </div>
              
              {page < 5 && (
                <button
                  onClick={nextPage}
                  className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full font-black text-lg flex items-center gap-3 transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-pink-200"
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