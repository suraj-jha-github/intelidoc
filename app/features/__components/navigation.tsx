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
      const documentHeight = document.documentElement.scrollHeight;

      // Check current page and scroll position
      let isInDarkSection = false;

      if (pathname === '/') {
        // Homepage: check scroll position for proper adaptation
        // Check if we're in FAQ section (near bottom of page)
        const faqSectionStart = documentHeight - windowHeight * 1.5; // Approximate FAQ section position
        if (scrollY > faqSectionStart) {
          // In FAQ section - dark background
          isInDarkSection = true;
        } else if (scrollY < windowHeight * 0.8) {
          // In hero section - dark background
          isInDarkSection = true;
        } else {
          // In middle sections - light background
          isInDarkSection = false;
        }
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
      } else if (pathname === '/tryfree') {
        // Try free page: light background
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

  // Dynamic classes based on background and page
  const navTextColor = pathname === '/features'
    ? "text-[#767676]"
    : isDarkBackground
      ? "text-white"
      : "text-[#162694]";
  const navLogoColor = pathname === '/features'
    ? "text-[#132180]"
    : logoColorClass || (isDarkBackground ? "text-white" : "text-[#162694]");
  const navBackground = isDarkBackground
    ? "backdrop-blur-[6px] backdrop-brightness-[100%] bg-gradient-to-b from-gray-900/20 to-gray-900/10 border-b border-gray-700/20"
    : "backdrop-blur-[6px] backdrop-brightness-[100%] bg-gradient-to-b from-white/20 to-white/10 border-b border-gray-200/20";
  const ctaButtonClass = isDarkBackground
    ? "bg-white text-[#162694] hover:bg-gray-50 shadow-lg"
    : "bg-[#162694] text-white hover:bg-[#132180] shadow-lg";
  const mobileMenuClass = isDarkBackground
    ? "bg-gray-900/40 backdrop-blur-md border-t border-gray-700/20"
    : "bg-white/40 backdrop-blur-md border-t border-gray-200/20";
  const mobileTextColor = pathname === '/features'
    ? "text-[#767676]"
    : isDarkBackground
      ? "text-white"
      : "text-[#162694]";
  const mobileCtaClass = isDarkBackground
    ? "bg-white text-[#162694]"
    : "bg-[#162694] text-white";

  return (
    <header className={`fixed w-full h-14 md:h-[57px] top-0 left-0 right-0 mx-auto z-50 ${navBackground} transition-all duration-300 ease-in-out shadow-lg border-b border-white/30`}>
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
                  className={`font-medium ${navTextColor} text-[15px] px-3 py-2 rounded-md flex items-center gap-2 hover:text-white hover:bg-[#4551a9] hover:shadow-md transition-all duration-300`}
                >
                  {item.label}
                  {loadingItem === item.label && <LoadingSpinner />}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop CTA Button */}
        <Link href="/tryfree">
          <Button className={`hidden md:block font-semibold text-[15px] h-8 px-4 py-1.5 rounded-[5px] flex items-center justify-center ${ctaButtonClass} transition-all duration-300 leading-none`}>
            Try for free
          </Button>
        </Link>

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
          <div className={`absolute top-full left-0 right-0 ${mobileMenuClass} lg:hidden transition-all duration-300 border-b border-white/30`}>
            <div className="flex flex-col p-4 space-y-2">
              {navItems.map((item, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className={`justify-start font-medium ${mobileTextColor} hover:text-white hover:bg-[#4551a9] hover:shadow-md transition-all duration-300 rounded-md`}
                  onClick={() => {
                    setIsMenuOpen(false);
                    handleClick(item);
                  }}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-2 ${mobileTextColor} hover:text-white transition-colors duration-300`}
                  >
                    {item.label}
                    {loadingItem === item.label && <LoadingSpinner />}
                  </Link>
                </Button>
              ))}
              <Link href="/tryfree">
                <Button className={`mt-4 font-semibold ${mobileCtaClass} transition-all duration-300 leading-none flex items-center justify-center`}>
                  Try for free
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};