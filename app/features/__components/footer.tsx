'use client'
import React from "react";


interface FooterLink {
  title: string;
  section: string;
}

interface FooterProps {
  links: FooterLink[];
}

export const Footer: React.FC<FooterProps> = ({ links }) => {
  return (
    <footer className="w-full h-auto bg-[#efefef] px-4 md:px-8 lg:px-32 py-8 md:py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
          <div>
            <h3 className="font-bold text-[#162694] text-2xl md:text-[32px] leading-tight md:leading-[41.0px] mb-4 md:mb-8">
              InteliDoc AI
            </h3>
            <p className="text-[#969696] text-sm leading-relaxed md:leading-[17.9px] max-w-[266px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
            </p>
          </div>

          <div>
            <h3 className="text-black text-lg md:text-xl leading-tight md:leading-[25.6px] mb-4 md:mb-8">
              Security
            </h3>
            <p className="text-[#969696] text-sm leading-relaxed md:leading-[17.9px] max-w-[266px] mb-4 md:mb-6">
              Our technology is HIPAA-compliant, uses industry best practices,
              and doesn&apos;t store patient recordings.
            </p>
            <a
              href="#"
              className="text-[#969696] text-[13px] leading-[16.6px] underline hover:text-[#162694] transition-colors"
            >
              Learn more
            </a>
          </div>

          <div>
            <h3 className="text-black text-lg md:text-xl leading-tight md:leading-[25.6px] mb-4 md:mb-8">
              Helpful Links
            </h3>
            <ul className="flex flex-col gap-3 md:gap-4">
              {links
                .filter((link) => link.section === "Helpful Links")
                .map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-[#969696] text-[13px] leading-[16.6px] underline hover:text-[#162694] transition-colors"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};