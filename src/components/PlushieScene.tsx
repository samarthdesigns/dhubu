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

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full h-[550px] bg-white rounded-[40px] p-6 flex flex-col items-center justify-center space-y-6"
    >
      <div className="text-center space-y-2">
        <h3 className="text-2xl font-bold text-pink-500 italic tracking-tight">Our Little Family</h3>
        <p className="text-gray-600 text-sm font-medium italic max-w-md mx-auto leading-relaxed">
          "We have adopted a lot of babies along the way and gifted each other cute plushies."
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4 w-full">
        {babies.map((baby, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="flex flex-col items-center space-y-3"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-pink-100 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative w-full aspect-[3/4] overflow-hidden rounded-2xl border-2 border-pink-50 shadow-sm">
                <img 
                  src={baby.img} 
                  alt={baby.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
            <span className="text-xs font-bold text-pink-400 uppercase tracking-widest italic">
              {baby.name}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default PlushieScene;