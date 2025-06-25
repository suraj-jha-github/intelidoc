'use client'

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Navigation } from "../features/__components/navigation";
import { Footer } from "../components/footer";

import { Menu, X } from "lucide-react";
export default function ContactUs() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  // Navigation menu items data
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Features", href: "/features" },
    { label: "Specialties", href: "/specialities" },
    { label: "Blog", href: "/blogs" },
    { label: "Pricing", href: "/pricing" },
    { label: "For Groups", href: "/groups" },
    { label: "Contact Us", href: "/contact" },
  ];

  // Footer links data
  const helpfulLinks = [
    { label: "Help Center", href: "#" },
    { label: "FAQ's", href: "#" },
    { label: "Contact Us", href: "/contact" },
    { label: "Contact Sales", href: "#" },
    { label: "Security", href: "#" },
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

  return (
    <div className="bg-[#f3f3f3] min-h-screen w-full">
      <div className="bg-[#f3f3f3] overflow-hidden w-full  mx-auto relative">
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

        {/* Main content */}
        <main className="pt-[80px] md:pt-[119px] px-4 md:px-8 lg:px-20 relative z-10">
          {/* Hero section */}
          <section className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12 mt-8 md:mt-20">
            <div className="w-full lg:max-w-[490px] order-2 lg:order-1">
              <h1 className="font-playfair font-semibold text-[#162694] text-3xl md:text-4xl lg:text-5xl tracking-[0] leading-tight">
                Free your practice.
              </h1>

              <p className="font-gantari font-normal text-black text-base md:text-lg lg:text-xl tracking-[0] leading-relaxed mt-6 md:mt-8">
                Join over 20,000 clinicians across 650+ health organizations
                experiencing the joy of seamless, HIPAA-compliant clinical notes
                with Freed, saving 2 hours a day to focus on patient care and
                well-being.
              </p>

              <h2 className="font-playfair font-normal text-[#162694] text-2xl md:text-3xl lg:text-4xl tracking-[0] leading-tight mt-8 md:mt-12">
                Talk to InteliDoc sales team
              </h2>

              <Card className="w-full max-w-[498px] h-auto md:h-[445px] mt-6 bg-white rounded-[10px] border border-solid border-[#a9a9a9]">
                <CardContent className="p-4 md:p-6">
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#162694] focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#162694] focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#162694] focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#162694] focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Organization
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#162694] focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                      </label>
                      {/* <textarea
                        rows={3}
                        className="mt-3 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#162694] focus:border-transparent resize-none"
                        placeholder="Tell us about your needs..."
                      /> */}
                    </div>

                    <Button
                      type="submit"
                      className="w-full mt-[50px] bg-[#162694] text-white font-semibold text-base h-12 rounded-[5px] hover:bg-[#1a2a9e] transition-colors"
                    >
                      Contact Sales
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="w-full lg:w-auto flex justify-center order-1 lg:order-2">
              <div className="relative w-full max-w-[400px] md:max-w-[500px] lg:w-[613px] h-auto lg:h-[613px]">
                <div className="relative w-full aspect-square lg:w-[531px] lg:h-[536px] lg:top-[46px] lg:left-[41px]">
                  <img
                    className="absolute w-full h-auto lg:w-[520px] lg:h-[423px] top-0 left-0"
                    alt="Freepik background"
                    src="/contact/freepik--background-complete--inject-61.png"
                  />
                  <img
                    className="absolute w-full h-auto lg:w-[520px] lg:h-[55px] bottom-0 lg:top-[480px] left-0 lg:left-1.5"
                    alt="Freepik shadow"
                    src="/contact/freepik--shadow--inject-61.png"
                  />
                  <img
                    className="absolute w-full lg:w-[531px] h-px top-[80%] lg:top-[422px] left-0"
                    alt="Freepik floor inject"
                    src="/contact/freepik--floor--inject-61.png"
                  />
                  <img
                    className="absolute w-[15%] lg:w-[76px] h-auto lg:h-[68px] top-0 left-[50%] lg:left-[265px]"
                    alt="Freepik heart inject"
                    src="/contact/freepik--heart--inject-61.png"
                  />
                  <img
                    className="absolute w-[22%] lg:w-[113px] h-auto lg:h-[170px] top-[45%] lg:top-[252px] right-0 lg:left-[419px]"
                    alt="Freepik plant inject"
                    src="/contact/freepik--plant--inject-61.png"
                  />
                  <img
                    className="absolute w-[37%] lg:w-[198px] h-auto lg:h-[452px] top-[10%] lg:top-[49px] right-[5%] lg:left-[304px]"
                    alt="Freepik character"
                    src="/contact/freepik--character-3--inject-61.png"
                  />
                  <img
                    className="absolute w-[30%] lg:w-[157px] h-auto lg:h-[459px] top-[8%] lg:top-[42px] left-[7%] lg:left-[38px]"
                    alt="Freepik character"
                    src="/contact/freepik--character-1--inject-61.png"
                  />
                  <img
                    className="absolute w-[32%] lg:w-[172px] h-auto lg:h-[462px] top-[12%] lg:top-[62px] left-[34%] lg:left-[179px]"
                    alt="Freepik character"
                    src="/contact/freepik--character-2--inject-61.png"
                  />
                  <img
                    className="absolute w-[11%] lg:w-[55px] h-auto lg:h-[50px] top-[4%] lg:top-[21px] left-[30%] lg:left-[158px]"
                    alt="Freepik speech"
                    src="/contact/freepik--speech-bubble--inject-61.png"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* CTA section */}
          <section className="mt-16 md:mt-24 lg:mt-32 relative">
            <div className="w-full h-auto md:h-[391px] rounded-[20px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(83,93,173,1)_0%,rgba(21,37,145,1)_100%)] flex flex-col items-center justify-center py-12 md:py-16 px-4">
              <h2 className="font-playfair font-medium text-white text-2xl md:text-3xl lg:text-[44px] text-center tracking-[0] leading-tight">
                Free yourself <br />
                for better things.
              </h2>

              <Button className="mt-8 md:mt-12 bg-white text-[#162694] font-semibold text-base md:text-lg h-12 md:h-[57px] w-full max-w-[220px] sm:max-w-[238px] rounded-[5px] hover:bg-gray-50 transition-colors px-4">
                Try InteliDoc AI -{" "}
                <span className="text-[#8c8c8c] text-sm md:text-base leading-[17.9px]">
                  it&apos;s free
                </span>
              </Button>
            </div>

            {/* Decorative elements - hidden on mobile */}
            <div className="hidden md:block absolute w-[50px] h-[50px] top-[-20px] right-[-50px] bg-[#f7d8e5] rounded-[25px]" />

            <img
              className="hidden lg:block absolute w-[200px] h-[230px] xl:w-[373px] xl:h-[423px] top-[-40px] right-[-100px] xl:right-[-180px] opacity-50"
              alt="Vector"
              src="/contact/vector-1.svg"
            />

            <img
              className="hidden lg:block absolute w-[180px] h-[170px] xl:w-[341px] xl:h-[330px] top-[3px] right-[-80px] xl:right-[-142px] opacity-50"
              alt="Vector"
              src="/contact/vector-2.svg"
            />
          </section>
        </main>

        <Footer links={footerLinks} />
      </div>
    </div>
  );
};
