'use client'
import React from "react";
import { Separator } from "@/components/ui/separator";

interface FooterLinks {
  resources: string[];
  specialties: string[];
  legal: string[];
}

interface FooterProps {
  links: FooterLinks;
}

export const Footer: React.FC<FooterProps> = ({ links }) => {
  return (
    <section className="w-full mt-16">
      

      {/* <Separator className="my-8" /> */}

      <footer className="w-full bg-white py-12">
        <div className="max-w-[1280px] mx-auto px-4 md:px-[78px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center md:text-left">
              <h3 className="font-geist font-bold text-black text-2xl md:text-3xl tracking-[0] leading-[38.4px] mb-8">
                InteliDoc
              </h3>
              <img
                className="w-[217px] h-[67px] object-cover mx-auto md:mx-0"
                alt="InteliDoc Logo"
                src="/speciality/image-6.png"
              />
            </div>

            <div className="text-center md:text-left">
              <h3 className="font-geist font-semibold text-black text-xl tracking-[0] leading-[25.6px] mb-12">
                Resources
              </h3>
              <ul className="space-y-4">
                {links.resources.map((link, index) => (
                  <li
                    key={index}
                    className="font-geist font-normal text-black text-[17px] tracking-[0] leading-[21.8px]"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center md:text-left">
              <h3 className="font-geist font-semibold text-black text-xl tracking-[0] leading-[25.6px] mb-12">
                Specialties
              </h3>
              <ul className="space-y-4">
                {links.specialties.map((link, index) => (
                  <li
                    key={index}
                    className="font-geist font-normal text-black text-[17px] tracking-[0] leading-[21.8px]"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center md:text-left">
              <h3 className="font-geist font-semibold text-black text-xl tracking-[0] leading-[25.6px] mb-12">
                Legal
              </h3>
              <ul className="space-y-4">
                {links.legal.map((link, index) => (
                  <li
                    key={index}
                    className="font-geist font-normal text-black text-[17px] tracking-[0] leading-[21.8px]"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}; 