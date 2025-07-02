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
    let observer: IntersectionObserver | null = null;
    let darkSections: HTMLElement[] = [];

    const checkBackgroundColor = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      let isInDarkSection = false;

      if (pathname === '/') {
        // Use Intersection Observer for all [data-nav-dark="true"] sections
        if (typeof window !== 'undefined') {
          darkSections = Array.from(document.querySelectorAll('[data-nav-dark="true"]')) as HTMLElement[];
        }
        // Fallback: if no dark sections, use hero section logic
        if (!darkSections.length) {
          if (scrollY < windowHeight * 0.8) {
            isInDarkSection = true;
          } else {
            isInDarkSection = false;
          }
          setIsDarkBackground(isInDarkSection);
          return;
        }
        // If sections available, use Intersection Observer
        if (observer) observer.disconnect();
        observer = new window.IntersectionObserver(
          (entries) => {
            let dark = false;
            entries.forEach(entry => {
              if (entry.isIntersecting) dark = true;
            });
            // Also keep hero section logic
            if (scrollY < windowHeight * 0.8) dark = true;
            setIsDarkBackground(dark);
          },
          {
            root: null,
            rootMargin: '0px',
            threshold: 0
          }
        );
        darkSections.forEach(section => observer!.observe(section));
        // Initial check
        setTimeout(() => {
          for (const section of darkSections) {
            if (section.getBoundingClientRect().top < 60 && section.getBoundingClientRect().bottom > 0) {
              setIsDarkBackground(true);
              return;
            }
          }
        }, 100);
        return;
      }
      // ... existing logic for other pages ...
      if (pathname === '/features') {
        isInDarkSection = scrollY < windowHeight * 0.7;
      } else if (pathname === '/pricing') {
        isInDarkSection = scrollY < windowHeight * 0.6;
      } else if (pathname === '/contact') {
        isInDarkSection = true;
      } else if (pathname === '/specialities') {
        isInDarkSection = scrollY < windowHeight * 0.7;
      } else if (pathname === '/forgroup') {
        isInDarkSection = true;
      } else if (pathname === '/blogs') {
        isInDarkSection = scrollY < windowHeight * 0.7;
      } else if (pathname === '/tryfree') {
        isInDarkSection = false;
      }
      setIsDarkBackground(isInDarkSection);
    };

    checkBackgroundColor();
    window.addEventListener('scroll', checkBackgroundColor);

    return () => {
      window.removeEventListener('scroll', checkBackgroundColor);
      if (observer) observer.disconnect();
    };
  }, [pathname]);

  const handleClick = (item: { label: string; href: string }) => {
    if (item.label.toLowerCase() === 'features') {
      setLoadingItem(item.label);
      setTimeout(() => setLoadingItem(null), 2000);
    }
  };

  // Dynamic classes based on background and page
  const navTextColor = isDarkBackground
    ? "text-white"
    : "text-[#162694]";
  const navLogoColor = logoColorClass || (isDarkBackground ? "text-white" : "text-[#162694]");
  const navBackground = isDarkBackground
    ? "backdrop-blur-[6px] backdrop-brightness-[100%] bg-gradient-to-b from-gray-900/20 to-gray-900/10 border-b border-gray-700/20"
    : "backdrop-blur-[6px] backdrop-brightness-[100%] bg-gradient-to-b from-white/20 to-white/10 border-b border-gray-200/20";
  const ctaButtonClass = isDarkBackground
    ? "bg-white text-[#162694] hover:bg-gray-50 shadow-lg"
    : "bg-[#162694] text-white hover:bg-[#132180] shadow-lg";
  const mobileMenuClass = isDarkBackground
    ? "bg-gray-900/95 backdrop-blur-md border-t border-gray-700/20"
    : "bg-white/95 backdrop-blur-md border-t border-gray-200/20";
  const mobileTextColor = isDarkBackground
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
        <Link href="/tryfree" target="_blank">
          <Button className={`hidden lg:block font-semibold text-[15px] h-8 px-4 py-1.5 rounded-[5px] flex items-center justify-center ${ctaButtonClass} transition-all duration-300 leading-none`}>
            Try for free
          </Button>
        </Link>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          className={`lg:hidden ${navTextColor} transition-colors duration-300 p-2 hover:bg-white/10 rounded-md`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`absolute top-full left-0 right-0 w-full ${mobileMenuClass} lg:hidden transition-all duration-300 border-b border-white/30 z-50 shadow-lg`}>
            <div className="flex flex-col p-4 space-y-2 max-w-7xl mx-auto">
              {navItems.map((item, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className={`justify-start font-medium ${mobileTextColor} hover:text-white hover:bg-[#4551a9] hover:shadow-md transition-all duration-300 rounded-md py-3`}
                  onClick={() => {
                    setIsMenuOpen(false);
                    handleClick(item);
                  }}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-2 w-full ${mobileTextColor} hover:text-white transition-colors duration-300`}
                  >
                    {item.label}
                    {loadingItem === item.label && <LoadingSpinner />}
                  </Link>
                </Button>
              ))}

              {/* Mobile CTA Button */}
              <Link href="/tryfree" target="_blank">
                <Button className={`w-full font-semibold text-[15px] h-10 px-4 py-2 rounded-[5px] flex items-center justify-center ${mobileCtaClass} transition-all duration-300 leading-none mt-4`}>
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