import React, { JSX } from "react";
import { Navigation } from "./__components/navigation";
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
        "A fully customized integration built specifically for your organization&apos;s needs and workflow.",
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
        "Your documentation stays protected with industry-leading safeguards and HIPAA-compliant practices. All Freed team members maintain current HIPAA certification.",
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
    { label: "Specialties", href: "/specialities" },
    { label: "Blog", href: "/blogs" },
    { label: "Pricing", href: "/pricing" },
    { label: "For Groups", href: "/groups" },
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
    <div className="bg-feature-background min-h-screen">
      <div className="bg-feature-background overflow-hidden w-full max-w-feature mx-auto relative">
        {/* Navigation */}
        <Navigation navItems={navItems} colorClass="text-[#222]" logoColorClass="text-[#162694]" />

        {/* Hero Section */}
        <HeroSection />

        {/* Integration Options */}
        <section className="mt-[32px]">
          <div className="pl-4 sm:pl-8 md:pl-16 lg:pl-[85px] pr-4 sm:pr-8 md:pr-16 lg:pr-[85px] max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 md:gap-12">
              {integrationOptions.map((option, index) => (
                <IntegrationCard key={index} option={option} />
              ))}
            </div>
          </div>
        </section>

        {/* Security Section with full-width background image */}
        <div className="w-full mt-[32px]">
          <SecuritySection features={securityFeatures} />
        </div>

        {/* Healthcare Professionals Section */}
        <section className="mt-16 sm:mt-24 lg:mt-32">
          <div className="pl-4 sm:pl-8 md:pl-16 lg:pl-[85px] pr-4 sm:pr-8 md:pr-16 lg:pr-[85px] max-w-7xl mx-auto">
            <h2 className="font-['Playfair_Display',Helvetica] font-semibold text-[#132180] text-3xl sm:text-4xl lg:text-[46px] leading-normal mb-8 sm:mb-12 lg:mb-16 text-left">
              Created by healthcare professionals, <br className="hidden sm:block" />
              for healthcare professionals.
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16 max-w-6xl mx-auto text-left">
              {/* Accurate */}
              <Card className="w-full max-w-[248px] h-[248px] mx-auto bg-[#081d56] rounded-[10px] hover:bg-[#0a2063] transition-colors flex flex-col items-start">
                <CardContent className="p-6 text-left flex flex-col items-start h-full">
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
                  <h3 className="font-['Playfair_Display',Helvetica] font-bold text-white text-lg lg:text-[22px] mb-4 text-left">Accurate</h3>
                  <p className="font-['Gantari',Helvetica] font-medium text-white text-sm leading-relaxed text-left">The most accurate solution in the market, trusted by clinicians globally.</p>
                </CardContent>
              </Card>
              {/* Secure */}
              <Card className="w-full max-w-[248px] h-[248px] mx-auto bg-[#081d56] rounded-[10px] hover:bg-[#0a2063] transition-colors flex flex-col items-start">
                <CardContent className="p-6 text-left flex flex-col items-start h-full">
                  <div className="flex justify-start items-center mb-4 h-14">
                    {/* Lock Icon - exact style */}
                    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="8" y="18" width="26" height="16" rx="3" stroke="#fff" strokeWidth="1.5" />
                      <path d="M14 18V13C14 9.13401 17.134 6 21 6C24.866 6 28 9.13401 28 13V18" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
                      <circle cx="21" cy="26" r="2" stroke="#fff" strokeWidth="1.5" />
                    </svg>
                  </div>
                  <h3 className="font-['Playfair_Display',Helvetica] font-bold text-white text-lg lg:text-[22px] mb-4 text-left">Secure</h3>
                  <p className="font-['Gantari',Helvetica] font-medium text-white text-sm leading-relaxed text-left">HIPAA and HITECH compliant. Recordings are never stored.</p>
                </CardContent>
              </Card>
              {/* Compatible */}
              <Card className="w-full max-w-[248px] h-[248px] mx-auto bg-[#081d56] rounded-[10px] hover:bg-[#0a2063] transition-colors flex flex-col items-start">
                <CardContent className="p-6 text-left flex flex-col items-start h-full">
                  <div className="flex justify-start items-center mb-4 h-14">
                    {/* Document Icon - exact style */}
                    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="10" y="7" width="22" height="28" rx="2" stroke="#fff" strokeWidth="1.5" />
                      <path d="M14 7V13C14 14.1046 14.8954 15 16 15H26" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                  <h3 className="font-['Playfair_Display',Helvetica] font-bold text-white text-lg lg:text-[22px] mb-4 text-left">Compatible</h3>
                  <p className="font-['Gantari',Helvetica] font-medium text-white text-sm leading-relaxed text-left">Easily copy and paste your notes into your preferred EHR or EMR.</p>
                </CardContent>
              </Card>
              {/* Personalized */}
              <Card className="w-full max-w-[248px] h-[248px] mx-auto bg-[#081d56] rounded-[10px] hover:bg-[#0a2063] transition-colors flex flex-col items-start">
                <CardContent className="p-6 text-left flex flex-col items-start h-full">
                  <div className="flex justify-start items-center mb-4 h-14">
                    {/* User Icon - exact style */}
                    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="21" cy="15" r="6" stroke="#fff" strokeWidth="1.5" />
                      <path d="M10 32C10 27.5817 14.0294 24 21 24C27.9706 24 32 27.5817 32 32" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                  <h3 className="font-['Playfair_Display',Helvetica] font-bold text-white text-lg lg:text-[22px] mb-4 text-left">Personalized</h3>
                  <p className="font-['Gantari',Helvetica] font-medium text-white text-sm leading-relaxed text-left">Twofold learns your style of writing and improves over time.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section with full-width background image */}
        <div className="w-full mt-16 sm:mt-24 lg:mt-32">
          <CTASection />
        </div>

        {/* Footer */}
        <Footer links={footerLinks} />
      </div>
    </div>
  );
};