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
        "Freed Learns your style and format with every edit. Get customized notes in seconds.",
      icon: "/speciality/noun-note-7815852-1.svg",
    },
    {
      title: "Works in every setting",
      description:
        "Accurately capture AI medical notes for any specialty visit and in multiple languages.",
      icon: "/speciality/group.png",
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
    { label: "For Groups", href: "/groups" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <div className="bg-[#f3f3f3] flex flex-row justify-center w-full">
      <div className="bg-[#f3f3f3] overflow-hidden w-full  relative">
        {/* Header Section */}
        <header className="relative w-full min-h-[500px] md:min-h-[622px]">
          <div className="absolute w-full h-full [background:linear-gradient(137deg,rgba(14,25,99,1)_0%,rgba(46,24,173,1)_47%,rgba(79,52,187,1)_60%,rgba(140,76,193,1)_71%,rgba(200,110,186,1)_82%,rgba(228,174,211,1)_94%,rgba(231,227,237,1)_100%)]" />

          {/* Navigation Bar */}
          <Navigation navItems={navItems} />

          {/* Hero Content */}
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-4 md:px-[90px] pt-24 md:pt-32 pb-8">
            <div className="flex-1 mb-8 lg:mb-0">
              <h1 className="font-playfair font-semibold text-white text-3xl md:text-4xl lg:text-[52px] tracking-[0] leading-tight md:leading-[57.7px] mb-6">
                Your trusted AI scribe
              </h1>

              <p className="font-gantari font-normal text-white text-lg md:text-xl lg:text-2xl leading-normal mb-8 max-w-[459px]">
                Clinical precision without the documentation stress
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="w-full max-w-[220px] sm:max-w-[238px] h-12 sm:h-[57px] rounded-[5px] bg-gradient-to-br from-[rgba(46,52,90,1)] via-[rgba(13,23,90,1)] to-[rgba(19,33,128,1)] text-white font-semibold text-base sm:text-lg px-4">
                  <span>Try InteliDoc AI-</span>
                  <span className="text-[#a9a7a7] text-sm sm:text-base ml-1">it's free</span>
                </Button>

                <Button
                  variant="outline"
                  className="w-full sm:w-[191px] h-12 sm:h-[57px] rounded-[5px] border border-solid border-white bg-transparent hover:bg-white hover:text-[#162694] transition-all duration-300"
                >
                  <span className="text-base sm:text-lg leading-[30.7px] font-gantari font-medium text-white hover:text-[#162694] text-center whitespace-nowrap transition-colors duration-300">
                    Contact Sales
                  </span>
                </Button>
              </div>
            </div>

            {/* Demo Card */}
            <div className="flex-1 max-w-[574px] w-full lg:ml-8">
              <Card className="w-full bg-white rounded-[20px] p-6 relative min-h-[300px] md:min-h-[356px]">
                <CardContent className="p-0">
                  <div className="text-center mb-4">
                    <h3 className="font-gantari font-medium text-[#132180] text-lg md:text-[19px] leading-[24.3px]">
                      InteliDoc AI
                    </h3>
                  </div>

                  <Separator className="mb-6" />

                  <div className="bg-gradient-to-br from-[#c4c2dd] to-[#ebd7e5] rounded-[10px] p-4 mb-4">
                    <div className="bg-white rounded-[10px] p-4 mb-4">
                      <div className="flex justify-between items-center mb-4">
                        <span className="[font-family:'Inter',Helvetica] font-medium text-black text-xs">
                          Subjective
                        </span>
                        <span className="[font-family:'Inter',Helvetica] font-normal text-black text-xs">
                          Personalized
                        </span>
                      </div>

                      <div className="space-y-2">
                        <div className="w-full h-[7px] bg-[#d9d9d9] rounded"></div>
                        <div className="w-5/6 h-[7px] bg-[#d9d9d9] rounded"></div>
                        <div className="w-4/5 h-[7px] bg-[#d9d9d9] rounded"></div>
                        <div className="w-3/4 h-[7px] bg-[#d9d9d9] rounded"></div>
                        <div className="w-1/2 h-[7px] bg-[#d9d9d9] rounded"></div>
                        <div className="w-full h-[7px] bg-[#d9d9d9] rounded"></div>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <Button className="bg-[#162694] rounded-[5px] px-3 py-1 flex items-center gap-2">
                        <img
                          className="w-3.5 h-[19px]"
                          alt="Copy"
                          src="/speciality/noun-copy-7891669-1.svg"
                        />
                        <span className="[font-family:'Geist',Helvetica] font-normal text-white text-[13px] leading-[16.6px]">
                          Copy
                        </span>
                      </Button>
                    </div>
                  </div>

                  <div className="text-left">
                    <span className="[font-family:'Inter',Helvetica] font-normal text-black text-sm">
                      Patient
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </header>

        {/* Specialties Section */}
        <section className="mt-16 md:mt-[100px] px-4 md:px-[90px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <h2 className="font-playfair font-semibold text-[#132180] text-3xl md:text-4xl lg:text-[50px] tracking-[0] leading-tight md:leading-[64px] mb-8 text-center md:text-left">
              Our Specifities
            </h2>

            {/* First Row */}
            <div className="bg-cover bg-center rounded-lg flex items-center justify-center col-span-1 h-[201px] min-h-[150px] relative overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${specialties[0].image})`,
                  filter: 'blur(1px)'
                }}
              />
              <h3 className="[font-family:'Playfair_Display',Helvetica] font-semibold text-black text-lg md:text-xl lg:text-[26px] tracking-[0] leading-tight text-center px-4 relative z-10">
                {specialties[0].name}
              </h3>
            </div>

            <div className="bg-cover bg-center rounded-lg flex items-center justify-center col-span-1 h-[201px] min-h-[150px] relative overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${specialties[1].image})`,
                  filter: 'blur(1px)'
                }}
              />
              <h3 className="[font-family:'Playfair_Display',Helvetica] font-semibold text-black text-lg md:text-xl lg:text-[26px] tracking-[0] leading-tight text-center px-4 relative z-10">
                {specialties[1].name}
              </h3>
            </div>

            <div className="bg-cover bg-center rounded-lg flex items-center justify-center col-span-1 h-[333px] min-h-[150px] relative overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${specialties[2].image})`,
                  filter: 'blur(1px)'
                }}
              />
              <h3 className="[font-family:'Playfair_Display',Helvetica] font-semibold text-black text-lg md:text-xl lg:text-[26px] tracking-[0] leading-tight text-center px-4 relative z-10">
                {specialties[2].name}
              </h3>
            </div>

            {/* Second Row */}
            <div className="bg-cover bg-center rounded-lg flex items-center justify-center col-span-1 h-[333px] min-h-[150px] relative overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${specialties[3].image})`,
                  filter: 'blur(1px)'
                }}
              />
              <h3 className="[font-family:'Playfair_Display',Helvetica] font-semibold text-black text-lg md:text-xl lg:text-[26px] tracking-[0] leading-tight text-center px-4 relative z-10">
                {specialties[3].name}
              </h3>
            </div>

            {/* Third column divided into two parts */}
            <div className="col-span-1 flex flex-col gap-4">
              {/* Mental Health - Top */}
              <div className="bg-cover bg-center rounded-lg flex items-center justify-center h-[147px] min-h-[150px] relative overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${specialties[4].image})`,
                    filter: 'blur(1px)'
                  }}
                />
                <h3 className="[font-family:'Playfair_Display',Helvetica] font-semibold text-black text-lg md:text-xl lg:text-[26px] tracking-[0] leading-tight text-center px-4 relative z-10">
                  {specialties[4].name}
                </h3>
              </div>

              {/* Other Specialties - Bottom */}
              <div className="bg-cover bg-center rounded-lg flex items-center justify-center h-[152px] min-h-[150px] relative overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${specialties[5].image})`,
                    filter: 'blur(1px)'
                  }}
                />
                <h3 className="[font-family:'Playfair_Display',Helvetica] font-semibold text-black text-lg md:text-xl lg:text-[26px] tracking-[0] leading-tight text-center px-4 relative z-10">
                  {specialties[5].name}
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* AI Scribe Section */}
        <section className="relative w-full mt-16 min-h-[600px] md:min-h-[754px]">
          <div className="w-full min-h-[400px] md:min-h-[505px] [background:radial-gradient(50%_50%_at_4%_0%,rgba(1,18,39,1)_5%,rgba(14,25,99,1)_45%,rgba(15,38,127,1)_78%,rgba(1,18,39,1)_99%)] px-4 md:px-[90px] py-12 md:py-16">
            <div className="text-center mb-8">

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
                  />

                  <img
                    className="absolute top-0 right-0 w-full max-w-[341px] h-auto"
                    alt="Vector"
                    src="/speciality/vector-2.svg"
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
                          className="w-16 h-16 mb-6"
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

          {/* Stats Section */}
          <div className="w-full px-4 md:px-[90px] py-8 md:py-16">
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
                      <h3 className="font-gantari font-medium text-black text-2xl md:text-3xl lg:text-4xl tracking-[0] leading-tight">
                        {stat.value}
                      </h3>
                      <p className="font-gantari font-normal text-black text-lg md:text-xl tracking-[0] leading-tight">
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
        </section>

        {/* Security Section */}
        <section className="w-full min-h-[400px] md:min-h-[481px] bg-[#ebeeff] flex flex-col items-center justify-center px-4 py-12 md:py-16">
          <h2 className="font-playfair font-semibold text-[#162694] text-2xl md:text-3xl lg:text-[40px] text-center tracking-[0] leading-tight mb-8">
            Your data is secure with InteliDoc AI
          </h2>

          <p className="font-gantari font-normal text-black text-lg md:text-2xl lg:text-3xl text-center tracking-[0] leading-relaxed mb-12 max-w-4xl">
            We protect your information with top-tier security. InteliDoc AI is
            fully HIPAA-compliant and certified for SOC 2 and HITECH, ensuring your
            data stays safe and private — always.
          </p>

          <Button
            variant="outline"
            className="w-full max-w-[180px] h-[51px] bg-white border-[0.5px] border-solid border-[#162694] rounded-[5px] hover:bg-gradient-to-r hover:from-[#13217f] hover:via-[#0c1235] hover:to-[#4b527c] transition-all duration-300"
          >
            <span className="font-gantari font-semibold text-[#162694] text-lg md:text-xl text-center tracking-[0] leading-[25.6px] hover:text-white transition-colors duration-300">
              Learn More
            </span>
          </Button>
        </section>

        {/* FAQ Section */}
        <section className="w-full mt-16 px-4 md:px-10 py-12 md:py-16 rounded-[20px] [background:linear-gradient(137deg,rgba(14,25,99,1)_0%,rgba(46,24,173,1)_47%,rgba(79,52,187,1)_60%)]">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/3">
              <h2 className="font-gantari font-normal text-white text-2xl md:text-3xl tracking-[0] leading-relaxed">
                Frequently asked questions by FM clinicians
              </h2>
            </div>

            <div className="lg:w-2/3">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="mb-4"
                  >
                    <AccordionTrigger className="bg-white rounded-[10px] p-4 text-left font-gantari font-medium text-black text-sm">
                      <div className="flex items-center">
                        <img
                          className="w-[30px] h-[37px] mr-4 flex-shrink-0"
                          alt="Question icon"
                          src="/speciality/noun-question-7004840-3.svg"
                        />
                        <span className="text-left">{faq}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="bg-white rounded-b-[10px] px-4 py-2 -mt-1">
                      <p className="text-sm text-gray-700 ml-[46px]">
                        Additional information about this question would appear
                        here.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="w-full mt-16 flex flex-col items-center justify-center py-12 md:py-16 px-4">
          <h2 className="font-playfair font-semibold text-[#162694] text-3xl md:text-4xl lg:text-5xl text-center tracking-[0] leading-tight mb-12">
            Set yourself free for
            <br /> better things.
          </h2>

          <Button className="w-full max-w-[220px] sm:max-w-[238px] h-12 sm:h-[57px] rounded-[5px] bg-gradient-to-br from-[rgba(46,52,90,1)] via-[rgba(13,23,90,1)] to-[rgba(19,33,128,1)] text-white font-semibold text-base sm:text-lg px-4">
            <span>Try InteliDoc AI-</span>
            <span className="text-[#a9a7a7] text-sm sm:text-base ml-1">it's free</span>
          </Button>
        </section>

        {/* Security & Legal Section */}
        <section className="w-full mt-16">

          {/* Footer */}
          <footer className="w-full bg-white py-12">
            <div className="max-w-[1280px] mx-auto px-4 md:px-[78px]">
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
                        className="[font-family:'Geist',Helvetica] font-normal text-black text-[17px] tracking-[0] leading-[21.8px]"
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
                        className="[font-family:'Geist',Helvetica] font-normal text-black text-[17px] tracking-[0] leading-[21.8px]"
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
                        className="[font-family:'Geist',Helvetica] font-normal text-black text-[17px] tracking-[0] leading-[21.8px]"
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

