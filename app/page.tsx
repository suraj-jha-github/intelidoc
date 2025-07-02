'use client'

import React, { useRef, useEffect } from "react";
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
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from 'next/image';
import Link from 'next/link';
import { Footer } from "./components/footer";
import { Navigation } from "./features/__components/navigation";

// Define testimonial data for reuse
const testimonials = [
  {
    specialty: "Internal Medicine",
    name: "Alex, DO",
    content:
      "InteliDoc has cut my documentation time in half. I'm more present with my patients and no longer buried in notes after clinic. It's been a game-changer for work-life balance.",
  },
  {
    specialty: "Samantha Lee",
    name: "MD",
    content:
      "With InteliDoc, I spend less time clicking and more time connecting with kids and parents. Charting has gone from a burden to a breeze",
  },
  {
    specialty: "Dr Raj Patel",
    name: "Alex, DO",
    content:
      "InteliDoc gives me back hours each week. I'm finishing my notes before leaving the office — and getting home on time again",
  },
  {
    specialty: "Dr. Sinha",
    name: "DO",
    content:
      "With InteliDoc, I spend less time clicking and more time connecting with kids and parents. Charting has gone from a burden to a breeze.",
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
    description: "Intelidoc learns your style of writing and improves over time.",
    icon1: "/home-images/vector-3.svg",
    icon2: "/home-images/vector-4.svg",
  },
];

