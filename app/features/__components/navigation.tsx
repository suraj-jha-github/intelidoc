'use client'
import React, { useState } from "react";
import { Button } from "../../../components/ui/button";
import { Menu, X } from "lucide-react";
import Link from 'next/link';

interface NavigationProps {
  navItems: string[];
}

const LoadingSpinner = () => (
  <div className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-[#162694] border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" />
);

export const Navigation: React.FC<NavigationProps> = ({ navItems }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loadingItem, setLoadingItem] = useState<string | null>(null);

  const handleClick = (item: string) => {
    if (item.toLowerCase() === 'features') {
      setLoadingItem(item);
      // Reset loading state after 2 seconds if navigation hasn't completed
      setTimeout(() => setLoadingItem(null), 2000);
    }
  };

  return (
    <header className="fixed w-full h-14 md:h-[57px] top-0 left-0 right-0 mx-auto z-50 backdrop-blur-[21px] backdrop-brightness-[100%] bg-gradient-to-b from-white/60 to-transparent">
      <nav className="flex items-center justify-between px-4 md:px-8 lg:px-16 h-full max-w-7xl mx-auto">
        <div className="flex items-center gap-4 md:gap-12">
          <Link href="/" className="flex items-center">
            <div className="font-['Geist',Helvetica] font-bold text-[#162694] text-lg sm:text-xl">
              IntelliDoc AI
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-6">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.toLowerCase() === 'features' ? '/features' : '#'}
                  className="font-medium text-slate-500 text-[15px] p-0 h-auto flex items-center gap-2 hover:text-[#162694] transition-colors"
                  onClick={() => handleClick(item)}
                >
                  {item}
                  {loadingItem === item && <LoadingSpinner />}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop CTA Button */}
        <Button className="hidden md:block bg-white text-[#162694] font-semibold text-[15px] h-7 rounded-[5px] hover:bg-gray-50">
          Try for free
        </Button>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </Button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-t lg:hidden">
            <div className="flex flex-col p-4 space-y-2">
              {navItems.map((item, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="justify-start font-medium text-slate-500"
                  onClick={() => {
                    setIsMenuOpen(false);
                    handleClick(item);
                  }}
                >
                  <Link
                    href={item.toLowerCase() === 'features' ? '/ehr' : '#'}
                    className="flex items-center gap-2"
                  >
                    {item}
                    {loadingItem === item && <LoadingSpinner />}
                  </Link>
                </Button>
              ))}
              <Button className="mt-4 bg-[#162694] text-white font-semibold">
                Try for free
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};