"use client";

import React from 'react';
import { motion } from 'framer-motion';
import pizzaImg from '../utils/PizzaBebus.jpg';
import buckyImg from '../utils/BuckyBebu.jpg';
import noriImg from '../utils/NoriBebu.JPG';

const PlushieScene = () => {
  const babies = [
    { img: pizzaImg, name: "Pizza Bebu's" },
    { img: buckyImg, name: "Bucky Bebu" },
    { img: noriImg, name: "Nori Bebu" }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    show: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 260, damping: 20 }
    }
  };

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="w-full min-h-[500px] md:h-[550px] bg-white rounded-[30px] md:rounded-[40px] p-4 md:p-6 flex flex-col items-center justify-center space-y-4 md:space-y-6"
    >
      <motion.div variants={item} className="text-center space-y-1 md:space-y-2">
        <h3 className="text-xl md:text-2xl font-bold text-pink-500 italic tracking-tight">Our Little Family</h3>
        <p className="text-gray-500 text-xs md:text-sm font-medium italic max-w-md mx-auto leading-relaxed px-2">
          "We have adopted a lot of babies along the way and gifted each other cute plushies."
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 w-full max-w-lg">
        {babies.map((baby, i) => (
          <motion.div
            key={i}
            variants={item}
            className={`flex flex-col items-center space-y-2 md:space-y-3 ${i === 2 ? 'col-span-2 md:col-span-1' : ''}`}
          >
            <div className="relative group w-full">
              <div className="absolute -inset-1 bg-pink-100 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative w-full aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-2xl border-2 border-pink-50 shadow-sm">
                <img 
                  src={baby.img} 
                  alt={baby.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
            <span className="text-[10px] md:text-xs font-bold text-pink-400 uppercase tracking-widest italic">
              {baby.name}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default PlushieScene;