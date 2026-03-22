'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Home } from 'lucide-react';
import { SwitchTheme } from './themeSwitch';

const mainNavItems = [
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Blog', href: '/blog' },
];

// Dropdown items temporarily disabled
/*
const dropdownNavItems = [
  { name: 'Guestbook', href: '/guestbook' },
  { name: 'Stats', href: '/stats' },
];
*/

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <header className="flex items-center justify-between mb-12 px-4 relative mono">

      {/* Logo */}
      <Link
        className="relative z-10 transition-all duration-300 hover:rotate-12"
        href="/"
        aria-label="Home"
      >
        <Home
          className={`w-4 h-4 transition-colors duration-300 ${
            isHomePage
              ? 'text-orange-500'
              : 'text-foreground hover:text-foreground/60'
          }`}
        />
      </Link>

      {/* Desktop navigation */}
      <div className="hidden md:flex items-center space-x-6">
        {mainNavItems.map(({ name, href }) => {
          const isActive = pathname === href;

          return (
            <Link
              key={href}
              href={href}
              className={`text-sm font-medium transition-all duration-300 ${
                isActive
                  ? 'text-foreground'
                  : 'text-foreground/70 hover:text-foreground'
              }`}
            >
              {name}
            </Link>
          );
        })}

         <SwitchTheme />
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden flex items-center space-x-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-10 p-2"
          aria-label="Toggle menu"
        >
          <ChevronDown
            className={`w-5 h-5 transition-transform ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </button>

        {/* <SwitchTheme /> */}
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full right-0 mt-2 bg-background border border-border rounded-md p-4 shadow-lg z-20">
          {mainNavItems.map(({ name, href }) => {
            const isActive = pathname === href;

            return (
              <Link
                key={href}
                href={href}
                className={`block py-2 text-sm font-medium ${
                  isActive
                    ? 'text-foreground'
                    : 'text-foreground hover:text-foreground/60'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {name}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}