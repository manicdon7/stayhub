import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import CategoryFilter from '@/components/home/CategoryFilter';
import PropertyGrid from '@/components/property/PropertyGrid';
import { properties } from '@/lib/mockData';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <div className="container mx-auto px-4 py-8">
          <CategoryFilter />
          <PropertyGrid properties={properties} />
        </div>
      </main>
      <Footer />
    </>
  );
}
