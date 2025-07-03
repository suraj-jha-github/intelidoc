import React, { JSX } from "react";
import { Navigation } from "../features/__components/navigation";
import { HeroSection } from "./__components/hero-section";
import { IntegrationCard } from "./__components/integration-card";
import { SecuritySection } from "./__components/security-section";
import { CTASection } from "./__components/cta-section";
import { Footer } from "../components/footer";
import { Card, CardContent } from "../../components/ui/card";

export default function Features() {

  const integrationOptions = [
    {
      type: "Chrome extension",
      description:
        "Universal integration for any web-based EHR, with basic copy/paste functionality.",
      icon: "/features/group.png",
      iconVector: "/features/vector.svg",
      iconGroup1: "/features/group-1.png",
      color: "#7c48ff",
      gradient:
        "linear-gradient(131deg,rgba(46,52,90,1) 0%,rgba(12,17,46,1) 28%,rgba(13,23,90,1) 56%,rgba(16,29,113,1) 81%,rgba(19,33,128,1) 100%)",
      action: "Download now",
      isPrimary: true,
    },
    {
      type: "Direct integration",
      description:
        "Seamlessly push notes into your EHR sections with one click, right from your browser tab.",
      icon: "/features/noun-settings-791024-1.svg",
      color: "#7c48ff",
      gradient:
        "linear-gradient(131deg,rgba(46,52,90,1) 0%,rgba(12,17,46,1) 28%,rgba(13,23,90,1) 56%,rgba(16,29,113,1) 81%,rgba(19,33,128,1) 100%)",
      action: "Contact Sales",
      isPrimary: false,
    },
    {
      type: "Custom",
      description:
        "A fully customized integration built specifically for your organizations needs and workflow.",
      icon: "/features/noun-customization-7874627-1.svg",
      color: "#7c48ff",
      gradient:
        "linear-gradient(131deg,rgba(46,52,90,1) 0%,rgba(12,17,46,1) 28%,rgba(13,23,90,1) 56%,rgba(16,29,113,1) 81%,rgba(19,33,128,1) 100%)",
      action: "Contact Sales",
      isPrimary: false,
    },
  ];

  // Security features data
  const securityFeatures = [
    {
      title: "HIPAA compliance",
      description:
        "Your documentation stays protected with industry-leading safeguards and HIPAA-compliant practices. All intelidoc team members maintain current HIPAA certification.",
    },
    {
      title: "Verified access",
      description:
        "Multi-factor authentication and optional Single Sign-On ensures only authorized users can access your account, adding an extra layer of protection to your workflow.",
    },
    {
      title: "Data protection",
      description:
        "Your documentation stays secure with end-to-end encryption and US-based data centers. We protect your information from the moment it&apos;s captured until it reaches your EHR.",
    },
    {
      title: "Access management",
      description:
        "Take control of your security with customizable permission settings. Our internal controls ensure your data is only accessed by essential personnel.",
    },
  ];

  // Product benefits data for Healthcare Professionals Section
  const productBenefits = [
    {
      title: "Accurate",
      description: "The most accurate solution in the market, trusted by clinicians globally.",
      icon: "/features/group.png",
      iconSecondary: "/features/group-1.png",
    },
    {
      title: "Capturing",
      description: "Record and capture patient interactions with high accuracy.",
      icon: "/features/noun-record-7859239-1.svg",
    },
    {
      title: "Clinical Notes",
      description: "Generate comprehensive clinical notes automatically.",
      icon: "/features/noun-note-7815854-1.svg",
    },
    {
      title: "Personalized",
      description: "Intelidoc learns your style of writing and improves over time.",
      icon: "/features/vector-3.svg",
      iconSecondary: "/features/vector-4.svg",
    },
  ];

  // Navigation items
  const navItems = [
    { label: "Features", href: "/features" },
    { label: "How it Works", href: "/#how-it-works" },
    { label: "Specialties", href: "/specialities" },
    { label: "Blog", href: "/blogs" },
    { label: "Pricing", href: "/pricing" },
    { label: "For Groups", href: "/forgroup" },
    { label: "Contact Us", href: "/contact" },
  ];

  // Footer links
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
      <div className="bg-[#f3f3f3] overflow-hidden w-full max-w-none relative">
        {/* Header Section */}
        <header className="relative w-full min-h-[400px] md:min-h-[622px]">
          <div className="absolute w-full h-full [background:linear-gradient(137deg,rgba(14,25,99,1)_0%,rgba(46,24,173,1)_47%,rgba(79,52,187,1)_60%,rgba(140,76,193,1)_71%,rgba(200,110,186,1)_82%,rgba(228,174,211,1)_94%,rgba(231,227,237,1)_100%)]" />

          {/* Navigation Bar */}
          <Navigation navItems={navItems} />

          {/* Hero Content */}
          <div data-nav-dark="true" className="relative z-10 flex flex-col items-center justify-center pl-4 sm:pl-8 md:pl-16 lg:pl-[85px] pr-4 sm:pr-8 md:pr-16 lg:pr-[85px] pt-20 md:pt-32 pb-8 md:pb-16 max-w-7xl mx-auto h-full">
            <div className="relative text-center w-full">
              <div className="w-full max-w-[850px] mx-auto">
                <h2 className="font-playfair font-semibold text-white text-2xl md:text-4xl lg:text-[75px] leading-tight md:leading-[75px] mt-0 md:mt-4 text-center">
                  Seamless Interoperability
                </h2>
              </div>
            </div>

            <div className="w-full max-w-[850px] h-auto bg-gradient-to-r from-[rgba(223,221,250,1)] to-[rgba(252,214,230,1)] p-2 md:p-4 rounded-lg md:rounded-none mt-6 md:mt-[40px] mx-auto flex justify-center items-center">
              <h3 className="font-playfair bg-gradient-to-r from-[rgba(22,38,148,1)] to-[rgba(153,166,255,1)] bg-clip-text text-transparent font-semibold text-3xl md:text-5xl lg:text-[83px] leading-[1.1] md:leading-[1.1] text-center w-full flex items-center justify-center">
                with Clinical Systems
              </h3>
            </div>

            <p className="font-gantari text-white text-lg md:text-xl lg:text-xl text-center max-w-[900px] mt-6 md:mt-12">
              InteliDoc integrates seamlessly with your EHR to unify scheduling, e-prescribing, lab results, billing, and analytics—automating workflows, reducing errors, and boosting practice efficiency from day one.
            </p>
          </div>
        </header>

        {/* Integration Options */}
        <section className="mt-8 md:mt-[64px]">
          <div className="pl-4 sm:pl-8 md:pl-16 lg:pl-[85px] pr-4 sm:pr-8 md:pr-16 lg:pr-[85px] max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 justify-items-center">
              {integrationOptions.map((option, index) => (
                <IntegrationCard key={index} option={option} />
              ))}
            </div>
          </div>
        </section>

        {/* Security Section with full-width background image */}
        <div data-nav-dark="true" className="w-full mt-[64px]">
          <SecuritySection features={securityFeatures} />
        </div>

        {/* Healthcare Professionals Section */}
        <section data-nav-dark="true" className="mt-0 sm:mt-24 lg:mt-0 bg-[#f3f3f3] py-8 sm:py-20 lg:pt-20 lg:pb-8">
          <div className="pl-4 sm:pl-8 md:pl-16 lg:pl-[85px] pr-4 sm:pr-8 md:pr-16 lg:pr-[85px] max-w-7xl mx-auto">
            <h2 className="font-playfair font-semibold text-[#132180] text-xl sm:text-3xl lg:text-[46px] leading-normal mb-8 sm:mb-12 lg:mb-16 text-left">
              Created by healthcare professionals, <br className="hidden sm:block" />
              for healthcare professionals.
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-[48px] mb-8 sm:mb-12 lg:mb-16 max-w-6xl mx-auto text-left">
              {/* Accurate */}
              <Card className="w-full max-w-[240px] h-[224px] mx-auto bg-[#081d56] rounded-[10px] hover:bg-[#0a2063] transition-colors flex flex-col items-start py-0">
                <CardContent className="p-4 text-left flex flex-col items-start h-full">
                  <div className="flex justify-start items-center mb-4 h-14">
                    {/* Target Icon - exact style */}
                    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="21" cy="21" r="15" stroke="#fff" strokeWidth="1.5" />
                      <circle cx="21" cy="21" r="9" stroke="#fff" strokeWidth="1.5" />
                      <circle cx="21" cy="21" r="3" stroke="#fff" strokeWidth="1.5" />
                      <path d="M21 6V2.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M21 40V36.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M6 21H2.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M40 21H36.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                  <h3 className="font-playfair font-bold text-white text-lg lg:text-[22px] mb-4 text-left">Accurate</h3>
                  <p className="font-gantari font-medium text-white text-sm leading-relaxed text-left">The most accurate solution in the market, trusted by clinicians globally.</p>
                </CardContent>
              </Card>
              {/* Secure */}
              <Card className="w-full max-w-[240px] py-0 h-[224px] mx-auto bg-[#081d56] rounded-[10px] hover:bg-[#0a2063] transition-colors flex flex-col items-start">
                <CardContent className="p-4 text-left flex flex-col items-start h-full">
                  <div className="flex justify-start items-center mb-4 h-14">
                    {/* Lock Icon - exact style */}
                    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="8" y="18" width="26" height="16" rx="3" stroke="#fff" strokeWidth="1.5" />
                      <path d="M14 18V13C14 9.13401 17.134 6 21 6C24.866 6 28 9.13401 28 13V18" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
                      <circle cx="21" cy="26" r="2" stroke="#fff" strokeWidth="1.5" />
                    </svg>
                  </div>
                  <h3 className="font-playfair font-bold text-white text-lg lg:text-[22px] mb-4 text-left">Secure</h3>
                  <p className="font-gantari font-medium text-white text-sm leading-relaxed text-left">HIPAA and HITECH compliant. Recordings are never stored.</p>
                </CardContent>
              </Card>
              {/* Compatible */}
              <Card className="w-full max-w-[240px] h-[224px] py-0 mx-auto bg-[#081d56] rounded-[10px] hover:bg-[#0a2063] transition-colors flex flex-col items-start">
                <CardContent className="p-4 text-left flex flex-col items-start h-full">
                  <div className="flex justify-start items-center mb-4 h-14">
                    {/* Document Icon - exact style */}
                    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="10" y="7" width="22" height="28" rx="2" stroke="#fff" strokeWidth="1.5" />
                      <path d="M14 7V13C14 14.1046 14.8954 15 16 15H26" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                  <h3 className="font-playfair font-bold text-white text-lg lg:text-[22px] mb-4 text-left">Compatible</h3>
                  <p className="font-gantari font-medium text-white text-sm leading-relaxed text-left">Works with all major EHR systems and integrates seamlessly.</p>
                </CardContent>
              </Card>
              {/* Personalized */}
              <Card className="w-full max-w-[240px] h-[224px] py-0 mx-auto bg-[#081d56] rounded-[10px] hover:bg-[#0a2063] transition-colors flex flex-col items-start">
                <CardContent className="p-4 text-left flex flex-col items-start h-full">
                  <div className="flex justify-start items-center mb-4 h-14">
                    {/* Settings Icon - exact style */}
                    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 15C17.6863 15 15 17.6863 15 21C15 24.3137 17.6863 27 21 27C24.3137 27 27 24.3137 27 21C27 17.6863 24.3137 15 21 15Z" stroke="#fff" strokeWidth="1.5" />
                      <path d="M21 3V6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M21 36V39" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M39 21H36" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M6 21H3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M33.9 8.1L31.5 10.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M10.5 31.5L8.1 33.9" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M33.9 33.9L31.5 31.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M10.5 10.5L8.1 8.1" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                  <h3 className="font-playfair font-bold text-white text-lg lg:text-[22px] mb-4 text-left">Personalized</h3>
                  <p className="font-gantari font-medium text-white text-sm leading-relaxed text-left">Learns your style and adapts to your preferences over time.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section with full-width background image */}
        <div className="w-full mt-0 sm:mt-24 lg:mt-0">
          <CTASection />
        </div>

        {/* Footer */}
        <Footer links={footerLinks} />
      </div>
    </div>
  );
};