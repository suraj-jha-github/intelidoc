'use client'
import React, { useState } from "react";
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

export const Navigation: React.FC<NavigationProps> = ({ navItems, colorClass = "text-white", logoColorClass = "text-white" }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loadingItem, setLoadingItem] = useState<string | null>(null);
  const pathname = usePathname();

  const handleClick = (item: { label: string; href: string }) => {
    if (item.label.toLowerCase() === 'features') {
      setLoadingItem(item.label);
      setTimeout(() => setLoadingItem(null), 2000);
    }
  };

  return (
    <header className="fixed w-full h-14 md:h-[57px] top-0 left-0 right-0 mx-auto z-50 backdrop-blur-[21px] backdrop-brightness-[100%] bg-gradient-to-b from-white/60 to-transparent border-b border-white">
      <nav className="flex items-center justify-between px-4 md:px-8 lg:px-16 h-full max-w-7xl mx-auto">
        <div className="flex items-center gap-4 md:gap-12">
          <Link href="/" className="flex items-center">
            <div className={`font-['Geist',Helvetica] font-bold text-lg sm:text-xl ${logoColorClass}`}>
              IntelliDoc AI
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-6">
            {navItems.map((item, index) => (
              <li key={index} onClick={() => handleClick(item)} className="relative">
                <Link
                  href={item.href || "#"}
                  className={`font-medium ${colorClass} text-[15px] p-0 h-auto flex items-center gap-2 hover:text-[#a9a7a7] transition-colors`}
                >
                  {item.label}
                  {loadingItem === item.label && <LoadingSpinner />}
                </Link>
                {pathname === item.href && (
                  <span className="absolute left-0 right-0 -bottom-2 h-1 bg-[#f72aa4] rounded" />
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop CTA Button */}
        <Button className="hidden md:block bg-white text-[#162694] font-semibold text-[15px] h-8 px-4 py-1.5 rounded-[5px] hover:bg-gray-50 flex items-center justify-center">
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
                  className={`justify-start font-medium ${colorClass}`}
                  onClick={() => {
                    setIsMenuOpen(false);
                    handleClick(item);
                  }}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-2 ${colorClass} hover:text-[#a9a7a7]`}
                  >
                    {item.label}
                    {loadingItem === item.label && <LoadingSpinner />}
                  </Link>
                  {pathname === item.href && (
                    <span className="block w-full h-1 mt-1 bg-[#f72aa4] rounded" />
                  )}
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