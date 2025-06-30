'use client'

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Navigation } from "../features/__components/navigation";
import { Footer } from "../components/footer";
import Link from "next/link";

export default function TermsOfService() {
    // Navigation menu items data
    const navItems = [
        { label: "Features", href: "/features" },
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
            <div className="bg-[#f3f3f3] overflow-hidden w-full relative">
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

                {/* Terms of Service title */}
                <div className="pl-4 sm:pl-8 md:pl-16 lg:pl-[85px] pr-4 sm:pr-8 md:pr-16 lg:pr-[85px] max-w-7xl mx-auto mb-6 md:mb-10">
                    <h1 className="font-playfair font-semibold text-[#162694] text-3xl md:text-4xl lg:text-5xl tracking-[0] leading-tight">
                        Terms of Service
                    </h1>
                </div>

                {/* Terms of Service content */}
                <div className="pl-4 sm:pl-8 md:pl-16 lg:pl-[85px] pr-4 sm:pr-8 md:pr-16 lg:pr-[85px] max-w-7xl mx-auto">
                    <div className="font-gantari font-normal text-black text-base md:text-lg lg:text-[21px] tracking-[0] leading-[1.5] max-w-none">
                        <p className="mb-4">
                            Welcome to InteliDoc AI, a service provided by InteliDoc
                            Technologies Pvt. Ltd. (&#34;InteliDoc,&#34; &#34;we,&#34;
                            &#34;us,&#34; or &#34;our&#34;). These Terms of Use (the
                            "Agreement") govern your access to and use of our
                            website located at https://www.intelidoc.ai (the
                            "Website"). By accessing or using the Website, you
                            confirm that you have read, understood, and agreed to be bound by
                            these Terms of Use and our Privacy Policy, which is incorporated
                            by reference.
                        </p>
                        <p className="mb-4">
                            If you do not agree with any part of this Agreement, you should
                            not access or use the Website.
                        </p>
                        <p className="mb-4">
                            If you are agreeing to these Terms on behalf of a company,
                            organization, or other legal entity, you represent and warrant
                            that you have the authority to bind that entity. In such cases,
                            "you" and "your" will refer to the entity.
                        </p>
                        <p className="mb-4">
                            We may update or modify these Terms at any time at our sole
                            discretion. Changes will be posted on this page, and your
                            continued use of the Website after such updates constitutes your
                            acceptance of the revised Terms.
                        </p>

                        <h2 className="font-playfair font-semibold text-xl md:text-2xl mt-6 md:mt-8 mb-2">
                            1. No Medical Advice
                        </h2>
                        <p className="mb-4">
                            The Website and its content are provided for informational
                            purposes only and do not constitute medical advice, diagnosis, or
                            treatment. InteliDoc AI does not offer clinical services or
                            establish a patient-provider relationship. Always consult a
                            licensed healthcare provider for medical guidance. In the event of
                            a medical emergency, contact your physician or emergency services
                            immediately.
                        </p>

                        <h2 className="font-playfair font-semibold text-xl md:text-2xl mt-6 md:mt-8 mb-2">
                            2. Use of Personal Information
                        </h2>
                        <p className="mb-4">
                            Use of the Website may involve the collection and processing of
                            personal information. Our practices regarding data collection and
                            use are detailed in our Privacy Policy, which forms part of this
                            Agreement.
                        </p>

                        <h2 className="font-playfair font-semibold text-xl md:text-2xl mt-6 md:mt-8 mb-2">
                            3. Intellectual Property
                        </h2>
                        <p className="mb-4">
                            All content on the Website—including but not limited to software,
                            code, text, graphics, logos, and design—is the property of
                            InteliDoc or its licensors and is protected by intellectual
                            property laws. No rights are granted to you except as expressly
                            authorized. You may not use, reproduce, or distribute any content
                            from the Website without our prior written consent.
                        </p>

                        <h2 className="font-playfair font-semibold text-xl md:text-2xl mt-6 md:mt-8 mb-2">
                            4. Acceptable Use
                        </h2>
                        <p className="mb-4">By using the Website, you agree not to:</p>
                        <ul className="list-disc pl-6 md:pl-8 mb-4 space-y-1">
                            <li>Violate any applicable law or regulation;</li>
                            <li>
                                Attempt to access areas or features of the Website for which you
                                do not have authorization;
                            </li>
                            <li>
                                Use the Website for competitive intelligence or data scraping;
                            </li>
                            <li>
                                Disrupt or attempt to interfere with the Website&apos;s
                                operation.
                            </li>
                        </ul>
                        <p className="mb-4">
                            We reserve the right to suspend or terminate your access at any
                            time for any violation of these Terms.
                        </p>

                        <h2 className="font-playfair font-semibold text-xl md:text-2xl mt-6 md:mt-8 mb-2">5. Feedback</h2>
                        <p className="mb-4">
                            We welcome your suggestions and feedback. However, please do not
                            send us any confidential or proprietary information. By submitting
                            feedback, you grant us a perpetual, irrevocable, royalty-free
                            license to use, reproduce, and incorporate it into our products
                            and services without any obligation to you.
                        </p>

                        <h2 className="font-playfair font-semibold text-xl md:text-2xl mt-6 md:mt-8 mb-2">
                            6. Disclaimer of Warranties
                        </h2>
                        <p className="mb-4">
                            THE WEBSITE AND ALL CONTENT ARE PROVIDED &#34;AS IS&#34; AND
                            &#34;AS AVAILABLE&#34; WITHOUT WARRANTIES OF ANY KIND. INTELIDOC
                            DISCLAIMS ALL EXPRESS OR IMPLIED WARRANTIES, INCLUDING BUT NOT
                            LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
                            PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO GUARANTEES REGARDING THE
                            ACCURACY, RELIABILITY, OR AVAILABILITY OF THE WEBSITE.
                        </p>

                        <h2 className="font-playfair font-semibold text-xl md:text-2xl mt-6 md:mt-8 mb-2">
                            7. External Sites
                        </h2>
                        <p className="mb-4">
                            The Website may link to third-party websites not operated or
                            controlled by InteliDoc. We do not endorse or assume
                            responsibility for the content, privacy policies, or practices of
                            any third-party sites. You access external sites at your own risk.
                        </p>

                        <h2 className="font-playfair font-semibold text-xl md:text-2xl mt-6 md:mt-8 mb-2">
                            8. Limitation of Liability
                        </h2>
                        <p className="mb-4">
                            TO THE MAXIMUM EXTENT PERMITTED BY LAW, INTELIDOC SHALL NOT BE
                            LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
                            PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS,
                            DATA, OR USE, INCURRED BY YOU OR ANY THIRD PARTY, WHETHER IN AN
                            ACTION IN CONTRACT OR TORT, EVEN IF INTELIDOC HAS BEEN ADVISED OF
                            THE POSSIBILITY OF SUCH DAMAGES.
                        </p>

                        <h2 className="font-playfair font-semibold text-xl md:text-2xl mt-6 md:mt-8 mb-2">
                            9. Governing Law
                        </h2>
                        <p className="mb-4">
                            These Terms shall be governed by and construed in accordance with
                            the laws of the jurisdiction in which InteliDoc operates, without
                            regard to its conflict of law provisions.
                        </p>

                        <h2 className="font-playfair font-semibold text-xl md:text-2xl mt-6 md:mt-8 mb-2">
                            10. Contact Information
                        </h2>
                        <p className="mb-4">
                            If you have any questions about these Terms of Service, please
                            contact us at the information provided on our Website.
                        </p>
                    </div>
                </div>

                {/* Footer */}
                <Footer links={footerLinks} />
            </div>
        </div>
    );
};