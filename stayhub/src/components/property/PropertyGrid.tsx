"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PropertyListing, CategoryType } from '@/lib/types';
import PropertyCard from './PropertyCard';

interface PropertyGridProps {
  properties: PropertyListing[];
  selectedCategory?: CategoryType | null;
  showFeatured?: boolean;
}

const PropertyGrid = ({
  properties,
  selectedCategory = null,
  showFeatured = false
}: PropertyGridProps) => {

  // Filter properties by category if one is selected
  const filteredProperties = selectedCategory
    ? properties.filter(property => property.category.includes(selectedCategory))
    : properties;

  // Filter featured properties if requested
  const displayProperties = showFeatured
    ? filteredProperties.filter(property => property.featured)
    : filteredProperties;

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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="my-8">
      {displayProperties.length === 0 ? (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium text-gray-600">No properties found</h3>
          <p className="text-gray-500 mt-2">Try adjusting your filters or search criteria</p>
        </div>
      ) : (
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {displayProperties.map((property) => (
            <motion.div key={property.id} variants={item}>
              <PropertyCard property={property} />
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default PropertyGrid;
