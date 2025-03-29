"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Youtube, Globe } from 'lucide-react';

const footerSections = [
  {
    title: 'Support',
    links: [
      { label: 'Help Center', href: '/help' },
      { label: 'AirCover', href: '/aircover' },
      { label: 'Safety information', href: '/safety' },
      { label: 'Supporting people with disabilities', href: '/accessibility' },
      { label: 'Cancellation options', href: '/cancellation' },
      { label: 'Report a neighborhood concern', href: '/report' },
    ],
  },
  {
    title: 'Community',
    links: [
      { label: 'StayHub.org: disaster relief housing', href: '/disaster-relief' },
      { label: 'Combating discrimination', href: '/against-discrimination' },
    ],
  },
  {
    title: 'Hosting',
    links: [
      { label: 'StayHub your home', href: '/host/homes' },
      { label: 'AirCover for Hosts', href: '/aircover-for-hosts' },
      { label: 'Hosting resources', href: '/host/resources' },
      { label: 'Community forum', href: '/community' },
      { label: 'Hosting responsibly', href: '/host/responsible' },
    ],
  },
  {
    title: 'StayHub',
    links: [
      { label: 'Newsroom', href: '/news' },
      { label: 'New features', href: '/features' },
      { label: 'Careers', href: '/careers' },
      { label: 'Investors', href: '/investors' },
      { label: 'Gift cards', href: '/gift' },
    ],
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="font-semibold text-gray-900 mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-orange-500 hover:underline text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <hr className="my-8 border-gray-200" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4 mb-4 md:mb-0">
            <p className="text-sm text-gray-600">
              &copy; {currentYear} StayHub, Inc.
            </p>
            <div className="flex items-center space-x-4">
              <Link href="/privacy" className="text-sm text-gray-600 hover:text-orange-500 hover:underline">
                Privacy
              </Link>
              <Link href="/terms" className="text-sm text-gray-600 hover:text-orange-500 hover:underline">
                Terms
              </Link>
              <Link href="/sitemap" className="text-sm text-gray-600 hover:text-orange-500 hover:underline">
                Sitemap
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-between md:justify-end space-x-6">
            <div className="flex items-center space-x-2">
              <Globe className="h-4 w-4 text-gray-600" />
              <span className="text-sm font-medium">English (US)</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="h-5 w-5 text-gray-600 hover:text-orange-500 transition-colors" />
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="h-5 w-5 text-gray-600 hover:text-orange-500 transition-colors" />
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="h-5 w-5 text-gray-600 hover:text-orange-500 transition-colors" />
              </Link>
              <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <Youtube className="h-5 w-5 text-gray-600 hover:text-orange-500 transition-colors" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
