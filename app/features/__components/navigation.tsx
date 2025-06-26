'use client'
import React, { useState, useEffect } from "react";
import { Button } from "../../../components/ui/button";
import { Menu, X } from "lucide-react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavigationProps {
  navItems: { label: string; href: string }[];
  colorClass?: string;
  logoColorClass?: string;
}

const LoadingSpinner = () => (
  <div className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-[#162694] border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" />
);

export const Navigation: React.FC<NavigationProps> = ({ navItems, colorClass, logoColorClass }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loadingItem, setLoadingItem] = useState<string | null>(null);
  const [isDarkBackground, setIsDarkBackground] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const checkBackgroundColor = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Check current page and scroll position
      let isInDarkSection = false;

      if (pathname === '/') {
        // Homepage: dark in hero section, light in other sections
        isInDarkSection = scrollY < windowHeight * 0.8;
      } else if (pathname === '/features') {
        // Features page: dark background
        isInDarkSection = true;
      } else if (pathname === '/pricing') {
        // Pricing page: dark in hero, light in other sections
        isInDarkSection = scrollY < windowHeight * 0.6;
      } else if (pathname === '/contact') {
        // Contact page: dark background
        isInDarkSection = true;
      } else if (pathname === '/specialities') {
        // Specialities page: dark in hero, light in other sections
        isInDarkSection = scrollY < windowHeight * 0.7;
      } else if (pathname === '/blogs') {
        // Blogs page: light background
        isInDarkSection = false;
      }

      setIsDarkBackground(isInDarkSection);
    };

    checkBackgroundColor();
    window.addEventListener('scroll', checkBackgroundColor);

    return () => window.removeEventListener('scroll', checkBackgroundColor);
  }, [pathname]);

  const handleClick = (item: { label: string; href: string }) => {
    if (item.label.toLowerCase() === 'features') {
      setLoadingItem(item.label);
      setTimeout(() => setLoadingItem(null), 2000);
    }
  };

  // Dynamic classes based on background
  const navTextColor = isDarkBackground ? "text-white" : "text-[#162694]";
  const navLogoColor = isDarkBackground ? "text-white" : "text-[#162694]";
  const navBackground = isDarkBackground
    ? "backdrop-blur-[21px] backdrop-brightness-[100%] bg-gradient-to-b from-gray-900/90 to-gray-900/70 border-b border-gray-700/30"
    : "backdrop-blur-[21px] backdrop-brightness-[100%] bg-gradient-to-b from-white/90 to-white/70 border-b border-gray-200/30";
  const ctaButtonClass = isDarkBackground
    ? "bg-white text-[#162694] hover:bg-gray-50 shadow-lg"
    : "bg-[#162694] text-white hover:bg-[#132180] shadow-lg";
  const mobileMenuClass = isDarkBackground
    ? "bg-gray-900/95 backdrop-blur-md border-t border-gray-700/30"
    : "bg-white/95 backdrop-blur-md border-t border-gray-200/30";
  const mobileTextColor = isDarkBackground ? "text-white" : "text-[#162694]";
  const mobileCtaClass = isDarkBackground
    ? "bg-white text-[#162694]"
    : "bg-[#162694] text-white";

  return (
    <header className={`fixed w-full h-14 md:h-[57px] top-0 left-0 right-0 mx-auto z-50 ${navBackground} transition-all duration-300 ease-in-out shadow-lg`}>
      <nav className="flex items-center justify-between pl-4 sm:pl-8 md:pl-16 lg:pl-[85px] pr-4 sm:pr-8 md:pr-16 lg:pr-[85px] h-full max-w-7xl mx-auto">
        <div className="flex items-center gap-4 md:gap-12">
          <Link href="/" className="flex items-center">
            <div className={`font-gantari font-bold text-lg sm:text-xl ${navLogoColor} transition-colors duration-300`}>
              InteliDoc AI
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-6">
            {navItems.map((item, index) => (
              <li key={index} onClick={() => handleClick(item)} className="relative">
                <Link
                  href={item.href || "#"}
                  className={`font-medium ${navTextColor} text-[15px] px-3 py-2 rounded-md flex items-center gap-2 hover:bg-[#4551a9] hover:shadow-md transition-all duration-300`}
                >
                  {item.label}
                  {loadingItem === item.label && <LoadingSpinner />}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop CTA Button */}
        <Button className={`hidden md:block font-semibold text-[15px] h-8 px-4 py-1.5 rounded-[5px] flex items-center justify-center ${ctaButtonClass} transition-all duration-300`}>
          Try for free
        </Button>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          className={`lg:hidden ${navTextColor} transition-colors duration-300`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </Button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`absolute top-full left-0 right-0 ${mobileMenuClass} lg:hidden transition-all duration-300`}>
            <div className="flex flex-col p-4 space-y-2">
              {navItems.map((item, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className={`justify-start font-medium ${mobileTextColor} hover:bg-blue-100 hover:shadow-md transition-all duration-300 rounded-md`}
                  onClick={() => {
                    setIsMenuOpen(false);
                    handleClick(item);
                  }}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-2 ${mobileTextColor} transition-colors duration-300`}
                  >
                    {item.label}
                    {loadingItem === item.label && <LoadingSpinner />}
                  </Link>
                </Button>
              ))}
              <Button className={`mt-4 font-semibold ${mobileCtaClass} transition-all duration-300`}>
                Try for free
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};