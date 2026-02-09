"use client";

import React from 'react';
import ValentineCard from '@/components/ValentineCard';
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#FFF5F5] flex flex-col items-center justify-center p-4 overflow-hidden relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-10 left-10 animate-bounce opacity-20">
        <div className="w-12 h-12 bg-pink-300 rounded-full" />
      </div>
      <div className="absolute bottom-20 right-10 animate-pulse opacity-20">
        <div className="w-16 h-16 bg-yellow-200 rounded-full" />
      </div>
      <div className="absolute top-1/4 right-1/4 animate-pulse opacity-10">
        <div className="w-24 h-24 bg-blue-200 rounded-full" />
      </div>

      <main className="w-full max-w-4xl z-10">
        <ValentineCard />
      </main>

      <div className="mt-12 z-10">
        <MadeWithDyad />
      </div>
      
      {/* Floating Hearts Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-pink-100/40 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              fontSize: `${Math.random() * 20 + 20}px`
            }}
          >
            ❤
          </div>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          50% { opacity: 0.5; }
          100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
        }
        .animate-float {
          animation: float 15s linear infinite;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}} />
    </div>
  );
};

export default Index;