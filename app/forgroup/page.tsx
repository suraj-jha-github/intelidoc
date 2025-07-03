'use client'

import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from 'next/link';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs";
import { Copy, Menu, X, FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon, YoutubeIcon } from "lucide-react";
import { Navigation } from "../features/__components/navigation";
import { Footer } from "../components/footer";

export default function ForGroups() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Feature badges data
    const featureBadges = [
        {
            text: "6K+ clinicians use Intelidoc",
        },
        {
            text: "For teams of any size",
        },
        {
            text: "Reduces burnout, better retention",
        },
        {
            text: "Easy onboarding, no IT needed",
        },
    ];

    // Navigation menu items data
    const navItems = [
        { label: "Features", href: "/features" },
        { label: "Specialties", href: "/specialities" },
        { label: "Blog", href: "/blogs" },
        { label: "Pricing", href: "/pricing" },
        { label: "For Groups", href: "/forgroup" },
        { label: "Contact Us", href: "/contact" },
    ];

    // Data for the text lines in the content area
    const textLines = [
        { width: "w-full" },
        { width: "w-5/6" },
        { width: "w-4/5" },
        { width: "w-5/6" },
        { width: "w-1/2" },
        { width: "w-full" },
    ];

    // Define the footer data structure for better organization and mapping
    const footerSections = [
        {
            title: "Resources",
            links: ["Help Center", "Blog"],
        },
        {
            title: "Specialties",
            links: [
                "Family Medicine",
                "Internal Medicine",
                "Psychiatry",
                "Mental Health",
                "Pediatrics",
                "Other Specialties",
            ],
        },
        {
            title: "Legal",
            links: ["Privacy Policy", "Terms of Services", "Terms of Use"],
        },
    ];

    // Social media icons
    const socialIcons = [
        { Icon: FacebookIcon, ariaLabel: "Facebook" },
        { Icon: InstagramIcon, ariaLabel: "Instagram" },
        { Icon: TwitterIcon, ariaLabel: "Twitter" },
        { Icon: LinkedinIcon, ariaLabel: "LinkedIn" },
        { Icon: YoutubeIcon, ariaLabel: "YouTube" },
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

    return (
        <div className="bg-[#f3f3f3] flex flex-row justify-center w-full">
            <div className="bg-[#f3f3f3] overflow-hidden w-full max-w-none relative">
                {/* Header Section */}
                <header className="relative w-full min-h-[500px] md:min-h-[622px]">
                    <div className="absolute w-full h-full [background:linear-gradient(137deg,rgba(14,25,99,1)_0%,rgba(46,24,173,1)_47%,rgba(79,52,187,1)_60%,rgba(140,76,193,1)_71%,rgba(200,110,186,1)_82%,rgba(228,174,211,1)_94%,rgba(231,227,237,1)_100%)]" />

                    {/* Navigation Bar */}
                    <Navigation navItems={navItems} />

                    {/* Hero Content */}
                    <div data-nav-dark="true" className="relative z-10 flex flex-col lg:flex-row items-center justify-between pl-4 sm:pl-8 md:pl-16 lg:pl-[85px] pr-4 sm:pr-8 md:pr-16 lg:pr-[85px] pt-24 md:pt-32 pb-8 max-w-7xl mx-auto h-full">
                        <div className="flex-1 mb-8 lg:mb-0">
                            <h1 className="font-playfair font-semibold text-white text-3xl md:text-4xl lg:text-[52px] tracking-[0] leading-tight md:leading-[57.7px] mb-6">
                                Create a more <br className="hidden sm:block" />
                                contented, successful <br className="hidden sm:block" />
                                practice.
                            </h1>

                            <p className="font-gantari font-normal text-white text-lg md:text-xl lg:text-2xl leading-normal mb-8 max-w-[459px]">
                                By handling pre-charting, charting, and coding, InteliDoc
                                frees up your team to concentrate on important tasks rather
                                than paperwork.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/contact">
                                    <Button className="h-12 sm:h-[57px] w-full sm:w-auto px-8 lg:px-12 rounded-[5px] bg-white hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl">
                                        <span className="font-gantari font-semibold text-[#162694] text-base sm:text-lg">
                                            Contact us
                                        </span>
                                    </Button>
                                </Link>

                                <Link href="/tryfree" target="_blank">
                                    <Button
                                        variant="outline"
                                        className="h-12 sm:h-[57px] w-full sm:w-auto px-8 lg:px-12 rounded-[5px] border border-solid border-white bg-transparent hover:bg-white hover:text-[#162694] transition-all duration-300 group"
                                    >
                                        <span className="text-base sm:text-lg leading-[30.7px] font-gantari font-medium text-white group-hover:text-[#162694] text-center whitespace-nowrap transition-colors duration-300">
                                            Try for free
                                        </span>
                                    </Button>
                                </Link>
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

                    {/* Feature Badges */}
                    <div className="relative z-10 pl-4 sm:pl-8 md:pl-16 lg:pl-[85px] pr-4 sm:pr-8 md:pr-16 lg:pr-[85px] mt-8 lg:mt-12 pb-8 lg:pb-12 max-w-7xl mx-auto">
                        <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
                            {featureBadges.map((badge, index) => (
                                <Badge
                                    key={index}
                                    variant="outline"
                                    className="h-10 lg:h-[45px] w-[250px] lg:w-[259px] px-4 lg:px-6 bg-white/95 backdrop-blur-sm rounded-lg border-0 flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                                >
                                    <span className="font-gantari font-medium text-[#162694] text-sm lg:text-[15px] text-center">
                                        {badge.text}
                                    </span>
                                </Badge>
                            ))}
                        </div>
                    </div>
                </header>

                {/* Call To Action Section */}


                {/* Footer */}
                <Footer links={footerLinks} />
            </div>
        </div>
    );
};