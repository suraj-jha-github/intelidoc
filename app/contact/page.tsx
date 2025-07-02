'use client'

import React, { useState } from "react";
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

  const [step, setStep] = useState(1);
  // State for new form fields (step 2)
  const [orgName, setOrgName] = useState("");
  const [orgType, setOrgType] = useState("");
  const [contactReason, setContactReason] = useState("");
  const [anythingElse, setAnythingElse] = useState("");
  const [showErrors, setShowErrors] = useState(false);
  const [showErrorsStep1, setShowErrorsStep1] = useState(false);
  // Add state for each field in step 1
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contactCode, setContactCode] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [workEmail, setWorkEmail] = useState("");
  const [jobRole, setJobRole] = useState("");
  const [teamSize, setTeamSize] = useState("");
  const [country, setCountry] = useState("");
  const [specialty, setSpecialty] = useState("");

  return (
    <div className="flex flex-row justify-center w-full">
      <div className="overflow-hidden w-full max-w-none relative">
        <div className="bg-gradient-to-br from-pink-200 via-pink-100 to-[#f3f3f3] min-h-screen w-full">
          {/* Background elements */}
          <div className="relative w-full">
            {/* Decorative vectors - hidden on mobile for cleaner look */}
            <img
              className="absolute w-[200px] h-[200px] md:w-[341px] md:h-[330px] top-[150px] md:top-[205px] left-[-100px] md:left-[-211px] opacity-50 md:opacity-100 z-0"
              alt="Vector"
              src="/contact/vector-5.svg"
            />

            <div className="absolute w-full h-full min-h-screen top-0 left-0 z-0">
              <div className="relative h-full">
                <div className="absolute w-full h-full top-0 left-0 backdrop-blur-[21px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(21px)_brightness(100%)] [background:linear-gradient(225deg,rgba(255,255,255,0.6)_0%,rgba(255,255,255,0.2)_100%)]" />

                {/* Top left pink gradient */}
                <div className="absolute w-[300px] h-[200px] md:w-[588px] md:h-[415px] top-0 left-[-100px] md:left-[-185px] rounded-[294.09px/207.38px] blur-[30px] md:blur-[50px] [background:linear-gradient(135deg,rgba(22,38,148,0.4)_0%,rgba(255,155,188,0.4)_100%)]" />

                {/* Top right pink gradient - more visible */}
                <div className="absolute w-[400px] h-[300px] md:w-[600px] md:h-[500px] top-0 right-0 md:right-[-50px] rounded-[200px/150px] md:rounded-[300px/250px] blur-[20px] md:blur-[40px] [background:linear-gradient(135deg,rgba(22,38,148,0.3)_0%,rgba(255,155,188,0.6)_50%,rgba(255,155,188,0.8)_100%)]" />

                {/* Additional top right pink accent */}
                <div className="absolute w-[200px] h-[150px] md:w-[300px] md:h-[250px] top-[50px] md:top-[100px] right-[50px] md:right-[100px] rounded-full blur-[15px] md:blur-[25px] [background:linear-gradient(135deg,rgba(255,155,188,0.7)_0%,rgba(255,155,188,0.9)_100%)]" />

                {/* Very prominent top right pink circle */}
                <div className="absolute w-[150px] h-[150px] md:w-[200px] md:h-[200px] top-0 right-0 rounded-full bg-pink-400 opacity-80 z-10" />

                {/* Top right pink area - more prominent */}
                <div className="absolute w-[300px] h-[200px] md:w-[500px] md:h-[300px] top-0 right-0 bg-gradient-to-bl from-pink-300 via-pink-200 to-transparent opacity-90 z-5" />

                {/* Additional top right pink accent */}
                <div className="absolute w-[200px] h-[150px] md:w-[350px] md:h-[250px] top-[20px] right-[20px] rounded-full bg-pink-500 opacity-70 z-5" />

                {/* Full width pink gradient overlay */}
                <div className="absolute w-full h-full top-0 left-0 blur-[30px] md:blur-[50px] [background:linear-gradient(135deg,rgba(22,38,148,0.1)_0%,rgba(255,155,188,0.2)_50%,rgba(255,155,188,0.3)_100%)]" />
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
          <section className="relative w-full min-h-[500px] md:min-h-[622px]">
            <div className="absolute w-full h-full [background:linear-gradient(137deg,rgba(14,25,99,1)_0%,rgba(46,24,173,1)_47%,rgba(79,52,187,1)_60%,rgba(140,76,193,1)_71%,rgba(200,110,186,1)_82%,rgba(228,174,211,1)_94%,rgba(231,227,237,1)_100%)]" />

            {/* Contact section */}
            <div className="relative z-10 flex flex-col xl:flex-row items-start justify-between pl-4 sm:pl-8 md:pl-16 lg:pl-[85px] pr-4 sm:pr-8 md:pr-16 lg:pr-[85px] pt-24 md:pt-32 pb-16 sm:pb-24 md:pb-32 lg:pb-24 xl:pb-24 max-w-7xl mx-auto">
              {/* Left side - Heading and testimonial */}
              <div className="w-full xl:w-[45%] xl:max-w-[500px]">
                <div className="text-left mb-8 md:mb-12 lg:mb-16">
                  <h1 className="font-playfair font-semibold text-white text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl tracking-[0] leading-tight mb-4 md:mb-6">
                    Contact our sales team
                  </h1>
                  <p className="max-w-[524px] font-gantari font-normal text-white text-base sm:text-lg md:text-xl lg:text-[23px] tracking-[0] leading-relaxed">
                    Please leave your details and reason for reaching out and we'll
                    be in contact shortly.
                  </p>
                </div>

                {/* Testimonial section */}
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

              {/* Contact form (multi-step) */}
              <Card className="w-full xl:w-[50%] xl:max-w-[520px] xl:ml-8 bg-white rounded-[20px] border border-solid border-[#a9a9a9] shadow-xl">
                <CardContent className="p-4 sm:p-6 md:p-8">
                  {step === 1 && (
                    <>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                        <div className="space-y-2">
                          <label className="font-gantari text-sm font-medium text-gray-700 block">
                            First name*
                          </label>
                          <Input
                            placeholder="Your first name"
                            value={firstName}
                            onChange={e => setFirstName(e.target.value)}
                            className="border border-gray-300 rounded-md h-10 px-3 focus:ring-2 focus:ring-[#132180] focus:border-transparent transition-all duration-200 w-full"
                          />
                          {showErrorsStep1 && !firstName && (
                            <p className="text-xs text-red-500 mt-1">Please complete this required field.</p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <label className="font-gantari text-sm font-medium text-gray-700 block">
                            Last name*
                          </label>
                          <Input
                            placeholder="Your last name"
                            value={lastName}
                            onChange={e => setLastName(e.target.value)}
                            className="border border-gray-300 rounded-md h-10 px-3 focus:ring-2 focus:ring-[#132180] focus:border-transparent transition-all duration-200 w-full"
                          />
                          {showErrorsStep1 && !lastName && (
                            <p className="text-xs text-red-500 mt-1">Please complete this required field.</p>
                          )}
                        </div>
                        <div className="space-y-2 col-span-2 flex flex-col sm:flex-row gap-4 md:gap-6">
                          <div className="w-full">
                            <label className="font-gantari text-sm font-medium text-gray-700 block">
                              Contact number*
                            </label>
                            <div className="flex gap-1">
                              <Select value={contactCode} onValueChange={setContactCode}>
                                <SelectTrigger className="w-20 h-10 border border-gray-300 rounded-l-md rounded-r-none focus:ring-2 focus:ring-[#132180] focus:border-transparent flex items-center">
                                  <SelectValue placeholder="US" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="in">IN</SelectItem>
                                  <SelectItem value="us">US</SelectItem>
                                  <SelectItem value="uk">UK</SelectItem>
                                </SelectContent>
                              </Select>
                              <Input
                                placeholder="+1"
                                value={contactNumber}
                                onChange={e => setContactNumber(e.target.value)}
                                className="flex-1 border border-gray-300 border-l-0 rounded-r-md rounded-l-none h-9 px-3 focus:ring-2 focus:ring-[#132180] focus:border-transparent transition-all duration-200"
                              />
                            </div>
                            {showErrorsStep1 && (!contactCode || !contactNumber) && (
                              <p className="text-xs text-red-500 mt-1">Please complete this required field.</p>
                            )}
                          </div>
                          <div className="w-full">
                            <label className="font-gantari text-sm font-medium text-gray-700 block">
                              Work email*
                            </label>
                            <Input
                              placeholder="Your company email"
                              type="email"
                              value={workEmail}
                              onChange={e => setWorkEmail(e.target.value)}
                              className="border border-gray-300 rounded-md h-9 px-3 focus:ring-2 focus:ring-[#132180] focus:border-transparent transition-all duration-200 w-full"
                            />
                            {showErrorsStep1 && !workEmail && (
                              <p className="text-xs text-red-500 mt-1">Please complete this required field.</p>
                            )}
                          </div>
                        </div>
                        <div className="space-y-2 col-span-2 flex flex-col sm:flex-row gap-4 md:gap-6">
                          <div className="w-full">
                            <label className="font-gantari text-sm font-medium text-gray-700 block">
                              Job role*
                            </label>
                            <Select value={jobRole} onValueChange={setJobRole}>
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
                            {showErrorsStep1 && !jobRole && (
                              <p className="text-xs text-red-500 mt-1">Please complete this required field.</p>
                            )}
                          </div>
                          <div className="w-full">
                            <label className="font-gantari text-sm font-medium text-gray-700 block">
                              Size of your clinical team*
                            </label>
                            <Select value={teamSize} onValueChange={setTeamSize}>
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
                            {showErrorsStep1 && !teamSize && (
                              <p className="text-xs text-red-500 mt-1">Please complete this required field.</p>
                            )}
                          </div>
                        </div>
                        <div className="space-y-2 col-span-2">
                          <label className="font-gantari text-sm font-medium text-gray-700 block">
                            Country*
                          </label>
                          <Select value={country} onValueChange={setCountry}>
                            <SelectTrigger className="w-full h-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#132180] focus:border-transparent">
                              <SelectValue placeholder="Select your country" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="usa">USA</SelectItem>
                              <SelectItem value="india">India</SelectItem>
                              <SelectItem value="uk">UK</SelectItem>
                              <SelectItem value="canada">Canada</SelectItem>
                              <SelectItem value="australia">Australia</SelectItem>
                            </SelectContent>
                          </Select>
                          {showErrorsStep1 && !country && (
                            <p className="text-xs text-red-500 mt-1">Please complete this required field.</p>
                          )}
                        </div>
                        <div className="space-y-2 col-span-2">
                          <label className="font-gantari text-sm font-medium text-gray-700 block">
                            Specialty*
                          </label>
                          <Select value={specialty} onValueChange={setSpecialty}>
                            <SelectTrigger className="w-full h-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#132180] focus:border-transparent">
                              <SelectValue placeholder="Please select" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="family-medicine">Family Medicine</SelectItem>
                              <SelectItem value="pediatrics">Pediatrics</SelectItem>
                              <SelectItem value="mental-health">Mental Health</SelectItem>
                              <SelectItem value="cardiology">Cardiology</SelectItem>
                              <SelectItem value="dermatology">Dermatology</SelectItem>
                            </SelectContent>
                          </Select>
                          {showErrorsStep1 && !specialty && (
                            <p className="text-xs text-red-500 mt-1">Please complete this required field.</p>
                          )}
                        </div>
                      </div>
                      <div className="flex justify-center sm:justify-end mt-6 md:mt-8">
                        <Button className="w-full sm:w-[120px] h-[40px] bg-[#132180] hover:bg-[#0f1a66] rounded-[5px] text-white transition-all duration-200 transform hover:scale-105"
                          onClick={() => {
                            // Validate all required fields
                            if (!firstName || !lastName || !contactCode || !contactNumber || !workEmail || !jobRole || !teamSize || !country || !specialty) {
                              setShowErrorsStep1(true);
                              return;
                            }
                            setShowErrorsStep1(false);
                            setStep(2);
                          }}>
                          <span className="font-gantari font-medium text-white text-sm">
                            Next
                          </span>
                        </Button>
                      </div>
                    </>
                  )}
                  {step === 2 && (
                    <form
                      onSubmit={e => {
                        e.preventDefault();
                        // Simple required check
                        if (!orgName || !orgType || !contactReason) {
                          setShowErrors(true);
                          return;
                        }
                        // Submit logic here
                        alert('Request submitted!');
                      }}
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                        <div className="space-y-2">
                          <label className="font-gantari text-sm font-medium text-gray-700 block">
                            Organisation name<span className="text-red-500">*</span>
                          </label>
                          <Input
                            placeholder="Your organisation name"
                            value={orgName}
                            onChange={e => setOrgName(e.target.value)}
                            className="border border-gray-300 rounded-md h-10 px-3 w-full"
                          />
                          {showErrors && !orgName && (
                            <p className="text-xs text-red-500 mt-1">Please complete this required field.</p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <label className="font-gantari text-sm font-medium text-gray-700 block">
                            Organisation type<span className="text-red-500">*</span>
                          </label>
                          <Select value={orgType} onValueChange={setOrgType}>
                            <SelectTrigger className="w-full h-10 border border-gray-300 rounded-md">
                              <SelectValue placeholder="Please select" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="hospital">Hospital</SelectItem>
                              <SelectItem value="clinic">Clinic</SelectItem>
                              <SelectItem value="pharma">Pharma</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          {showErrors && !orgType && (
                            <p className="text-xs text-red-500 mt-1">Please complete this required field.</p>
                          )}
                        </div>
                        <div className="space-y-2 sm:col-span-2">
                          <label className="font-gantari text-sm font-medium text-gray-700 block">
                            Contact reason<span className="text-red-500">*</span>
                          </label>
                          <Select value={contactReason} onValueChange={setContactReason}>
                            <SelectTrigger className="w-full h-10 border border-gray-300 rounded-md">
                              <SelectValue placeholder="Please select" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="demo">Request a demo</SelectItem>
                              <SelectItem value="pricing">Pricing inquiry</SelectItem>
                              <SelectItem value="support">Support</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          {showErrors && !contactReason && (
                            <p className="text-xs text-red-500 mt-1">Please complete this required field.</p>
                          )}
                        </div>
                        <div className="space-y-2 sm:col-span-2">
                          <label className="font-gantari text-sm font-medium text-gray-700 block">
                            Anything else? (Optional)
                          </label>
                          <textarea
                            placeholder="Enter any additional information"
                            value={anythingElse}
                            onChange={e => setAnythingElse(e.target.value)}
                            className="border border-gray-300 rounded-md h-20 px-3 py-2 w-full text-gray-500"
                          />
                        </div>
                      </div>
                      <p className="text-xs text-gray-500 mt-4 mb-2">
                        *By supplying my contact information, I authorise Heidi to contact me with communications about Heidi's products and services. See our <a href="#" className="underline">Privacy Policy</a>.
                      </p>
                      {showErrors && (
                        <p className="text-sm text-red-500 mt-2">Please complete all required fields.</p>
                      )}
                      <div className="flex justify-between items-center mt-6 md:mt-8 gap-4">
                        <Button type="button" variant="outline" className="w-[120px] h-[40px] rounded-[5px] text-[#132180] border-[#132180]" onClick={() => setStep(1)}>
                          Previous
                        </Button>
                        <Button type="submit" className="w-[180px] h-[40px] bg-[#132180] hover:bg-[#0f1a66] rounded-[5px] text-white font-semibold">
                          Request a sales demo
                        </Button>
                      </div>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* AI medical scribe section */}
            <div className="text-center pb-12 sm:pb-16 md:pb-24 lg:pb-32 relative pl-4 sm:pl-8 md:pl-16 lg:pl-[85px] pr-4 sm:pr-8 md:pr-16 lg:pr-[85px]">
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
          </section>

          {/* Footer */}
          <Footer links={footerLinks} />
        </div>
      </div>
    </div>
  );
}