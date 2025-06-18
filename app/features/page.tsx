import React, { JSX } from "react";
import { Navigation } from "./__components/navigation";
import { HeroSection } from "./__components/hero-section";
import { IntegrationCard } from "./__components/integration-card";
import { SecuritySection } from "./__components/security-section";
import { CTASection } from "./__components/cta-section";
import { Footer } from "../components/footer";

export default function Features(){
  
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

  // Navigation items
  const navItems = [
    { label: "Home", href: "/" },
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
        <section className="flex flex-col md:flex-row justify-center items-stretch gap-4 md:gap-6 mt-8 md:mt-16 px-feature">
          {integrationOptions.map((option, index) => (
            <IntegrationCard key={index} option={option} />
          ))}
        </section>

        {/* Security Section */}
        <SecuritySection features={securityFeatures} />

        {/* CTA Section */}
        <CTASection />

        {/* Footer */}
        <Footer links={footerLinks} />
      </div>
    </div>
  );
};