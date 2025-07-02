import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Footer } from "../../components/footer";
import { Navigation } from "../../features/__components/navigation";

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

export default function DocumentingPediatric() {
    return (
        <div className="min-h-screen bg-white">
            <div className="w-full mx-auto">
                {/* Header Section with Gradient Background */}
                <header className="relative w-full min-h-[500px] lg:min-h-[577px] [background:linear-gradient(137deg,rgba(14,25,99,1)_0%,rgba(46,24,173,1)_47%,rgba(79,52,187,1)_60%,rgba(140,76,193,1)_71%,rgba(200,110,186,1)_82%,rgba(228,174,211,1)_94%,rgba(231,227,237,1)_100%)]">
                    {/* Navigation Background Overlay */}
                    <div className="absolute top-0 left-0 right-0 h-14 md:h-[57px] bg-black/20 backdrop-blur-sm z-10"></div>

                    {/* Navigation Bar */}
                    <Navigation navItems={navItems} />

                    {/* Header Content */}
                    <div className="relative w-full max-w-7xl pl-4 sm:pl-8 md:pl-16 lg:pl-[85px] pr-4 sm:pr-8 md:pr-16 lg:pr-[85px] mx-auto pt-16 sm:pt-20 md:pt-24 lg:pt-32">
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-12">
                            {/* Left Content */}
                            <div className="flex-1 lg:max-w-md">
                                <h1 className="font-playfair font-medium text-white text-3xl sm:text-4xl lg:text-[52px] leading-tight lg:leading-[57.7px]">
                                    Documenting Pediatric Care Shouldn't Be a Puzzle—Let AI Scribes Help
                                </h1>
                                <p className="mt-4 font-gantari font-normal text-white text-lg sm:text-xl lg:text-2xl leading-relaxed">
                                    How AI scribes are transforming pediatric documentation and improving care quality
                                </p>
                            </div>

                            {/* Right Content - Blog Meta */}
                            <div className="flex-1 lg:max-w-md">
                                <Card className="w-full bg-white/10 backdrop-blur-sm rounded-[20px] border border-white/20">
                                    <CardContent className="p-6">
                                        <div className="text-white">
                                            <p className="font-gantari font-medium text-lg mb-2">Published: December 2024</p>
                                            <p className="font-gantari font-normal text-base opacity-90">Reading time: 8 minutes</p>
                                            <p className="font-gantari font-normal text-base opacity-90 mt-2">Category: Pediatric Care</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Blog Content */}
                <div className="relative w-full max-w-4xl pl-4 sm:pl-8 md:pl-16 lg:pl-[85px] pr-4 sm:pr-8 md:pr-16 lg:pr-[85px] mx-auto py-12 lg:py-16">
                    <article className="prose prose-lg max-w-none">
                        <div className="font-gantari text-black leading-relaxed">
                            <p className="text-xl mb-8 leading-relaxed">
                                Pediatric care is full of nuance. The patient doesn't always speak, parents do. Visits are short, but dense with critical information—growth charts, vaccines, milestones, anticipatory guidance, and more. Every note needs to be complete, clear, and compliant. But pediatricians are drowning in charting.
                            </p>

                            <h2 className="font-playfair font-semibold text-[#162694] text-2xl lg:text-3xl mb-6 mt-12">
                                The Pediatric Documentation Challenge
                            </h2>

                            <p className="mb-6">
                                Pediatric documentation is uniquely complex. Unlike adult medicine, where patients can often describe their symptoms directly, pediatricians must interpret and document information from multiple sources:
                            </p>

                            <ul className="list-disc pl-6 mb-8 space-y-2">
                                <li>Parent observations and concerns</li>
                                <li>Child's developmental milestones</li>
                                <li>Growth and nutrition data</li>
                                <li>Vaccination schedules</li>
                                <li>Behavioral assessments</li>
                                <li>School performance reports</li>
                            </ul>

                            <p className="mb-8">
                                Each well-child visit requires documenting multiple domains: physical examination, developmental screening, anticipatory guidance, and care coordination. The documentation burden is immense, often taking longer than the actual patient interaction.
                            </p>

                            <h2 className="font-playfair font-semibold text-[#162694] text-2xl lg:text-3xl mb-6 mt-12">
                                Why Traditional Documentation Fails Pediatricians
                            </h2>

                            <p className="mb-6">
                                Traditional EHR systems were designed for adult medicine, not the unique needs of pediatric care. This creates several challenges:
                            </p>

                            <div className="bg-gray-50 p-6 rounded-lg mb-8">
                                <h3 className="font-gantari font-semibold text-[#162694] text-xl mb-4">Common Pediatric Documentation Pain Points:</h3>
                                <ul className="space-y-3">
                                    <li><strong>Template Mismatch:</strong> Generic templates don't capture pediatric-specific elements like developmental milestones or growth patterns</li>
                                    <li><strong>Time Pressure:</strong> Short appointment times don't allow for comprehensive documentation</li>
                                    <li><strong>Complex Family Dynamics:</strong> Documenting interactions with parents, caregivers, and sometimes multiple family members</li>
                                    <li><strong>Regulatory Requirements:</strong> Specific documentation requirements for pediatric care and immunizations</li>
                                    <li><strong>Continuity of Care:</strong> Tracking growth and development over time across multiple visits</li>
                                </ul>
                            </div>

                            <h2 className="font-playfair font-semibold text-[#162694] text-2xl lg:text-3xl mb-6 mt-12">
                                How AI Scribes Transform Pediatric Documentation
                            </h2>

                            <p className="mb-6">
                                AI medical scribes specifically designed for pediatric care can address these unique challenges:
                            </p>

                            <h3 className="font-gantari font-semibold text-[#162694] text-xl mb-4 mt-8">
                                1. Pediatric-Specific Templates
                            </h3>
                            <p className="mb-6">
                                AI scribes can use templates specifically designed for pediatric care, including:
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-2">
                                <li>Age-appropriate developmental screening tools</li>
                                <li>Growth chart integration and trend analysis</li>
                                <li>Vaccination schedule tracking</li>
                                <li>Behavioral assessment frameworks</li>
                                <li>Family-centered care documentation</li>
                            </ul>

                            <h3 className="font-gantari font-semibold text-[#162694] text-xl mb-4 mt-8">
                                2. Natural Language Processing for Pediatric Context
                            </h3>
                            <p className="mb-6">
                                Advanced AI can understand and document the nuances of pediatric encounters:
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-2">
                                <li>Interpreting parent descriptions of child behavior</li>
                                <li>Capturing developmental observations</li>
                                <li>Documenting family dynamics and social determinants</li>
                                <li>Translating child-friendly language into medical terminology</li>
                            </ul>

                            <h3 className="font-gantari font-semibold text-[#162694] text-xl mb-4 mt-8">
                                3. Automated Growth and Development Tracking
                            </h3>
                            <p className="mb-6">
                                AI scribes can automatically:
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-2">
                                <li>Calculate and plot growth percentiles</li>
                                <li>Track developmental milestones across visits</li>
                                <li>Identify trends and potential concerns</li>
                                <li>Generate age-appropriate anticipatory guidance</li>
                            </ul>

                            <h2 className="font-playfair font-semibold text-[#162694] text-2xl lg:text-3xl mb-6 mt-12">
                                Real-World Impact: Pediatric Practices Using AI Scribes
                            </h2>

                            <p className="mb-6">
                                Pediatric practices implementing AI scribes report significant improvements:
                            </p>

                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                <Card className="p-6 border-l-4 border-[#162694]">
                                    <h4 className="font-gantari font-semibold text-[#162694] mb-2">Time Savings</h4>
                                    <p className="text-sm">Pediatricians save 2-3 hours per day on documentation, allowing more time for patient care and family education.</p>
                                </Card>
                                <Card className="p-6 border-l-4 border-[#162694]">
                                    <h4 className="font-gantari font-semibold text-[#162694] mb-2">Documentation Quality</h4>
                                    <p className="text-sm">More comprehensive and accurate documentation of developmental milestones and family dynamics.</p>
                                </Card>
                                <Card className="p-6 border-l-4 border-[#162694]">
                                    <h4 className="font-gantari font-semibold text-[#162694] mb-2">Care Continuity</h4>
                                    <p className="text-sm">Better tracking of growth patterns and developmental progress across multiple visits.</p>
                                </Card>
                                <Card className="p-6 border-l-4 border-[#162694]">
                                    <h4 className="font-gantari font-semibold text-[#162694] mb-2">Family Satisfaction</h4>
                                    <p className="text-sm">More focused attention on family concerns and less time spent on documentation during visits.</p>
                                </Card>
                            </div>

                            <h2 className="font-playfair font-semibold text-[#162694] text-2xl lg:text-3xl mb-6 mt-12">
                                Implementation Considerations for Pediatric Practices
                            </h2>

                            <p className="mb-6">
                                When implementing AI scribes in pediatric practices, consider these factors:
                            </p>

                            <h3 className="font-gantari font-semibold text-[#162694] text-xl mb-4 mt-8">
                                Privacy and Security
                            </h3>
                            <p className="mb-6">
                                Pediatric records require extra protection. Ensure your AI scribe solution:
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-2">
                                <li>Complies with HIPAA and state-specific pediatric privacy laws</li>
                                <li>Provides secure data transmission and storage</li>
                                <li>Offers granular access controls for sensitive information</li>
                                <li>Supports parental consent management</li>
                            </ul>

                            <h3 className="font-gantari font-semibold text-[#162694] text-xl mb-4 mt-8">
                                Integration with Pediatric-Specific Systems
                            </h3>
                            <p className="mb-6">
                                Look for AI scribes that integrate with:
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-2">
                                <li>Immunization information systems</li>
                                <li>Developmental screening tools</li>
                                <li>Growth chart software</li>
                                <li>School health information systems</li>
                                <li>Specialist referral networks</li>
                            </ul>

                            <h2 className="font-playfair font-semibold text-[#162694] text-2xl lg:text-3xl mb-6 mt-12">
                                The Future of Pediatric Documentation
                            </h2>

                            <p className="mb-6">
                                As AI technology advances, pediatric documentation will become even more sophisticated:
                            </p>

                            <ul className="list-disc pl-6 mb-8 space-y-2">
                                <li><strong>Predictive Analytics:</strong> AI will identify potential developmental delays or health risks based on patterns</li>
                                <li><strong>Personalized Care Plans:</strong> Automated generation of family-specific anticipatory guidance</li>
                                <li><strong>Population Health:</strong> Better tracking of community health trends and vaccination rates</li>
                                <li><strong>Research Integration:</strong> De-identified data contributing to pediatric health research</li>
                            </ul>

                            <h2 className="font-playfair font-semibold text-[#162694] text-2xl lg:text-3xl mb-6 mt-12">
                                Conclusion
                            </h2>

                            <p className="mb-8">
                                Pediatric documentation doesn't have to be a puzzle. AI medical scribes designed specifically for pediatric care can transform how pediatricians document patient encounters, allowing them to focus on what matters most: providing excellent care to children and supporting their families.
                            </p>

                            <p className="mb-8">
                                By automating the documentation process while maintaining the human touch that's essential in pediatric care, AI scribes are helping pediatricians spend more time with patients and less time on paperwork. The result is better care, happier families, and more satisfied pediatricians.
                            </p>

                            <div className="bg-[#162694] text-white p-6 rounded-lg mt-12">
                                <h3 className="font-gantari font-semibold text-xl mb-4">Ready to Transform Your Pediatric Practice?</h3>
                                <p className="mb-4">
                                    Join the growing number of pediatric practices using AI scribes to improve documentation quality and patient care.
                                </p>
                                <Link href="/tryfree" target="_blank">
                                    <Button className="bg-white text-[#162694] hover:bg-gray-100 rounded-[5px] px-6 py-3 transition-colors">
                                        <span className="font-gantari font-medium text-base">
                                            Try InteliDoc AI - It's Free
                                        </span>
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </article>
                </div>
            </div>

            {/* Footer */}
            <Footer links={footerLinks} />
        </div>
    );
} 