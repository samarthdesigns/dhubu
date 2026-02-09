"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface BunnyProps {
  className?: string;
  hasRose?: boolean;
  isTexting?: boolean;
  location?: string;
}

const Bunny = ({ className, hasRose, isTexting, location }: BunnyProps) => {
  return (
    <div className={`relative flex flex-col items-center ${className}`}>
      {location && (
        <motion.div 
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="absolute -top-12 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full border-2 border-pink-200 text-pink-500 font-bold text-sm shadow-sm"
        >
          {location}
        </motion.div>
      )}
      
      <svg
        viewBox="0 0 100 100"
        className="w-32 h-32 drop-shadow-md"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Ears */}
        <motion.path
          d="M35 10C35 10 25 15 25 30C25 45 35 45 35 45"
          stroke="#FFD1DC"
          strokeWidth="8"
          strokeLinecap="round"
          animate={{ rotate: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
        <motion.path
          d="M65 10C65 10 75 15 75 30C75 45 65 45 65 45"
          stroke="#FFD1DC"
          strokeWidth="8"
          strokeLinecap="round"
          animate={{ rotate: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2, delay: 0.2 }}
        />
        
        {/* Body/Head */}
        <circle cx="50" cy="55" r="35" fill="white" stroke="#FFD1DC" strokeWidth="4" />
        
        {/* Eyes */}
        <circle cx="40" cy="50" r="3" fill="#4A4A4A" />
        <circle cx="60" cy="50" r="3" fill="#4A4A4A" />
        
        {/* Cheeks */}
        <circle cx="35" cy="58" r="5" fill="#FFE4E1" opacity="0.6" />
        <circle cx="65" cy="58" r="5" fill="#FFE4E1" opacity="0.6" />
        
        {/* Nose */}
        <path d="M48 58L52 58L50 61Z" fill="#FFB6C1" />

        {/* Rose */}
        {hasRose && (
          <motion.g
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="origin-center"
          >
            <path d="M50 62V75" stroke="#90EE90" strokeWidth="3" strokeLinecap="round" />
            <path d="M50 62C50 62 40 55 45 50C50 45 55 50 50 62Z" fill="#FF6B6B" />
            <path d="M50 62C50 62 60 55 55 50C50 45 45 50 50 62Z" fill="#FF8E8E" />
          </motion.g>
        )}

        {/* Phone/Texting */}
        {isTexting && (
          <motion.rect
            x="40" y="70" width="20" height="12" rx="2"
            fill="#E0F7FA"
            stroke="#B2EBF2"
            strokeWidth="2"
            animate={{ y: [70, 68, 70] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        )}
      </svg>
    </div>
  );
};

export default Bunny;