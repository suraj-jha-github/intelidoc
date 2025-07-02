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

export default function WhyInternalMedicine() {
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
                                    Why Internal Medicine Physicians Are Turning to AI Scribes for Relief
                                </h1>
                                <p className="mt-4 font-gantari font-normal text-white text-lg sm:text-xl lg:text-2xl leading-relaxed">
                                    How AI scribes are addressing the unique documentation challenges of internal medicine
                                </p>
                            </div>

                            {/* Right Content - Blog Meta */}
                            <div className="flex-1 lg:max-w-md">
                                <Card className="w-full bg-white/10 backdrop-blur-sm rounded-[20px] border border-white/20">
                                    <CardContent className="p-6">
                                        <div className="text-white">
                                            <p className="font-gantari font-medium text-lg mb-2">Published: December 2024</p>
                                            <p className="font-gantari font-normal text-base opacity-90">Reading time: 9 minutes</p>
                                            <p className="font-gantari font-normal text-base opacity-90 mt-2">Category: Internal Medicine</p>
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
                                Internists are detectives, educators, care coordinators, and chronic disease managers—all in a single day. But too often, their work is buried under the weight of documentation. Every encounter demands detailed notes, thoughtful plans, and bulletproof coding. It's no wonder that internal medicine sees some of the highest burnout rates in healthcare.
                            </p>

                            <h2 className="font-playfair font-semibold text-[#162694] text-2xl lg:text-3xl mb-6 mt-12">
                                The Internal Medicine Documentation Dilemma
                            </h2>

                            <p className="mb-6">
                                Internal medicine physicians face unique documentation challenges that set them apart from other specialties:
                            </p>

                            <ul className="list-disc pl-6 mb-8 space-y-2">
                                <li>Complex patient presentations with multiple comorbidities</li>
                                <li>Detailed differential diagnoses requiring extensive documentation</li>
                                <li>Chronic disease management across multiple conditions</li>
                                <li>Coordination with multiple specialists and care teams</li>
                                <li>Comprehensive medication reconciliation</li>
                                <li>Extensive social and family history documentation</li>
                            </ul>

                            <p className="mb-8">
                                Each patient encounter in internal medicine requires a level of documentation detail that can be overwhelming, especially when managing 15-20 patients per day.
                            </p>

                            <h2 className="font-playfair font-semibold text-[#162694] text-2xl lg:text-3xl mb-6 mt-12">
                                Why Internal Medicine Physicians Are Particularly Vulnerable to Burnout
                            </h2>

                            <p className="mb-6">
                                Internal medicine physicians face several factors that make them especially susceptible to documentation-related burnout:
                            </p>

                            <div className="bg-gray-50 p-6 rounded-lg mb-8">
                                <h3 className="font-gantari font-semibold text-[#162694] text-xl mb-4">Unique Challenges for Internists:</h3>
                                <ul className="space-y-3">
                                    <li><strong>Complex Patient Populations:</strong> Managing patients with multiple chronic conditions requires extensive documentation</li>
                                    <li><strong>Comprehensive Assessments:</strong> Every encounter requires detailed history, physical, and assessment documentation</li>
                                    <li><strong>Care Coordination:</strong> Managing referrals, consultations, and follow-ups across multiple specialists</li>
                                    <li><strong>Medication Management:</strong> Complex medication regimens requiring detailed reconciliation and monitoring</li>
                                    <li><strong>Quality Measures:</strong> Extensive documentation requirements for value-based care programs</li>
                                    <li><strong>Hospital Follow-ups:</strong> Detailed documentation for post-hospitalization care</li>
                                </ul>
                            </div>

                            <h2 className="font-playfair font-semibold text-[#162694] text-2xl lg:text-3xl mb-6 mt-12">
                                How AI Scribes Are Revolutionizing Internal Medicine Documentation
                            </h2>

                            <p className="mb-6">
                                AI medical scribes are providing internal medicine physicians with much-needed relief through intelligent documentation solutions:
                            </p>

                            <h3 className="font-gantari font-semibold text-[#162694] text-xl mb-4 mt-8">
                                1. Intelligent History Taking and Documentation
                            </h3>
                            <p className="mb-6">
                                AI scribes can capture and organize complex patient histories:
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-2">
                                <li>Automated capture of chief complaints and presenting symptoms</li>
                                <li>Structured documentation of complex medical histories</li>
                                <li>Intelligent organization of multiple comorbidities</li>
                                <li>Automated medication reconciliation and allergy documentation</li>
                                <li>Social and family history capture and organization</li>
                            </ul>

                            <h3 className="font-gantari font-semibold text-[#162694] text-xl mb-4 mt-8">
                                2. Comprehensive Physical Examination Documentation
                            </h3>
                            <p className="mb-6">
                                AI scribes can document detailed physical examinations:
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-2">
                                <li>Systematic documentation of all body systems</li>
                                <li>Automated capture of vital signs and measurements</li>
                                <li>Intelligent organization of physical findings</li>
                                <li>Integration with previous examination data for trend analysis</li>
                                <li>Automated flagging of abnormal findings</li>
                            </ul>

                            <h3 className="font-gantari font-semibold text-[#162694] text-xl mb-4 mt-8">
                                3. Advanced Assessment and Plan Generation
                            </h3>
                            <p className="mb-6">
                                AI scribes can assist with complex clinical reasoning:
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-2">
                                <li>Generation of comprehensive differential diagnoses</li>
                                <li>Evidence-based treatment plan suggestions</li>
                                <li>Automated care coordination documentation</li>
                                <li>Quality measure tracking and documentation</li>
                                <li>Follow-up planning and scheduling</li>
                            </ul>

                            <h2 className="font-playfair font-semibold text-[#162694] text-2xl lg:text-3xl mb-6 mt-12">
                                Real-World Impact: Internal Medicine Practices Using AI Scribes
                            </h2>

                            <p className="mb-6">
                                Internal medicine practices implementing AI scribes report significant improvements:
                            </p>

                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                <Card className="p-6 border-l-4 border-[#162694]">
                                    <h4 className="font-gantari font-semibold text-[#162694] mb-2">Dr. Robert Chen, Internal Medicine</h4>
                                    <p className="text-sm">"I can now focus on the complex clinical reasoning that drew me to internal medicine, rather than spending hours on documentation. My patient care has improved dramatically."</p>
                                </Card>
                                <Card className="p-6 border-l-4 border-[#162694]">
                                    <h4 className="font-gantari font-semibold text-[#162694] mb-2">Dr. Maria Rodriguez, Hospitalist</h4>
                                    <p className="text-sm">"The AI scribe handles the routine documentation while I focus on the critical thinking and patient care that makes internal medicine so rewarding."</p>
                                </Card>
                                <Card className="p-6 border-l-4 border-[#162694]">
                                    <h4 className="font-gantari font-semibold text-[#162694] mb-2">Dr. James Wilson, Primary Care Internist</h4>
                                    <p className="text-sm">"My documentation is now more comprehensive and accurate, and I'm able to see more patients while providing better care. It's a game-changer."</p>
                                </Card>
                                <Card className="p-6 border-l-4 border-[#162694]">
                                    <h4 className="font-gantari font-semibold text-[#162694] mb-2">Dr. Sarah Thompson, Geriatric Medicine</h4>
                                    <p className="text-sm">"Managing complex elderly patients with multiple comorbidities is challenging enough. The AI scribe takes the documentation burden off my shoulders."</p>
                                </Card>
                            </div>

                            <h2 className="font-playfair font-semibold text-[#162694] text-2xl lg:text-3xl mb-6 mt-12">
                                Specialized Features for Internal Medicine
                            </h2>

                            <p className="mb-6">
                                AI scribes designed for internal medicine offer specialized capabilities:
                            </p>

                            <div className="bg-[#162694] text-white p-6 rounded-lg mb-8">
                                <h3 className="font-gantari font-semibold text-xl mb-4">Internal Medicine-Specific Features:</h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <p className="font-semibold">Complex Comorbidity Management</p>
                                        <p className="text-sm">Automated documentation of multiple chronic conditions and their interactions</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold">Medication Reconciliation</p>
                                        <p className="text-sm">Intelligent tracking and documentation of complex medication regimens</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold">Care Coordination</p>
                                        <p className="text-sm">Automated documentation of specialist referrals and follow-ups</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold">Quality Measures</p>
                                        <p className="text-sm">Tracking and documentation for value-based care requirements</p>
                                    </div>
                                </div>
                            </div>

                            <h2 className="font-playfair font-semibold text-[#162694] text-2xl lg:text-3xl mb-6 mt-12">
                                Implementation Strategies for Internal Medicine Practices
                            </h2>

                            <p className="mb-6">
                                Successfully implementing AI scribes in internal medicine requires specific considerations:
                            </p>

                            <h3 className="font-gantari font-semibold text-[#162694] text-xl mb-4 mt-8">
                                Choosing the Right AI Scribe for Internal Medicine
                            </h3>
                            <p className="mb-6">
                                Look for AI scribes that offer:
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-2">
                                <li>Internal medicine-specific templates and workflows</li>
                                <li>Advanced clinical decision support capabilities</li>
                                <li>Integration with hospital and specialist systems</li>
                                <li>Comprehensive medication management features</li>
                                <li>Quality measure tracking and reporting</li>
                            </ul>

                            <h3 className="font-gantari font-semibold text-[#162694] text-xl mb-4 mt-8">
                                Workflow Integration
                            </h3>
                            <p className="mb-6">
                                Successful implementation requires:
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-2">
                                <li>Integration with existing EHR systems</li>
                                <li>Training on internal medicine-specific features</li>
                                <li>Customization for practice-specific workflows</li>
                                <li>Ongoing optimization based on feedback</li>
                                <li>Support for complex patient scenarios</li>
                            </ul>

                            <h2 className="font-playfair font-semibold text-[#162694] text-2xl lg:text-3xl mb-6 mt-12">
                                The Future of Internal Medicine: Enhanced by AI
                            </h2>

                            <p className="mb-6">
                                AI scribes are just the beginning of technological advancement in internal medicine:
                            </p>

                            <ul className="list-disc pl-6 mb-8 space-y-2">
                                <li><strong>Predictive Analytics:</strong> Identifying patients at risk for complications or hospital readmission</li>
                                <li><strong>Population Health Management:</strong> Automated outreach for preventive care and chronic disease management</li>
                                <li><strong>Clinical Decision Support:</strong> Real-time suggestions based on patient data and evidence-based guidelines</li>
                                <li><strong>Care Coordination:</strong> Automated communication with specialists and care teams</li>
                                <li><strong>Research Integration:</strong> De-identified data contributing to medical research and quality improvement</li>
                            </ul>

                            <h2 className="font-playfair font-semibold text-[#162694] text-2xl lg:text-3xl mb-6 mt-12">
                                Addressing Common Concerns
                            </h2>

                            <p className="mb-6">
                                Internal medicine physicians often have specific concerns about AI scribes:
                            </p>

                            <div className="bg-gray-50 p-6 rounded-lg mb-8">
                                <h3 className="font-gantari font-semibold text-[#162694] text-xl mb-4">Frequently Asked Questions:</h3>
                                <div className="space-y-4">
                                    <div>
                                        <p className="font-semibold">Can AI handle complex internal medicine cases?</p>
                                        <p className="text-sm">Yes. Modern AI scribes are specifically trained on internal medicine workflows and can handle complex patient presentations with multiple comorbidities.</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold">What about medication reconciliation?</p>
                                        <p className="text-sm">AI scribes can automatically reconcile medications from multiple sources and flag potential interactions or duplications.</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold">How does it handle specialist coordination?</p>
                                        <p className="text-sm">AI scribes can generate referral letters, track specialist recommendations, and document care coordination activities.</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold">Can it integrate with hospital systems?</p>
                                        <p className="text-sm">Yes. Most AI scribes integrate with major EHR systems and can access hospital records for comprehensive documentation.</p>
                                    </div>
                                </div>
                            </div>

                            <h2 className="font-playfair font-semibold text-[#162694] text-2xl lg:text-3xl mb-6 mt-12">
                                Conclusion: A New Era for Internal Medicine
                            </h2>

                            <p className="mb-8">
                                Internal medicine physicians are the backbone of healthcare, managing complex patients with multiple conditions. AI scribes are not replacing their clinical expertise but enhancing it by removing the documentation burden that has been driving burnout.
                            </p>

                            <p className="mb-8">
                                By automating routine documentation tasks, AI scribes allow internists to focus on what they do best: complex clinical reasoning, patient care, and medical education. The result is better patient outcomes, reduced physician burnout, and a more sustainable healthcare system.
                            </p>

                            <p className="mb-8">
                                For internal medicine physicians struggling with documentation overload, AI scribes offer a path forward—one that preserves the intellectual challenge and patient relationships that make internal medicine so rewarding while eliminating the administrative burden that has been driving many to consider leaving the field.
                            </p>

                            <div className="bg-[#162694] text-white p-6 rounded-lg mt-12">
                                <h3 className="font-gantari font-semibold text-xl mb-4">Ready to Transform Your Internal Medicine Practice?</h3>
                                <p className="mb-4">
                                    Join internal medicine physicians who are rediscovering their passion for patient care with AI scribes.
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
