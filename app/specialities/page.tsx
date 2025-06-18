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

  return (
    <div className="bg-[#f3f3f3] flex flex-row justify-center w-full">
      <div className="bg-[#f3f3f3] overflow-hidden w-full  relative">
        {/* Header Section */}
        <header className="relative w-full min-h-[500px] md:min-h-[622px]">
          <div className="absolute w-full h-full [background:linear-gradient(137deg,rgba(14,25,99,1)_0%,rgba(46,24,173,1)_47%,rgba(79,52,187,1)_60%,rgba(140,76,193,1)_71%,rgba(200,110,186,1)_82%,rgba(228,174,211,1)_94%,rgba(231,227,237,1)_100%)]" />

          {/* Navigation Bar */}
          <div className="absolute w-full h-auto md:h-[57px] top-1.5 left-0 backdrop-blur-[21px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(21px)_brightness(100%)] [background:linear-gradient(180deg,rgba(255,255,255,0.6)_0%,rgba(255,255,255,0)_100%)] p-4 md:p-0">
            <div className="flex flex-col md:flex-row items-center justify-between max-w-full mx-auto px-4 md:px-20">
              <div className="flex items-center justify-between w-full md:w-auto mb-4 md:mb-0">
                <div className="font-bold text-white text-lg md:text-xl text-center leading-[25.6px] whitespace-nowrap [font-family:'Geist',Helvetica]">
                  InteliDoc AI
                </div>
                <Button className="md:hidden bg-white rounded-[5px] px-3 py-1">
                  <span className="font-semibold text-[#162694] text-sm text-center leading-[19.2px] whitespace-nowrap [font-family:'Gantari',Helvetica]">
                    Try for free
                  </span>
                </Button>
              </div>

              <NavigationMenu className="hidden md:block max-w-full mx-auto">
                <NavigationMenuList className="flex items-center gap-6">
                  <NavigationMenuItem>
                    <NavigationMenuLink className="font-medium text-white text-[15px] text-center leading-[19.2px] whitespace-nowrap [font-family:'Gantari',Helvetica]">
                      Features
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink className="font-medium text-white text-[15px] text-center leading-[19.2px] whitespace-nowrap [font-family:'Gantari',Helvetica]">
                      How it Works
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink className="font-medium text-white text-[15px] text-center leading-[19.2px] whitespace-nowrap [font-family:'Gantari',Helvetica]">
                      Specialty
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink className="font-medium text-white text-[15px] text-center leading-[19.2px] whitespace-nowrap [font-family:'Gantari',Helvetica]">
                      Pricing
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink className="font-medium text-white text-[15px] text-center leading-[19.2px] whitespace-nowrap [font-family:'Gantari',Helvetica]">
                      Blogs
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink className="font-medium text-white text-[15px] text-center leading-[19.2px] whitespace-nowrap [font-family:'Gantari',Helvetica]">
                      For Groups
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink className="font-medium text-white text-[15px] text-center leading-[19.2px] whitespace-nowrap [font-family:'Gantari',Helvetica]">
                      Contact Us
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <Button className="hidden md:block bg-white rounded-[5px] px-3 h-7">
                <span className="font-semibold text-[#162694] text-[15px] text-center leading-[19.2px] whitespace-nowrap [font-family:'Gantari',Helvetica]">
                  Try for free
                </span>
              </Button>
            </div>

            <div className="hidden md:block absolute w-[84px] h-[5px] top-[63px] left-[548px] bg-[#f72aa4]" />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-4 md:px-[90px] pt-24 md:pt-32 pb-8">
            <div className="flex-1 mb-8 lg:mb-0">
              <h1 className="[font-family:'Playfair_Display',Helvetica] font-semibold text-white text-3xl md:text-4xl lg:text-[52px] tracking-[0] leading-tight md:leading-[57.7px] mb-6">
                Smarter Notes for <br />
                Every Type of Care
              </h1>

              <p className="[font-family:'Gantari',Helvetica] font-normal text-white text-lg md:text-xl lg:text-2xl leading-normal mb-8 max-w-[459px]">
                InteliDoc AI scribe listens, transcribes and writes notes for you.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="w-full sm:w-[218px] h-[57px] bg-white rounded-[5px] border-none p-0 relative">
                  <div className="absolute w-[202px] h-[45px] top-[7px] left-[7px] bg-[#ffffff99] blur-[22.45px]" />
                  <div className="relative z-10 [font-family:'Geist',Helvetica] font-semibold text-[#162694] text-base text-center leading-[20.5px]">
                    Try InteliDoc AI-
                    <span className="text-[#8c8c8c] text-sm leading-[17.9px]">
                      {" "}
                      it&apos;s free
                    </span>
                  </div>
                </Button>

                <Button
                  variant="outline"
                  className="w-full sm:w-[191px] h-[57px] rounded-[5px] border border-solid border-[#fffcfc] bg-transparent"
                >
                  <span className="text-lg md:text-2xl leading-[30.7px] [font-family:'Gantari',Helvetica] font-medium text-white text-center whitespace-nowrap">
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
                    <h3 className="[font-family:'Geist',Helvetica] font-bold text-[#132180] text-lg md:text-[19px] leading-[24.3px]">
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
          <h2 className="[font-family:'Playfair_Display',Helvetica] font-semibold text-[#132180] text-3xl md:text-4xl lg:text-[50px] tracking-[0] leading-tight md:leading-[64px] mb-8 text-center md:text-left">
            Our Specialties
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {specialties.map((specialty, index) => (
              <div
                key={index}
                className={`bg-cover bg-center rounded-lg flex items-center justify-center ${specialty.className} min-h-[150px]`}
                style={{ backgroundImage: `url(${specialty.image})` }}
              >
                <h3 className="[font-family:'Playfair_Display',Helvetica] font-semibold text-black text-lg md:text-xl lg:text-[26px] tracking-[0] leading-tight text-center px-4">
                  {specialty.name}
                </h3>
              </div>
            ))}
          </div>
        </section>

        {/* AI Scribe Section */}
        <section className="relative w-full mt-16 min-h-[600px] md:min-h-[754px]">
          <div className="w-full min-h-[400px] md:min-h-[505px] [background:radial-gradient(50%_50%_at_4%_0%,rgba(1,18,39,1)_5%,rgba(14,25,99,1)_45%,rgba(15,38,127,1)_78%,rgba(1,18,39,1)_99%)] px-4 md:px-[90px] py-12 md:py-16">
            <div className="text-center mb-8">
              <h2 className="[font-family:'Playfair_Display',Helvetica] font-semibold text-white text-3xl md:text-4xl lg:text-5xl tracking-[0] leading-normal mb-4">
                Your trusted AI scribe
              </h2>

              <p className="[font-family:'Gantari',Helvetica] font-normal text-white text-lg md:text-xl lg:text-2xl tracking-[0] leading-normal">
                Clinical precision without the documentation stress
              </p>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Feature Cards */}
              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 max-w-4xl">
                {features.map((feature, index) => (
                  <Card
                    key={index}
                    className="w-full bg-[#fff9f9] rounded-[10px] p-6"
                  >
                    <CardContent className="p-0">
                      <img
                        className="w-11 h-[52px] mb-4"
                        alt={feature.title}
                        src={feature.icon}
                      />
                      <h3 className="[font-family:'Playfair',Helvetica] font-normal text-black text-lg md:text-xl tracking-[0] leading-normal mb-2">
                        {feature.title}
                      </h3>
                      <p className="[font-family:'Gantari',Helvetica] font-medium text-[#7b7979] text-sm md:text-[13px] tracking-[0] leading-normal">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Decorative Elements */}
              <div className="hidden lg:block flex-1 relative">
                <div className="absolute w-[50px] h-[50px] bg-[#f7d8e5] rounded-[25px] top-0 right-0" />
                <div className="absolute w-[26px] h-[26px] bg-[#fdecf3] rounded-[13px] top-8 right-16" />
                
                <img
                  className="w-full max-w-[373px] h-auto"
                  alt="Vector"
                  src="/speciality/vector-1.svg"
                />
                
                <img
                  className="absolute top-8 left-8 w-full max-w-[341px] h-auto"
                  alt="Vector"
                  src="/speciality/vector-2.svg"
                />
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="w-full px-4 md:px-[90px] py-8 md:py-16">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
              {stats.map((stat, index) => (
                <React.Fragment key={index}>
                  <div className="flex items-center gap-6 text-center md:text-left">
                    <div className="w-[70px] h-[70px] rounded-[35px] flex items-center justify-center flex-shrink-0">
                      <img
                        className="w-10 h-10 object-cover"
                        alt={stat.description}
                        src={stat.icon}
                      />
                    </div>
                    <div>
                      <h3 className="[font-family:'Gantari',Helvetica] font-medium text-black text-2xl md:text-3xl lg:text-4xl tracking-[0] leading-tight">
                        {stat.value}
                      </h3>
                      <p className="[font-family:'Gantari',Helvetica] font-normal text-black text-lg md:text-xl tracking-[0] leading-tight">
                        {stat.description}
                      </p>
                    </div>
                  </div>
                  {index < stats.length - 1 && (
                    <Separator
                      orientation="vertical"
                      className="hidden md:block h-[163px]"
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>

        {/* Security Section */}
        <section className="w-full min-h-[400px] md:min-h-[481px] bg-[#ebeeff] flex flex-col items-center justify-center px-4 py-12 md:py-16">
          <h2 className="[font-family:'Playfair_Display',Helvetica] font-semibold text-[#162694] text-2xl md:text-3xl lg:text-[40px] text-center tracking-[0] leading-tight mb-8">
            Your data is secure with InteliDoc AI
          </h2>

          <p className="[font-family:'Gantari',Helvetica] font-normal text-black text-lg md:text-2xl lg:text-3xl text-center tracking-[0] leading-relaxed mb-12 max-w-4xl">
            We protect your information with top-tier security. InteliDoc AI is
            fully HIPAA-compliant and certified for SOC 2 and HITECH, ensuring your
            data stays safe and private — always.
          </p>

          <Button
            variant="outline"
            className="w-full max-w-[180px] h-[51px] bg-white border-[0.5px] border-solid border-[#162694] rounded-[5px]"
          >
            <span className="[-webkit-text-stroke:1px_#ffffff] [font-family:'Geist',Helvetica] font-semibold text-[#162694] text-lg md:text-xl text-center tracking-[0] leading-[25.6px]">
              Learn More
            </span>
          </Button>
        </section>

        {/* FAQ Section */}
        <section className="w-full mt-16 px-4 md:px-10 py-12 md:py-16 rounded-[20px] [background:linear-gradient(137deg,rgba(14,25,99,1)_0%,rgba(46,24,173,1)_47%,rgba(79,52,187,1)_60%)]">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/3">
              <h2 className="[font-family:'Gantari',Helvetica] font-normal text-white text-2xl md:text-3xl tracking-[0] leading-relaxed">
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
                    <AccordionTrigger className="bg-white rounded-[10px] p-4 text-left [font-family:'Gantari',Helvetica] font-medium text-black text-sm">
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
          <h2 className="[font-family:'Playfair_Display',Helvetica] font-semibold text-[#162694] text-3xl md:text-4xl lg:text-5xl text-center tracking-[0] leading-tight mb-12">
            Set yourself free for
            <br /> better things.
          </h2>

          <Button className="w-full max-w-[218px] h-[57px] [background:linear-gradient(131deg,rgba(46,52,90,1)_0%,rgba(12,17,46,1)_28%,rgba(13,23,90,1)_56%,rgba(16,29,113,1)_81%,rgba(19,33,128,1)_100%)] rounded-[5px] border-none">
            <span className="[font-family:'Geist',Helvetica] font-semibold text-white text-base text-center leading-[20.5px]">
              Try InteliDoc AI-
              <span className="text-[#a9a7a7] text-sm leading-[17.9px]">
                {" "}
                it&apos;s free
              </span>
            </span>
          </Button>
        </section>

        {/* Security & Legal Section */}
        <section className="w-full mt-16">
          <div className="px-4 md:px-[87px]">
            <h2 className="[font-family:'Playfair_Display',Helvetica] font-semibold text-[#162694] text-2xl md:text-3xl tracking-[0] leading-normal">
              Security & Legal
            </h2>

            <p className="[font-family:'Gantari',Helvetica] font-normal text-[#626262] text-lg md:text-xl tracking-[0] leading-normal mt-4 max-w-[1004px]">
              Our technology is HIPAA-compliant, uses industry best practices,
              and doesn&#39;t store patient recordings.
            </p>
          </div>

          <Separator className="my-8" />

          {/* Footer */}
          <footer className="w-full bg-white py-12">
            <div className="max-w-[1280px] mx-auto px-4 md:px-[78px]">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center md:text-left">
                  <h3 className="[font-family:'Geist',Helvetica] font-bold text-black text-2xl md:text-3xl tracking-[0] leading-[38.4px] mb-8">
                    InteliDoc
                  </h3>
                  <img
                    className="w-[217px] h-[67px] object-cover mx-auto md:mx-0"
                    alt="InteliDoc Logo"
                    src="/speciality/image-6.png"
                  />
                </div>

                <div className="text-center md:text-left">
                  <h3 className="[font-family:'Geist',Helvetica] font-semibold text-black text-xl tracking-[0] leading-[25.6px] mb-6">
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
                  <h3 className="[font-family:'Geist',Helvetica] font-semibold text-black text-xl tracking-[0] leading-[25.6px] mb-6">
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
                  <h3 className="[font-family:'Geist',Helvetica] font-semibold text-black text-xl tracking-[0] leading-[25.6px] mb-6">
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

