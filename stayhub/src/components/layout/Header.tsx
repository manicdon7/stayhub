"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Menu, User, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import SearchBar from '@/components/search/SearchBar';

const Header = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerClasses = `sticky top-0 z-30 w-full transition-all duration-300 ${
    isScrolled ? 'bg-white shadow-md' : isHomePage ? 'bg-transparent' : 'bg-white'
  }`;

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                StayHub
              </span>
            </motion.div>
          </Link>

          {/* Search Bar (desktop) */}
          <AnimatePresence>
            {!isSearchExpanded && (
              <motion.div
                className="hidden md:flex"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="relative rounded-full shadow-sm border border-gray-200 flex items-center hover:shadow-md transition-shadow">
                  <Button
                    variant="ghost"
                    className="rounded-full font-medium text-sm px-4 py-2"
                    onClick={() => setIsSearchExpanded(true)}
                  >
                    <span>Anywhere</span>
                    <span className="mx-2 text-gray-300">|</span>
                    <span>Any week</span>
                    <span className="mx-2 text-gray-300">|</span>
                    <span className="text-gray-400">Add guests</span>
                    <div className="ml-2 rounded-full bg-orange-500 p-2">
                      <Search className="h-4 w-4 text-white" />
                    </div>
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Expanded Search (will slide down when active) */}
          <AnimatePresence>
            {isSearchExpanded && (
              <motion.div
                className="absolute left-0 top-0 w-full bg-white shadow-md z-50 py-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="container mx-auto">
                  <div className="flex justify-between items-center">
                    <Link href="/" className="flex items-center">
                      <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                        StayHub
                      </span>
                    </Link>
                    <Button
                      variant="ghost"
                      onClick={() => setIsSearchExpanded(false)}
                      className="text-gray-500"
                    >
                      Close
                    </Button>
                  </div>
                  <div className="mt-4">
                    <SearchBar />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Mobile search trigger */}
          <div className="md:hidden">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={() => setIsSearchExpanded(true)}
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>

          {/* Navigation */}
          <div className="flex items-center space-x-4">
            <Link href="/become-a-host" className="hidden md:block">
              <Button variant="ghost" className="font-medium text-sm">
                Become a Host
              </Button>
            </Link>

            <Button variant="ghost" size="icon" className="rounded-full">
              <Globe className="h-5 w-5" />
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="rounded-full flex items-center gap-2 border border-gray-200 p-2">
                  <Menu className="h-4 w-4" />
                  <User className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="/signup" className="w-full">Sign up</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/login" className="w-full">Log in</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="/become-a-host" className="w-full">Become a Host</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/help" className="w-full">Help</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
