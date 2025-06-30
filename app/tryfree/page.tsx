import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Navigation } from "../features/__components/navigation";
import { Footer } from "../components/footer";

export default function TryFree() {
    // Testimonial data
    const testimonial = {
        quote:
            '"I have more time to spend doing other things I enjoy - getting home early, rather than staying late at the office trying to finish my charts or taking my charts home and doing them over the weekend."',
        author: "Olusesan, MD",
        specialty: "Family Medicine",
    };

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
        <div className="min-h-screen bg-[#f3f3f3]">
            {/* Navigation */}
            <Navigation navItems={navItems} />

            {/* Content container */}
            <div className="relative w-full max-w-7xl pl-4 sm:pl-8 md:pl-16 lg:pl-[85px] pr-4 sm:pr-8 md:pr-16 lg:pr-[85px] mx-auto min-h-screen flex flex-col lg:flex-row">
                {/* Left side content */}
                <div className="flex-1 py-8 md:py-12 lg:py-16 flex flex-col justify-center">
                    {/* Header */}
                    <div className="text-center lg:text-left mb-8 md:mb-12">
                        <h1 className="font-bold text-[#162694] text-2xl md:text-3xl lg:text-[35px] mb-4 font-playfair">
                            InteliDoc
                        </h1>
                        <h2 className="font-normal text-black text-lg md:text-xl lg:text-[25px] font-playfair leading-relaxed">
                            Free Yourself For Better Things
                        </h2>
                    </div>

                    {/* Marketing text */}
                    <div className="text-center lg:text-left mb-8 md:mb-12">
                        <p className="font-medium text-lg md:text-xl lg:text-[25px] font-playfair leading-relaxed">
                            <span className="text-black">Join the </span>
                            <span className="text-[#e03099]">20,000+</span>
                            <span className="text-black"> clinicians saving </span>
                            <span className="text-[#e03099]">2-hours</span>
                            <span className="text-black"> a day with InteliDoc AI instant </span>
                            <span className="text-[#e03099]">HIPAA-compliant</span>
                            <span className="text-black"> clinical notes.</span>
                        </p>
                    </div>

                    {/* Testimonial card */}
                    <Card className="bg-[#fff9e3] border-none shadow-lg max-w-lg mx-auto lg:mx-0">
                        <CardContent className="p-6">
                            <div className="font-normal text-black text-base md:text-lg font-gantari leading-relaxed mb-4">
                                {testimonial.quote}
                            </div>
                            <div className="font-normal text-black text-base md:text-lg font-gantari leading-relaxed mb-4">
                                <strong>{testimonial.author}</strong>
                                <br />
                                {testimonial.specialty}
                            </div>
                            <div className="flex justify-center lg:justify-start">
                                <div className="flex gap-1">
                                    {[...Array(5)].map((_, index) => (
                                        <svg
                                            key={index}
                                            className="w-5 h-5 md:w-6 md:h-6"
                                            fill="#FFD700"
                                            stroke="#FFD700"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                            />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Right side - Sign up form */}
                <div className="flex-1 py-8 md:py-12 lg:py-16 flex items-center justify-center">
                    <div className="w-full max-w-md lg:max-w-lg">
                        <Card className="bg-[#f4f0f0] shadow-lg border-none">
                            <CardContent className="p-6 md:p-8">
                                {/* Form header */}
                                <div className="text-center mb-6 md:mb-8">
                                    <h3 className="font-medium text-black text-xl md:text-2xl lg:text-[25px] font-playfair leading-tight mb-4">
                                        Create Your InteliDoc Account
                                    </h3>
                                    <p className="font-normal text-black text-lg md:text-xl font-gantari leading-relaxed">
                                        7-day trial. Unlimited visits.
                                        <br />
                                        No credit card needed.
                                    </p>
                                </div>

                                {/* Form inputs */}
                                <div className="space-y-4 mb-6">
                                    <Input
                                        className="w-full h-12 border border-[#b1afaf] px-6 py-3 text-base"
                                        placeholder="Email"
                                        type="email"
                                    />
                                    <Input
                                        className="w-full h-12 border border-[#b1afaf] px-6 py-3 text-base"
                                        type="password"
                                        placeholder="Create password"
                                    />
                                </div>

                                {/* Terms checkbox */}
                                <div className="flex items-start gap-3 mb-6">
                                    <Checkbox id="terms" className="mt-1 border-[#757474] flex-shrink-0" />
                                    <label
                                        htmlFor="terms"
                                        className="font-normal text-black text-sm md:text-[15px] font-gantari leading-relaxed"
                                    >
                                        I agree to the terms of intelidoc's{" "}
                                        <a
                                            href="https://help.getintelidoc.ai/en/articles/9879953-privacy-policy"
                                            rel="noopener noreferrer"
                                            target="_blank"
                                            className="underline hover:text-[#162694] transition-colors"
                                        >
                                            privacy policy
                                        </a>
                                        ,{" "}
                                        <a
                                            href="https://help.getintelidoc.ai/en/articles/9879697-platform-terms-of-use"
                                            rel="noopener noreferrer"
                                            target="_blank"
                                            className="underline hover:text-[#162694] transition-colors"
                                        >
                                            terms of use and BAA
                                        </a>
                                        .
                                    </label>
                                </div>

                                {/* Submit button */}
                                <Button className="w-full h-12 bg-[#162694] hover:bg-[#111d70] rounded-md transition-colors duration-200">
                                    <span className="font-medium text-white text-lg font-gantari tracking-wide">
                                        CREATE ACCOUNT
                                    </span>
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer links={footerLinks} />
        </div>
    );
};
