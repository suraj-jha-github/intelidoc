'use client'

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Navigation } from "../features/__components/navigation";
import { Footer } from "../components/footer";
import Link from "next/link";

export default function TermsOfUse() {
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

                {/* Terms of Use title */}
                <div className="pl-4 sm:pl-8 md:pl-16 lg:pl-[85px] pr-4 sm:pr-8 md:pr-16 lg:pr-[85px] max-w-7xl mx-auto mb-6 md:mb-10">
                    <h1 className="font-playfair font-semibold text-[#162694] text-3xl md:text-4xl lg:text-5xl tracking-[0] leading-tight">
                        Terms of Use
                    </h1>
                </div>

                {/* Terms of Use content */}
                <div className="pl-4 sm:pl-8 md:pl-16 lg:pl-[85px] pr-4 sm:pr-8 md:pr-16 lg:pr-[85px] max-w-7xl mx-auto">
                    <div className="font-gantari font-normal text-black text-base md:text-lg lg:text-[21px] tracking-[0] leading-[1.5] max-w-none">
                        <p className="mb-4">
                            These Terms of Use are a legal agreement between you and Ravel
                            Technological Solutions (&quot;Ravel,&quot; &quot;we,&quot;
                            &quot;us,&quot; or &quot;our&quot;). These Terms of Use specify the
                            terms under which you may access and use our proprietary software as
                            a service (SaaS) platform that is made available to you as a web
                            application and/or a mobile application (if any) (the
                            &quot;Platform,&quot; branded as InteliDoc AI).
                        </p>
                        <p className="mb-4 font-semibold">
                            PLEASE READ THESE TERMS OF USE CAREFULLY.
                        </p>
                        <p className="mb-4">
                            BY ACCESSING AND/OR USING THE PLATFORM, YOU ACKNOWLEDGE THAT
                            YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE LEGALLY BOUND BY THESE
                            TERMS OF USE, AND THE TERMS AND CONDITIONS OF OUR PRIVACY POLICY
                            (THE &quot;PRIVACY POLICY&quot;), WHICH IS HEREBY INCORPORATED INTO
                            THESE TERMS OF USE AND MADE A PART HEREOF BY REFERENCE
                            (COLLECTIVELY, THE &quot;AGREEMENT&quot;). IF YOU DO NOT AGREE TO
                            ANY OF THE TERMS IN THIS AGREEMENT, THEN PLEASE DO NOT USE THE
                            PLATFORM.
                        </p>
                        <p className="mb-4">
                            If you accept or agree to the Agreement on behalf of a company or
                            other legal entity, you represent and warrant that you have the
                            authority to bind that company or other legal entity to the
                            Agreement and, in such an event, &quot;you&quot; and
                            &quot;your&quot; will refer and apply to that company or other legal
                            entity.
                        </p>
                        <p className="mb-4">
                            We reserve the right, at our sole discretion, to modify,
                            discontinue, or terminate the Platform, or to modify the Agreement,
                            at any time and without prior notice. If we modify the Agreement, we
                            will post the modification on the Platform. By continuing to access
                            or use the Platform after we have posted a modification on the
                            Platform, you are indicating that you agree to be bound by the
                            modified Agreement. If the modified Agreement is not acceptable to
                            you, your only recourse is to cease using the Platform.
                        </p>
                        <p className="mb-4 font-semibold">
                            THE SECTIONS BELOW TITLED &quot;BINDING ARBITRATION&quot; AND
                            &quot;CLASS ACTION WAIVER&quot; CONTAIN A BINDING ARBITRATION
                            AGREEMENT AND CLASS ACTION WAIVER. THEY AFFECT YOUR LEGAL RIGHTS.
                            PLEASE READ THEM.
                        </p>

                        <h2 className="font-playfair font-semibold text-xl md:text-2xl mt-6 md:mt-8 mb-2">
                            1. RIGHT TO ACCESS AND USE THE PLATFORM
                        </h2>
                        <p className="mb-4">
                            Subject to the terms and conditions of this Agreement, Ravel hereby
                            grants you during the Term of this Agreement a limited,
                            non-exclusive, non-transferable, non-sublicensable, revocable right
                            to authorize your Authorized Users to access and use the InteliDoc
                            AI Platform solely for your internal business purposes to evaluate
                            the Platform.
                        </p>
                        <p className="mb-4">You will not (and will not authorize, permit, or encourage any third party to):</p>
                        <ul className="list-disc pl-6 md:pl-8 mb-4 space-y-1">
                            <li>reverse engineer, decompile, disassemble, or otherwise attempt to discern the source code or interface protocols of the Platform;</li>
                            <li>modify, adapt, or translate the Platform, or any portion or component thereof;</li>
                            <li>make any copies of the Platform, or any portion or component thereof;</li>
                            <li>resell, distribute, or sublicense the Platform, or any portion or component thereof;</li>
                            <li>remove or modify any proprietary markings or restrictive legends placed on the Platform;</li>
                            <li>use the Platform, or any portion or component thereof in violation of any applicable law, in order to build a competitive product or service, or for any purpose not specifically permitted in this Agreement;</li>
                            <li>introduce, post, or upload to the Platform any virus, worm, &quot;black door,&quot; Trojan Horse, or similar harmful code;</li>
                            <li>save, store, or archive any portion of the services (including, without limitation, any data contained therein) outside the Platform other than those outputs generated through the intended functionality of the Platform without the prior written permission of Ravel in each instance;</li>
                            <li>use the Platform in connection with service bureau, timeshare, service provider or like activity whereby you operate the Platform for the benefit of a third party; or</li>
                            <li>circumvent any processes, procedures, or technologies that we have put in place to safeguard the Platform.</li>
                        </ul>
                        <p className="mb-4">
                            If you violate this section, Ravel reserves the right in its sole
                            discretion to immediately deny you access to the Platform, or any
                            portion thereof, without notice. Ravel reserves the right to change
                            the availability of any feature, function, or content relating to
                            the Platform, at any time, without notice or liability to you.
                        </p>

                        <h2 className="font-playfair font-semibold text-xl md:text-2xl mt-6 md:mt-8 mb-2">
                            2. Authorized Users
                        </h2>
                        <p className="mb-4">
                            Your employees and contractors who access and use the InteliDoc AI
                            Platform on your behalf are considered &quot;Authorized Users.&quot;
                            Each Authorized User must register for an individual account by
                            providing an email address and creating a secure password
                            (&quot;Login Credentials&quot;). These credentials must not be
                            shared between users or with any third party, and must be kept
                            strictly confidential. You are responsible for ensuring that all
                            Authorized Users comply with these Terms of Use, and you are fully
                            liable for all actions taken through their accounts, whether
                            authorized or not. You agree to notify us immediately of any actual
                            or suspected unauthorized use of any Login Credentials. You also
                            agree to inform us promptly if any account needs to be deactivated
                            or changed. We reserve the right to disable any account or access
                            credentials at our sole discretion if we believe these Terms have
                            been violated.
                        </p>

                        <h2 className="font-playfair font-semibold text-xl md:text-2xl mt-6 md:mt-8 mb-2">
                            3. Ownership
                        </h2>
                        <p className="mb-4">
                            The InteliDoc AI Platform contains content including software, text,
                            graphics, images, audio, video, and other materials
                            (&quot;Content&quot;), which is owned by Ravel Technological
                            Solutions or licensed from third parties. This Content is protected
                            by U.S. and international laws. You are not granted any rights to
                            the Content other than what is expressly permitted under this
                            Agreement.
                        </p>
                        <p className="mb-4">
                            You may not copy, reproduce, modify, distribute, display, or use the
                            Content for any commercial or public purpose without our prior
                            written consent. All copyright and proprietary notices must be
                            preserved on any copies you make. Posting or using the Content on
                            other websites or in networked environments is strictly prohibited.
                        </p>
                        <p className="mb-4">
                            If you breach this Agreement, your right to access and use the
                            Platform will terminate immediately. Upon termination, you must
                            cease all use of the Platform and destroy any copies of the Content
                            in your possession.
                        </p>
                    </div>
                </div>

                {/* Footer */}
                <Footer links={footerLinks} />
            </div>
        </div>
    );
}
