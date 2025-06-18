'use client'

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Separator } from "../components/ui/separator";
import { Tabs, TabsList, TabsTrigger } from "../components/ui/tabs";
import "keen-slider/keen-slider.min.css"
import { useKeenSlider } from "keen-slider/react";
import Image from 'next/image';
import Link from 'next/link';
import { Footer } from "./components/footer";

// Define testimonial data for reuse
const testimonials = [
  {
    specialty: "Internal Medicine1",
    name: "Alex, DO",
    content:
      "InteliDoc has cut my documentation time in half. I'm more present with my patients and no longer buried in notes after clinic. It's been a game-changer for work-life balance.",
  },
  {
    specialty: "Internal Medicine2",
    name: "Alex, DO",
    content:
      "InteliDoc has cut my documentation time in half. I'm more present with my patients and no longer buried in notes after clinic. It's been a game-changer for work-life balance.",
  },
  {
    specialty: "Internal Medicine3",
    name: "Alex, DO",
    content:
      "InteliDoc has cut my documentation time in half. I'm more present with my patients and no longer buried in notes after clinic. It's been a game-changer for work-life balance.",
  },
  {
    specialty: "Internal Medicine4",
    name: "Alex, DO",
    content:
      "InteliDoc has cut my documentation time in half. I'm more present with my patients and no longer buried in notes after clinic. It's been a game-changer for work-life balance.",
  },
];

// Feature cards data
const featureCards = [
  {
    title: "Accurate",
    description:
      "The most accurate solution in the market, trusted by clinicians globally.",
    icon: "/home-images/group.png",
    secondIcon: "/home-images/group-1.png",
  },
  {
    title: "Capturing",
    description: "Record and capture patient interactions with high accuracy.",
    icon: "/home-images/noun-record-7859239-1.svg",
  },
  {
    title: "Clinical Notes",
    description: "Generate comprehensive clinical notes automatically.",
    icon: "/home-images/noun-note-7815854-1.svg",
  },
  {
    title: "Personalized",
    description: "Twofold learns your style of writing and improves over time.",
    icon1: "/home-images/vector-3.svg",
    icon2: "/home-images/vector-4.svg",
  },
];

// Security features data
const securityFeatures = [
  {
    title: "HIPAA and HITECH Compliance",
    description:
      "Twofold is dedicated to maintaining full compliance with HIPAA and HITECH regulations. Our policies and procedures are designed to meet and exceed these standards, ensuring the protection of all data.",
  },
  {
    title: "Recordings Are Never Stored",
    description:
      "Scribe are able to document a First- hand account of the provider and patient interaction over a HIPAA- compliant connection",
  },
  {
    title: "Rigorous Data Protection",
    description:
      "At Twofold, we prioritize the security and confidentiality of patient and clinician data through stringent adherence to HIPAA and HITECH protocols. All data within our ecosystem is encrypted both at rest and in transit, ensuring the highest standards of protection.",
  },
  {
    title: "Comprehensive Security Measures",
    description:
      "We conduct thorough pre-employment background checks and mandate annual security awareness training for all team members. Ensuring continuous adherence to the latest standards.",
  },
  {
    title: "Secure Development Practices",
    description:
      "Our software development lifecycle includes rigorous compliance reviews and an infrastructure-as-code methodology to maintain secure deployment. Our engineering team is trained in best practices to uphold and enhance security.",
  },
  {
    title: "Reliable Cloud Hosting",
    description:
      "Twofold leverages Microsoft Azure's secure, compliant data centers and holds a formal HIPAA Business Associate Agreement with Microsoft. This ensures data integrity and constant availability.",
  },
];

