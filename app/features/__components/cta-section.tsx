'use client'
import React, { useState } from "react";
import { Button } from "../../../components/ui/button";

export const CTASection: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);

  return (
    <section className="w-full min-h-[300px] relative">
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: "url('/features/security-bg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center py-12 md:py-0 pl-4 sm:pl-8 md:pl-16 lg:pl-[85px] pr-4 sm:pr-8 md:pr-16 lg:pr-[85px]">
        <h2 className="font-semibold text-white text-2xl md:text-3xl lg:text-5xl mb-8 md:mb-12 text-center">
          Free yourself for better things
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 md:gap-8 w-full max-w-md">
          <Button
            className="w-full sm:w-[204px] h-[40px] rounded-[5px] border-2 border-blue-800 text-blue-800 text-lg md:text-xl font-medium transition-colors bg-[#fff]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={isHovered ? { background: 'linear-gradient(131deg,rgba(46,52,90,1) 0%,rgba(12,17,46,1) 28%,rgba(13,23,90,1) 56%,rgba(16,29,113,1) 81%,rgba(19,33,128,1) 100%)', color: '#fff' } : {}}
          >
            Contact Us
          </Button>
          <Button
            variant="outline"
            className="w-full sm:w-[204px] border-2 border-blue-800 h-[40px] text-[#162694] font-medium text-base md:text-lg hover:bg-gray-100 transition-colors"
            onMouseEnter={() => setIsHovered2(true)}
            onMouseLeave={() => setIsHovered2(false)}
            style={isHovered2 ? { background: 'linear-gradient(131deg,rgba(46,52,90,1) 0%,rgba(12,17,46,1) 28%,rgba(13,23,90,1) 56%,rgba(16,29,113,1) 81%,rgba(19,33,128,1) 100%)', color: '#fff' } : {}}
          >
            Book a Demo
          </Button>
        </div>
      </div>
    </section>
  );
};