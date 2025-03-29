"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { categories } from '@/lib/mockData';
import { CategoryType } from '@/lib/types';

interface CategoryFilterProps {
  onCategoryChange?: (category: CategoryType | null) => void;
}

const CategoryFilter = ({ onCategoryChange }: CategoryFilterProps) => {
  const [activeCategory, setActiveCategory] = useState<CategoryType | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const containerRef = useRef<HTMLDivElement>(null);

  const checkScrollable = () => {
    const container = containerRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 10
      );
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollable);
      // Initial check
      checkScrollable();
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', checkScrollable);
      }
    };
  }, []);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const handleCategoryClick = (category: CategoryType) => {
    const newCategory = activeCategory === category ? null : category;
    setActiveCategory(newCategory);

    if (onCategoryChange) {
      onCategoryChange(newCategory);
    }
  };

  return (
    <div className="relative my-6 group">
      {/* Left scroll button */}
      <Button
        variant="ghost"
        size="icon"
        className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 rounded-full shadow-md bg-white
          transition-opacity duration-300 ${canScrollLeft ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={scrollLeft}
      >
        <ChevronLeft className="h-5 w-5" />
      </Button>

      {/* Categories container */}
      <div
        ref={containerRef}
        className="flex overflow-x-auto scrollbar-hide gap-10 py-2 scroll-smooth"
        style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
      >
        {categories.map((category) => (
          <motion.button
            key={category.name}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleCategoryClick(category.name)}
            className={`flex flex-col items-center space-y-2 focus:outline-none transition-colors
              ${activeCategory === category.name
                ? 'text-orange-500 border-b-2 border-orange-500'
                : 'text-gray-600 hover:text-orange-500'}`}
          >
            <div className="text-2xl">{category.icon}</div>
            <span className="text-xs font-medium whitespace-nowrap">
              {category.label}
            </span>
          </motion.button>
        ))}
      </div>

      {/* Right scroll button */}
      <Button
        variant="ghost"
        size="icon"
        className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 rounded-full shadow-md bg-white
          transition-opacity duration-300 ${canScrollRight ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={scrollRight}
      >
        <ChevronRight className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default CategoryFilter;
