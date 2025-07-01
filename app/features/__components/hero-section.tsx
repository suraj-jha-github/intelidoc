'use client'
import React from "react";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-[500px] md:min-h-[622px] mt-[32px]">
      <div className="absolute w-full h-full [background:linear-gradient(137deg,rgba(14,25,99,1)_0%,rgba(46,24,173,1)_47%,rgba(79,52,187,1)_60%,rgba(140,76,193,1)_71%,rgba(200,110,186,1)_82%,rgba(228,174,211,1)_94%,rgba(231,227,237,1)_100%)]" />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center pl-4 sm:pl-8 md:pl-16 lg:pl-[85px] pr-4 sm:pr-8 md:pr-16 lg:pr-[85px] pt-24 md:pt-32 pb-8 max-w-7xl mx-auto h-full">
        <div className="relative text-center w-full">
          <div className="w-full max-w-[850px] mx-auto">
            <h2 className="font-playfair font-semibold text-white text-2xl md:text-4xl lg:text-[75px] leading-tight md:leading-[75px] mt-2 md:mt-4 text-center">
              Seamless Interoperability
            </h2>
          </div>
        </div>

        <div className="w-full max-w-[850px] h-auto bg-gradient-to-r from-[rgba(223,221,250,1)] to-[rgba(252,214,230,1)] p-2 md:p-4 rounded-lg md:rounded-none mt-[20px] mx-auto">
          <h3 className="font-playfair bg-gradient-to-r from-[rgba(22,38,148,1)] to-[rgba(153,166,255,1)] bg-clip-text text-transparent font-semibold text-3xl md:text-5xl lg:text-[83px] leading-[1.1] md:leading-[1.1] pb-4 text-center">
            with Clinical Systems
          </h3>
        </div>

        <p className="font-gantari text-white text-lg md:text-xl lg:text-xl text-center max-w-[900px] mt-6 md:mt-12">
          InteliDoc integrates seamlessly with your EHR to unify scheduling, e-prescribing, lab results, billing, and analytics—automating workflows, reducing errors, and boosting practice efficiency from day one.
        </p>
      </div>
    </section>
  );
};