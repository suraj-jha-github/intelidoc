'use client'

import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";
import { Navigation } from "../features/__components/navigation";

// Feature data for the comparison table
const features = [
  {
    title: "7-day free trial",
    description: "Try Freed risk-free for 7 days. No credit card needed.",
  },
  {
    title: "Specialty-specific templates",
    description:
      "Use pre-built note formats to meet the needs of your specialty.",
  },
  {
    title: "Learn my format",
    description:
      "Edit a note, and ask Freed to structure future notes in the same style.",
  },
  {
    title: "Smart visit prep",
    description: "See AI-generated patient summaries before each visit.",
  },
  {
    title: "Magic edit",
    description: "Ask Freed to revise a note for you.",
  },
  {
    title: "Instant patient instructions",
    description: "Freed writes instructions for you to send after each visit.",
  },
];

// Additional features
const additionalFeatures = [
  { title: "More features", icon: "/pricing/group.png" },
  { title: "Security", icon: "/pricing/group-1.png" },
  { title: "Support", icon: "/pricing/group-2.png" },
  { title: "Admin", icon: "/pricing/group-3.png" },
];

// FAQ data
const faqItems = [
  { question: "What is InteliDoc-AI?" },
  { question: "How does InteliDoc-AI work?" },
  { question: "What are the benefits of using InteliDoc-AI?" },
  {
    question:
      "Is InteliDoc-AI secure and compliant with healthcare regulations?",
  },
  {
    question:
      "Can InteliDoc-AI be customized to suit specific healthcare practices?",
  },
];

// Specialties data
const specialties = [
  "Family Medicine",
  "Internal Medicine",
  "Pschiatry",
  "Mental Health",
  "Padiatrics",
  "Other Specialties",
];

// Legal links data
const legalLinks = ["Privacy Policy", "Terms of Services", "Terms of Use"];