// Integration options data
const integrationOptions = [
  {
    title: "Chrome extension",
    color: "bg-gradient-to-r from-[#7c48ff] to-[#8859ff]",
    buttonText: "Download Now",
    buttonColor: "bg-gradient-to-r from-[#8759ff] to-[#ae8dff]",
    features: [
      { checked: true, text: "Works with web-based EHRs" },
      { checked: true, text: "Same window as EHR" },
      { checked: false, text: "One-click note transfer" },
      { checked: false, text: "Notes structured for EHR" },
      { checked: false, text: "Enterprise-wide deployment" },
      { checked: false, text: "Custom EHR configuration" },
    ],
  },
  {
    title: "Direct integration",
    color: "bg-orange-500",
    buttonText: "Contact US",
    buttonColor: "bg-gradient-to-r from-[#fbb23c] to-[#f97316]",
    features: [
      { checked: true, text: "Works with web-based EHRs" },
      { checked: true, text: "Same window as EHR" },
      { checked: true, text: "One-click note transfer" },
      { checked: true, text: "Notes structured for EHR" },
      { checked: true, text: "Enterprise-wide deployment" },
      { checked: false, text: "Custom EHR configuration" },
    ],
  },
  {
    title: "Custom",
    color: "bg-black",
    buttonText: "Contact US",
    buttonColor: "bg-gradient-to-r from-[#595959] to-[#000000]",
    features: [
      { checked: true, text: "Works with web-based EHRs" },
      { checked: true, text: "Same window as EHR" },
      { checked: true, text: "One-click note transfer" },
      { checked: true, text: "Notes structured for EHR" },
      { checked: true, text: "Enterprise-wide deployment" },
      { checked: true, text: "Custom EHR configuration" },
    ],
  },
];

