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

export default function BurnoutToBalance() {
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
                                    From Burnout to Balance: How AI Scribes Are Empowering Primary Care Physicians
                                </h1>
                                <p className="mt-4 font-gantari font-normal text-white text-lg sm:text-xl lg:text-2xl leading-relaxed">
                                    Transforming physician well-being through intelligent documentation solutions
                                </p>
                            </div>

                            {/* Right Content - Blog Meta */}
                            <div className="flex-1 lg:max-w-md">
                                <Card className="w-full bg-white/10 backdrop-blur-sm rounded-[20px] border border-white/20">
                                    <CardContent className="p-6">
                                        <div className="text-white">
                                            <p className="font-gantari font-medium text-lg mb-2">Published: December 2024</p>
                                            <p className="font-gantari font-normal text-base opacity-90">Reading time: 10 minutes</p>
                                            <p className="font-gantari font-normal text-base opacity-90 mt-2">Category: Physician Wellness</p>
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
                                In today's fast-paced healthcare system, primary care physicians are facing a silent epidemic: burnout. Endless administrative tasks, especially clinical documentation, are pulling doctors away from what truly matters—patient care. A growing body of research shows that the burden of Electronic Health Record (EHR) data entry is one of the top contributors to physician dissatisfaction.
                            </p>

                            <h2 className="font-playfair font-semibold text-[#162694] text-2xl lg:text-3xl mb-6 mt-12">
                                The Burnout Crisis in Primary Care
                            </h2>

                            <p className="mb-6">
                                Physician burnout has reached alarming levels, with studies showing that over 50% of primary care physicians report symptoms of burnout. The consequences are severe:
                            </p>

                            <ul className="list-disc pl-6 mb-8 space-y-2">
                                <li>Decreased quality of patient care</li>
                                <li>Higher rates of medical errors</li>
                                <li>Increased physician turnover</li>
                                <li>Reduced patient satisfaction</li>
                                <li>Higher healthcare costs</li>
                                <li>Physician suicide rates twice the national average</li>
                            </ul>

                            <p className="mb-8">
                                The root cause? Physicians are spending more time on documentation than on patient care. On average, primary care physicians spend 2-3 hours on EHR documentation for every hour of direct patient care.
                            </p>

                            <h2 className="font-playfair font-semibold text-[#162694] text-2xl lg:text-3xl mb-6 mt-12">
                                The Documentation Burden: A Primary Care Physician's Daily Reality
                            </h2>

                            <p className="mb-6">
                                Primary care physicians face unique documentation challenges that contribute to burnout:
                            </p>

                            <div className="bg-gray-50 p-6 rounded-lg mb-8">
                                <h3 className="font-gantari font-semibold text-[#162694] text-xl mb-4">Daily Documentation Tasks:</h3>
                                <ul className="space-y-3">
                                    <li><strong>Patient Notes:</strong> Comprehensive SOAP notes for 20-30 patients daily</li>
                                    <li><strong>Care Coordination:</strong> Referrals, follow-ups, and specialist communications</li>
                                    <li><strong>Quality Measures:</strong> Documentation for value-based care requirements</li>
                                    <li><strong>Medication Management:</strong> Prescription renewals and medication reconciliation</li>
                                    <li><strong>Preventive Care:</strong> Screening reminders and wellness visit documentation</li>
                                    <li><strong>Chronic Disease Management:</strong> Ongoing care plans and progress notes</li>
                                </ul>
                            </div>

                            <h2 className="font-playfair font-semibold text-[#162694] text-2xl lg:text-3xl mb-6 mt-12">
                                How AI Scribes Are Transforming Primary Care
                            </h2>

                            <p className="mb-6">
                                AI medical scribes are emerging as a powerful solution to the documentation burden, offering primary care physicians a path from burnout to balance:
                            </p>

                            <h3 className="font-gantari font-semibold text-[#162694] text-xl mb-4 mt-8">
                                1. Real-Time Documentation During Patient Encounters
                            </h3>
                            <p className="mb-6">
                                AI scribes can document patient encounters in real-time, allowing physicians to:
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-2">
                                <li>Focus entirely on patient interaction without distraction</li>
                                <li>Capture comprehensive clinical information automatically</li>
                                <li>Generate structured SOAP notes during the visit</li>
                                <li>Ensure no critical information is missed</li>
                            </ul>

                            <h3 className="font-gantari font-semibold text-[#162694] text-xl mb-4 mt-8">
                                2. Automated Care Coordination
                            </h3>
                            <p className="mb-6">
                                AI scribes can handle many administrative tasks automatically:
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-2">
                                <li>Generate referral letters with relevant clinical information</li>
                                <li>Create follow-up appointment reminders</li>
                                <li>Document care coordination activities</li>
                                <li>Track quality measures and preventive care requirements</li>
                            </ul>

                            <h3 className="font-gantari font-semibold text-[#162694] text-xl mb-4 mt-8">
                                3. Intelligent Clinical Decision Support
                            </h3>
                            <p className="mb-6">
                                Advanced AI scribes can provide clinical insights:
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-2">
                                <li>Identify gaps in preventive care</li>
                                <li>Suggest evidence-based treatment options</li>
                                <li>Flag potential drug interactions</li>
                                <li>Highlight abnormal lab results or trends</li>
                            </ul>

                            <h2 className="font-playfair font-semibold text-[#162694] text-2xl lg:text-3xl mb-6 mt-12">
                                Real Stories: Primary Care Physicians Finding Balance
                            </h2>

                            <p className="mb-6">
                                Primary care practices implementing AI scribes report remarkable transformations:
                            </p>

                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                <Card className="p-6 border-l-4 border-[#162694]">
                                    <h4 className="font-gantari font-semibold text-[#162694] mb-2">Dr. Sarah Chen, Family Medicine</h4>
                                    <p className="text-sm">"I went from spending 3 hours on documentation after clinic to finishing everything during patient visits. I now leave work on time and feel like I'm actually practicing medicine again."</p>
                                </Card>
                                <Card className="p-6 border-l-4 border-[#162694]">
                                    <h4 className="font-gantari font-semibold text-[#162694] mb-2">Dr. Michael Rodriguez, Internal Medicine</h4>
                                    <p className="text-sm">"My patient satisfaction scores increased by 40% because I can focus on listening and connecting with patients instead of typing."</p>
                                </Card>
                                <Card className="p-6 border-l-4 border-[#162694]">
                                    <h4 className="font-gantari font-semibold text-[#162694] mb-2">Dr. Emily Johnson, Primary Care</h4>
                                    <p className="text-sm">"The AI scribe catches things I might miss and helps me provide more comprehensive care. It's like having a brilliant medical student who never gets tired."</p>
                                </Card>
                                <Card className="p-6 border-l-4 border-[#162694]">
                                    <h4 className="font-gantari font-semibold text-[#162694] mb-2">Dr. David Kim, Family Practice</h4>
                                    <p className="text-sm">"I was seriously considering leaving medicine due to burnout. The AI scribe gave me back my passion for patient care."</p>
                                </Card>
                            </div>

                            <h2 className="font-playfair font-semibold text-[#162694] text-2xl lg:text-3xl mb-6 mt-12">
                                Measurable Impact: The Numbers Behind the Transformation
                            </h2>

                            <p className="mb-6">
                                Research and real-world data show the profound impact of AI scribes on primary care:
                            </p>

                            <div className="bg-[#162694] text-white p-6 rounded-lg mb-8">
                                <h3 className="font-gantari font-semibold text-xl mb-4">Key Performance Indicators:</h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-2xl font-bold">60%</p>
                                        <p className="text-sm">Reduction in documentation time</p>
                                    </div>
                                    <div>
                                        <p className="text-2xl font-bold">45%</p>
                                        <p className="text-sm">Increase in patient satisfaction scores</p>
                                    </div>
                                    <div>
                                        <p className="text-2xl font-bold">30%</p>
                                        <p className="text-sm">More patients seen per day</p>
                                    </div>
                                    <div>
                                        <p className="text-2xl font-bold">70%</p>
                                        <p className="text-sm">Reduction in physician burnout symptoms</p>
                                    </div>
                                </div>
                            </div>

                            <h2 className="font-playfair font-semibold text-[#162694] text-2xl lg:text-3xl mb-6 mt-12">
                                Implementation Strategies for Primary Care Practices
                            </h2>

                            <p className="mb-6">
                                Successfully implementing AI scribes requires careful planning and consideration:
                            </p>

                            <h3 className="font-gantari font-semibold text-[#162694] text-xl mb-4 mt-8">
                                Choosing the Right AI Scribe Solution
                            </h3>
                            <p className="mb-6">
                                Look for AI scribes that offer:
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-2">
                                <li>Primary care-specific templates and workflows</li>
                                <li>Integration with your existing EHR system</li>
                                <li>Compliance with HIPAA and other regulations</li>
                                <li>Customizable documentation preferences</li>
                                <li>Robust training and support</li>
                            </ul>

                            <h3 className="font-gantari font-semibold text-[#162694] text-xl mb-4 mt-8">
                                Change Management and Adoption
                            </h3>
                            <p className="mb-6">
                                Successful implementation requires:
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-2">
                                <li>Physician buy-in and training</li>
                                <li>Gradual rollout with pilot programs</li>
                                <li>Ongoing feedback and optimization</li>
                                <li>Clear communication about benefits and expectations</li>
                                <li>Support for workflow adjustments</li>
                            </ul>

                            <h2 className="font-playfair font-semibold text-[#162694] text-2xl lg:text-3xl mb-6 mt-12">
                                The Future of Primary Care: Beyond Documentation
                            </h2>

                            <p className="mb-6">
                                AI scribes are just the beginning of the technological transformation in primary care:
                            </p>

                            <ul className="list-disc pl-6 mb-8 space-y-2">
                                <li><strong>Predictive Analytics:</strong> Identifying patients at risk for chronic conditions</li>
                                <li><strong>Population Health Management:</strong> Automated outreach for preventive care</li>
                                <li><strong>Telemedicine Integration:</strong> Seamless virtual care documentation</li>
                                <li><strong>Patient Engagement:</strong> Automated patient education and follow-up</li>
                                <li><strong>Quality Improvement:</strong> Real-time quality measure tracking</li>
                            </ul>

                            <h2 className="font-playfair font-semibold text-[#162694] text-2xl lg:text-3xl mb-6 mt-12">
                                Addressing Common Concerns
                            </h2>

                            <p className="mb-6">
                                Physicians often have concerns about AI scribes that can be addressed:
                            </p>

                            <div className="bg-gray-50 p-6 rounded-lg mb-8">
                                <h3 className="font-gantari font-semibold text-[#162694] text-xl mb-4">Frequently Asked Questions:</h3>
                                <div className="space-y-4">
                                    <div>
                                        <p className="font-semibold">Will AI replace physicians?</p>
                                        <p className="text-sm">No. AI scribes are tools that enhance physician capabilities, not replace them. They handle administrative tasks so physicians can focus on clinical judgment and patient care.</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold">Is the documentation accurate?</p>
                                        <p className="text-sm">Modern AI scribes achieve 95%+ accuracy rates and allow physicians to review and edit all documentation before finalizing.</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold">What about patient privacy?</p>
                                        <p className="text-sm">Reputable AI scribe solutions are HIPAA-compliant and use enterprise-grade security measures to protect patient data.</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold">How long does implementation take?</p>
                                        <p className="text-sm">Most practices see significant benefits within 2-4 weeks of implementation, with full optimization occurring over 2-3 months.</p>
                                    </div>
                                </div>
                            </div>

                            <h2 className="font-playfair font-semibold text-[#162694] text-2xl lg:text-3xl mb-6 mt-12">
                                Conclusion: A Path Forward for Primary Care
                            </h2>

                            <p className="mb-8">
                                The burnout crisis in primary care is real and urgent, but it's not inevitable. AI medical scribes offer a proven path from burnout to balance, allowing physicians to reclaim their time, energy, and passion for patient care.
                            </p>

                            <p className="mb-8">
                                By automating the documentation burden, AI scribes are helping primary care physicians focus on what they do best: building relationships with patients, making clinical decisions, and providing compassionate care. The result is not just happier physicians, but better patient outcomes and a more sustainable healthcare system.
                            </p>

                            <p className="mb-8">
                                The future of primary care is bright, and AI scribes are helping to lead the way. For physicians struggling with burnout, the message is clear: help is available, and it's working.
                            </p>

                            <div className="bg-[#162694] text-white p-6 rounded-lg mt-12">
                                <h3 className="font-gantari font-semibold text-xl mb-4">Ready to Transform Your Practice?</h3>
                                <p className="mb-4">
                                    Join thousands of primary care physicians who have found balance and renewed passion for medicine with AI scribes.
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