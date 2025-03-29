"use client";

import React from 'react';
import { motion } from 'framer-motion';
import SearchBar from '@/components/search/SearchBar';

const Hero = () => {
  return (
    <div className="relative h-[650px] w-full overflow-hidden bg-gradient-to-r from-orange-500/30 to-orange-600/30">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1564078516393-cf04bd966897?q=80&w=2874&auto=format&fit=crop)',
          backgroundPosition: 'center',
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full z-20 flex flex-col justify-center items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-md">
            Find Your Perfect Stay, Anywhere
          </h1>
          <p className="text-lg md:text-xl text-white mb-8 drop-shadow-md">
            Discover unique places to stay and unforgettable experiences around the world.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full max-w-4xl"
        >
          <SearchBar />
        </motion.div>
      </div>

      {/* Animated wave at the bottom */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-16 z-10"
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 0L60 10C120 20 240 40 360 45C480 50 600 40 720 35C840 30 960 30 1080 35C1200 40 1320 50 1380 55L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
            fill="white"
          />
        </svg>
      </motion.div>
    </div>
  );
};

export default Hero;
