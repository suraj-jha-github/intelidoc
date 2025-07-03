'use client'
import React from "react";
import { Card, CardContent } from "../../../components/ui/card";

interface SecurityFeature {
  title: string;
  description: string;
}

interface SecuritySectionProps {
  features: SecurityFeature[];
}

export const SecuritySection: React.FC<SecuritySectionProps> = ({ features }) => {
  return (
    <section className="w-full min-h-[400px] relative">
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: "url('/features/security-bg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      <div className="relative z-10 w-full h-full">
        {/* Background decorative elements - hidden on mobile for performance */}
        <div className="hidden md:block">
          <img
            className="absolute w-[300px] h-[320px] lg:w-[445px] lg:h-[469px] top-[100px] lg:top-[169px] left-[-100px] lg:left-[-155px] opacity-30"
            alt="Vector"
            src="/features/vector-1-1.svg"
          />
          <img
            className="absolute w-[250px] h-[275px] lg:w-[350px] lg:h-[385px] top-[-200px] lg:top-[-297px] right-[-50px] lg:left-[1150px] opacity-30"
            alt="Vector"
            src="/features/vector-3.svg"
          />
          <img
            className="absolute w-[280px] h-[275px] lg:w-[388px] lg:h-[383px] top-[150px] lg:top-[239px] left-[-100px] lg:left-[-149px] opacity-30"
            alt="Vector"
            src="/features/vector-2.svg"
          />
          <img
            className="absolute w-[220px] h-[215px] lg:w-[313px] lg:h-[306px] top-[-200px] lg:top-[-281px] right-[-30px] lg:left-[1179px] opacity-30"
            alt="Vector"
            src="/features/vector-4.svg"
          />
        </div>

        <div className="pt-6 md:pt-12 lg:pt-24 pb-6 md:pb-12 pl-4 sm:pl-8 md:pl-16 lg:pl-[85px] pr-4 sm:pr-8 md:pr-16 lg:pr-[85px] max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
            <div className="lg:w-1/2 lg:flex lg:justify-end">
              <div className="lg:text-right">
                <h2 className="font-playfair font-semibold text-white text-3xl md:text-4xl lg:text-5xl leading-tight lg:leading-[61.4px] mb-8 lg:mb-0">
                  Enterprise-grade
                  <br />
                  security
                </h2>

                {/* Decorative elements - adjusted for mobile */}
                <div className="hidden lg:block absolute w-[50px] h-[50px] top-[470px] left-[172px] bg-[#f7d8e5] rounded-[25px]" />
                <div className="hidden lg:block absolute w-5 h-5 top-[318px] left-[248px] bg-[#f7d8e5] rounded-[10px]" />
              </div>
            </div>

            {/* Security cards grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 lg:w-1/2 lg:justify-items-end">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="w-full max-w-[290px] mx-auto lg:mx-0 bg-white rounded-[10px]  border-[0.2px] border-[#a9a3a3] shadow-[4px_4px_10px_2px_#0000001a] relative"
                >
                  <div className="w-[62px] h-[7px] absolute -top-1 left-[27px] bg-[#e03099]" />
                  <CardContent className="p-4 lg:p-6">
                    <h3 className="font-playfair font-normal text-black text-lg lg:text-xl mb-3 lg:mb-4">
                      {feature.title}
                    </h3>
                    <p className="font-gantari text-[#8a8989] text-sm lg:text-base leading-relaxed lg:leading-[20.5px] line-clamp-4">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};