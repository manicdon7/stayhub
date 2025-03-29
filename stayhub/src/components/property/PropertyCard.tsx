"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Heart, Star } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';
import { PropertyListing } from '@/lib/types';
import { useWishlistStore } from '@/lib/store';
import { formatCurrency } from '@/lib/mockData';

interface PropertyCardProps {
  property: PropertyListing;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlistStore();
  const isWishlisted = isInWishlist(property.id);

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (isWishlisted) {
      removeFromWishlist(property.id);
    } else {
      addToWishlist(property.id);
    }
  };

  return (
    <Link href={`/property/${property.id}`}>
      <motion.div
        className="group relative rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
      >
        {/* Image Carousel */}
        <div className="relative aspect-[4/3] w-full">
          <Carousel className="w-full">
            <CarouselContent>
              {property.images.map((image) => (
                <CarouselItem key={image.id}>
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={image.url}
                      alt={property.title}
                      fill
                      className="object-cover rounded-t-xl"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </div>
          </Carousel>

          {/* Wishlist Button */}
          <button
            onClick={handleToggleWishlist}
            className="absolute right-3 top-3 z-10 p-2 rounded-full bg-white/80 shadow-sm hover:bg-white transition-colors"
          >
            <Heart
              className={`h-5 w-5 ${
                isWishlisted ? 'fill-rose-500 text-rose-500' : 'text-gray-600'
              }`}
            />
          </button>

          {/* Superhost Badge */}
          {property.superhost && (
            <Badge
              variant="secondary"
              className="absolute left-3 top-3 z-10 bg-white/90 text-black text-xs font-medium"
            >
              Superhost
            </Badge>
          )}
        </div>

        {/* Property Info */}
        <div className="p-4">
          <div className="flex justify-between items-start">
            <h3 className="font-medium text-gray-900 line-clamp-1">{property.title}</h3>
            <div className="flex items-center">
              <Star className="h-4 w-4 text-orange-500 fill-orange-500 mr-1" />
              <span className="text-sm font-medium">{property.rating}</span>
            </div>
          </div>

          <p className="text-gray-500 text-sm mt-1 line-clamp-1">
            {property.location.city}, {property.location.country}
          </p>

          <div className="flex items-center justify-between mt-3">
            <div>
              <p className="text-sm font-medium">
                <span className="font-semibold">{formatCurrency(property.price.basePrice)}</span>
                <span className="text-gray-500"> night</span>
              </p>
            </div>

            <div className="text-xs text-gray-500">
              {property.bedrooms} {property.bedrooms === 1 ? 'bedroom' : 'bedrooms'} · {property.bathrooms} {property.bathrooms === 1 ? 'bath' : 'baths'}
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default PropertyCard;
