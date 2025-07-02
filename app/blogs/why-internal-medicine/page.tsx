import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Navigation } from "../../features/__components/navigation";
import { Footer } from "../../components/footer";

export default function WhyInternalMedicine() {
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
                            Why Internal Medicine Physicians Are Turning to AI Scribes for Relief
                        </h1>

                        {/* Section: The Internal Medicine Documentation Crisis */}
                        <section className="mb-8 md:mb-12">
                            <h2 className="font-playfair font-semibold text-black text-xl sm:text-2xl md:text-[28px] leading-tight md:leading-[35.8px] mb-4 md:mb-6">
                                The Internal Medicine Documentation Crisis
                            </h2>
                            <p className="font-gantari font-normal text-black text-lg sm:text-xl md:text-2xl leading-relaxed md:leading-[41.8px]">
                                Internal medicine is intellectually demanding. You're managing multi-system conditions, adjusting long-term care plans, and coordinating with specialists. But it's not just the medicine that's complex—the notes are too:
                            </p>
                            <div className="mt-6 space-y-3">
                                <p className="font-gantari font-normal text-black text-lg sm:text-xl md:text-2xl leading-relaxed md:leading-[41.8px]">
                                    • Long histories and med lists that require precise updates
                                </p>
                                <p className="font-gantari font-normal text-black text-lg sm:text-xl md:text-2xl leading-relaxed md:leading-[41.8px]">
                                    • Chronic care plans that span years and multiple conditions
                                </p>
                                <p className="font-gantari font-normal text-black text-lg sm:text-xl md:text-2xl leading-relaxed md:leading-[41.8px]">
                                    • Frequent lab reviews, imaging follow-ups, and referral notes
                                </p>
                                <p className="font-gantari font-normal text-black text-lg sm:text-xl md:text-2xl leading-relaxed md:leading-[41.8px]">
                                    • Heavy documentation for compliance and reimbursement
                                </p>
                            </div>
                            <p className="font-gantari font-normal text-black text-lg sm:text-xl md:text-2xl leading-relaxed md:leading-[41.8px] mt-6">
                                It's estimated that internists spend more than 50% of their workday documenting in the EHR. That's not just inefficient—it's unsustainable.
                            </p>
                        </section>

                        {/* Section: What Is an AI Medical Scribe */}
                        <section className="mb-8 md:mb-12">
                            <h2 className="font-playfair font-semibold text-black text-xl sm:text-2xl md:text-[28px] leading-tight md:leading-[35.8px] mb-4 md:mb-6">
                                What Is an AI Medical Scribe?
                            </h2>
                            <p className="font-gantari font-normal text-black text-lg sm:text-xl md:text-2xl leading-relaxed md:leading-[41.8px]">
                                An AI medical scribe listens in on doctor-patient conversations—securely and in real-time—and generates clean, structured clinical notes. It's like having a superhuman assistant who never misses a detail, doesn't need coffee breaks, and integrates directly into EHR systems.
                            </p>
                        </section>

                        {/* Section: How It Works */}
                        <section className="mb-8 md:mb-12">
                            <h3 className="font-playfair font-semibold text-black text-lg sm:text-xl md:text-[25px] leading-tight md:leading-8 mb-4 md:mb-6">
                                How It Works
                            </h3>
                            <div className="space-y-6 md:space-y-8">
                                <div className="space-y-4 md:space-y-6">
                                    <p className="font-gantari font-normal text-black text-lg sm:text-xl md:text-2xl leading-relaxed md:leading-[35.5px]">
                                        <strong className="font-playfair font-semibold text-black text-lg sm:text-xl md:text-2xl">Speech Recognition:</strong> Converts spoken dialogue into text.
                                        <br /><br />
                                        <strong className="font-playfair font-semibold text-black text-lg sm:text-xl md:text-2xl">Natural Language Processing (NLP):</strong> Understands context, filters small talk, and identifies relevant medical content.
                                        <br /><br />
                                        <strong className="font-playfair font-semibold text-black text-lg sm:text-xl md:text-2xl">Clinical Intelligence:</strong> Structures notes into SOAP format, links to diagnoses and billing codes.
                                        <br /><br />
                                        <strong className="font-playfair font-semibold text-black text-lg sm:text-xl md:text-2xl">Customization:</strong> Tailors language and format to provider preferences.
                                    </p>
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
                                            "Innovation in health IT can save lives, reduce costs, and bring care closer to the people who need it most."
                                            <br />— Aneesh Chopra, Former U.S. CTO
                                        </p>
                                    </CardContent>
                                </Card>
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
                                            Record with Ease
                                        </h4>
                                        <p className="font-gantari font-normal text-black text-base sm:text-lg md:text-xl leading-relaxed">
                                            The AI listens during appointments and captures key information without interrupting your patient interaction.
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="font-playfair font-semibold text-black text-lg sm:text-xl md:text-2xl mb-2">
                                            Edit with Confidence
                                        </h4>
                                        <p className="font-gantari font-normal text-black text-base sm:text-lg md:text-xl leading-relaxed">
                                            Quickly review and make edits in real time — or let the system learn your preferences for smarter drafts next time.
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="font-playfair font-semibold text-black text-lg sm:text-xl md:text-2xl mb-2">
                                            Finalize in Seconds
                                        </h4>
                                        <p className="font-gantari font-normal text-black text-base sm:text-lg md:text-xl leading-relaxed">
                                            Approve and sign off with a single click, so your notes are done before your day ends.
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="font-playfair font-semibold text-black text-xl sm:text-2xl md:text-[28px] leading-tight md:leading-[35.8px] mb-4 md:mb-6">
                                        Why It Matters
                                    </h3>
                                    <div className="space-y-3 md:space-y-4">
                                        <p className="font-gantari font-normal text-black text-base sm:text-lg md:text-xl leading-relaxed">
                                            <strong className="font-playfair font-semibold text-black text-lg sm:text-xl md:text-2xl">Reduces Burnout:</strong> Frees clinicians from tedious data entry.
                                        </p>
                                        <p className="font-gantari font-normal text-black text-base sm:text-lg md:text-xl leading-relaxed">
                                            <strong className="font-playfair font-semibold text-black text-lg sm:text-xl md:text-2xl">Improves Accuracy:</strong> AI catches details humans might forget or misrecord.
                                        </p>
                                        <p className="font-gantari font-normal text-black text-base sm:text-lg md:text-xl leading-relaxed">
                                            <strong className="font-playfair font-semibold text-black text-lg sm:text-xl md:text-2xl">Speeds Up Care:</strong> Faster documentation means more time for patients.
                                        </p>
                                        <p className="font-gantari font-normal text-black text-base sm:text-lg md:text-xl leading-relaxed">
                                            <strong className="font-playfair font-semibold text-black text-lg sm:text-xl md:text-2xl">Enhances Compliance:</strong> Structured notes help with coding, billing, and legal protection.
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
                                            "Data is the lifeblood of modern medicine. Without it, we are flying blind."
                                            <br />— Dr. Eric Topol, Cardiologist & Digital Health Advocate
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                        </section>

                        {/* Section: The Human Touch Isn't Gone */}
                        <section className="mb-8 md:mb-12">
                            <h2 className="font-playfair font-semibold text-black text-xl sm:text-2xl md:text-[28px] leading-tight md:leading-[35.8px] mb-4 md:mb-6">
                                The Human Touch Isn't Gone
                            </h2>
                            <p className="font-gantari font-normal text-black text-lg sm:text-xl md:text-2xl leading-relaxed md:leading-[41.8px]">
                                Critics worry about tech replacing empathy. But good AI scribes enhance the human connection—they listen so the doctor can too. When tech fades into the background, compassion comes forward.
                            </p>
                        </section>

                        {/* Quote Card */}
                        <Card className="w-full max-w-lg mx-auto bg-[#fffde3] rounded-[20px] border-none shadow-sm hover:shadow-md transition-shadow mb-8 md:mb-12">
                            <CardContent className="p-4 sm:p-6 flex flex-col items-center justify-center text-center">
                                <Image
                                    className="w-16 h-20 sm:w-[94px] sm:h-[117px] mb-3 sm:mb-4"
                                    alt="Doctor illustration"
                                    src="/blog/noun-doctor-7832406-1.svg"
                                    width={94}
                                    height={117}
                                />
                                <p className="font-gantari font-normal text-[#212121] text-sm sm:text-base leading-relaxed sm:leading-[27.8px]">
                                    "Digital health empowers people to better manage their health and improves access to care globally."
                                    <br />— World Health Organization (WHO)
                                </p>
                            </CardContent>
                        </Card>

                        {/* Section: Challenges Ahead */}
                        <section className="mb-8 md:mb-12">
                            <h2 className="font-playfair font-semibold text-black text-xl sm:text-2xl md:text-[28px] leading-tight md:leading-[35.8px] mb-4 md:mb-6">
                                Challenges Ahead
                            </h2>
                            <div className="space-y-4 md:space-y-6">
                                <p className="font-gantari font-normal text-black text-lg sm:text-xl md:text-2xl leading-relaxed md:leading-[41.8px]">
                                    <strong className="font-playfair font-semibold text-black text-lg sm:text-xl md:text-2xl">Privacy:</strong> Patient consent and HIPAA compliance are non-negotiable.
                                </p>
                                <p className="font-gantari font-normal text-black text-lg sm:text-xl md:text-2xl leading-relaxed md:leading-[41.8px]">
                                    <strong className="font-playfair font-semibold text-black text-lg sm:text-xl md:text-2xl">Bias and Accuracy:</strong> AI must be rigorously tested across diverse populations.
                                </p>
                                <p className="font-gantari font-normal text-black text-lg sm:text-xl md:text-2xl leading-relaxed md:leading-[41.8px]">
                                    <strong className="font-playfair font-semibold text-black text-lg sm:text-xl md:text-2xl">Integration:</strong> Systems must work seamlessly with existing EHRs and workflows.
                                </p>
                            </div>
                        </section>

                        {/* Section: The Road Forward */}
                        <section className="mb-8 md:mb-12">
                            <h2 className="font-playfair font-semibold text-black text-xl sm:text-2xl md:text-[28px] leading-tight md:leading-[35.8px] mb-4 md:mb-6">
                                The Road Forward
                            </h2>
                            <p className="font-gantari font-normal text-black text-lg sm:text-xl md:text-2xl leading-relaxed md:leading-[41.8px]">
                                The AI scribe isn't just another gadget—it's a strategic shift in how medicine is practiced. With tools like Freed AI leading the way, we're not just making healthcare more efficient—we're making it human again.
                            </p>
                        </section>

                        {/* Related Content Section */}
                        <section className="mt-12 md:mt-16">
                            <h2 className="font-playfair font-semibold text-black text-xl sm:text-2xl md:text-[28px] leading-tight md:leading-[35.8px] mb-6 md:mb-8">
                                Related content
                            </h2>
                            <div className="space-y-6 md:space-y-8">
                                {relatedArticles.map((article, index) => (
                                    <Card key={index} className="w-full bg-white rounded-[20px] border-none shadow-sm hover:shadow-md transition-shadow">
                                        <CardContent className="p-4 sm:p-6">
                                            <h3 className="font-playfair font-semibold text-[#162694] text-lg sm:text-xl md:text-2xl leading-tight md:leading-[35.8px] mb-3 md:mb-4">
                                                {article.title}
                                            </h3>
                                            <p className="font-gantari font-normal text-black text-base sm:text-lg md:text-xl leading-relaxed md:leading-[35.5px] mb-4 md:mb-6">
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