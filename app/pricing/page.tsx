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
import Link from 'next/link';
import { Footer } from "../components/footer";

// Feature data for the comparison table
const features = [
  {
    title: "7-day free trial",
    description: "Try intelidoc risk-free for 7 days. No credit card needed.",
  },
  {
    title: "Specialty-specific templates",
    description:
      "Use pre-built note formats to meet the needs of your specialty.",
  },
  {
    title: "Learn my format",
    description:
      "Edit a note, and ask intelidoc to structure future notes in the same style.",
  },
  {
    title: "Smart visit prep",
    description: "See AI-generated patient summaries before each visit.",
  },
  {
    title: "Magic edit",
    description: "Ask intelidoc to revise a note for you.",
  },
  {
    title: "Instant patient instructions",
    description: "intelidoc writes instructions for you to send after each visit.",
  },
];

// Additional features with expandable content
const additionalFeatures = [
  {
    title: "More features",
    icon: "/pricing/group.png",
    expandedContent: [
      "Custom template builder",
      "Template sharing with your team",
      "Upload visit recordings",
      "Full written transcript of visit",
      "iOS and Android app",
      "Zoom app (Beta)",
      "Chrome extension for web-based EHRs",
      "Custom EHR integrations"
    ]
  },
  {
    title: "Security",
    icon: "/pricing/group-1.png",
    expandedContent: [
      "HIPAA–certified and compliant",
      "HITECH–certified and compliant",
      "SOC2 Type 2–certified and compliant",
      "End-to-end encryption of Patient Health Information (PHI) at rest and in transit",
      "Cryptographic modules follow FIPS PUB 140-2 standards",
      "Regular third party security audits",
      "Rigorous background checks and HIPAA training for every InteliDoc employee",
      "Optional single sign-on (SSO)"
    ]
  },
  {
    title: "Support",
    icon: "/pricing/group-2.png",
    expandedContent: [
      "World-class support from our Clinician Success team",
      "Dedicated Account Manager"
    ]
  },
  {
    title: "Admin",
    icon: "/pricing/group-3.png",
    expandedContent: [
      "License management",
      "Organization-wide BAA",
      "Centralized billing",
      "Group volume discount"
    ]
  },
];

