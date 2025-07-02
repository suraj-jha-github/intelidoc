import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Navigation } from "../../features/__components/navigation";
import { Footer } from "../../components/footer";

export default function DocumentingPediatric() {
    // Data for related content cards
    const relatedArticles = [
        {
            title: "AI Medical Scribes: The Cure for Healthcare's Documentation Headache",
            content: "The exam room used to be sacred space—where undivided attention met patient stories. Now, it's often a battleground between eye contact and endless clicks. Doctors are burning out, not from care, but from clerical chaos. Enter the AI medical scribe: not science fiction, but a practical solution reshaping modern healthcare.",
        },
        {
            title: "Why Internal Medicine Physicians Are Turning to AI Scribes for Relief",
            content: "Internists are detectives, educators, care coordinators, and chronic disease managers—all in a single day. But too often, their work is buried under the weight of documentation. Every encounter demands detailed notes, thoughtful plans, and bulletproof coding. It's no wonder that internal medicine sees some of the highest burnout rates in healthcare.",
        },
        {
            title: "Documenting Pediatric Care Shouldn't Be a Puzzle—Let AI Scribes Help",
            content: "Pediatric care is full of nuance. The patient doesn't always speak, parents do. Visits are short, but dense with critical information—growth charts, vaccines, milestones, anticipatory guidance, and more. Every note needs to be complete, clear, and compliant. But pediatricians are drowning in charting.",
        }
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

            <div className="max-w-7xl mx-auto">
                {/* Main Content Container */}
                <div className="max-w-4xl mx-auto bg-[#f1f3ff87]">
                    <div className="px-4 sm:px-6 md:px-8 lg:px-14 py-8 sm:py-12 md:py-16 lg:py-24">
                        {/* Main Headline */}
                        <h1 className="font-playfair font-semibold text-[#162694] text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-tight lg:leading-[51.2px] mb-6 md:mb-8">
                            Documenting Pediatric Care Shouldn't Be a Puzzle—Let AI Scribes Help
                        </h1>

                        {/* Section: Pediatric Documentation Is a Whole Different Animal */}
                        <section className="mb-8 md:mb-12">
                            <h2 className="font-playfair font-semibold text-black text-xl sm:text-2xl md:text-[28px] leading-tight md:leading-[35.8px] mb-4 md:mb-6">
                                Pediatric Documentation Is a Whole Different Animal
                            </h2>
                            <p className="font-gantari font-normal text-black text-lg sm:text-xl md:text-2xl leading-relaxed md:leading-[41.8px]">
                                Unlike adult medicine, pediatric care requires:
                            </p>
                            <div className="mt-6 space-y-3">
                                <p className="font-gantari font-normal text-black text-lg sm:text-xl md:text-2xl leading-relaxed md:leading-[41.8px]">
                                    • Parent-provider dialogue capture: the patient's story comes secondhand
                                </p>
                                <p className="font-gantari font-normal text-black text-lg sm:text-xl md:text-2xl leading-relaxed md:leading-[41.8px]">
                                    • Well-child visit templates: different checklists at each age
                                </p>
                                <p className="font-gantari font-normal text-black text-lg sm:text-xl md:text-2xl leading-relaxed md:leading-[41.8px]">
                                    • Developmental milestone tracking
                                </p>
                                <p className="font-gantari font-normal text-black text-lg sm:text-xl md:text-2xl leading-relaxed md:leading-[41.8px]">
                                    • Vaccine logs and anticipatory guidance
                                </p>
                                <p className="font-gantari font-normal text-black text-lg sm:text-xl md:text-2xl leading-relaxed md:leading-[41.8px]">
                                    • Frequent visits, short time slots, no room for documentation delays
                                </p>
                            </div>
                            <p className="font-gantari font-normal text-black text-lg sm:text-xl md:text-2xl leading-relaxed md:leading-[41.8px] mt-6">
                                Even seasoned pediatricians spend more time documenting than seeing kids. Add after-hours note finishing to that, and burnout becomes inevitable.
                            </p>
                        </section>

                        {/* Section: How an AI Medical Scribe Supports Pediatricians */}
                        <section className="mb-8 md:mb-12">
                            <h2 className="font-playfair font-semibold text-black text-xl sm:text-2xl md:text-[28px] leading-tight md:leading-[35.8px] mb-4 md:mb-6">
                                How an AI Medical Scribe Supports Pediatricians
                            </h2>
                            <p className="font-gantari font-normal text-black text-lg sm:text-xl md:text-2xl leading-relaxed md:leading-[41.8px]">
                                Your AI scribe listens in real-time, filters out non-clinical chatter, understands parent-child dynamics, and builds a structured, EHR-ready note with all the essentials.
                            </p>
                            <div className="mt-6">
                                <h3 className="font-playfair font-semibold text-black text-lg sm:text-xl md:text-[25px] leading-tight md:leading-8 mb-4 md:mb-6">
                                    Pediatric-Specific Capabilities:
                                </h3>
                                <div className="space-y-3">
                                    <p className="font-gantari font-normal text-black text-lg sm:text-xl md:text-2xl leading-relaxed md:leading-[41.8px]">
                                        • Recognizes and logs milestones (motor, speech, social)
                                    </p>
                                    <p className="font-gantari font-normal text-black text-lg sm:text-xl md:text-2xl leading-relaxed md:leading-[41.8px]">
                                        • Tracks vaccine schedules with automatic prompts
                                    </p>
                                    <p className="font-gantari font-normal text-black text-lg sm:text-xl md:text-2xl leading-relaxed md:leading-[41.8px]">
                                        • Captures anticipatory guidance topics specific to the child's age
                                    </p>
                                    <p className="font-gantari font-normal text-black text-lg sm:text-xl md:text-2xl leading-relaxed md:leading-[41.8px]">
                                        • Notes both patient and parent perspectives
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Section: Built for Effortless Workflow */}
                        <section className="mb-8 md:mb-12">
                            <h2 className="font-playfair font-semibold text-black text-xl sm:text-2xl md:text-[28px] leading-tight md:leading-[35.8px] mb-4 md:mb-6">
                                Built for Effortless Workflow
                            </h2>
                            <div className="space-y-6 md:space-y-8">
                                <div className="space-y-4 md:space-y-6">
                                    <div>
                                        <h4 className="font-playfair font-semibold text-black text-lg sm:text-xl md:text-2xl mb-2">
                                            Age-Specific Intelligence
                                        </h4>
                                        <p className="font-gantari font-normal text-black text-base sm:text-lg md:text-xl leading-relaxed">
                                            Automatically adjusts notes and guidance based on the child's age—newborn to adolescent—no manual templates required.
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="font-playfair font-semibold text-black text-lg sm:text-xl md:text-2xl mb-2">
                                            Dual-Voice Recognition
                                        </h4>
                                        <p className="font-gantari font-normal text-black text-base sm:text-lg md:text-xl leading-relaxed">
                                            Captures both the parent's concerns and the child's symptoms with contextual clarity, reducing errors and missed details.
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="font-playfair font-semibold text-black text-lg sm:text-xl md:text-2xl mb-2">
                                            Automated Milestone & Vaccine Tracking
                                        </h4>
                                        <p className="font-gantari font-normal text-black text-base sm:text-lg md:text-xl leading-relaxed">
                                            Inserts developmental milestones, anticipatory guidance, and immunization updates directly into the note—no extra clicks.
                                        </p>
                                    </div>
                                </div>

                                {/* Quote Card */}
                                <Card className="w-full max-w-lg mx-auto bg-[#fffde3] rounded-[20px] border-none shadow-sm hover:shadow-md transition-shadow">
                                    <CardContent className="p-4 sm:p-6 flex flex-col items-center justify-center text-center">
                                        <Image
                                            className="w-16 h-20 sm:w-[94px] sm:h-[117px] mb-3 sm:mb-4"
                                            alt="Doctor illustration"
                                            src="/blog/noun-doctor-7832406-1.svg"
                                            width={94}
                                            height={117}
                                        />
                                        <p className="font-gantari font-normal text-[#212121] text-sm sm:text-base leading-relaxed sm:leading-[27.8px]">
                                            "Technology will not replace physicians, but physicians who use technology will replace those who don't."
                                            <br />— Dr. Robert Wachter, Chair of UCSF Medicine
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                        </section>

                        {/* Section: Why It Matters */}
                        <section className="mb-8 md:mb-12">
                            <h2 className="font-playfair font-semibold text-black text-xl sm:text-2xl md:text-[28px] leading-tight md:leading-[35.8px] mb-4 md:mb-6">
                                Why It Matters
                            </h2>
                            <div className="space-y-6 md:space-y-8">
                                <div className="space-y-4 md:space-y-6">
                                    <div>
                                        <h4 className="font-playfair font-semibold text-black text-lg sm:text-xl md:text-2xl mb-2">
                                            Captures Dual Perspectives
                                        </h4>
                                        <p className="font-gantari font-normal text-black text-base sm:text-lg md:text-xl leading-relaxed">
                                            Pediatric encounters involve two narrators: the child (if verbal) and the parent. AI scribes are trained to accurately capture and separate both voices—something standard dictation tools miss.
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="font-playfair font-semibold text-black text-lg sm:text-xl md:text-2xl mb-2">
                                            Handles High Volume with Precision
                                        </h4>
                                        <p className="font-gantari font-normal text-black text-base sm:text-lg md:text-xl leading-relaxed">
                                            Pediatricians see more patients per day than most specialties. AI scribes keep up with rapid-fire visits by documenting in real time—without slowing you down.
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="font-playfair font-semibold text-black text-lg sm:text-xl md:text-2xl mb-2">
                                            Supports Developmental and Preventive Care
                                        </h4>
                                        <p className="font-gantari font-normal text-black text-base sm:text-lg md:text-xl leading-relaxed">
                                            From growth tracking to vaccine compliance and milestone documentation, AI scribes ensure nothing critical gets left out of the chart.
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="font-playfair font-semibold text-black text-lg sm:text-xl md:text-2xl mb-2">
                                            Frees You to Focus on Kids, Not Clicks
                                        </h4>
                                        <p className="font-gantari font-normal text-black text-base sm:text-lg md:text-xl leading-relaxed">
                                            The most valuable pediatric tool is presence. AI scribes take the charting off your plate so you can do what you do best: connect, comfort, and care.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Related Content Section */}
                        <section>
                            <h2 className="font-playfair font-semibold text-[#162694] text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-tight lg:leading-[51.2px] mb-6 md:mb-12">
                                Related content
                            </h2>

                            {/* Related Articles Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                {relatedArticles.map((article, index) => (
                                    <Card
                                        key={index}
                                        className="bg-white rounded-[10px] border border-solid border-[#bcbaba] hover:shadow-lg transition-shadow duration-200 h-full"
                                    >
                                        <CardContent className="p-4 md:p-6 flex flex-col h-full min-h-[200px] md:min-h-[220px]">
                                            <h3 className="font-playfair font-semibold text-[#162694] text-base sm:text-lg md:text-[17px] leading-tight md:leading-[21.8px] mb-3 md:mb-4">
                                                {article.title}
                                            </h3>
                                            <p className="font-gantari font-normal text-black text-xs sm:text-sm md:text-[11px] leading-relaxed md:leading-[19.1px] flex-grow mb-3 md:mb-4">
                                                {article.content}
                                            </p>
                                            <a
                                                href="#"
                                                className="font-gantari font-normal text-[#162694] text-xs leading-[15.4px] underline hover:text-[#162694]/80 transition-colors self-start"
                                            >
                                                Read More
                                            </a>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer links={footerLinks} />
        </div>
    );
} 