// Security features data
const securityFeatures = [
  {
    title: "HIPAA and HITECH Compliance",
    description:
      "Intelidoc is dedicated to maintaining full compliance with HIPAA and HITECH regulations. Our policies and procedures are designed to meet and exceed these standards, ensuring the protection of all data.",
  },
  {
    title: "Recordings Are Never Stored",
    description:
      "Scribe are able to document a First- hand account of the provider and patient interaction over a HIPAA- compliant connection",
  },
  {
    title: "Rigorous Data Protection",
    description:
      "At Intelidoc, we prioritize the security and confidentiality of patient and clinician data through stringent adherence to HIPAA and HITECH protocols. All data within our ecosystem is encrypted both at rest and in transit, ensuring the highest standards of protection.",
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
      "Intelidoc leverages Microsoft Azure's secure, compliant data centers and holds a formal HIPAA Business Associate Agreement with Microsoft. This ensures data integrity and constant availability.",
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
    answer: "InteliDoc-AI is an AI-powered documentation solution designed to automate clinical workflows, reduce manual data entry, and streamline patient record management in healthcare settings.",
  },
  {
    question: "How does InteliDoc-AI work?",
    answer: "It integrates with EHR systems to intelligently capture, process, and organize clinical information using natural language processing and automation tools.",
  },
  {
    question: "What are the benefits of using InteliDoc-AI?",
    answer: "It saves time, improves documentation accuracy, reduces administrative burden, and enhances provider efficiency—all while supporting better patient outcomes.",
  },
  {
    question:
      "Is InteliDoc-AI secure and compliant with healthcare regulations?",
    answer: "Yes, InteliDoc-AI is HIPAA-compliant and follows industry best practices to ensure patient data is secure and handled with strict confidentiality.",
  },
  {
    question:
      "Can InteliDoc-AI be customized to suit specific healthcare practices?",
    answer: "Absolutely. InteliDoc-AI is built with flexibility in mind and can be tailored to fit the unique workflows, specialties, and preferences of individual healthcare practices.",
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

const navItems = [
  { label: "Features", href: "/features" },
  { label: "Specialties", href: "/specialities" },
  { label: "Blog", href: "/blogs" },
  { label: "Pricing", href: "/pricing" },
  { label: "For Groups", href: "/forgroup" },
  { label: "Contact Us", href: "/contact" },
];

export default function Home() {
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

  const supportRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  // Optionally, you can expose these refs via context or window for the navigation to use
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.__intelidoc_support_section = supportRef.current;
      window.__intelidoc_faq_section = faqRef.current;
    }
  }, []);

  return (
    <div className="flex flex-row justify-center w-full">
      <div className="overflow-hidden w-full max-w-none relative">
        {/* Header Section */}
        <header className="relative w-full min-h-[500px] md:min-h-[622px]">
          <div className="absolute w-full h-full [background:linear-gradient(137deg,rgba(14,25,99,1)_0%,rgba(46,24,173,1)_47%,rgba(79,52,187,1)_60%,rgba(140,76,193,1)_71%,rgba(200,110,186,1)_82%,rgba(228,174,211,1)_94%,rgba(231,227,237,1)_100%)]" />

          {/* Navigation Bar */}
          <Navigation navItems={navItems} />

          {/* Hero Content */}
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between pl-4 sm:pl-8 md:pl-16 lg:pl-[85px] pr-4 sm:pr-8 md:pr-16 lg:pr-[85px] pt-24 md:pt-32 pb-8 max-w-7xl mx-auto h-full">
            <div className="flex-1 mb-8 lg:mb-0">
              <h1 className="font-playfair font-semibold text-white text-3xl md:text-4xl lg:text-[52px] tracking-[0] leading-tight md:leading-[57.7px] mb-6">
                Auto-generated <br />
                clinical notes, as if <br />
                by magic.
              </h1>

              <p className="font-gantari font-normal text-white text-lg md:text-xl lg:text-2xl leading-normal mb-8 max-w-[459px]">
                The most reliable and beloved tool for creating accurate, compliant
                medical notes.
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

        {/* Testimonials Section */}
        <section className="mt-[32px] pt-2 sm:pt-12 lg:pt-10 pb-6 sm:pb-6 lg:pb-6">
          <div className="relative w-full max-w-7xl pl-4 sm:pl-8 md:pl-16 lg:pl-[85px] pr-4 sm:pr-8 md:pr-16 lg:pr-[85px] mx-auto">
            <h2 className="font-playfair font-semibold text-[#162694] text-2xl sm:text-3xl md:text-4xl lg:text-[45px] leading-tight text-center lg:text-left mb-6 sm:mb-12 lg:mb-16">
              Trusted and loved by<br className="hidden sm:block" />
              therapists, doctors, and nurses.
            </h2>

            {/* Background Design */}
            <div className="hidden lg:block absolute right-[-250px] top-1/2 -translate-y-1/2 w-[710px] h-[553px] pointer-events-none z-0">
              <div className="absolute w-[50px] h-[50px] top-[113px] left-[203px] bg-[#f7d8e5] rounded-[25px]" />
              <Image
                className="absolute w-[373px] h-[423px] top-0 left-[165px]"
                alt="Vector"
                src="/home-images/vector-1.svg" width={50} height={50}
              />
              <Image
                className="absolute w-[341px] h-[330px] top-5 left-[198px]"
                alt="Vector"
                src="/home-images/vector-2.svg" width={50} height={50}
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
                          <span className="font-medium">
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


        {/* How It Works Section */}
        <section className="mt-[32px] pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-20 lg:pb-4">
          <div className="relative w-full max-w-7xl pl-4 sm:pl-8 md:pl-16 lg:pl-[85px] pr-4 sm:pr-8 md:pr-16 lg:pr-[85px] mx-auto">
            <div className="flex flex-col lg:flex-row">

              {/* Process Visualization - Simplified for mobile */}
              <div className="w-full lg:w-[523px] mb-8 lg:mb-0 lg:ml-[20px] relative">
                {/* Grid background */}


                {/* Dotted connector lines for desktop only */}
                <svg
                  className="hidden lg:block absolute z-30 pointer-events-none"
                  width="600"
                  height="700"
                  style={{ left: 0, top: 0 }}
                >
                  <polyline
                    points="80,185, 80,255, 150,255"
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

                  <circle cx="80" cy="185" r="4" fill="#222" />
                  <circle cx="150" cy="255" r="4" fill="#222" />
                  <circle cx="365" cy="320" r="4" fill="#222" />
                  <circle cx="440" cy="410" r="4" fill="#222" />
                </svg>
                <div className="bg-[#e6e8f6] rounded-[10px] p-4 sm:p-6 lg:p-8 h-auto lg:h-[619px] relative z-20">
                  {/* Mobile/Tablet simplified steps */}
                  <div className="block lg:hidden space-y-6">
                    <div className="bg-[#fdf8ed] rounded-[10px] p-4">
                      <div className="font-gantari text-black text-lg sm:text-xl mb-4">
                        <span className="font-medium">01. </span>
                        <span className="font-light">Open Extension</span>
                      </div>
                      <Button className="w-full bg-gradient-to-br from-[rgba(46,52,90,1)] via-[rgba(13,23,90,1)] to-[rgba(19,33,128,1)] text-white font-semibold text-sm rounded-[5px]">
                        Capture conversation
                      </Button>
                    </div>

                    <div className="bg-[#fdf8ed] rounded-[10px] p-4">
                      <div className="font-gantari text-black text-lg sm:text-xl mb-4">
                        <span className="font-medium">02. </span>
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
                        <span className="font-medium">03. </span>
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
                    <div className="absolute w-[221px] h-[170px] top-4 left-[37px] bg-[#fdf8ed] rounded-[10px] p-4 overflow-hidden">
                      <div className="font-gantari text-black text-[22px] mb-4">
                        <span className="font-medium text-[20px]">01. </span>
                        <span className="font-light text-[20px]">Open Extension</span>
                      </div>
                      <div className="flex justify-center">
                        <div className="w-36 md:w-40 h-22 md:h-22 bg-[#e5ebff] rounded-lg relative overflow-hidden">
                          {/* Browser header */}
                          <div className="w-full h-5 bg-gradient-to-r from-[#2e345a] via-[#0c112e] to-[#13215a] rounded-t-lg flex items-center px-3 gap-1.5">
                            <div className="w-1.5 h-1.5 bg-[#d9d9d9] rounded-full"></div>
                            <div className="w-1.5 h-1.5 bg-[#d9d9d9] rounded-full"></div>
                            <div className="w-1.5 h-1.5 bg-[#d9d9d9] rounded-full"></div>
                          </div>

                          {/* Microphone icon */}
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-2">
                            <div className="w-8 h-8 bg-gradient-to-r from-[#2e345a] via-[#0c112e] to-[#13215a] rounded-full flex items-center justify-center">
                              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" />
                                <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="absolute w-[221px] h-[145px] top-[217px] left-[146px] bg-[#fdf8ed] rounded-[10px] p-4">
                      <div className="font-gantari text-black text-[22px] mb-4">
                        <span className="font-medium text-[20px]">02. </span>
                        <span className="font-light text-[20px]">Auto Recording</span>
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
                        <span className="font-medium text-[20px]">03. </span>
                        <span className="font-light text-[20px]">End Meeting</span>
                      </div>
                      <div className="flex justify-center">
                        <div className="w-36 md:w-40 h-22 md:h-22 bg-[#e5ebff] rounded-lg relative overflow-hidden">
                          {/* Browser header */}
                          <div className="w-full h-5 bg-gradient-to-r from-[#2e345a] via-[#0c112e] to-[#13215a] rounded-t-lg flex items-center px-3 gap-1.5">
                            <div className="w-1.5 h-1.5 bg-[#d9d9d9] rounded-full"></div>
                            <div className="w-1.5 h-1.5 bg-[#d9d9d9] rounded-full"></div>
                            <div className="w-1.5 h-1.5 bg-[#d9d9d9] rounded-full"></div>
                          </div>

                          {/* End Meeting button */}
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-2">
                            <button className="px-3 py-1 bg-gradient-to-r from-[#2e345a] via-[#0c112e] to-[#13215a] text-white text-[13px] rounded-md hover:opacity-90 transition-opacity whitespace-nowrap">
                              End Meeting
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Steps Description */}
              <div className="w-full lg:w-[550px] lg:ml-11 flex flex-col justify-between h-full">

                {/* Title at the top */}
                <h2 className="text-left font-playfair font-semibold text-[#162694] text-2xl sm:text-3xl md:text-4xl lg:text-[47px] mb-8 lg:mb-12">
                  Super simple.
                </h2>

                {/* Content in the middle */}
                <div className="flex-1 space-y-4 lg:space-y-6">
                  <div>
                    <h3 className="font-playfair font-semibold text-black text-xl sm:text-2xl lg:text-[25px] mb-3">
                      01. Open Extension
                    </h3>

                    <p className="font-gantari mb-3 font-light text-[#5e5d5d] text-lg sm:text-xl">
                      Begin your consultation by clicking the "Capture conversation" button to start recording the session.
                    </p>
                    <Separator className="my-4 w-full mt-8 lg:w-[519px]" />
                  </div>

                  <div>
                    <h3 className="font-playfair font-semibold text-black text-xl sm:text-2xl lg:text-[25px]">
                      02. Auto Recording
                    </h3>

                    <p className="font-gantari font-light text-[#5e5d5d] text-lg sm:text-xl">
                      The system automatically captures and records the conversation in real-time with high accuracy.
                    </p>
                    <Separator className="my-4 w-full mt-8 lg:w-[519px]" />
                  </div>

                  <div>
                    <h3 className="font-playfair font-semibold text-black text-xl sm:text-2xl lg:text-[25px]">
                      03. End Meeting
                    </h3>

                    <p className="font-gantari font-light text-[#5e5d5d] text-lg sm:text-xl">
                      Get your personalized clinical note ready to copy and paste directly into your EHR system.
                    </p>
                    {/* <Separator className="my-4 w-full lg:w-[519px]" /> */}
                  </div>
                </div>

                {/* Button at the bottom */}
                <div className="mt-[50px] lg:mt-[50px]">
                  <Link href="/tryfree" target="_blank">
                    <Button className="w-full max-w-[220px] sm:max-w-[238px] h-12 sm:h-[57px] rounded-[5px] bg-gradient-to-br from-[rgba(46,52,90,1)] via-[rgba(13,23,90,1)] to-[rgba(19,33,128,1)] text-white font-semibold text-base sm:text-lg px-4">
                      <span>Try InteliDoc AI-</span>
                      <span className="text-[#a9a7a7] text-sm sm:text-base ml-1">it's free</span>
                    </Button>
                  </Link>
                </div>
              </div>

            </div>


          </div>


        </section>

        {/* Alternative Options Section */}
        <section className="relative mt-[32px] pt-12 sm:pt-12 lg:pt-12 pb-6 sm:pb-6 lg:pb-6">
          {/* Background Effects */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute w-[300px] sm:w-[400px] lg:w-[494px] h-[300px] sm:w-[400px] lg:h-[567px] top-[50px] sm:top-[70px] lg:top-[93px] -left-[100px] sm:-left-[50px] lg:left-0 rounded-full blur-[30px] sm:blur-[40px] lg:blur-[50px] bg-gradient-to-br from-[rgba(22,38,148,0.4)] to-[rgba(255,155,188,0.4)]" />
            <div className="absolute w-[300px] sm:w-[500px] lg:w-[640px] h-[300px] sm:h-[450px] lg:h-[607px] top-[50px] sm:top-[70px] lg:top-[88px] -right-[100px] sm:-right-[50px] lg:right-[100px] rounded-full blur-[30px] sm:blur-[40px] lg:blur-[50px] bg-gradient-to-br from-[rgba(22,38,148,0.4)] to-[rgba(255,155,188,0.4)]" />
            <div className="absolute inset-0 bg-gradient-to-br from-[rgba(255,255,255,0.6)] to-[rgba(255,255,255,0.2)] backdrop-blur-[21px]" />
          </div>

          <div className="relative z-10 pl-4 sm:pl-8 md:pl-16 lg:pl-[85px] pr-4 sm:pr-8 md:pr-16 lg:pr-[85px] max-w-7xl mx-auto">
            <h2 className="font-playfair font-semibold text-[#162694] text-2xl sm:text-3xl md:text-4xl lg:text-[46px] leading-tight text-center lg:text-left mb-2 sm:mb-3 lg:mb-2">
              Don't want to capture the conversation?
            </h2>

            <h3 className="font-playfair font-semibold text-[#162694] text-2xl sm:text-4xl md:text-3xl lg:text-[44px] mt-1 sm:mt-3 text-center lg:text-left mb-8 sm:mb-12 lg:mb-16">
              No Problem.
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 mt-8 sm:mt-12 lg:mt-16">
              <Card className="relative w-full max-w-[521px] bg-white rounded-[20px] border border-solid border-[#a9a9a9] overflow-visible mx-auto lg:mx-0 p-0">
                <div className="w-full h-13 bg-[#162694] rounded-t-[20px] flex items-center justify-center">
                  <span className="text-white font-medium font-large font-playfair text-lg sm:text-xl md:text-2xl lg:text-[32px]">Dictate a summary</span>
                </div>

                <CardContent className="pt-2 sm:pt-4 lg:pt-2 px-4 sm:px-6 pb-6 sm:pb-8 flex flex-col items-center">
                  <div className="flex justify-center mb-2 sm:mb-3">
                    <Image
                      className="w-24 h-28 sm:w-[130px] sm:h-[150px]"
                      alt="Noun record"
                      src="/home-images/noun-record-7859239-1.svg"
                      width={130}
                      height={150}
                    />
                  </div>
                  <p className="font-gantari font-light text-[#5e5d5d] text-sm sm:text-base lg:text-xl text-left align-left mb-4 sm:mb-6">
                    Simply provide a quick recap of the session in natural language and we'll create the full note, in your writing style
                  </p>
                  {/* Grid background at the bottom */}

                </CardContent>
              </Card>

              <Card className="w-full max-w-[521px] bg-white rounded-[20px] border border-solid border-[#a9a9a9] overflow-visible mx-auto lg:mx-0 p-0">
                <div className="w-full h-13 bg-[#162694] rounded-t-[20px] flex items-center justify-center">
                  <span className="text-white font-medium font-large font-playfair text-lg sm:text-xl md:text-2xl lg:text-[32px]">Upload your Recordings</span>
                </div>

                <CardContent className="pt-2 sm:pt-4 lg:pt-2 px-4 sm:px-6 pb-6 sm:pb-8 flex flex-col items-center">

                  <div className="flex justify-center mb-2 sm:mb-3">
                    <Image
                      className="w-24 h-28 sm:w-[130px] sm:h-[150px]"
                      alt="Noun note"
                      src="/home-images/upload-image.png"
                      width={130}
                      height={150}
                    />
                  </div>
                  <p className="font-gantari font-light text-[#5e5d5d] text-sm sm:text-base lg:text-xl text-left mb-4 sm:mb-6">
                    Upload your handwritten or typed session notes as they are, and we'll create a high-quality and comprehensive note
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="w-full max-w-[1115px] h-auto lg:h-[325px] mt-16 sm:mt-20 lg:mt-24 rounded-[20px] radial-gradient-card relative">
              <CardContent className="p-6 sm:p-8 lg:p-12">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
                  <div className="flex-1">
                    <h2 className="font-playfair font-semibold text-white text-2xl sm:text-3xl md:text-4xl lg:text-[46px] leading-tight text-center lg:text-left">
                      Support your team. <br className="hidden sm:block" />
                      Strengthen patient outcomes.
                    </h2>
                    <p className="font-gantari text-white text-base sm:text-lg lg:text-xl mt-4 sm:mt-6 lg:mt-8 text-center lg:text-left">
                      Put patients first—not paperwork. Join thousands of clinicians
                      using AI to work smarter.
                    </p>
                  </div>
                  <div className="mt-8 lg:mt-3 lg:ml-8 lg:flex-shrink-0">
                    <Link href="/tryfree" target="_blank">
                      <Button className="font-gantari w-full text-2xl sm:w-auto sm:min-w-[200px] h-8 sm:h-[40px] rounded-[5px] bg-white text-[#162694] font-normal hover:bg-gray-100">
                        Try for free
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Privacy & Security Section */}
        <section className="mt-[32px] pt-8 sm:pt-20 lg:pt-8 pb-6 sm:pb-20 lg:pb-6">
          <div className="max-w-7xl pl-4 sm:pl-8 md:pl-16 lg:pl-[85px] pr-4 sm:pr-8 md:pr-16 lg:pr-[85px] mx-auto">
            {/* <Separator className="w-full max-w-[1104px] mx-auto" /> */}

            <h2 className="font-playfair font-semibold text-[#162694] text-2xl sm:text-3xl md:text-4xl lg:text-[50px] mt-0 sm:mt-4 text-center lg:text-left mb-2 sm:mb-8 lg:mb-2">
              Privacy & Security.
            </h2>

            <p className="font-gantari text-black text-lg sm:text-2xl md:text-3xl lg:text-[26px] mt-4 sm:mt-4 text-center lg:text-left mb-8 sm:mb-12 lg:mb-16">
              We don't train our models on your data. We don't store any audio.
            </p>

            <div className="mt-8 sm:mt-12 lg:mt-16 ml-6 ">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-8 max-w-5xl mx-auto">
                {securityFeatures.map((feature, index) => (
                  <Card
                    key={index}
                    className="w-full max-w-[455px] h-auto lg:h-80 relative border-[0.2px] border-solid border-[#a9a3a3] shadow-[4px_4px_10px_2px_#0000001a] mx-auto lg:mx-0 rounded-none"
                  >
                    <div className="absolute w-16 sm:w-[73px] h-[5px] top-0 left-6 sm:left-8 bg-[#162694]" />
                    <CardContent className="pt-4 sm:pt-10 px-6 sm:px-8 pb-2 sm:pb-8">
                      <h3 className="font-gantari font-medium text-black text-lg sm:text-xl leading-tight sm:leading-[31px]">
                        {feature.title}
                      </h3>
                      <p className="font-gantari font-normal text-[#626262] text-base sm:text-lg leading-relaxed sm:leading-[27.9px] mt-4 sm:mt-6">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="text-center">
              <Link href="/tryfree" target="_blank">
                <Button className="mt-8 sm:mt-12 lg:mt-16 w-full max-w-[220px] sm:max-w-[238px] h-12 sm:h-[57px] rounded-[5px] bg-gradient-to-br from-[rgba(46,52,90,1)] via-[rgba(13,23,90,1)] to-[rgba(19,33,128,1)] text-white font-semibold text-base sm:text-lg px-4">
                  <span>Try InteliDoc AI-</span>
                  <span className="text-[#a9a7a7] text-sm sm:text-base ml-1">it's free</span>
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section ref={faqRef} data-nav-dark="true" className="mt-[32px] pt-6 sm:pt-20 lg:pt-6 pb-6 sm:pb-20 lg:pb-6">
          <div className="pl-4 sm:pl-8 md:pl-16 lg:pl-[85px] pr-4 sm:pr-8 md:pr-16 lg:pr-[85px] max-w-7xl mx-auto">
            <Card className="w-full max-w-[1208px] h-auto lg:h-[750px] mx-auto rounded-[20px] bg-[linear-gradient(to_right,#011227_0%,#0e1963_25%,#0f267f_50%,#0e1963_75%,#011227_100%)]">
              <CardContent className="p-6 sm:p-8 lg:p-12">
                <h2 className="font-playfair font-semibold text-white text-2xl sm:text-3xl lg:text-[40px] text-center mb-8 sm:mb-12 lg:mb-16">
                  Frequently Asked Questions
                </h2>

                <div className="w-full max-w-[977px] mx-auto">
                  <Accordion
                    type="single"
                    collapsible
                    className="w-full [&>*:hover]:border-b-transparent [&>*:hover+*]:border-t-transparent [&>*:hover]:border-t-transparent"
                  >
                    {faqItems.map((item, index) => (
                      <AccordionItem
                        key={index}
                        value={`item-${index}`}
                        className="border-b border-white transition-all duration-200"
                      >
                        <AccordionTrigger className="py-4 sm:py-6 text-white hover:no-underline hover:bg-white/10 hover:py-3 sm:hover:py-5 rounded-lg transition-all duration-200 hover:pl-4 mt-2 [&>svg]:ml-4 pr-4">
                          <div className="flex items-center text-left">
                            <Image
                              className="w-6 h-7 sm:w-[30px] sm:h-[37px] mr-3 sm:mr-4 flex-shrink-0"
                              alt="Noun question"
                              src="/home-images/noun-question-7004840-5.svg" width={50} height={50}
                            />
                            <span className="font-gantari font-semibold text-white text-sm sm:text-base">
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
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Footer Section */}
        <Footer links={footerLinks} />
      </div>
    </div>
  );
};

