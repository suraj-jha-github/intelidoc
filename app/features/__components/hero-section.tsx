'use client'
import React from "react";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-20 md:pt-32 lg:pt-[157px] pb-8 md:pb-16 px-4">
      {/* Background blur elements */}
      <div className="absolute w-[300px] h-[300px] md:w-[578px] md:h-[575px] top-[-100px] md:top-[-146px] left-[-100px] md:left-[-191px] rounded-full blur-[80px] md:blur-[130.85px] bg-gradient-to-br from-[rgba(22,38,148,0.5)] to-[rgba(255,155,188,0.5)]" />
      <div className="absolute w-[300px] h-[300px] md:w-[602px] md:h-[583px] top-[-150px] md:top-[-235px] right-[-100px] md:left-[1000px] rounded-full rotate-[76.75deg] blur-[80px] md:blur-[131.25px] bg-gradient-to-br from-[rgba(22,38,148,0.5)] via-[rgba(22,38,148,0.5)] to-[rgba(255,155,188,0.5)]" />

      <div className="relative z-10 flex flex-col items-center max-w-6xl mx-auto">
        <div className="relative text-center">
          <div >
            <h2 className="font-playfair font-semibold text-[#162694] text-3xl md:text-5xl lg:text-[83px] leading-tight md:leading-[92.1px] mt-2 md:mt-4 text-center">
              Seamless Interoperability
            </h2>
          </div>
        </div>

        {/* <div className="w-16 md:w-[84px] h-1 md:h-[5px] bg-[#f72aa4] mx-auto mt-2 md:mt-4" /> */}
        <div className="w-full max-w-[800px] h-auto bg-gradient-to-r from-[rgba(223,221,250,1)] to-[rgba(252,214,230,1)] p-2 md:p-4 rounded-lg md:rounded-none mt-[20px]">
          <h3 className=" font-playfair bg-gradient-to-r from-[rgba(22,38,148,1)] to-[rgba(153,166,255,1)] bg-clip-text text-transparent font-semibold text-3xl md:text-5xl lg:text-[83px] leading-[1.1] md:leading-[1.1] pb-4">
            with Clinical Systems
          </h3>
        </div>


        <p className="font-gantari text-[#676767] text-lg md:text-xl lg:text-xl text-center max-w-[900px] mt-6 md:mt-12 px-4">
          InteliDoc integrates seamlessly with your EHR to unify scheduling, e-prescribing, lab results, billing, and analytics—automating workflows, reducing errors, and boosting practice efficiency from day one.
        </p>
      </div>
    </section>
  );
};