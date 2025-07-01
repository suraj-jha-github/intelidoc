'use client'

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import { Navigation } from "../features/__components/navigation";
import Link from "next/link";

export default function Specialties() {
  const specialties = [
    {
      name: "Family Medicine",
      image: "/speciality/rectangle-314.png",
      className: "col-span-1 h-[201px]",
    },
    {
      name: "Internal Medicine",
      image: "/speciality/rectangle-313.png",
      className: "col-span-1 h-[201px]",
    },
    {
      name: "Psychiatry",
      image: "/speciality/rectangle-315.png",
      className: "col-span-1 h-[333px]",
    },
    {
      name: "Pediatrics",
      image: "/speciality/rectangle-317.png",
      className: "col-span-1 h-[333px]",
    },
    {
      name: "Mental Health",
      image: "/speciality/rectangle-316.png",
      className: "col-span-1 h-[147px]",
    },
    {
      name: "Other Specialties",
      image: "/speciality/rectangle-318.png",
      className: "col-span-1 h-[152px]",
    },
  ];

  const features = [
    {
      title: "Notes in your style, 10x faster",
      description:
        "intelidoc Learns your style and format with every edit. Get customized notes in seconds.",
      icon: "/speciality/noun-note-7815852-1.svg",
    },
    {
      title: "Works in every setting",
      description:
        "Accurately capture AI medical notes for any specialty visit and in multiple languages.",
      icon: "/speciality/target-iconn.svg",
    },
    {
      title: "Easy to use",
      description:
        'Copy and paste into your "favorite EHR", or explore our integration options.',
      icon: "/speciality/noun-lamp-5902978-1.svg",
    },
  ];

  const stats = [
    {
      value: "20 K+",
      description: "Clinicians use InteliDoc AI",
      icon: "/speciality/like-button-1.png",
    },
    {
      value: "650+",
      description: "Health organizations trust InteliDoc AI",
      icon: "/speciality/noun-building-6720793-1.svg",
    },
    {
      value: "2+ hours",
      description: "Saved every day",
      icon: "/speciality/activity-1.png",
    },
  ];

  const faqs = [
    "Is InteliDoc AI secure and compliant with healthcare rules and regulations?",
    "How can I get started with InteliDoc AI?",
    "How do I use InteliDoc AI during patient care?",
    "Can I customize my notes in InteliDoc AI?",
    "Q. Does InteliDoc work with telehealth?",
  ];

  const footerLinks = {
    resources: ["Help Center", "Blog"],
    specialties: [
      "Family Medicine",
      "Internal Medicine",
      "Pschiatry",
      "Mental Health",
      "Padiatrics",
      "Other Specialties",
    ],
    legal: ["Privacy Policy", "Terms of Services", "Terms of Use"],
  };

  const navItems = [
    { label: "Features", href: "/features" },
    { label: "Specialties", href: "/specialities" },
    { label: "Blog", href: "/blogs" },
    { label: "Pricing", href: "/pricing" },
    { label: "For Groups", href: "/forgroup" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <div className="bg-[#f3f3f3] flex flex-row justify-center w-full">
      <div className="bg-[#f3f3f3] overflow-hidden w-full max-w-none relative">
        {/* Header Section */}
        <header className="relative w-full min-h-[500px] md:min-h-[622px]">
          <div className="absolute w-full h-full [background:linear-gradient(137deg,rgba(14,25,99,1)_0%,rgba(46,24,173,1)_47%,rgba(79,52,187,1)_60%,rgba(140,76,193,1)_71%,rgba(200,110,186,1)_82%,rgba(228,174,211,1)_94%,rgba(231,227,237,1)_100%)]" />

          {/* Navigation Bar */}
          <Navigation navItems={navItems} />

          {/* Hero Content */}
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between pl-4 sm:pl-8 md:pl-16 lg:pl-[85px] pr-4 sm:pr-8 md:pr-16 lg:pr-[85px] pt-24 md:pt-32 pb-8 max-w-7xl mx-auto h-full">
            <div className="flex-1 mb-8 lg:mb-0">
              <h1 className="font-playfair font-semibold text-white text-3xl md:text-4xl lg:text-[52px] tracking-[0] leading-tight md:leading-[57.7px] mb-6">
                Your trusted AI scribe
              </h1>

              <p className="font-gantari font-normal text-white text-lg md:text-xl lg:text-2xl leading-normal mb-8 max-w-[459px]">
                Clinical precision without the documentation stress
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="p-[2px] rounded-[6px] bg-gradient-to-r from-white via-blue-200 to-white shadow-[0_0_12px_rgba(255,255,255,0.6)] hover:shadow-[0_0_16px_rgba(255,255,255,0.8)] transition-all duration-300">
                  <Link href="/tryfree" target="_blank">
                    <Button className="w-full max-w-[220px] sm:max-w-[238px] h-12 sm:h-[57px] rounded-[5px] bg-white hover:bg-gray-50 text-[#162694] font-semibold text-base sm:text-lg px-4 transition-all duration-300">
                      <span>Try InteliDoc AI-</span>
                      <span className="text-[#162694] text-sm sm:text-base ml-1 opacity-80">it's free</span>
                    </Button>
                  </Link>
                </div>

                <div className="p-[2px] rounded-[6px] bg-gradient-to-r from-white via-white to-white shadow-[0_0_12px_rgba(255,255,255,0.6)] hover:shadow-[0_0_16px_rgba(255,255,255,0.8)] transition-all duration-300">
                  <Link href="/contact">
                    <Button
                      variant="outline"
                      className="w-full sm:w-[191px] h-12 sm:h-[57px] rounded-[5px] border border-solid border-white bg-transparent hover:bg-white hover:text-[#162694] transition-all duration-300 group"
                    >
                      <span className="text-base sm:text-lg leading-[30.7px] font-gantari font-semibold text-[#162694] text-center whitespace-nowrap transition-colors duration-300">
                        Contact Sales
                      </span>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Hero Video on right */}
            <div className="hidden lg:block flex-1 max-w-[500px] lg:ml-8">
              <video
                className="w-full h-auto rounded-[20px] shadow-lg"
                autoPlay
                loop
                muted
                playsInline
                controls={false}
              >
                <source src="/home-images/hero-video.mp4" type="video/mp4" />
                <source src="/home-images/hero-video.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </header>

        {/* Specialties Section */}
        <section className="mt-16 md:mt-[100px]">
          <div className="relative w-full max-w-7xl pl-4 sm:pl-8 md:pl-16 lg:pl-[85px] pr-4 sm:pr-8 md:pr-16 lg:pr-[85px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <h2 className="font-playfair font-semibold text-[#132180] text-3xl md:text-4xl lg:text-[50px] tracking-[0] leading-tight md:leading-[64px] mb-8 text-center md:text-left">
                Our Specialities
              </h2>

              {/* First Row */}
              <div className="bg-cover bg-center rounded-lg flex items-center justify-center col-span-1 h-[201px] min-h-[150px] relative overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-30"
                  style={{
                    backgroundImage: `url(${specialties[0].image})`
                  }}
                />
                <h3 className="font-playfair font-semibold text-black text-lg md:text-xl lg:text-[26px] tracking-[0] leading-tight text-center px-4 relative z-10">
                  {specialties[0].name}
                </h3>
              </div>

              <div className="bg-cover bg-center rounded-lg flex items-center justify-center col-span-1 h-[201px] min-h-[150px] relative overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-30"
                  style={{
                    backgroundImage: `url(${specialties[1].image})`
                  }}
                />
                <h3 className="font-playfair font-semibold text-black text-lg md:text-xl lg:text-[26px] tracking-[0] leading-tight text-center px-4 relative z-10">
                  {specialties[1].name}
                </h3>
              </div>

              <div className="bg-cover bg-center rounded-lg flex items-center justify-center col-span-1 h-[333px] min-h-[150px] relative overflow-hidden bg-gray-100">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-80"
                  style={{
                    backgroundImage: `url(${specialties[2].image})`
                  }}
                />
                <h3 className="font-playfair font-semibold text-black text-lg md:text-xl lg:text-[26px] tracking-[0] leading-tight text-center px-4 relative z-10">
                  {specialties[2].name}
                </h3>
              </div>

              {/* Second Row */}
              <div className="bg-cover bg-center rounded-lg flex items-center justify-center col-span-1 h-[333px] min-h-[150px] relative overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-30"
                  style={{
                    backgroundImage: `url(${specialties[3].image})`
                  }}
                />
                <h3 className="font-playfair font-semibold text-black text-lg md:text-xl lg:text-[26px] tracking-[0] leading-tight text-center px-4 relative z-10">
                  {specialties[3].name}
                </h3>
              </div>

              {/* Third column divided into two parts */}
              <div className="col-span-1 flex flex-col gap-4">
                {/* Mental Health - Top */}
                <div className="bg-cover bg-center rounded-lg flex items-center justify-center h-[147px] min-h-[150px] relative overflow-hidden bg-gray-100">
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-80"
                    style={{
                      backgroundImage: `url(${specialties[4].image})`
                    }}
                  />
                  <h3 className="font-playfair font-semibold text-black text-lg md:text-xl lg:text-[26px] tracking-[0] leading-tight text-center px-4 relative z-10">
                    {specialties[4].name}
                  </h3>
                </div>

                {/* Other Specialties - Bottom */}
                <div className="bg-cover bg-center rounded-lg flex items-center justify-center h-[152px] min-h-[150px] relative overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-30"
                    style={{
                      backgroundImage: `url(${specialties[5].image})`
                    }}
                  />
                  <h3 className="font-playfair font-semibold text-black text-lg md:text-xl lg:text-[26px] tracking-[0] leading-tight text-center px-4 relative z-10">
                    {specialties[5].name}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Scribe Section */}
        <section className="relative w-full mt-16 min-h-[600px] md:min-h-[754px]">
          <div className="w-full min-h-[400px] md:min-h-[505px] [background:radial-gradient(50%_50%_at_4%_0%,rgba(1,18,39,1)_5%,rgba(14,25,99,1)_45%,rgba(15,38,127,1)_78%,rgba(1,18,39,1)_99%)] py-12 md:py-16">
            <div className="relative w-full max-w-7xl pl-4 sm:pl-8 md:pl-16 lg:pl-[85px] pr-4 sm:pr-8 md:pr-16 lg:pr-[85px] mx-auto">
              <div className="text-left mb-8">
                <h2 className="font-playfair font-semibold text-white text-3xl md:text-4xl lg:text-5xl tracking-[0] leading-normal mb-2">
                  Your trusted AI scribe
                </h2>

                <p className="font-gantari font-normal text-white text-lg md:text-xl lg:text-2xl tracking-[0] leading-normal mb-[20px]">
                  Clinical precision without the documentation stress
                </p>

                <div className="relative">
                  {/* Decorative Elements - Background */}
                  <div className="hidden lg:block absolute inset-0">
                    <div className="absolute w-[50px] h-[50px] bg-[#f7d8e5] rounded-[25px] top-0 right-0" />
                    <div className="absolute w-[26px] h-[26px] bg-[#fdecf3] rounded-[13px] top-8 right-16" />

                    <img
                      className="absolute top-0 right-0 w-full max-w-[373px] h-auto"
                      alt="Vector"
                      src="/speciality/vector-1.svg"
                      style={{ right: '-200px' }}
                    />

                    <img
                      className="absolute top-0 right-0 w-full max-w-[341px] h-auto"
                      alt="Vector"
                      src="/speciality/vector-2.svg"
                      style={{ right: '-200px' }}
                    />
                  </div>

                  {/* Feature Cards - Foreground */}
                  <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {features.map((feature, index) => (
                      <Card
                        key={index}
                        className="w-full bg-[#fff9f9] rounded-[10px] p-5 min-h-[200px]"
                      >
                        <CardContent className="p-0">
                          <img
                            className="w-12 h-12 mb-6"
                            alt={feature.title}
                            src={feature.icon}
                          />
                          <h3 className="font-playfair font-normal text-black text-xl md:text-2xl tracking-[0] leading-normal mb-4">
                            {feature.title}
                          </h3>
                          <p className="font-gantari font-medium text-[#7b7979] text-base md:text-lg tracking-[0] leading-normal">
                            {feature.description}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="w-full py-8 md:py-16">
            <div className="relative w-full max-w-7xl pl-4 sm:pl-8 md:pl-16 lg:pl-[85px] pr-4 sm:pr-8 md:pr-16 lg:pr-[85px] mx-auto">
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
                {stats.map((stat, index) => (
                  <React.Fragment key={index}>
                    <div className="flex items-center gap-6 text-center md:text-left">
                      <div className="w-[70px] h-[70px] rounded-[35px] flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-[#13217f] via-[#0c1235] to-[#4b527c]">
                        <img
                          className="w-10 h-10 object-cover"
                          alt={stat.description}
                          src={stat.icon}
                        />
                      </div>
                      <div>
                        <h3 className="font-gantari font-normal text-black text-lg md:text-2xl lg:text-2xl tracking-[0] leading-tight">
                          {stat.value}
                        </h3>
                        <p className="font-gantari font-small text-black text-lg md:text-xl tracking-[0] leading-tight">
                          {stat.description}
                        </p>
                      </div>
                    </div>
                    {index < stats.length - 1 && (
                      <div className="w-[2px] h-[163px] bg-gray-400 mx-4"></div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Security Section */}
        <section className="w-full min-h-[400px] md:min-h-[481px] bg-[#ebeeff] flex flex-col items-center justify-center py-12 md:py-16">
          <div className="relative w-full max-w-7xl pl-4 sm:pl-8 md:pl-16 lg:pl-[85px] pr-4 sm:pr-8 md:pr-16 lg:pr-[85px] mx-auto">
            <h2 className="font-playfair font-semibold text-[#162694] text-2xl md:text-3xl lg:text-[40px] text-center tracking-[0] leading-tight mb-8">
              Your data is secure with InteliDoc AI
            </h2>

            <p className="font-gantari font-normal text-black text-lg md:text-2xl lg:text-3xl text-center tracking-[0] leading-relaxed mb-12 max-w-4xl mx-auto">
              We protect your information with top-tier security. InteliDoc AI is
              fully HIPAA-compliant and certified for SOC 2 and HITECH, ensuring your
              data stays safe and private — always.
            </p>

            <div className="flex justify-center">
              <Link href="/tryfree" target="_blank">
                <Button
                  variant="outline"
                  className="w-full max-w-[180px] h-[51px] bg-white border-[0.5px] border-solid border-[#162694] rounded-[5px] hover:bg-gradient-to-r hover:from-[#13217f] hover:via-[#0c1235] hover:to-[#4b527c] transition-all duration-300 group"
                >
                  <span className="font-gantari font-semibold text-[#162694] text-lg md:text-xl text-center tracking-[0] leading-[25.6px] group-hover:text-white transition-colors duration-300">
                    Try for free
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full mt-16">
          <div className="relative w-full max-w-7xl pl-4 sm:pl-8 md:pl-16 lg:pl-[85px] pr-4 sm:pr-8 md:pr-16 lg:pr-[85px] mx-auto py-12 md:py-16 rounded-[20px] [background:linear-gradient(137deg,rgba(14,25,99,1)_0%,rgba(46,24,173,1)_47%,rgba(79,52,187,1)_60%)]">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-1/3">
                <h2 className="font-playfair font-normal text-white text-2xl md:text-3xl tracking-[0] leading-relaxed">
                  Frequently asked questions by FM clinicians
                </h2>
              </div>

              <div className="lg:w-2/3">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="mb-4 border-none"
                    >
                      <div className="bg-white rounded-[10px] p-4 text-left font-gantari font-medium text-black text-sm border-none shadow-none">
                        <AccordionTrigger
                          className="w-full p-0 border-none shadow-none hover:no-underline [&>svg]:translate-y-2"
                          style={{ border: 'none', outline: 'none' }}
                        >
                          <div className="flex items-center w-full">
                            <img
                              className="w-[30px] h-[37px] mr-4 flex-shrink-0"
                              alt="Question icon"
                              src="/speciality/noun-question-7004840-3.svg"
                            />
                            <span className="text-left flex-1">{faq}</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="pt-4 border-t border-gray-200 mt-4">
                          <p className="text-sm text-gray-700 ml-[46px]">
                            Additional information about this question would appear
                            here.
                          </p>
                        </AccordionContent>
                      </div>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="w-full mt-16 flex flex-col items-center justify-center py-12 md:py-16">
          <div className="relative w-full max-w-7xl pl-4 sm:pl-8 md:pl-16 lg:pl-[85px] pr-4 sm:pr-8 md:pr-16 lg:pr-[85px] mx-auto">
            <h2 className="font-playfair font-semibold text-[#162694] text-3xl md:text-4xl lg:text-5xl text-center tracking-[0] leading-tight mb-12">
              Set yourself free for
              <br /> better things.
            </h2>

            <div className="flex justify-center">
              <Link href="/tryfree" target="_blank">
                <Button className="w-full max-w-[220px] sm:max-w-[238px] h-12 sm:h-[57px] rounded-[5px] bg-gradient-to-br from-[rgba(46,52,90,1)] via-[rgba(13,23,90,1)] to-[rgba(19,33,128,1)] text-white font-semibold text-base sm:text-lg px-4">
                  <span>Try InteliDoc AI-</span>
                  <span className="text-[#a9a7a7] text-sm sm:text-base ml-1">it's free</span>
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Security & Legal Section */}
        <section className="w-full mt-16">

          {/* Footer */}
          <footer className="w-full bg-white py-12">
            <div className="relative w-full max-w-7xl pl-4 sm:pl-8 md:pl-16 lg:pl-[85px] pr-4 sm:pr-8 md:pr-16 lg:pr-[85px] mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center md:text-left">
                  <h3 className="font-gantari font-medium text-black text-2xl md:text-3xl tracking-[0] leading-[38.4px] mb-8">
                    InteliDoc
                  </h3>
                  <img
                    className="w-[217px] h-[67px] object-cover mx-auto md:mx-0"
                    alt="InteliDoc Logo"
                    src="/speciality/image-6.png"
                  />
                </div>

                <div className="text-center md:text-left">
                  <h3 className="font-gantari font-medium text-black text-xl tracking-[0] leading-[25.6px] mb-6">
                    Resources
                  </h3>
                  <ul className="space-y-4">
                    {footerLinks.resources.map((link, index) => (
                      <li
                        key={index}
                        className="font-gantari font-normal text-black text-[17px] tracking-[0] leading-[21.8px]"
                      >
                        {link}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-center md:text-left">
                  <h3 className="font-gantari font-medium text-black text-xl tracking-[0] leading-[25.6px] mb-6">
                    Specialties
                  </h3>
                  <ul className="space-y-4">
                    {footerLinks.specialties.map((link, index) => (
                      <li
                        key={index}
                        className="font-gantari font-normal text-black text-[17px] tracking-[0] leading-[21.8px]"
                      >
                        {link}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-center md:text-left">
                  <h3 className="font-gantari font-medium text-black text-xl tracking-[0] leading-[25.6px] mb-6">
                    Legal
                  </h3>
                  <ul className="space-y-4">
                    {footerLinks.legal.map((link, index) => (
                      <li
                        key={index}
                        className="font-gantari font-normal text-black text-[17px] tracking-[0] leading-[21.8px]"
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
      </div>
    </div>
  );
};

