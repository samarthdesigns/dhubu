"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, MessageCircle, ArrowRight, Sparkles } from 'lucide-react';
import Bunny from './Bunny';

const ValentineCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [page, setPage] = useState(1);

  const handleOpen = () => setIsOpen(true);
  const nextPage = () => setPage((prev) => Math.min(prev + 1, 5));

  return (
    <div className="relative w-full max-w-md mx-auto perspective-1000">
      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.div
            key="closed"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ rotateY: -180, opacity: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
            onClick={handleOpen}
            className="cursor-pointer bg-[#FFF9F9] border-4 border-pink-200 rounded-3xl p-8 shadow-2xl flex flex-col items-center justify-center space-y-6 hover:shadow-pink-100 transition-shadow"
          >
            <div className="relative">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute -top-4 -right-4"
              >
                <Sparkles className="text-yellow-400 w-8 h-8" />
              </motion.div>
              <Bunny hasRose />
            </div>
            
            <h1 className="text-4xl font-bold text-pink-500 text-center leading-tight font-serif italic">
              Click to be my <br />
              <span className="text-5xl text-pink-600 not-italic">Valentine</span>
            </h1>
            
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="flex items-center text-pink-300 gap-2"
            >
              <Heart fill="currentColor" size={20} />
              <span className="font-medium">Tap to open</span>
              <Heart fill="currentColor" size={20} />
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="opened"
            initial={{ rotateY: 180, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white border-4 border-pink-100 rounded-3xl p-8 shadow-2xl min-h-[500px] flex flex-col"
          >
            <div className="flex-1 flex flex-col items-center justify-center">
              {page === 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center space-y-12 w-full"
                >
                  <div className="flex justify-between w-full px-4">
                    <Bunny location="Austin" isTexting />
                    <div className="flex items-center">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Infinity, duration: 1 }}
                      >
                        <MessageCircle className="text-pink-200 w-8 h-8" />
                      </motion.div>
                    </div>
                    <Bunny location="Seattle" isTexting />
                  </div>
                  
                  <div className="text-center space-y-4">
                    <p className="text-2xl font-medium text-gray-700 leading-relaxed">
                      "July 2025, we started talking and it just clicked."
                    </p>
                    <div className="flex justify-center gap-2">
                      {[1, 2, 3].map((i) => (
                        <Heart key={i} className="text-pink-200 fill-pink-200 w-4 h-4" />
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {page > 1 && (
                <div className="text-center text-gray-400 italic">
                  Coming soon... (Page {page})
                </div>
              )}
            </div>

            <div className="mt-8 flex justify-between items-center">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((p) => (
                  <div
                    key={p}
                    className={`h-2 w-2 rounded-full transition-colors ${
                      p === page ? 'bg-pink-500 w-4' : 'bg-pink-100'
                    }`}
                  />
                ))}
              </div>
              
              {page < 5 && (
                <button
                  onClick={nextPage}
                  className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full font-bold flex items-center gap-2 transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-pink-200"
                >
                  Next Page
                  <ArrowRight size={18} />
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