"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ArrowRight, ArrowLeft, Sparkles } from 'lucide-react';
import InstagramScene from './InstagramScene';
import GolfScene from './GolfScene';
import PlushieScene from './PlushieScene';
import FacebookScene from './FacebookScene';
import LoveScene from './LoveScene';
import FinalScene from './FinalScene';

const ValentineCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [page, setPage] = useState(1);
  const totalPages = 6;

  const handleOpen = () => setIsOpen(true);
  const nextPage = () => setPage((prev) => Math.min(prev + 1, totalPages));
  const prevPage = () => setPage((prev) => Math.max(prev - 1, 1));

  const pageVariants = {
    initial: { opacity: 0, x: 20, scale: 0.98 },
    animate: { 
      opacity: 1, 
      x: 0, 
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 300,
        damping: 30
      } 
    },
    exit: { 
      opacity: 0, 
      x: -20, 
      scale: 0.98,
      transition: { duration: 0.2 } 
    }
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto perspective-1000">
      {/* Decorative Stack Layers */}
      <div className="absolute inset-0 bg-white border-2 border-pink-50 rounded-[60px] shadow-sm transform rotate-2 translate-y-2 -z-10" />
      <div className="absolute inset-0 bg-white border-2 border-pink-50 rounded-[60px] shadow-sm transform -rotate-1 translate-y-1 -z-10" />

      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.div
            key="closed"
            initial={{ y: 0, opacity: 1 }}
            exit={{ 
              x: -100, 
              rotateY: -20,
              opacity: 0,
              transition: { type: "spring", stiffness: 200, damping: 25 } 
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleOpen}
            className="cursor-pointer bg-white border-4 border-pink-50 rounded-[60px] p-12 shadow-xl flex flex-col items-center justify-center space-y-10 hover:shadow-pink-100/50 transition-shadow min-h-[700px] relative z-10"
          >
            <div className="relative">
              <motion.div
                animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute -top-8 -right-8"
              >
                <Sparkles className="text-yellow-400/60 w-12 h-12" />
              </motion.div>
              <motion.img 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
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
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="flex items-center text-pink-200 gap-3"
            >
              <Heart fill="currentColor" size={16} />
              <span className="font-bold text-sm tracking-widest uppercase italic">Tap to open</span>
              <Heart fill="currentColor" size={16} />
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="opened"
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="bg-white border-4 border-pink-50 rounded-[60px] p-10 shadow-xl min-h-[800px] flex flex-col relative z-0"
          >
            <div className="flex-1 flex flex-col items-center justify-center w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={page}
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="w-full"
                >
                  {page === 1 && <InstagramScene />}
                  {page === 2 && <GolfScene />}
                  {page === 3 && <PlushieScene />}
                  {page === 4 && <FacebookScene />}
                  {page === 5 && <LoveScene />}
                  {page === 6 && <FinalScene />}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-10 flex justify-between items-center">
              <div className="flex gap-2">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ 
                      width: (i + 1) === page ? 24 : 6,
                      backgroundColor: (i + 1) === page ? "#f472b6" : "#fdf2f8"
                    }}
                    className="h-1.5 rounded-full"
                  />
                ))}
              </div>
              
              <div className="flex gap-3">
                {page > 1 && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={prevPage}
                    className="bg-pink-50 hover:bg-pink-100 text-pink-400 px-6 py-2.5 rounded-full font-bold text-base flex items-center gap-2 transition-colors italic"
                  >
                    <ArrowLeft size={20} />
                    Back
                  </motion.button>
                )}
                {page < totalPages && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={nextPage}
                    className="bg-pink-400 hover:bg-pink-500 text-white px-6 py-2.5 rounded-full font-bold text-base flex items-center gap-2 transition-colors shadow-md shadow-pink-100 italic"
                  >
                    Next
                    <ArrowRight size={20} />
                  </motion.button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ValentineCard;