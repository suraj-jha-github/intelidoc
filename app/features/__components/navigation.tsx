'use client'
import React, { useState, useEffect, useRef } from "react";
import { Button } from "../../../components/ui/button";
import { Loader } from "../../../components/ui/loader";
import { Menu, X } from "lucide-react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavigationProps {
  navItems: { label: string; href: string }[];
  colorClass?: string;
  logoColorClass?: string;
}

const LoadingSpinner = () => (
  <Loader size="sm" />
);

export const Navigation: React.FC<NavigationProps> = ({ navItems, colorClass, logoColorClass }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loadingItem, setLoadingItem] = useState<string | null>(null);
  const [isDarkBackground, setIsDarkBackground] = useState(false);
  const pathname = usePathname();
  const debounceTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastStateRef = useRef<boolean>(false);

  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    let darkSections: HTMLElement[] = [];
    let lightSections: HTMLElement[] = [];

    const updateNavState = (newState: boolean) => {
      // Prevent unnecessary state updates that cause flickering
      if (lastStateRef.current !== newState) {
        lastStateRef.current = newState;
        setIsDarkBackground(newState);
      }
    };

    const debouncedUpdateNavState = (newState: boolean) => {
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }
      debounceTimeoutRef.current = setTimeout(() => {
        updateNavState(newState);
      }, 50); // Small delay to prevent rapid changes
    };

    const checkBackgroundColor = () => {
      if (typeof window !== 'undefined') {
        // Get all sections with data-nav-dark attributes
        darkSections = Array.from(document.querySelectorAll('[data-nav-dark="true"]')) as HTMLElement[];
        lightSections = Array.from(document.querySelectorAll('[data-nav-dark="false"]')) as HTMLElement[];
      }

      // Only use data-nav-dark attributes, no fallback logic
      if (darkSections.length > 0 || lightSections.length > 0) {
        if (observer) observer.disconnect();

        observer = new window.IntersectionObserver(
          (entries) => {
            let dark = false;
            let light = false;

            entries.forEach(entry => {
              const target = entry.target as HTMLElement;
              if (entry.isIntersecting) {
                if (target.getAttribute('data-nav-dark') === 'true') {
                  dark = true;
                } else if (target.getAttribute('data-nav-dark') === 'false') {
                  light = true;
                }
              }
            });

            // Priority: if we're in a light section, use light nav, otherwise use dark if in dark section
            if (light) {
              debouncedUpdateNavState(false);
            } else if (dark) {
              debouncedUpdateNavState(true);
            } else {
              // If not in any section with data-nav-dark, default to light (blue nav)
              debouncedUpdateNavState(false);
            }
          },
          {
            root: null,
            rootMargin: '-60px 0px 0px 0px', // Account for nav height
            threshold: [0, 0.1, 0.5, 1.0] // Multiple thresholds for smoother detection
          }
        );

        // Observe all sections
        [...darkSections, ...lightSections].forEach(section => observer!.observe(section));

        // Initial check with delay to ensure DOM is ready
        setTimeout(() => {
          let foundSection = false;
          for (const section of [...darkSections, ...lightSections]) {
            const rect = section.getBoundingClientRect();
            if (rect.top < 60 && rect.bottom > 0) {
              const isDark = section.getAttribute('data-nav-dark') === 'true';
              updateNavState(isDark);
              foundSection = true;
              break;
            }
          }
          if (!foundSection) {
            // Default to light navigation if no sections are found
            updateNavState(false);
          }
        }, 200);
      } else {
        // If no data-nav-dark sections found, default to light navigation
        updateNavState(false);
      }
    };

    // Initial check
    checkBackgroundColor();

    // Debounced scroll handler to prevent excessive updates
    let scrollTimeout: NodeJS.Timeout;
    const handleScroll = () => {
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      scrollTimeout = setTimeout(() => {
        checkBackgroundColor();
      }, 10); // Small delay for scroll events
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (observer) observer.disconnect();
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [pathname]);

  const handleClick = (item: { label: string; href: string }) => {
    // Handle hash links properly
    if (item.href.startsWith('/#')) {
      const hash = item.href.substring(1); // Remove the leading '/'

      // If we're not on the home page, navigate to home first
      if (pathname !== '/') {
        window.location.href = item.href;
      } else {
        // If we're already on home page, just scroll to the section
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
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
    <header className={`fixed w-full h-14 md:h-[57px] top-0 left-0 right-0 mx-auto z-50 ${navBackground} transition-all duration-500 ease-in-out shadow-lg border-b border-white/30`}>
      <nav className="flex items-center justify-between pl-4 sm:pl-8 md:pl-16 lg:pl-[85px] pr-4 sm:pr-8 md:pr-16 lg:pr-[85px] h-full max-w-7xl mx-auto">
        <div className="flex items-center gap-4 md:gap-12">
          <Link href="/" className="flex items-center">
            <div className={`font-gantari font-bold text-lg sm:text-xl ${navLogoColor} transition-colors duration-500`}>
              InteliDoc AI
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-6">
            {navItems.map((item, index) => (
              <li key={index} className="relative">
                {item.href.startsWith('/#') ? (
                  <button
                    onClick={() => handleClick(item)}
                    className={`font-medium ${navTextColor} text-[15px] px-3 py-2 rounded-md flex items-center gap-2 hover:text-white hover:bg-[#4551a9] hover:shadow-md transition-all duration-300 cursor-pointer`}
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    href={item.href || "#"}
                    className={`font-medium ${navTextColor} text-[15px] px-3 py-2 rounded-md flex items-center gap-2 hover:text-white hover:bg-[#4551a9] hover:shadow-md transition-all duration-300`}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>



        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          className={`lg:hidden ${navTextColor} transition-colors duration-500 p-2 hover:bg-white/10 rounded-md`}
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
                  {item.href.startsWith('/#') ? (
                    <span className={`flex items-center gap-2 w-full ${mobileTextColor} hover:text-white transition-colors duration-300`}>
                      {item.label}
                    </span>
                  ) : (
                    <Link
                      href={item.href}
                      className={`flex items-center gap-2 w-full ${mobileTextColor} hover:text-white transition-colors duration-300`}
                    >
                      {item.label}
                    </Link>
                  )}
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