// FAQ data
const faqItems = [
  {
    question: "What is InteliDoc-AI?",
    answer: "InteliDoc-AI is an intelligent documentation tool that leverages AI to automate clinical note-taking, streamline workflows, and reduce administrative load for healthcare providers."
  },
  {
    question: "How does InteliDoc-AI work?",
    answer: "It uses natural language processing and automation to capture, structure, and sync clinical data with EHR systems, minimizing manual entry and errors."
  },
  {
    question: "What are the benefits of using InteliDoc-AI?",
    answer: "Key benefits include time savings, improved documentation accuracy, reduced provider burnout, and enhanced overall efficiency in healthcare delivery."
  },
  {
    question: "Is InteliDoc-AI secure and compliant with healthcare regulations?",
    answer: "Yes, InteliDoc-AI is fully HIPAA-compliant and uses advanced security protocols to ensure the confidentiality and integrity of patient data."
  },
  {
    question: "Can InteliDoc-AI be customized to suit specific healthcare practices?",
    answer: "Absolutely. InteliDoc-AI is designed to adapt to various medical specialties, workflows, and documentation preferences."
  },
  {
    question: "Does InteliDoc-AI integrate with existing EHR systems?",
    answer: "Yes, it supports seamless integration with leading EHR platforms, ensuring smooth data exchange and operational continuity."
  },
  {
    question: "Is training required to use InteliDoc-AI?",
    answer: "Minimal training is needed. The system is user-friendly, with onboarding support provided to ensure a smooth learning curve for providers and staff."
  },
  {
    question: "Can InteliDoc-AI be used in telehealth settings?",
    answer: "Yes, InteliDoc-AI works effectively in virtual care environments, capturing and organizing data from telehealth consultations."
  },
  {
    question: "What types of practices can benefit from InteliDoc-AI?",
    answer: "It's ideal for primary care, specialty clinics, multi-provider groups, and any healthcare setting seeking to improve documentation efficiency."
  },
  {
    question: "How quickly can InteliDoc-AI be implemented?",
    answer: "Deployment is fast and flexible—most practices can get up and running within a few days, depending on the level of customization required."
  }
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
  { label: "For Groups", href: "/forgroup" },
  { label: "Contact Us", href: "/contact" },
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

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annually'>('monthly');
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({});

  const monthlyPrice = 90;
  const annualPrice = 75; // 25% discount for annual billing

  const toggleSection = (sectionTitle: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionTitle]: !prev[sectionTitle]
    }));
  };

  return (
    <div className="bg-[#f3f3f3] flex flex-row justify-center w-full">
      <div className="bg-[#f3f3f3] overflow-hidden w-full relative">
        <Navigation navItems={navItems} />

        {/* Hero Section */}
        <section data-nav-dark="true" className="relative w-full min-h-[500px] md:min-h-[622px]">
          <div className="absolute w-full h-full [background:linear-gradient(137deg,rgba(14,25,99,1)_0%,rgba(46,24,173,1)_47%,rgba(79,52,187,1)_60%,rgba(140,76,193,1)_71%,rgba(200,110,186,1)_82%,rgba(228,174,211,1)_94%,rgba(231,227,237,1)_100%)]" />

          <div className="relative z-10 w-full max-w-7xl pl-4 sm:pl-8 md:pl-16 lg:pl-[85px] pr-4 sm:pr-8 md:pr-16 lg:pr-[85px] mx-auto pt-24 md:pt-32 pb-8">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-8 items-center">
              {/* Hero Text */}
              <div className="lg:w-1/2">
                <h1 className="font-playfair font-semibold text-white text-3xl sm:text-4xl lg:text-[52px] leading-tight lg:leading-[57.7px]">
                  Simple, transparent pricing
                </h1>
                <p className="mt-6 sm:mt-8 font-gantari text-white text-base sm:text-lg max-w-[470px]">
                  Fast reads for doctors who are pressed for timeOur strategies are designed with actual clinicians in mind. Reasonably priced, easy to set up, and help available when needed.
                </p>

                <p className="mt-2 font-gantari text-white text-base sm:text-lg max-w-[470px]">
                  50% off is offered to trainees, residents, and students. Find out more
                </p>
              </div>

              {/* Pricing Cards */}
              <div className="lg:w-1/2 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                {/* Individual Plan Card */}
                <Card className="w-full sm:w-[295px] rounded-[10px] relative">
                  <CardContent className="p-0">
                    {/* Purple gradient top border */}
                    <div className="w-[90%] sm:w-[277px] h-[3px] mx-auto mt-[1px] rounded-t-[10px] bg-gradient-to-r from-[rgba(135,89,255,1)] to-[rgba(174,141,255,1)]" />

                    {/* Billing toggle */}
                    <div className="flex items-center justify-end mt-4 mr-4 gap-2">
                      <span className="text-xs font-gantari">Billed:</span>
                      <div className="flex items-center bg-[#ebe4ff] rounded-full px-1 py-0.5">
                        <button
                          type="button"
                          className={`px-3 py-[2px] rounded-full text-xs font-gantari transition-colors duration-150 ${billingPeriod === 'monthly'
                            ? 'bg-[#885aff] text-white'
                            : 'text-[#0b0b0b]'
                            }`}
                          onClick={() => setBillingPeriod('monthly')}
                        >
                          Monthly
                        </button>
                        <button
                          type="button"
                          className={`px-3 py-[2px] rounded-full text-xs font-gantari transition-colors duration-150 ${billingPeriod === 'annually'
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
                      <div className="font-gantari">
                        <span className="text-black">$ </span>
                        <span className="text-black text-xl sm:text-2xl">
                          {billingPeriod === 'monthly' ? monthlyPrice : annualPrice}/
                        </span>
                        <span className="text-black">{billingPeriod === 'monthly' ? 'mo' : 'yr'}</span>
                        <p className="text-[#868686] text-xs mt-1">
                          Unlimited visits & note generation
                        </p>
                        <p className="text-black text-xs sm:text-[13px] mt-4 sm:mt-6">
                          Get intelidoc as an individual clinician
                        </p>
                      </div>

                      {/* CTA Button */}
                      <div className="mt-4">
                        <Link href="/tryfree" target="_blank">
                          <Button className="w-full h-[34px] rounded-[5px] bg-gradient-to-r from-[rgba(135,89,255,1)] to-[rgba(174,141,255,1)] text-white font-medium hover:opacity-90 transition-opacity">
                            Start Free Trial
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Group Plan Card */}
                <Card className="w-full sm:w-[296px] rounded-[10px] relative">
                  <CardContent className="p-0">
                    {/* Orange gradient top border */}
                    <div className="w-[90%] sm:w-[277px] h-[3px] mx-auto mt-[1px] rounded-t-[10px] bg-gradient-to-r from-[rgba(255,191,89,1)] to-[rgba(255,157,0,1)]" />

                    {/* Billing toggle */}
                    <div className="flex items-center justify-end mt-4 mr-4 gap-2">
                      <span className="text-xs font-gantari">Billed:</span>
                      <div className="flex items-center bg-[#ebe4ff] rounded-full px-1 py-0.5">
                        <button
                          type="button"
                          className={`px-3 py-[2px] rounded-full text-xs font-gantari transition-colors duration-150 ${billingPeriod === 'monthly'
                            ? 'bg-[#885aff] text-white'
                            : 'text-[#0b0b0b]'
                            }`}
                          onClick={() => setBillingPeriod('monthly')}
                        >
                          Monthly
                        </button>
                        <button
                          type="button"
                          className={`px-3 py-[2px] rounded-full text-xs font-gantari transition-colors duration-150 ${billingPeriod === 'annually'
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
                      <div className="font-gantari">
                        <span className="text-black">$ </span>
                        <span className="text-black text-xl sm:text-2xl">
                          {billingPeriod === 'monthly' ? monthlyPrice : annualPrice}/
                        </span>
                        <span className="text-black">{billingPeriod === 'monthly' ? 'mo' : 'yr'}</span>
                        <p className="text-[#868686] text-xs mt-1">
                          Unlimited visits & note generation
                        </p>
                        <p className="text-black text-xs sm:text-[13px] mt-4 sm:mt-6">
                          Get intelidoc as an individual clinician
                        </p>
                      </div>

                      {/* CTA Button */}
                      <div className="mt-4">
                        <Link href="/tryfree" target="_blank">
                          <Button className="w-full h-[34px] rounded-[5px] bg-gradient-to-r from-[rgba(255,191,89,1)] to-[rgba(255,157,0,1)] text-white font-medium hover:opacity-90 transition-opacity">
                            Start Free Trial
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Features Comparison Section */}
        <section className="relative w-full py-12 sm:py-16">
          <div className="relative w-full max-w-7xl pl-4 sm:pl-8 md:pl-16 lg:pl-[85px] pr-4 sm:pr-8 md:pr-16 lg:pr-[85px] mx-auto">
            <h2 className="font-playfair font-semibold text-[#162694] text-2xl sm:text-3xl lg:text-[34px] text-center lg:text-left">
              Choose the plan that works for you
            </h2>

            {/* Mobile-friendly feature list - unified summary grid for all features with tick rows */}
            <div className="mt-8 block lg:hidden">
              <div className="grid grid-cols-2 gap-0 border border-gray-200 rounded-[10px] overflow-hidden bg-white">
                {/* Top plan cards */}
                <div className="col-span-1 border-b border-r border-gray-200 p-4">
                  <div className="text-[18px] font-semibold text-black">$ 90/mo</div>
                  <div className="text-xs text-[#868686] mt-1">Unlimited visits & note generation</div>
                </div>
                <div className="col-span-1 border-b p-4">
                  <div className="text-[18px] font-semibold text-black">Group pricing</div>
                  <div className="text-xs text-[#868686] mt-1">Unlimited visits & note generation</div>
                </div>
                {/* All features as full-width rows with tick row below */}
                {features.map((feature, index) => (
                  <React.Fragment key={index}>
                    <div className="col-span-2 border-b border-gray-200 bg-white p-4 text-center">
                      <div className="font-semibold text-[15px] text-black mb-1">{feature.title}</div>
                      <div className="text-xs text-[#868686]">{feature.description}</div>
                    </div>
                    {/* Tick row */}
                    <div className="col-span-1 flex items-center justify-center border-b border-r border-gray-200 h-12">
                      <svg width='24' height='24' fill='none' viewBox='0 0 24 24'><path d='M20 6L9 17L4 12' stroke='#8759ff' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' /></svg>
                    </div>
                    <div className="col-span-1 flex items-center justify-center border-b h-12">
                      <svg width='24' height='24' fill='none' viewBox='0 0 24 24'><path d='M20 6L9 17L4 12' stroke='#F97316' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' /></svg>
                    </div>
                  </React.Fragment>
                ))}
                {/* Expandable sections */}
                {additionalFeatures.map((feature, index) => (
                  <React.Fragment key={`additional-${index}`}>
                    <div
                      className="col-span-2 border-b border-gray-200 bg-white p-4 text-center cursor-pointer hover:bg-gray-50"
                      onClick={() => toggleSection(feature.title)}
                    >
                      <div className="font-semibold text-[15px] text-black mb-1 flex items-center justify-center">
                        <span className={`font-gantari ${index === 0 ? "text-[#162694]" : "text-black"} text-lg sm:text-xl mr-2`}>
                          {feature.title}
                        </span>
                        {expandedSections[feature.title] ? (
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        ) : (
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </div>
                    </div>
                    {expandedSections[feature.title] && feature.expandedContent.map((item, itemIndex) => (
                      <React.Fragment key={itemIndex}>
                        <div className="col-span-2 border-b border-gray-200 bg-white p-4 text-center">
                          <div className="font-semibold text-[15px] text-black mb-1">{item}</div>
                        </div>
                        {/* Tick row for expanded features */}
                        <div className="col-span-1 flex items-center justify-center border-b border-r border-gray-200 h-12">
                          <svg width='24' height='24' fill='none' viewBox='0 0 24 24'><path d='M20 6L9 17L4 12' stroke='#8759ff' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' /></svg>
                        </div>
                        <div className="col-span-1 flex items-center justify-center border-b h-12">
                          <svg width='24' height='24' fill='none' viewBox='0 0 24 24'><path d='M20 6L9 17L4 12' stroke='#F97316' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' /></svg>
                        </div>
                      </React.Fragment>
                    ))}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Desktop table */}
            <div className="hidden lg:block">
              <Table className="mt-8">
                <TableBody>
                  {features.map((feature, index) => (
                    <TableRow key={index} className="border-b border-gray-200">
                      <TableCell className="py-6 pl-4">
                        <h3 className="font-gantari text-black text-xl">
                          {feature.title}
                        </h3>
                        <p className="font-gantari text-[#757171] text-[15px]">
                          {feature.description}
                        </p>
                      </TableCell>
                      <TableCell className="text-center pr-12">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[34px] h-10 mx-auto">
                          <path d="M20 6L9 17L4 12" stroke="#8759ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </TableCell>
                      <TableCell className="text-center pl-12">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[34px] h-10 mx-auto">
                          <path d="M20 6L9 17L4 12" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </TableCell>
                    </TableRow>
                  ))}

                  {/* Addition features section  */}

                  {/* Additional Features Section */}
                  {additionalFeatures.map((feature, index) => (
                    <React.Fragment key={`additional-${index}`}>
                      <TableRow
                        className="border-b border-gray-200 cursor-pointer hover:bg-gray-50"
                        onClick={() => toggleSection(feature.title)}
                      >
                        <TableCell colSpan={3} className="py-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="w-[30px] h-9 mr-4 flex items-center justify-center">
                                {expandedSections[feature.title] ? (
                                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                  </svg>
                                ) : (
                                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                  </svg>
                                )}
                              </div>
                              <span
                                className={`font-gantari ${index === 0 ? "text-[#162694]" : "text-black"} text-xl`}
                              >
                                {feature.title}
                              </span>
                            </div>
                            <div className="flex items-center space-x-12">
                              <div className="w-[34px] h-10"></div>
                              <div className="w-[34px] h-10"></div>
                            </div>
                          </div>
                        </TableCell>
                      </TableRow>

                      {/* Expanded content for desktop */}
                      {expandedSections[feature.title] && (
                        <TableRow className="border-b border-gray-200 bg-gray-50">
                          <TableCell colSpan={3} className="py-6">
                            <div className="grid grid-cols-1 gap-4">
                              {feature.expandedContent.map((item, itemIndex) => (
                                <div key={itemIndex} className="flex items-center justify-between">
                                  <span className="font-gantari text-[#757171] text-[15px]">
                                    {item}
                                  </span>
                                  <div className="flex space-x-32 mr-10">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[34px] h-10">
                                      <path d="M20 6L9 17L4 12" stroke="#8759ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[34px] h-10">
                                      <path d="M20 6L9 17L4 12" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </TableCell>
                        </TableRow>
                      )}
                    </React.Fragment>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 lg:gap-16 mt-8">
              <Link href="/tryfree" target="_blank">
                <Button className="w-full sm:w-[281px] h-[46px] rounded-[5px] bg-gradient-to-r from-[rgba(135,89,255,1)] to-[rgba(174,141,255,1)] text-white font-medium text-base sm:text-lg hover:opacity-90 transition-opacity">
                  Start Free Trial
                </Button>
              </Link>
              <Link href="/tryfree" target="_blank">
                <Button className="w-full sm:w-[281px] h-[46px] rounded-[5px] bg-gradient-to-r from-[rgba(255,155,89,1)] to-[rgba(255,215,141,1)] text-black font-medium text-base sm:text-lg hover:opacity-90 transition-opacity">
                  Start Free Trial
                </Button>
              </Link>
            </div>
          </div>
        </section>


        <section className="relative w-full py-12 sm:py-16 overflow-hidden">
          <div className="absolute w-[400px] sm:w-[792px] h-[400px] sm:h-[764px] top-[61px] right-[-100px] sm:right-[-200px] rounded-[50%] blur-[100px] bg-gradient-to-br from-[rgba(22,38,148,0.3)] to-[rgba(255,155,188,0.3)]" />
          <div className="absolute w-[300px] sm:w-[638px] h-[300px] sm:h-[609px] top-[86px] left-[-50px] sm:left-0 rounded-[50%] blur-[100px] bg-gradient-to-br from-[rgba(22,38,148,0.4)] to-[rgba(255,155,188,0.4)]" />

          <div className="relative w-full max-w-7xl pl-4 sm:pl-8 md:pl-16 lg:pl-[85px] pr-4 sm:pr-8 md:pr-16 lg:pr-[85px] mx-auto flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/3 flex justify-center">
              <img
                src="/pricing/ellipse-53.png"
                alt="Doctor"
                className="w-[200px] h-[200px] sm:w-[268px] sm:h-[267px] rounded-full object-cover"
              />
            </div>
            <div className="lg:w-2/3 text-center lg:text-left">
              <blockquote className="font-gantari text-black text-xl sm:text-2xl lg:text-[27px] leading-relaxed lg:leading-[43.5px]">
                "InteliDoc has transformed how I practice medicine. I spend more time with patients and less time on paperwork. It's like having a personal assistant who never gets tired."
              </blockquote>
              <div className="mt-6">
                <p className="font-gantari font-semibold text-[#162694] text-lg sm:text-xl">
                  Dr. Sarah Johnson
                </p>
                <p className="font-gantari text-[#757171] text-base sm:text-lg">
                  Family Medicine Physician
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section data-nav-dark="true" className="relative w-full py-12 sm:py-16">
          <div className="relative w-full max-w-7xl pl-4 sm:pl-8 md:pl-16 lg:pl-[85px] pr-4 sm:pr-8 md:pr-16 lg:pr-[85px] mx-auto">
            <div className="rounded-[20px] bg-[linear-gradient(90deg,rgba(1,18,39,1)_0%,rgba(14,25,99,1)_25%,rgba(15,38,127,1)_50%,rgba(14,25,99,1)_75%,rgba(1,18,39,1)_100%)] p-8 sm:p-12 lg:p-16">
              <h2 className="font-playfair font-medium text-white text-2xl sm:text-3xl lg:text-[40px] text-center mb-8 sm:mb-12 lg:mb-16">
                Frequently Asked Questions
              </h2>

              <Accordion
                type="single"
                collapsible
                className="w-full max-w-[977px] mx-auto"
              >
                {faqItems.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border-b border-white/20"
                  >
                    <AccordionTrigger className="py-4 text-white hover:text-gray-200 no-underline hover:no-underline">
                      <div className="flex items-center text-left">
                        <img
                          src="/pricing/noun-question-7004840-2.svg"
                          alt="Question icon"
                          className="w-[24px] h-[30px] sm:w-[30px] sm:h-[37px] mr-3 sm:mr-4 flex-shrink-0"
                        />
                        <span className="font-gantari font-semibold text-white text-sm sm:text-base">
                          {item.question}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-white/80 pl-8 sm:pl-12 text-sm sm:text-base">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section data-nav-dark="false" className="relative w-full py-12 sm:py-16 text-center">
          <div className="relative w-full max-w-7xl pl-4 sm:pl-8 md:pl-16 lg:pl-[85px] pr-4 sm:pr-8 md:pr-16 lg:pr-[85px] mx-auto">
            <h2 className="font-gantari font-normal text-[#162694] text-3xl sm:text-4xl lg:text-5xl leading-tight lg:leading-[53.8px]">
              Try InteliDoc AI for 7 days for free.
            </h2>
            <p className="font-gantari font-normal text-black text-lg sm:text-xl mt-4 sm:mt-6 max-w-[760px] mx-auto">
              We know once you try InteliDoc AI, you won&apos;t want to work{" "}
              <br className="hidden sm:block" />
              without it. So give it a go — no credit card needed.
            </p>

            <Link href="/tryfree" target="_blank">
              <Button className="mt-8 sm:mt-12 w-full max-w-[220px] sm:max-w-[238px] h-12 sm:h-[57px] rounded-[5px] bg-[linear-gradient(131deg,rgba(46,52,90,1)_0%,rgba(12,17,46,1)_28%,rgba(13,23,90,1)_56%,rgba(16,29,113,1)_81%,rgba(19,33,128,1)_100%)] text-white hover:opacity-90 transition-opacity px-4">
                <span className="font-gantari font-semibold text-white text-base sm:text-lg">
                  Try InteliDoc AI-
                  <span className="text-[#a9a7a7] text-sm sm:text-base">it&apos;s free</span>
                </span>
              </Button>
            </Link>
          </div>
        </section>

        {/* Footer */}
        <Footer links={footerLinks} />
      </div>
    </div>
  );
};