const navItems = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  { label: "Specialties", href: "/specialities" },
  { label: "Blog", href: "/blogs" },
  { label: "Pricing", href: "/pricing" },
  { label: "For Groups", href: "/groups" },
  { label: "Contact Us", href: "/contact" },
];

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annually'>('monthly');

  const monthlyPrice = 90;
  const annualPrice = 75; // 25% discount for annual billing

  return (
    <div className="bg-[#f3f3f3] flex flex-row justify-center w-full">
      <div className="bg-[#f3f3f3] overflow-hidden w-full relative">
        <Navigation navItems={navItems} logoColorClass="text-white" />

        {/* Hero Section */}
        <section className="relative w-full min-h-[500px] sm:min-h-[577px] bg-[#162694] bg-gradient-to-r from-[#162694] to-[#4a3a9a] pt-16 sm:pt-[60px]">
          {/* <div className="absolute w-[84px] h-[5px] top-[61px] left-1/2 transform -translate-x-1/2 sm:left-[626px] sm:transform-none bg-[#f72aa4]" /> */}

          <div className="container px-4 sm:px-6 mx-auto">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-8">
              {/* Hero Text */}
              <div className="lg:w-1/2 pt-8 sm:pt-16">
                <h1 className="font-['Playfair_Display',Helvetica] font-semibold text-white text-3xl sm:text-4xl lg:text-[52px] leading-tight lg:leading-[57.7px]">
                  Your Free time
                  <br />
                  is priceless
                </h1>
                <p className="mt-6 sm:mt-8 font-['Gantari',Helvetica] text-white text-base sm:text-lg max-w-[470px]">
                  Fast reads for doctors who are pressed for time
                  <br />
                  Our strategies are designed with actual clinicians in mind.
                  Reasonably priced, easy to set up, and help available when
                  needed. <br />
                  <br />
                  50% off is offered to trainees, residents, and students. Find
                  out more
                </p>
              </div>

              {/* Pricing Cards */}
              <div className="lg:w-1/2 flex flex-col sm:flex-row gap-4 mt-8 lg:mt-32 justify-center lg:justify-start">
                {/* Individual Plan Card */}
                <Card className="w-full sm:w-[295px] rounded-[10px] relative">
                  <CardContent className="p-0">
                    {/* Purple gradient top border */}
                    <div className="w-[90%] sm:w-[277px] h-[3px] mx-auto rounded-[5px] bg-gradient-to-r from-[rgba(135,89,255,1)] to-[rgba(174,141,255,1)]" />

                    {/* Billing toggle */}
                    <div className="flex items-center justify-end mt-4 mr-4 gap-2">
                      <span className="text-xs font-['Gantari',Helvetica]">Billed:</span>
                      <div className="flex items-center bg-[#ebe4ff] rounded-full px-1 py-0.5">
                        <button
                          type="button"
                          className={`px-3 py-1 rounded-full text-xs font-['Gantari',Helvetica] transition-colors duration-150 ${
                            billingPeriod === 'monthly'
                              ? 'bg-[#885aff] text-white'
                              : 'text-[#0b0b0b]'
                          }`}
                          onClick={() => setBillingPeriod('monthly')}
                        >
                          Monthly
                        </button>
                        <button
                          type="button"
                          className={`px-3 py-1 rounded-full text-xs font-['Gantari',Helvetica] transition-colors duration-150 ${
                            billingPeriod === 'annually'
                              ? 'bg-[#885aff] text-white'
                              : 'text-[#0b0b0b]'
                          }`}
                          onClick={() => setBillingPeriod('annually')}
                        >
                          Annually
                        </button>
                      </div>
                    </div>

                    {/* Pricing details */}
                    <div className="px-4 sm:px-6 mt-2 pb-4">
                      <div className="font-['Gantari',Helvetica]">
                        <span className="text-black">$ </span>
                        <span className="text-black text-xl sm:text-2xl">
                          {billingPeriod === 'monthly' ? monthlyPrice : annualPrice}/
                        </span>
                        <span className="text-black">{billingPeriod === 'monthly' ? 'mo' : 'yr'}</span>
                        <p className="text-[#868686] text-xs mt-1">
                          Unlimited visits & note generation
                        </p>
                        <p className="text-black text-xs sm:text-[13px] mt-4 sm:mt-6">
                          Get Freed as an individual clinician
                        </p>
                      </div>

                      {/* CTA Button */}
                      <div className="mt-4">
                        <Button className="w-full h-[34px] rounded-[5px] bg-gradient-to-r from-[rgba(135,89,255,1)] to-[rgba(174,141,255,1)] text-white font-medium hover:opacity-90 transition-opacity">
                          Start Free Trial
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Group Plan Card */}
                <Card className="w-full sm:w-[296px] rounded-[10px] relative">
                  <CardContent className="p-0">
                    {/* Orange gradient top border */}
                    <div className="w-[90%] sm:w-[277px] h-[3px] mx-auto mt-1 rounded-[5px] bg-gradient-to-r from-[rgba(255,191,89,1)] to-[rgba(255,157,0,1)]" />

                    {/* Billing toggle */}
                    <div className="flex items-center justify-end mt-4 mr-4 gap-2">
                      <span className="text-xs font-['Gantari',Helvetica]">Billed:</span>
                      <div className="flex items-center bg-[#ebe4ff] rounded-full px-1 py-0.5">
                        <button
                          type="button"
                          className={`px-3 py-1 rounded-full text-xs font-['Gantari',Helvetica] transition-colors duration-150 ${
                            billingPeriod === 'monthly'
                              ? 'bg-[#885aff] text-white'
                              : 'text-[#0b0b0b]'
                          }`}
                          onClick={() => setBillingPeriod('monthly')}
                        >
                          Monthly
                        </button>
                        <button
                          type="button"
                          className={`px-3 py-1 rounded-full text-xs font-['Gantari',Helvetica] transition-colors duration-150 ${
                            billingPeriod === 'annually'
                              ? 'bg-[#885aff] text-white'
                              : 'text-[#0b0b0b]'
                          }`}
                          onClick={() => setBillingPeriod('annually')}
                        >
                          Annually
                        </button>
                      </div>
                    </div>

                    {/* Pricing details */}
                    <div className="px-4 sm:px-6 mt-2 pb-4">
                      <div className="font-['Gantari',Helvetica]">
                        <span className="text-black text-lg sm:text-xl">
                          Group pricing
                        </span>
                        <p className="text-[#868686] text-xs mt-1">
                          Unlimited visits & note generation
                        </p>
                        <p className="text-black text-xs sm:text-[13px] mt-4 sm:mt-6">
                          Get Freed as an individual clinician
                        </p>
                      </div>

                      {/* CTA Button */}
                      <div className="mt-4">
                        <Button className="w-full h-[34px] rounded-[5px] bg-gradient-to-r from-[rgba(255,155,89,1)] to-[rgba(255,215,141,1)] text-black font-medium hover:opacity-90 transition-opacity">
                          Start Free Trial
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Features Comparison Section */}
       
        {/* Additional features section  */}

        {/* Footer */}
        <footer className="w-full bg-white py-8 sm:py-12">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center sm:text-left">
              <img
                src="/pricing/image-6.png"
                alt="InteliDoc Logo"
                className="w-[180px] sm:w-[217px] h-[55px] sm:h-[67px] object-cover mx-auto sm:mx-0"
              />
              <h3 className="font-['Geist',Helvetica] font-bold text-black text-2xl sm:text-3xl mt-4">
                InteliDoc
              </h3>
            </div>

            <div className="text-center">
              <h4 className="font-['Geist',Helvetica] font-semibold text-black text-lg sm:text-xl mb-4">
                Resources
              </h4>
              <ul className="space-y-3 sm:space-y-4">
                <li className="font-['Geist',Helvetica] font-normal text-black text-base sm:text-[17px] hover:text-[#162694] cursor-pointer transition-colors">
                  Help Center
                </li>
                <li className="font-['Geist',Helvetica] font-normal text-black text-base sm:text-[17px] hover:text-[#162694] cursor-pointer transition-colors">
                  Blog
                </li>
              </ul>
            </div>

            <div className="text-center">
              <h4 className="font-['Geist',Helvetica] font-semibold text-black text-lg sm:text-xl mb-4">
                Specialties
              </h4>
              <ul className="space-y-3 sm:space-y-4">
                {specialties.map((specialty, index) => (
                  <li
                    key={index}
                    className="font-['Geist',Helvetica] font-normal text-black text-base sm:text-[17px] hover:text-[#162694] cursor-pointer transition-colors"
                  >
                    {specialty}
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center">
              <h4 className="font-['Geist',Helvetica] font-semibold text-black text-lg sm:text-xl mb-4">
                Legal
              </h4>
              <ul className="space-y-3 sm:space-y-4">
                {legalLinks.map((link, index) => (
                  <li
                    key={index}
                    className="font-['Geist',Helvetica] font-normal text-black text-base sm:text-[17px] hover:text-[#162694] cursor-pointer transition-colors"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

