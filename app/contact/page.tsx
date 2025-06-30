'use client'

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Navigation } from "../features/__components/navigation";
import { Footer } from "../components/footer";
import Link from 'next/link';
import { Star } from "lucide-react";

export default function Contact() {
  // Navigation menu items data
  const navItems = [
    { label: "Features", href: "/features" },
    { label: "Specialties", href: "/specialities" },
    { label: "Blog", href: "/blogs" },
    { label: "Pricing", href: "/pricing" },
    { label: "For Groups", href: "/forgroup" },
    { label: "Contact Us", href: "/contact" },
  ];

  // Footer links data
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
    <div className="bg-[#f3f3f3] min-h-screen w-full">
      <div className="bg-[#f3f3f3] overflow-hidden w-full mx-auto relative">
        {/* Background elements */}
        <div className="relative w-full">
          {/* Decorative vectors - hidden on mobile for cleaner look */}
          <img
            className="absolute w-[200px] h-[200px] md:w-[341px] md:h-[330px] top-[150px] md:top-[205px] left-[-100px] md:left-[-211px] opacity-50 md:opacity-100 z-0"
            alt="Vector"
            src="/contact/vector-5.svg"
          />

          <div className="absolute w-full h-[800px] md:h-[1219px] top-[-60px] md:top-[-119px] left-0 z-0">
            <div className="relative h-full">
              <div className="absolute w-full h-full top-0 left-0 backdrop-blur-[21px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(21px)_brightness(100%)] [background:linear-gradient(225deg,rgba(255,255,255,0.6)_0%,rgba(255,255,255,0.2)_100%)]" />

              <div className="absolute w-[300px] h-[200px] md:w-[588px] md:h-[415px] top-3.5 left-[-100px] md:left-[-185px] rounded-[294.09px/207.38px] blur-[30px] md:blur-[50px] [background:linear-gradient(135deg,rgba(22,38,148,0.4)_0%,rgba(255,155,188,0.4)_100%)]" />

              <div className="absolute w-[320px] h-[200px] md:w-[638px] md:h-[415px] top-16 md:top-28 right-[-50px] md:right-[-100px] rounded-[318.77px/207.38px] blur-[30px] md:blur-[50px] [background:linear-gradient(135deg,rgba(22,38,148,0.4)_0%,rgba(255,155,188,0.4)_100%)]" />
            </div>
          </div>

          <img
            className="absolute w-[30px] h-[32px] md:w-[50px] md:h-[53px] top-[600px] md:top-[954px] left-1/2 md:left-[569px] transform -translate-x-1/2 md:transform-none z-0"
            alt="Polygon"
            src="/contact/polygon-1.svg"
          />
        </div>

        {/* Navigation */}
        <Navigation navItems={navItems} colorClass="text-[#222]" logoColorClass="text-white" />

        {/* Hero section with gradient background */}
        <section className="relative w-full">
          <div className="w-full" style={{ background: 'linear-gradient(58deg, #020617 0%, #0f1345 14%, #161857 28%, #3e3198 42%, #6e44b4 56%, #b26da9 70%, #c086ad 84%, #ccc9ce 100%)' }}>
            {/* Contact section */}
            <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 pt-8 sm:pt-12 md:pt-16 lg:pt-24 xl:pt-32 pb-16 sm:pb-24 md:pb-32 lg:pb-24 xl:pb-24">
              <div className="text-center mb-8 md:mb-12 lg:mb-16 max-w-4xl ml-[85px]">
                <h1 className="font-playfair font-semibold text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-[0] leading-tight mb-4 md:mb-6 text-center lg:text-left">
                  Contact our sales team
                </h1>
                <p className="max-w-[524px] mx-auto lg:mx-0 font-gantari font-normal text-white text-base sm:text-lg md:text-xl lg:text-[23px] tracking-[0] leading-relaxed text-center lg:text-left">
                  Please leave your details and reason for reaching out and we'll
                  be in contact shortly.
                </p>
              </div>

              <div className="flex flex-col xl:flex-row gap-6 md:gap-8 items-start justify-start max-w-7xl mx-auto ml-[85px]">
                {/* Testimonial section */}
                <div className="w-full xl:w-[531px] xl:max-w-[531px]">
                  {/* Testimonial card */}
                  <Card className="w-full h-auto rounded-[10px] bg-white/10 border border-white/20 shadow-sm">
                    <CardContent className="p-4 sm:p-6 md:p-8 relative">
                      <span className="absolute top-[-10px] sm:top-[-15px] md:top-[-20px] left-[5px] md:left-[10px] font-gantari font-normal text-[#61647f] text-4xl sm:text-6xl md:text-8xl lg:text-9xl text-center leading-none tracking-[0] whitespace-nowrap opacity-40">
                        "
                      </span>
                      <div className="mt-6 sm:mt-8 md:mt-12 lg:mt-16">
                        <p className="font-gantari font-normal text-white text-sm sm:text-[15px] md:text-[17px] tracking-[0] leading-relaxed mb-4 md:mb-6">
                          Now I actually get to have dinner with my family again.
                          Using InteliDoc-AI feels like someone handed me back
                          hours of my day—like finding out your meeting's been
                          canceled and you didn't even know it.
                        </p>
                        <div className="space-y-1 md:space-y-2">
                          <p className="font-gantari font-semibold text-white text-base md:text-lg leading-tight">
                            Dr. Rohan Mehta
                          </p>
                          <p className="font-gantari font-light italic text-white text-sm md:text-[15px] leading-relaxed">
                            Family Medicine Specialist • Horizon Health Clinic, Pune
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Rating below the box */}
                  <div className="flex items-center justify-center xl:justify-start mt-4 md:mt-6">
                    <div className="flex items-center space-x-2">
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 fill-current" />
                        ))}
                      </div>
                      <span className="font-gantari font-bold text-white text-base md:text-lg leading-normal tracking-[0] ml-2">
                        4.5
                      </span>
                    </div>
                  </div>
                </div>

                {/* Contact form */}
                <Card className="w-full xl:w-[557px] xl:max-w-[557px] bg-white rounded-[20px] border border-solid border-[#a9a9a9] shadow-xl">
                  <CardContent className="p-4 sm:p-6 md:p-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                      <div className="space-y-2">
                        <label className="font-gantari text-sm font-medium text-gray-700 block">
                          First name*
                        </label>
                        <Input
                          placeholder="Your first name"
                          className="border border-gray-300 rounded-md h-10 px-3 focus:ring-2 focus:ring-[#132180] focus:border-transparent transition-all duration-200 w-full"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="font-gantari text-sm font-medium text-gray-700 block">
                          Last name*
                        </label>
                        <Input
                          placeholder="Your last name"
                          className="border border-gray-300 rounded-md h-10 px-3 focus:ring-2 focus:ring-[#132180] focus:border-transparent transition-all duration-200 w-full"
                        />
                      </div>
                      <div className="space-y-2 sm:col-span-2">
                        <label className="font-gantari text-sm font-medium text-gray-700 block">
                          Work email*
                        </label>
                        <Input
                          placeholder="Your company email"
                          type="email"
                          className="border border-gray-300 rounded-md h-10 px-3 focus:ring-2 focus:ring-[#132180] focus:border-transparent transition-all duration-200 w-full"
                        />
                      </div>
                      <div className="space-y-2 sm:col-span-2">
                        <label className="font-gantari text-sm font-medium text-gray-700 block">
                          Contact number*
                        </label>
                        <div className="flex gap-2">
                          <Select>
                            <SelectTrigger className="w-16 sm:w-20 h-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#132180] focus:border-transparent">
                              <SelectValue placeholder="IN" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="in">IN</SelectItem>
                              <SelectItem value="us">US</SelectItem>
                              <SelectItem value="uk">UK</SelectItem>
                            </SelectContent>
                          </Select>
                          <Input
                            placeholder="+91"
                            className="flex-1 border border-gray-300 rounded-md h-10 px-3 focus:ring-2 focus:ring-[#132180] focus:border-transparent transition-all duration-200"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="font-gantari text-sm font-medium text-gray-700 block">
                          Country*
                        </label>
                        <Select>
                          <SelectTrigger className="w-full h-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#132180] focus:border-transparent">
                            <SelectValue placeholder="Select your country" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="india">India</SelectItem>
                            <SelectItem value="usa">USA</SelectItem>
                            <SelectItem value="uk">UK</SelectItem>
                            <SelectItem value="canada">Canada</SelectItem>
                            <SelectItem value="australia">Australia</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <label className="font-gantari text-sm font-medium text-gray-700 block">
                          Specialty*
                        </label>
                        <Select>
                          <SelectTrigger className="w-full h-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#132180] focus:border-transparent">
                            <SelectValue placeholder="Please select" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="family-medicine">
                              Family Medicine
                            </SelectItem>
                            <SelectItem value="pediatrics">
                              Pediatrics
                            </SelectItem>
                            <SelectItem value="mental-health">
                              Mental Health
                            </SelectItem>
                            <SelectItem value="cardiology">
                              Cardiology
                            </SelectItem>
                            <SelectItem value="dermatology">
                              Dermatology
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <p className="text-xs text-red-500 mt-1">
                          Please complete this required field.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <label className="font-gantari text-sm font-medium text-gray-700 block">
                          Job role*
                        </label>
                        <Select>
                          <SelectTrigger className="w-full h-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#132180] focus:border-transparent">
                            <SelectValue placeholder="Please select" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="doctor">Doctor</SelectItem>
                            <SelectItem value="nurse">Nurse</SelectItem>
                            <SelectItem value="admin">Administrator</SelectItem>
                            <SelectItem value="manager">Practice Manager</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <p className="text-xs text-red-500 mt-1">
                          Please complete this required field.
                        </p>
                      </div>
                      <div className="space-y-2 sm:col-span-2">
                        <label className="font-gantari text-sm font-medium text-gray-700 block">
                          Size of your clinical team*
                        </label>
                        <Select>
                          <SelectTrigger className="w-full h-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#132180] focus:border-transparent">
                            <SelectValue placeholder="Please select" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1-5">1-5 members</SelectItem>
                            <SelectItem value="6-10">6-10 members</SelectItem>
                            <SelectItem value="11-25">11-25 members</SelectItem>
                            <SelectItem value="26-50">26-50 members</SelectItem>
                            <SelectItem value="51+">51+ members</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="flex justify-center sm:justify-end mt-6 md:mt-8">
                      <Button className="w-full sm:w-[120px] h-[40px] bg-[#132180] hover:bg-[#0f1a66] rounded-[5px] text-white transition-all duration-200 transform hover:scale-105">
                        <span className="font-gantari font-medium text-white text-sm">
                          Next
                        </span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* AI medical scribe section */}
            <div className="text-center pb-12 sm:pb-16 md:pb-24 lg:pb-32 relative px-4 sm:px-6 md:px-8">
              <h2 className="font-playfair font-medium text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[50px] text-center tracking-[0] leading-tight mb-4 md:mb-6 max-w-4xl mx-auto">
                Say hello to your AI medical scribe.
              </h2>
              <p className="font-gantari font-normal text-white text-lg sm:text-xl md:text-2xl lg:text-3xl text-center tracking-[0] leading-relaxed mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto">
                Smarter notes, better care.
              </p>

              <Button className="w-full max-w-[280px] sm:max-w-[218px] h-[50px] sm:h-[57px] bg-white hover:bg-white/90 rounded-[5px] border-none relative transition-all duration-300 transform hover:scale-105 shadow-lg mx-auto">
                <div className="absolute inset-2 bg-[#ffffff99] blur-[22.45px] rounded-[3px]" />
                <span className="relative font-gantari font-semibold text-[#162694] text-sm sm:text-base text-center tracking-[0] leading-tight">
                  Try InteliDoc AI
                  <span className="text-[#8c8c8c] text-xs sm:text-sm leading-tight ml-1">
                    - it's free
                  </span>
                </span>
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer links={footerLinks} />
      </div>
    </div>
  );
};