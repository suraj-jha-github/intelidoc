'use client'

import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Navigation } from "../features/__components/navigation";
import { Footer } from "../components/footer";
import Link from "next/link";

export default function PrivacyPolicy() {
    // Navigation menu items data
    const navItems = [
        { label: "Features", href: "/features" },
        { label: "How it Works", href: "/#how-it-works" },
        { label: "Specialties", href: "/specialities" },
        { label: "Blog", href: "/blogs" },
        { label: "Pricing", href: "/pricing" },
        { label: "For Groups", href: "/forgroup" },
        { label: "Contact Us", href: "/contact" },
    ];

    // Footer links data - same as homepage
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
        <div className="bg-[#f3f3f3] flex flex-row justify-center w-full min-h-screen">
            <div className="bg-[#f3f3f3] w-full relative">
                {/* Navigation */}
                <Navigation navItems={navItems} />

                {/* Top banner - moved above gradient box */}
                <div className="flex justify-center items-center py-4 md:py-7 px-4 mt-[50px]">
                    <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-center">
                        <div className="font-playfair font-bold text-black text-lg sm:text-xl md:text-2xl tracking-[0] leading-tight">
                            Try intelidoc free for 7 days
                        </div>
                        <Link href="/tryfree">
                            <Button className="h-8 md:h-7 bg-[#162694] rounded-[5px] px-3 md:px-2 whitespace-nowrap">
                                <span className="font-gantari font-semibold text-white text-sm md:text-[15px] text-center tracking-[0] leading-[19.2px]">
                                    Try for free
                                </span>
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Gradient Background Box */}
                <div className="w-full py-8 md:py-12 mb-[50px] [background:linear-gradient(137deg,rgba(14,25,99,1)_0%,rgba(46,24,173,1)_47%,rgba(79,52,187,1)_60%,rgba(140,76,193,1)_71%,rgba(200,110,186,1)_82%,rgba(228,174,211,1)_94%,rgba(231,227,237,1)_100%)]">
                    <div className="pl-4 sm:pl-8 md:pl-16 lg:pl-[85px] pr-4 sm:pr-8 md:pr-16 lg:pr-[85px] max-w-7xl mx-auto">
                        {/* Header Row */}
                        <div className="flex flex-col lg:flex-row justify-between items-center mb-6 md:mb-8">
                            {/* Left side - InteliDoc */}
                            <div className="font-playfair font-bold text-white text-2xl md:text-3xl lg:text-[35px] tracking-[0] leading-tight mb-4 lg:mb-0">
                                InteliDoc
                            </div>

                            {/* Right side - Navigation links */}
                            <div className="flex flex-wrap justify-center lg:justify-end gap-4 md:gap-6">
                                <a href="#" className="font-gantari font-medium text-white/90 hover:text-white text-sm md:text-base tracking-[0] leading-[20.5px] transition-colors">
                                    Get InteliDoc
                                </a>
                                <a href="#" className="font-gantari font-medium text-white/90 hover:text-white text-sm md:text-base tracking-[0] leading-[20.5px] transition-colors">
                                    Log
                                </a>
                                <a href="#" className="font-gantari font-medium text-white/90 hover:text-white text-sm md:text-base tracking-[0] leading-[20.5px] transition-colors">
                                    InteliDoc
                                </a>
                                <a href="#" className="font-gantari font-medium text-white/90 hover:text-white text-sm md:text-base tracking-[0] leading-[20.5px] transition-colors">
                                    English
                                </a>
                            </div>
                        </div>

                        {/* Search Bar - reduced height */}
                        <div className="w-full">
                            <Card className="rounded-[10px] border-none shadow-lg h-[30px]">
                                <CardContent className="p-1 h-[20px]">
                                    <div className="relative flex items-center h-full">
                                        <input
                                            type="text"
                                            className="px-4 py-2 rounded-[10px] font-gantari font-medium text-[#848484] text-sm md:text-base border-0 outline-none w-full bg-transparent"
                                            placeholder="Search for article"
                                        />
                                        <div className="absolute left-3 md:left-4 top-1/2 transform -translate-y-1/2">
                                            {/* Search icon placeholder */}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>

                {/* Privacy Policy title */}
                <div className="pl-4 sm:pl-8 md:pl-16 lg:pl-[85px] pr-4 sm:pr-8 md:pr-16 lg:pr-[85px] max-w-7xl mx-auto mb-6 md:mb-10">
                    <h1 className="font-playfair font-semibold text-[#162694] text-3xl md:text-4xl lg:text-5xl tracking-[0] leading-tight">
                        Privacy Policy
                    </h1>
                </div>

                {/* Privacy Policy content */}
                <div className="pl-4 sm:pl-8 md:pl-16 lg:pl-[85px] pr-4 sm:pr-8 md:pr-16 lg:pr-[85px] max-w-7xl mx-auto">
                    <div className="font-gantari font-normal text-black text-base md:text-lg lg:text-[21px] tracking-[0] leading-[1.5] max-w-none">
                        <p className="mb-4">
                            Ravel Technological Solutions LTD (&#34;Ravel,&#34; &#34;we,&#34;
                            &#34;us,&#34; or &#34;our&#34;) is committed to protecting your
                            privacy. This Privacy Policy outlines our practices regarding the
                            collection, use, and sharing of your information through our
                            website at https://www.intelidoc.ai (&#34;Website&#34;), our
                            proprietary software as a service (SaaS) platform
                            (&#34;Platform&#34;) accessible via our Website and/or a mobile
                            application, and any other interactions with us.
                        </p>

                        <h2 className="font-playfair font-semibold text-xl md:text-2xl mt-6 md:mt-8 mb-2">
                            User Types and Agreement to Terms
                        </h2>
                        <p className="mb-4">
                            This Privacy Policy applies to individuals who visit our Website
                            and view publicly available content (&#34;Visitors&#34;), those
                            who register to use the Platform (&#34;Customers&#34;), and those
                            authorized by Customers to use the Platform, such as employees and
                            contractors (&#34;Authorized Users&#34;).
                        </p>
                        <p className="mb-4">
                            Visitors agree to this Privacy Policy and our Terms of Use by
                            accessing the Website. Similarly, Customers and Authorized Users
                            agree to this Privacy Policy and the Platform Terms of Use by
                            using the Platform. Undefined capitalized terms are explained in
                            our Terms of Use.
                        </p>

                        <h2 className="font-playfair font-semibold text-xl md:text-2xl mt-6 md:mt-8 mb-2">
                            Information Collection and Authorization
                        </h2>
                        <p className="mb-4">
                            During the operation of our Website and Platform and interactions
                            with you, we collect or receive various types of information, with
                            your authorization:
                        </p>

                        <ol className="list-decimal pl-6 md:pl-8 mb-4 space-y-1">
                            <li>
                                <span className="font-gantari font-semibold">Contact Information:</span> This
                                includes details you provide when contacting us, subscribing to
                                our services, or engaging in direct marketing activities, such
                                as your name, email, phone number, company name, and job title.
                            </li>
                            <li>
                                <span className="font-gantari font-semibold">Account Information:</span>{" "}
                                Required for Platform access and use, including your email and a
                                password for account creation and management.
                            </li>
                            <li>
                                <span className="font-gantari font-semibold">Your Data:</span> Information
                                you provide using the Platform. We use your data according to
                                our Platform Terms of Use, and personal information within your
                                data is treated per this Privacy Policy.
                            </li>
                            <li>
                                <span className="font-gantari font-semibold">
                                    Automatic Information Collection:
                                </span>{" "}
                                We use cookies, pixels, web beacons, and similar technologies to
                                collect technical information and data about your online
                                activity, device, and usage patterns for enhancing
                                functionality, personalizing your experience, and supporting
                                advertising and analytics.
                            </li>
                            <li>
                                <span className="font-gantari font-semibold">Third-Party Analytics:</span> We
                                employ analytics services like Google Analytics to assess usage
                                and performance, which involves collecting data through cookies
                                and other technologies.
                            </li>
                            <li>
                                <span className="font-gantari font-semibold">
                                    Information from Third-Party Advertisers:
                                </span>{" "}
                                We share data with approved third parties for ad optimization,
                                which may involve cookies, pixel tags, and other technologies to
                                collect information for advertising purposes.
                            </li>
                        </ol>

                        <h2 className="font-playfair font-semibold text-xl md:text-2xl mt-6 md:mt-8 mb-2">
                            Usage and Sharing of Information
                        </h2>
                        <p className="mb-4">
                            We use and share your personal information for providing and
                            improving our Website and Platform, marketing, feedback
                            solicitation, security, compliance with legal obligations, and
                            with your consent. We ensure any third party receiving personal
                            information from us respects this Privacy Policy&#39;s
                            protections.
                        </p>

                        <h2 className="font-playfair font-semibold text-xl md:text-2xl mt-6 md:mt-8 mb-2">
                            Information Access and Preferences
                        </h2>
                        <ul className="list-disc pl-6 md:pl-8 mb-4 space-y-1">
                            <li>
                                <span className="font-gantari font-semibold">Update Information:</span> You
                                can update your personal information through specific channels
                                or directly in your account.
                            </li>
                            <li>
                                <span className="font-gantari font-semibold">Marketing Communications:</span>{" "}
                                Opt-out of marketing emails through the unsubscribe link.
                            </li>
                            <li>
                                <span className="font-gantari font-semibold">Cookie Management:</span>{" "}
                                Browser settings allow you to manage cookie preferences, but
                                disabling cookies may affect Website and Platform functionality.
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Footer */}
                <Footer links={footerLinks} />
            </div>
        </div>
    );
}