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
                <h1 className="font-playfair font-semibold text-white text-3xl sm:text-4xl lg:text-[52px] leading-tight lg:leading-[57.7px]">
                  Simple, transparent pricing
                </h1>
                <p className="mt-6 sm:mt-8 font-gantari text-white text-base sm:text-lg max-w-[470px]">
                  Start free, upgrade when you're ready. No hidden fees, no surprises.
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
                          className={`px-3 py-1 rounded-full text-xs font-['Gantari',Helvetica] transition-colors duration-150 ${billingPeriod === 'monthly'
                            ? 'bg-[#885aff] text-white'
                            : 'text-[#0b0b0b]'
                            }`}
                          onClick={() => setBillingPeriod('monthly')}
                        >
                          Monthly
                        </button>
                        <button
                          type="button"
                          className={`px-3 py-1 rounded-full text-xs font-['Gantari',Helvetica] transition-colors duration-150 ${billingPeriod === 'annually'
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
                          className={`px-3 py-1 rounded-full text-xs font-['Gantari',Helvetica] transition-colors duration-150 ${billingPeriod === 'monthly'
                            ? 'bg-[#885aff] text-white'
                            : 'text-[#0b0b0b]'
                            }`}
                          onClick={() => setBillingPeriod('monthly')}
                        >
                          Monthly
                        </button>
                        <button
                          type="button"
                          className={`px-3 py-1 rounded-full text-xs font-['Gantari',Helvetica] transition-colors duration-150 ${billingPeriod === 'annually'
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
        <section className="relative w-full px-4 sm:px-6 py-12 sm:py-16">
          <div className="max-w-[1127px] mx-auto">
            <h2 className="font-playfair font-medium text-[#162694] text-2xl sm:text-3xl lg:text-[34px] text-center lg:text-left">
              Choose the plan that works for you
            </h2>

            {/* Mobile-friendly feature list */}
            <div className="mt-8 block lg:hidden">
              {features.map((feature, index) => (
                <div key={index} className="border-b border-gray-200 py-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1 pr-4">
                      <h3 className="font-['Gantari',Helvetica] text-black text-lg sm:text-xl">
                        {feature.title}
                      </h3>
                      <p className="font-['Gantari',Helvetica] text-[#757171] text-sm sm:text-[15px] mt-2">
                        {feature.description}
                      </p>
                    </div>
                    <div className="flex space-x-4">
                      <img
                        src="/pricing/noun-tick-7438312-5.svg"
                        alt="Individual Plan"
                        className="w-6 h-6 sm:w-[34px] sm:h-10"
                      />
                      <img
                        src="/pricing/noun-tick-7438312-5.svg"
                        alt="Group Plan"
                        className="w-6 h-6 sm:w-[34px] sm:h-10"
                      />
                    </div>
                  </div>
                </div>
              ))}

              {/* Additional Features for Mobile */}
              {additionalFeatures.map((feature, index) => (
                <div key={`additional-${index}`} className="border-b border-gray-200 py-4">
                  <div className="flex items-center">
                    <div className="w-[30px] h-9 mr-4">
                      <img
                        src={feature.icon}
                        alt={feature.title}
                        className="w-[22px] h-[21px] mt-1.5 ml-2"
                      />
                    </div>
                    <span
                      className={`font-['Gantari',Helvetica] ${index === 0 ? "text-[#162694]" : "text-black"} text-lg sm:text-xl`}
                    >
                      {feature.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop table */}
            <div className="hidden lg:block">
              <Table className="mt-8">
                <TableBody>
                  {features.map((feature, index) => (
                    <TableRow key={index} className="border-b border-gray-200">
                      <TableCell className="py-6 pl-4">
                        <h3 className="font-['Gantari',Helvetica] text-black text-xl">
                          {feature.title}
                        </h3>
                        <p className="font-['Gantari',Helvetica] text-[#757171] text-[15px]">
                          {feature.description}
                        </p>
                      </TableCell>
                      <TableCell className="text-center">
                        <img
                          src="/pricing/noun-tick-7438312-5.svg"
                          alt="Included"
                          className="w-[34px] h-10 mx-auto"
                        />
                      </TableCell>
                      <TableCell className="text-center">
                        <img
                          src="/pricing/noun-tick-7438312-5.svg"
                          alt="Included"
                          className="w-[34px] h-10 mx-auto"
                        />
                      </TableCell>
                    </TableRow>
                  ))}

                  {/* Addition features section  */}

                  {/* Additional Features Section */}
                  {additionalFeatures.map((feature, index) => (
                    <TableRow
                      key={`additional-${index}`}
                      className="border-b border-gray-200"
                    >
                      <TableCell colSpan={3} className="py-4">
                        <div className="flex items-center">
                          <div className="w-[30px] h-9 mr-4">
                            <img
                              src={feature.icon}
                              alt={feature.title}
                              className="w-[22px] h-[21px] mt-1.5 ml-2"
                            />
                          </div>
                          <span
                            className={`font-['Gantari',Helvetica] ${index === 0 ? "text-[#162694]" : "text-black"} text-xl`}
                          >
                            {feature.title}
                          </span>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 lg:gap-16 mt-8">
              <Button className="w-full sm:w-[281px] h-[46px] rounded-[5px] bg-gradient-to-r from-[rgba(135,89,255,1)] to-[rgba(174,141,255,1)] text-white font-medium text-base sm:text-lg hover:opacity-90 transition-opacity">
                Start Free Trial
              </Button>
              <Button className="w-full sm:w-[281px] h-[46px] rounded-[5px] bg-gradient-to-r from-[rgba(255,155,89,1)] to-[rgba(255,215,141,1)] text-black font-medium text-base sm:text-lg hover:opacity-90 transition-opacity">
                Start Free Trial
              </Button>
            </div>
          </div>
        </section>


        <section className="relative w-full py-12 sm:py-16 overflow-hidden">
          <div className="absolute w-[400px] sm:w-[792px] h-[400px] sm:h-[764px] top-[61px] right-[-100px] sm:right-[-200px] rounded-[50%] blur-[100px] bg-gradient-to-br from-[rgba(22,38,148,0.3)] to-[rgba(255,155,188,0.3)]" />
          <div className="absolute w-[300px] sm:w-[638px] h-[300px] sm:h-[609px] top-[86px] left-[-50px] sm:left-0 rounded-[50%] blur-[100px] bg-gradient-to-br from-[rgba(22,38,148,0.4)] to-[rgba(255,155,188,0.4)]" />

          <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/3 flex justify-center">
              <img
                src="/pricing/ellipse-53.png"
                alt="Doctor"
                className="w-[200px] h-[200px] sm:w-[268px] sm:h-[267px] rounded-full object-cover"
              />
            </div>
            <div className="lg:w-2/3 text-center lg:text-left">
              <blockquote className="font-['Gantari',Helvetica] text-black text-xl sm:text-2xl lg:text-[32px] leading-relaxed lg:leading-[43.5px]">
                &#34;InteliDoc AI has been life-changing! I was up till 10 pm
                two weeks ago writing notes instead of spending time after work
                with my 4 small kids. This week with Freed I&apos;m baking
                cookies with them and even working out daily!&#34;
                <br />
                <br />
                <cite className="text-lg sm:text-xl lg:text-2xl">— SF, MD, Primary Care Physician</cite>
              </blockquote>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative w-full py-12 sm:py-16">
          <div className="max-w-[1208px] mx-auto px-4 sm:px-6">
            <div className="rounded-[20px] bg-[radial-gradient(50%_50%_at_4%_0%,rgba(1,18,39,1)_5%,rgba(14,25,99,1)_45%,rgba(15,38,127,1)_78%,rgba(1,18,39,1)_99%)] p-8 sm:p-12 lg:p-16">
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
                    <AccordionTrigger className="py-4 text-white hover:text-gray-200">
                      <div className="flex items-center text-left">
                        <img
                          src="/pricing/noun-question-7004840-2.svg"
                          alt="Question icon"
                          className="w-[24px] h-[30px] sm:w-[30px] sm:h-[37px] mr-3 sm:mr-4 flex-shrink-0"
                        />
                        <span className="font-['Gantari',Helvetica] font-semibold text-white text-sm sm:text-base">
                          {item.question}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-white/80 pl-8 sm:pl-12 text-sm sm:text-base">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!
                    </AccordionContent>
                  </AccordionItem>
                ))}

                {/* Duplicated items to match the design */}
                {faqItems.map((item, index) => (
                  <AccordionItem
                    key={`dup-${index}`}
                    value={`dup-item-${index}`}
                    className="border-b border-white/20"
                  >
                    <AccordionTrigger className="py-4 text-white hover:text-gray-200">
                      <div className="flex items-center text-left">
                        <img
                          src="/pricing/noun-question-7004840-2.svg"
                          alt="Question icon"
                          className="w-[24px] h-[30px] sm:w-[30px] sm:h-[37px] mr-3 sm:mr-4 flex-shrink-0"
                        />
                        <span className="font-['Gantari',Helvetica] font-semibold text-white text-sm sm:text-base">
                          {item.question}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-white/80 pl-8 sm:pl-12 text-sm sm:text-base">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative w-full py-12 sm:py-16 text-center px-4 sm:px-6">
          <h2 className="font-gantari font-normal text-[#162694] text-3xl sm:text-4xl lg:text-5xl leading-tight lg:leading-[53.8px]">
            Try InteliDoc AI for 7 days for free.
          </h2>
          <p className="font-gantari font-normal text-black text-lg sm:text-xl mt-4 sm:mt-6 max-w-[760px] mx-auto">
            We know once you try InteliDoc AI, you won&apos;t want to work{" "}
            <br className="hidden sm:block" />
            without it. So give it a go — no credit card needed.
          </p>

          <Button className="mt-8 sm:mt-12 w-full max-w-[220px] sm:max-w-[238px] h-12 sm:h-[57px] rounded-[5px] bg-[linear-gradient(131deg,rgba(46,52,90,1)_0%,rgba(12,17,46,1)_28%,rgba(13,23,90,1)_56%,rgba(16,29,113,1)_81%,rgba(19,33,128,1)_100%)] text-white hover:opacity-90 transition-opacity px-4">
            <span className="font-gantari font-semibold text-white text-base sm:text-lg">
              Try InteliDoc AI-
              <span className="text-[#a9a7a7] text-sm sm:text-base">it&apos;s free</span>
            </span>
          </Button>
        </section>



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
              <h3 className="font-gantari font-medium text-black text-2xl sm:text-3xl mt-4">
                InteliDoc
              </h3>
            </div>

            <div className="text-center">
              <h4 className="font-gantari font-medium text-black text-lg sm:text-xl mb-4">
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
              <h4 className="font-gantari font-medium text-black text-lg sm:text-xl mb-4">
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

