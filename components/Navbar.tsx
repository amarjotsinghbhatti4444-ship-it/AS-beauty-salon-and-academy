'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Courses', href: '/courses' },
  { name: 'Contact', href: '/contact' },
  { name: 'Verify Certificate', href: '/verify-certificate' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-rose-100 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight text-black md:text-2xl">
              AS BEAUTY <span className="text-rose-400">SALON</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-rose-500 ${
                    isActive ? 'text-rose-500' : 'text-gray-600'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              href="/courses"
              className="rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-rose-500"
            >
              Enroll Now
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-gray-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-b border-rose-100 bg-white md:hidden"
          >
            <nav className="flex flex-col space-y-4 p-4">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block text-base font-medium transition-colors ${
                      isActive ? 'text-rose-500' : 'text-gray-600'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <Link
                href="/courses"
                onClick={() => setIsOpen(false)}
                className="mt-4 inline-block rounded-full bg-black px-5 py-3 text-center font-medium text-white transition-colors hover:bg-rose-500"
              >
                Enroll Now
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