// FAQ data
const faqItems = [
  {
    question: "What is InteliDoc-AI?",
    answer: "",
  },
  {
    question: "How does InteliDoc-AI work?",
    answer: "",
  },
  {
    question: "What are the benefits of using InteliDoc-AI?",
    answer: "",
  },
  {
    question:
      "Is InteliDoc-AI secure and compliant with healthcare regulations?",
    answer: "",
  },
  {
    question:
      "Can InteliDoc-AI be customized to suit specific healthcare practices?",
    answer: "",
  },
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

export default function Home () {
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 3,
      spacing: 24,
    },
    breakpoints: {
      "(max-width: 1024px)": {
        slides: {
          perView: 2,
          spacing: 24,
        },
      },
      "(min-width: 1025px)": {
        slides: {
          perView: 3,
          spacing: 24,
        },
      },
    },
    drag: true,
    renderMode: "performance",
    created(s) {
      setInterval(() => s.next(), 2500)
    },
  })

  return (
    <div className="bg-[#f3f3f3] flex flex-col w-full min-h-screen">
      <div className="bg-[#f3f3f3] overflow-hidden w-full max-w-none relative">
        {/* Hero Section */}
        <section className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[612px]">
          <Image
            className="absolute w-full h-full top-0 left-0 object-cover"
            alt="Hero background"
            src="/home-images/rectangle-1.png" width={50} height={50}
          />
          <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-b from-[rgba(0,0,0,0.1)] to-[rgba(0,0,0,1)]" />

          <div className="absolute top-8 sm:top-16 md:top-24 lg:top-[159px] left-4 sm:left-8 md:left-16 lg:left-[85px] right-4 sm:right-8 md:right-16 lg:right-auto font-playfair font-semibold text-white text-2xl sm:text-3xl md:text-4xl lg:text-[52px] leading-tight lg:leading-[57.7px]">
            Auto-generated <br />
            clinical notes, as if <br />
            by magic.
          </div>

          {/* Video placeholder - hidden on mobile, responsive on larger screens */}
          <div className="hidden md:block absolute w-[300px] md:w-[400px] lg:w-[565px] h-[200px] md:h-[250px] lg:h-[359px] top-20 md:top-32 lg:top-40 right-4 md:right-8 lg:right-[53px] bg-[#d9d9d9] rounded-[20px]" />

          <div className="absolute w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[494px] top-48 sm:top-56 md:top-64 lg:top-[354px] left-4 sm:left-8 md:left-16 lg:left-[85px] font-light text-white text-base sm:text-lg md:text-xl lg:text-[25px] font-gantari leading-relaxed">
            The most reliable and beloved tool for creating accurate, compliant
            medical notes.
          </div>

          <Button className="absolute w-full max-w-[200px] sm:max-w-[218px] h-12 sm:h-[57px] top-72 sm:top-80 md:top-96 lg:top-[454px] left-4 sm:left-8 md:left-16 lg:left-[85px] rounded-[5px] bg-gradient-to-br from-[rgba(46,52,90,1)] via-[rgba(13,23,90,1)] to-[rgba(19,33,128,1)] text-white font-semibold text-sm sm:text-base">
            <span>Try InteliDoc AI-</span>
            <span className="text-[#a9a7a7] text-xs sm:text-sm ml-1">it's free</span>
          </Button>
        </section>

        {/* Fixed Navigation */}
        <nav className="fixed w-full top-0 bg-gradient-to-b from-[rgba(255,255,255,0.6)] to-[rgba(255,255,255,0)] backdrop-blur-[21px] z-50">
          <div className="flex items-center h-14 sm:h-16 lg:h-[57px] px-4 sm:px-8 lg:px-16">
            <Link href="/">
              <div className="font-['Geist',Helvetica] font-bold text-white text-lg sm:text-xl">
                InteliDoc AI
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-6 ml-32">
              <Link href="/testimonials">
                <Button
                  variant="link"
                  className="text-white font-medium text-[15px] p-0"
                >
                  Testimonials
                </Button>
              </Link>
              <Link href="/features">
                <Button
                  variant="link"
                  className="text-white font-medium text-[15px] p-0"
                >
                  Features
                </Button>
              </Link>
              <Link href="/how-it-works">
                <Button
                  variant="link"
                  className="text-white font-medium text-[15px] p-0"
                >
                  How it Works
                </Button>
              </Link>
              <Link href="/security">
                <Button
                  variant="link"
                  className="text-white font-medium text-[15px] p-0"
                >
                  Security
                </Button>
              </Link>
              <Link href="/pricing">
                <Button
                  variant="link"
                  className="text-white font-medium text-[15px] p-0"
                >
                  Pricing
                </Button>
              </Link>
              <Link href="/specialities">
                <Button
                  variant="link"
                  className="text-white font-medium text-[15px] p-0"
                >
                  Specialty
                </Button>
              </Link>
              <Link href="/groups">
                <Button
                  variant="link"
                  className="text-white font-medium text-[15px] p-0"
                >
                  For Groups
                </Button>
              </Link>
            </div>

            <div className="ml-auto flex items-center space-x-2 sm:space-x-4">
              <Link href="/login">
                <Button variant="link" className="text-white font-medium text-sm sm:text-base p-0 hidden sm:block">
                  Log In
                </Button>
              </Link>
              <Link href="/signup">
                <Button className="bg-white text-[#162694] font-semibold text-xs sm:text-[15px] h-7 sm:h-8 px-3 sm:px-4 rounded-[5px]">
                  Try for free
                </Button>
              </Link>
            </div>
          </div>
        </nav>

        {/* Testimonials Section */}
        <section className="mt-8 sm:mt-12 lg:mt-14 pt-8 sm:pt-10 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-8 lg:px-0">
          <div className="relative w-full max-w-7xl mx-auto">
            <h2 className="font-playfair font-semibold text-[#162694] text-2xl sm:text-3xl md:text-4xl lg:text-[45px] leading-tight lg:ml-[92px] text-center lg:text-left">
              Trusted and loved by<br className="hidden sm:block" />
              therapists, doctors, and nurses.
            </h2>

            {/* Background Design */}
            <div className="hidden lg:block absolute right-[-250px] top-1/2 -translate-y-1/2 w-[710px] h-[553px] pointer-events-none z-0">
                <div className="absolute w-[50px] h-[50px] top-[113px] left-[203px] bg-[#f7d8e5] rounded-[25px]" />
                <Image
                  className="absolute w-[373px] h-[423px] top-0 left-[165px]"
                  alt="Vector"
                  src="/home-images/vector-1.svg"  width={50} height={50}
                />
                <Image
                  className="absolute w-[341px] h-[330px] top-5 left-[198px]"
                  alt="Vector"
                  src="/home-images/vector-2.svg"  width={50} height={50}
                />
                      </div>

            {/* Carousel */}
            <div className="relative z-10">
              <div ref={sliderRef} className="keen-slider mt-8">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="keen-slider__slide flex justify-center">
                    <Card className="w-[340px] h-[330px] border border-solid border-[#a9a9a9] rounded-[10px] bg-white">
                      <CardContent className="pt-6 px-6 pb-6">
                        <div className="font-gantari text-black text-lg sm:text-xl lg:text-2xl">
                        <span className="font-semibold">
                          {testimonial.specialty}
                          <br />
                        </span>
                        <span>
                          {testimonial.name}
                          <br />
                        </span>
                          <span className="text-base sm:text-lg lg:text-xl">{testimonial.content}</span>
                      </div>
                    </CardContent>
                  </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="relative w-full py-12 sm:py-16 mt-4 sm:mt-8 bg-gradient-to-br from-[rgba(46,52,90,1)] via-[rgba(13,23,90,1)] to-[rgba(19,33,128,1)]">
          <div className="relative z-10 px-4 sm:px-8 lg:px-0 max-w-7xl mx-auto">
            <h2 className="font-playfair font-semibold text-white text-2xl sm:text-3xl md:text-4xl lg:text-[46px] leading-tight text-center lg:text-left lg:ml-[89px] mb-8 sm:mb-12 lg:mb-16">
              Created by healthcare professionals, <br className="hidden sm:block" />
              for healthcare professionals.
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-[37px] lg:ml-[92px] max-w-6xl">
              {featureCards.map((feature, index) => (
                <Card
                  key={index}
                  className="w-full max-w-[248px] h-auto min-h-[200px] bg-[#fff9f9] rounded-[10px] relative mx-auto lg:mx-0"
                >
                  <CardContent className="p-6 relative h-full flex flex-col items-center">
                    <h3 className="font-playfair font-bold text-black text-lg sm:text-xl mb-4">
                      {feature.title}
                    </h3>

                    {/* Feature Icons */}
                    {feature.title === "Accurate" && (
                      <div className="w-12 h-16 mb-4">
                        <div className="relative w-12 h-[49px]">
                          <div className="relative w-[50px] h-[51px]">
                            <Image
                              className="absolute w-10 h-[41px] top-2.5 left-0"
                              alt="Group"
                              src={feature.icon || ""}
                              width={50}
                              height={50}
                            />
                            <Image
                              className="absolute w-[31px] h-[31px] top-0 left-[19px]"
                              alt="Group"
                              src={feature.secondIcon || ""}
                              width={50}
                              height={50}
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {feature.title === "Capturing" && (
                      <div className="w-[72px] h-[89px] mb-4">
                        <Image
                          className="w-full h-full"
                          alt="Recording"
                          src={feature.icon || ""}
                          width={50}
                          height={50}
                        />
                      </div>
                    )}

                    {feature.title === "Clinical Notes" && (
                      <div className="w-full mb-4">
                        <div className="border border-black rounded-[10px] p-3 mb-3">
                          <div className="font-gantari font-semibold text-sm text-black">
                            Personalized
                          </div>
                        </div>
                        <Button className="w-full bg-gradient-to-br from-[rgba(46,52,90,1)] via-[rgba(13,23,90,1)] to-[rgba(19,33,128,1)] text-white font-normal text-xs rounded-[5px]">
                          Copy
                        </Button>
                      </div>
                    )}

                    {feature.title === "Personalized" && (
                      <div className="w-[47px] h-[59px] mb-4 relative">
                        <Image
                          className="absolute w-[33px] h-[15px] top-[25px] left-[7px]"
                          alt="Vector"
                          src={feature.icon1 || ""}
                          width={50}
                          height={50}
                        />
                        <Image
                          className="absolute w-[15px] h-4 top-[7px] left-4"
                          alt="Vector"
                          src={feature.icon2 || ""}
                          width={50}
                          height={50}
                        />
                      </div>
                    )}

                    <p className="font-gantari font-medium text-[#7b7979] text-xs sm:text-[13px] text-center leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="mt-16 sm:mt-24 lg:mt-32 pt-8 sm:pt-12 lg:pt-16 px-4 sm:px-8 lg:px-0">
          <h2 className="text-center font-playfair font-semibold text-[#162694] text-2xl sm:text-3xl md:text-4xl lg:text-[47px]">
            Super simple.
          </h2>

          <div className="flex flex-col lg:flex-row mt-8 max-w-7xl mx-auto">
            
            {/* Process Visualization - Simplified for mobile */}
            <div className="w-full lg:w-[523px] mb-8 lg:mb-0 lg:ml-[89px] relative">
              {/* Grid background */}
              

              {/* Dotted connector lines for desktop only */}
              <svg
  className="hidden lg:block absolute z-30 pointer-events-none"
  width="600"
  height="700"
  style={{ left: 0, top: 0 }}
>
  <polyline
    points="80,170, 80,255, 150,255"
    fill="none"
    stroke="#222"
    strokeWidth="2"
    strokeDasharray="4,6"
  />
  
  <polyline
    points="365,320, 440,320, 440,410"
    fill="none"
    stroke="#222"
    strokeWidth="2"
    strokeDasharray="4,6"
  />
 
  <circle cx="80" cy="170" r="4" fill="#222" />
  <circle cx="150" cy="255" r="4" fill="#222" />
  <circle cx="365" cy="320" r="4" fill="#222" />
  <circle cx="440" cy="410" r="4" fill="#222" />
</svg>
              <div className="bg-[#e6e8f6] rounded-[10px] p-4 sm:p-6 lg:p-8 h-auto lg:h-[619px] relative z-20">
                {/* Mobile/Tablet simplified steps */}
                <div className="block lg:hidden space-y-6">
                  <div className="bg-[#fdf8ed] rounded-[10px] p-4">
                    <div className="font-gantari text-black text-lg sm:text-xl mb-4">
                      <span className="font-semibold">01. </span>
                      <span className="font-light">Start Visit</span>
                    </div>
                    <Button className="w-full bg-gradient-to-br from-[rgba(46,52,90,1)] via-[rgba(13,23,90,1)] to-[rgba(19,33,128,1)] text-white font-semibold text-sm rounded-[5px]">
                      Capture conversation
                    </Button>
                  </div>

                  <div className="bg-[#fdf8ed] rounded-[10px] p-4">
                    <div className="font-gantari text-black text-lg sm:text-xl mb-4">
                      <span className="font-semibold">02. </span>
                      <span className="font-light">Capturing</span>
                    </div>
                    <div className="flex justify-center">
                      <Image
                        className="w-16 h-20"
                        alt="Recording"
                        src="/home-images/noun-record-7859239-1.svg"
                        width={64}
                        height={80}
                      />
                    </div>
                  </div>

                  <div className="bg-[#fdf8ed] rounded-[10px] p-4">
                    <div className="font-gantari text-black text-lg sm:text-xl mb-4">
                      <span className="font-semibold">03. </span>
                      <span className="font-light">Clinical note</span>
                    </div>
                    <div className="w-full h-[94px] rounded-[10px] border-[0.5px] border-solid border-black p-3 flex items-center justify-between bg-white">
                      <div className="font-gantari font-semibold text-sm text-black">
                        Personalized
                      </div>
                      <Button className="bg-gradient-to-br from-[rgba(46,52,90,1)] via-[rgba(13,23,90,1)] to-[rgba(19,33,128,1)] text-white font-normal text-[11px] rounded-[5px] px-3 py-1">
                        Copy
                      </Button>
                    </div>
                  </div>
                  <div
                    className="absolute left-1/2 bottom-0 translate-x-[-50%] w-[3/5] h-[2/5] pointer-events-none"
                    style={{
                      width: '60%',
                      height: '40%',
                      backgroundImage: 'repeating-linear-gradient(0deg, #e0e0e0 0, #e0e0e0 1px, transparent 1px, transparent 10px), repeating-linear-gradient(90deg, #e0e0e0 0, #e0e0e0 1px, transparent 1px, transparent 10px)',
                      backgroundSize: '10px 10px',
                      borderRadius: '0 0 20px 20px',
                    }}
                  />
                  
                </div>

                {/* Desktop complex visualization */}
                <div className="hidden lg:block">
                  <div className="absolute w-[221px] h-[145px] top-7 left-[37px] bg-[#fdf8ed] rounded-[10px] p-4 overflow-hidden">
                    <div className="font-gantari text-black text-[22px] mb-4">
                      <span className="font-semibold">01. </span>
                      <span className="font-light">Start Visit</span>
                    </div>
                    <Button className="w-[166px] h-[46px] top-[101px] left-[45px] bg-gradient-to-br from-[rgba(46,52,90,1)] via-[rgba(13,23,90,1)] to-[rgba(19,33,128,1)] text-white font-semibold text-[15px] rounded-[5px]">
                      Capture conversation
                    </Button>
                    {/* Grid background at the bottom */}
                  
                  </div>

                  <div className="absolute w-[221px] h-[145px] top-[217px] left-[146px] bg-[#fdf8ed] rounded-[10px] p-4">
                    <div className="font-gantari text-black text-[22px] mb-4">
                      <span className="font-semibold">02. </span>
                      <span className="font-light">Capturing</span>
                    </div>
                    <div className="flex justify-center">
                      <Image
                        className="w-[72px] h-[88px]"
                        alt="Recording"
                        src="/home-images/noun-record-7859239-1.svg"
                        width={72}
                        height={88}
                      />
                    </div>
                  </div>

                  <div className="absolute w-[221px] h-[177px] top-[406px] left-[262px] bg-[#fdf8ed] rounded-[10px] p-4">
                    <div className="font-gantari text-black text-[22px] mb-4">
                      <span className="font-semibold">03. </span>
                      <span className="font-light">Clinical note</span>
                    </div>
                    <div className="w-full h-[94px] rounded-[10px] border-[0.5px] border-solid border-black p-3 flex items-center justify-between bg-white">
                      <div className="font-gantari font-semibold text-sm text-black">
                        Personalized
                      </div>
                      <Button className="bg-gradient-to-br from-[rgba(46,52,90,1)] via-[rgba(13,23,90,1)] to-[rgba(19,33,128,1)] text-white font-normal text-[11px] rounded-[5px] px-3 py-1">
                        Copy
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Steps Description */}
            <div className="w-full lg:w-[523px] lg:ml-10 lg:mt-16">
              <div className="space-y-8 sm:space-y-12 lg:space-y-16">
                <div>
                  <h3 className="font-playfair font-semibold text-black text-xl sm:text-2xl lg:text-[25px]">
                    01. Capture
                  </h3>
                  <Separator className="my-4 w-full lg:w-[519px]" />
                  <p className="font-gantari font-light text-[#5e5d5d] text-lg sm:text-xl">
                    Click "Capture Conversation" at the start of your visit.
                    Twofold listens—whether it's virtual or in-person—for up to
                    1.5 hours.
                  </p>
                </div>

                <div>
                  <h3 className="font-playfair font-semibold text-black text-xl sm:text-2xl lg:text-[25px]">
                    02. Review & Edit
                  </h3>
                  <Separator className="my-4 w-full lg:w-[519px]" />
                  <p className="font-gantari font-light text-[#5e5d5d] text-lg sm:text-xl">
                    When you're done, click "End Conversation" to instantly review
                    your personalized note. Twofold adapts to your style with
                    every visit.
                  </p>
                </div>

                <div>
                  <h3 className="font-playfair font-semibold text-black text-xl sm:text-2xl lg:text-[25px]">
                    03. Send
                  </h3>
                  <Separator className="my-4 w-full lg:w-[519px]" />
                  <p className="font-gantari font-light text-[#5e5d5d] text-lg sm:text-xl">
                    Easily send auto-generated patient instructions and copy
                    finalized notes into any EHR.
                  </p>
                </div>
              </div>

              <Button className="mt-8 sm:mt-12 lg:mt-16 w-full sm:w-auto sm:min-w-[218px] h-12 sm:h-[57px] rounded-[5px] bg-gradient-to-br from-[rgba(46,52,90,1)] via-[rgba(13,23,90,1)] to-[rgba(19,33,128,1)] text-white font-semibold">
                <span>Try InteliDoc AI-</span>
                <span className="text-[#a9a7a7] text-sm ml-1">it's free</span>
              </Button>
            </div>
            
          </div>
         
        
        </section>

        {/* Alternative Options Section */}
        <section className="relative mt-12 sm:mt-16 pt-12 sm:pt-16 pb-16 sm:pb-24">
          {/* Background Effects */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute w-[300px] sm:w-[400px] lg:w-[494px] h-[300px] sm:w-[400px] lg:h-[567px] top-[50px] sm:top-[70px] lg:top-[93px] -left-[100px] sm:-left-[50px] lg:left-0 rounded-full blur-[30px] sm:blur-[40px] lg:blur-[50px] bg-gradient-to-br from-[rgba(22,38,148,0.4)] to-[rgba(255,155,188,0.4)]" />
            <div className="absolute w-[300px] sm:w-[500px] lg:w-[640px] h-[300px] sm:h-[450px] lg:h-[607px] top-[50px] sm:top-[70px] lg:top-[88px] -right-[100px] sm:-right-[50px] lg:right-[100px] rounded-full blur-[30px] sm:blur-[40px] lg:blur-[50px] bg-gradient-to-br from-[rgba(22,38,148,0.4)] to-[rgba(255,155,188,0.4)]" />
            <div className="absolute inset-0 bg-gradient-to-br from-[rgba(255,255,255,0.6)] to-[rgba(255,255,255,0.2)] backdrop-blur-[21px]" />
          </div>

          <div className="relative z-10 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
            <h2 className="font-playfair font-semibold text-[#162694] text-2xl sm:text-3xl md:text-4xl lg:text-[46px] leading-tight text-center lg:text-left">
              Don't want to capture the conversation?
            </h2>

            <h3 className="font-playfair font-semibold text-[#162694] text-3xl sm:text-4xl md:text-5xl lg:text-[64px] mt-2 sm:mt-4 text-center lg:text-left">
              No worries.
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 mt-8 sm:mt-12 lg:mt-16">
              <Card className="relative w-full max-w-[521px] bg-white rounded-[20px] border border-solid border-[#a9a9a9] overflow-visible mx-auto lg:mx-0 p-0">
              <div className="w-full h-6 bg-[#162694] rounded-t-[20px] flex items-center justify-center">
                <span className="text-white text-xs font-medium">FEATURE</span>
              </div>
                <div className="w-full h-16 sm:h-[65px] rounded-[15px_15px_0px_0px] bg-gradient-radial from-[rgba(83,93,173,1)] to-[rgba(21,37,145,1)] flex items-center justify-center">
                  <h3 className="font-playfair font-medium text-white text-xl sm:text-2xl lg:text-[32px]">
                    Dictate a summary
                  </h3>
                </div>
                <CardContent className="pt-6 sm:pt-8 lg:pt-10 px-4 sm:px-6 pb-4 sm:pb-6 flex flex-col items-center">
                  <div className="flex justify-center mb-4 sm:mb-6">
                    <Image
                      className="w-24 h-28 sm:w-[130px] sm:h-[150px]"
                      alt="Noun record"
                      src="/home-images/noun-record-7859239-1.svg"
                      width={130}
                      height={150}
                    />
                  </div>
                  <p className="font-gantari font-light text-[#5e5d5d] text-base sm:text-lg lg:text-xl text-center">
                    Simply provide a quick recap of the session in natural language and we'll create the full note, in your writing style
                  </p>
                  {/* Grid background at the bottom */}
                 
                </CardContent>
              </Card>

              <Card className="w-full max-w-[521px] bg-white rounded-[20px] border border-solid border-[#a9a9a9] overflow-visible mx-auto lg:mx-0 p-0">
              <div className="w-full h-6 bg-[#162694] rounded-t-[20px] flex items-center justify-center">
                <span className="text-white text-xs font-medium">FEATURE</span>
              </div>
                <div className="w-full h-16 sm:h-[65px] rounded-[15px_15px_0px_0px] bg-gradient-radial from-[rgba(83,93,173,1)] to-[rgba(21,37,145,1)] flex items-center justify-center">
                  <h3 className="font-playfair font-medium text-white text-xl sm:text-2xl lg:text-[32px]">
                    Upload your notes
                  </h3>
                </div>
                <CardContent className="pt-6 sm:pt-8 lg:pt-10 px-4 sm:px-6 pb-4 sm:pb-6 flex flex-col items-center">
               
                  <div className="flex justify-center mb-4 sm:mb-6">
                    <Image
                      className="w-24 h-28 sm:w-[130px] sm:h-[150px]"
                      alt="Noun note"
                      src="/home-images/noun-note-7815854-1.svg"
                      width={130}
                      height={150}
                    />
                  </div>
                  <p className="font-gantari font-light text-[#5e5d5d] text-base sm:text-lg lg:text-xl text-center">
                    Upload your handwritten or typed session notes as they are, and we'll create a high-quality and comprehensive note
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="w-full max-w-[1103px] h-auto lg:h-[325px] mt-16 sm:mt-20 lg:mt-24 rounded-[20px] bg-gradient-to-br from-[rgba(46,52,90,1)] via-[rgba(13,23,90,1)] to-[rgba(19,33,128,1)] mx-auto">
              <CardContent className="p-6 sm:p-8 lg:p-12">
                <h2 className="font-playfair font-semibold text-white text-2xl sm:text-3xl md:text-4xl lg:text-[46px] leading-tight text-center lg:text-left">
                  Support your team. <br className="hidden sm:block" />
                  Strengthen patient outcomes.
                </h2>
                <p className="font-gantari text-white text-base sm:text-lg lg:text-xl mt-4 sm:mt-6 lg:mt-8 text-center lg:text-left">
                  Put patients first—not paperwork. Join thousands of clinicians
                  using AI to work smarter.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Privacy & Security Section */}
        <section className="mt-12 sm:mt-16 pt-12 sm:pt-16 px-4 sm:px-8 lg:px-0">
          <div className="max-w-7xl mx-auto">
            <Separator className="w-full max-w-[1104px] mx-auto" />

            <h2 className="font-playfair font-semibold text-[#162694] text-2xl sm:text-3xl md:text-4xl lg:text-[50px] mt-6 sm:mt-8 text-center lg:text-left lg:ml-[91px]">
              Privacy & Security.
            </h2>

            <p className="font-gantari text-black text-lg sm:text-2xl md:text-3xl lg:text-[35px] mt-6 sm:mt-8 text-center lg:text-left lg:ml-[91px]">
              We don't train our models on your data. We don't store any audio.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mt-8 sm:mt-12 lg:mt-16 lg:ml-[91px] max-w-5xl">
              {securityFeatures.map((feature, index) => (
                <Card
                  key={index}
                  className="w-full max-w-[455px] h-auto lg:h-80 relative border-[0.2px] border-solid border-[#a9a3a3] shadow-[4px_4px_10px_2px_#0000001a] mx-auto lg:mx-0"
                >
                  <div className="absolute w-16 sm:w-[73px] h-[5px] top-0 left-6 sm:left-8 bg-[#162694]" />
                  <CardContent className="pt-8 sm:pt-10 px-6 sm:px-8 pb-6 sm:pb-8">
                    <h3 className="font-['Geist',Helvetica] font-medium text-black text-lg sm:text-xl leading-tight sm:leading-[31px]">
                      {feature.title}
                    </h3>
                    <p className="font-gantari font-normal text-[#626262] text-base sm:text-lg leading-relaxed sm:leading-[27.9px] mt-4 sm:mt-6">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center lg:text-left lg:ml-[92px]">
              <Button className="mt-8 sm:mt-12 lg:mt-16 w-full sm:w-auto sm:min-w-[218px] h-12 sm:h-[57px] rounded-[5px] bg-gradient-to-br from-[rgba(46,52,90,1)] via-[rgba(13,23,90,1)] to-[rgba(19,33,128,1)] text-white font-semibold">
                <span>Try InteliDoc AI-</span>
                <span className="text-[#a9a7a7] text-sm ml-1">it's free</span>
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mt-12 sm:mt-16 pt-12 sm:pt-16 px-4 sm:px-8 ">
          <Card className="w-full max-w-[1208px] h-auto lg:h-[648px] mx-auto rounded-[20px] bg-gradient-to-br from-[rgba(46,52,90,1)] via-[rgba(13,23,90,1)] to-[rgba(19,33,128,1)]">
            <CardContent className="p-6 sm:p-8 lg:p-12">
              <h2 className="font-playfair font-semibold text-white text-2xl sm:text-3xl lg:text-[40px] text-center mb-8 sm:mb-12 lg:mb-16">
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
                    className="border-b border-white"
                  >
                    <AccordionTrigger className="py-4 sm:py-6 text-white hover:no-underline">
                      <div className="flex items-center text-left">
                        <Image
                          className="w-6 h-7 sm:w-[30px] sm:h-[37px] mr-3 sm:mr-4 flex-shrink-0"
                          alt="Noun question"
                          src="/home-images/noun-question-7004840-5.svg"  width={50} height={50}  
                        />
                        <span className="font-['Gantari',Helvetica] font-semibold text-white text-sm sm:text-base">
                          {item.question}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-white text-sm sm:text-base">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </section>

        {/* Footer Section */}
        <Footer links={footerLinks} />
      </div>
    </div>
  );
};

