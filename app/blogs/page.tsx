import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Footer } from "../components/footer";
import { Navigation } from "../features/__components/navigation";

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

// Blog post data
const featuredPost = {
  title: "From Burnout to Balance: How AI Scribes Are Empowering Primary Care Physicians",
  content:
    "In today's fast-paced healthcare system, primary care physicians are facing a silent epidemic: burnout. Endless administrative tasks,",
  url: "/blogs/burnout-to-balance"
};

const blogPosts = [
  {
    title:
      "AI Medical Scribes: The Cure for Healthcare's Documentation Headache",
    content:
      "The exam room used to be sacred space—where undivided attention met patient stories. Now, it's often a battleground between eye contact and endless clicks. Doctors are burning out, not from care, but from clerical chaos. Enter the AI medical scribe: not science fiction, but a practical solution reshaping modern healthcare.",
    url: "/blogs/ai-medical-scribes"
  },
  {
    title:
      "Why Internal Medicine Physicians Are Turning to AI Scribes for Relief",
    content:
      "Internists are detectives, educators, care coordinators, and chronic disease managers—all in a single day. But too often, their work is buried under the weight of documentation. Every encounter demands detailed notes, thoughtful plans, and bulletproof coding. It's no wonder that internal medicine sees some of the highest burnout rates in healthcare.",
    url: "/blogs/why-internal-medicine"
  },
  {
    title:
      "Documenting Pediatric Care Shouldn't Be a Puzzle—Let AI Scribes Help",
    content:
      "Pediatric care is full of nuance. The patient doesn't always speak, parents do. Visits are short, but dense with critical information—growth charts, vaccines, milestones, anticipatory guidance, and more. Every note needs to be complete, clear, and compliant. But pediatricians are drowning in charting.",
    url: "/blogs/documenting-pediatric"
  },
  {
    title:
      "From Burnout to Balance: How AI Scribes Are Empowering Primary Care Physicians",
    content:
      "In today's fast-paced healthcare system, primary care physicians are facing a silent epidemic: burnout. Endless administrative tasks, especially clinical documentation, are pulling doctors away from what truly matters patient care. A growing body of research shows that the burden of Electronic Health Record (EHR) data entry is one of the top contributors to physician dissatisfaction.",
    url: "/blogs/burnout-to-balance"
  },
];

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

export default function Blogs() {
  return (
    <div className="min-h-screen bg-[#f3f3f3]">
      <div className="w-full mx-auto">
        {/* Header Section with Gradient Background */}
        <header className="relative w-full min-h-[500px] lg:min-h-[577px] [background:linear-gradient(137deg,rgba(14,25,99,1)_0%,rgba(46,24,173,1)_47%,rgba(79,52,187,1)_60%,rgba(140,76,193,1)_71%,rgba(200,110,186,1)_82%,rgba(228,174,211,1)_94%,rgba(231,227,237,1)_100%)]">
          {/* Navigation Background Overlay */}
          <div className="absolute top-0 left-0 right-0 h-14 md:h-[57px] bg-black/20 backdrop-blur-sm z-10"></div>

          {/* Navigation Bar */}
          <Navigation navItems={navItems} />

          {/* Header Content - Mobile First Layout */}
          <div data-nav-dark="true" className="relative w-full max-w-7xl pl-4 sm:pl-8 md:pl-16 lg:pl-[85px] pr-4 sm:pr-8 md:pr-16 lg:pr-[85px] mx-auto pt-16 sm:pt-20 md:pt-24 lg:pt-32">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-12">
              {/* Left Content */}
              <div className="flex-1 lg:max-w-md">
                <h1 className="font-playfair font-medium text-white text-3xl sm:text-4xl lg:text-[52px] leading-tight lg:leading-[57.7px]">
                  Blogs
                </h1>
                <p className="mt-4 font-gantari font-normal text-white text-lg sm:text-xl lg:text-xl leading-relaxed">
                  Fast reads for doctors who are pressed for time
                </p>

                {/* <Button
                  variant="default"
                  className="mt-8 lg:mt-12 w-full sm:w-auto px-8 py-3 bg-white rounded-[5px] hover:bg-gray-100 transition-colors relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-[#ffffff99] blur-[22.45px] opacity-50" />
                  <span className="relative font-gantari font-semibold text-[#162694] text-base">
                    SUBSCRIBE
                  </span>
                </Button> */}
              </div>

              {/* Featured Blog Post Card */}
              <div className="flex-1 lg:max-w-xl">
                <Card className="w-full bg-white rounded-[20px] border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-4 sm:p-6 lg:p-8">
                    <h2 className="font-playfair font-normal text-black text-xl sm:text-2xl lg:text-[28px] leading-tight lg:leading-[32px] mb-4">
                      {featuredPost.title}
                    </h2>
                    <p className="font-gantari font-normal text-black text-base sm:text-lg lg:text-[20px] leading-relaxed lg:leading-[32px] mb-6">
                      {featuredPost.content}
                    </p>
                    <Link href={featuredPost.url}>
                      <Button className="w-full sm:w-auto bg-[#162694] hover:bg-[#1a2ba8] rounded-[5px] px-6 py-3 transition-colors flex items-center justify-center">
                        <span className="font-gantari font-medium text-white text-[15px] sm:text-base lg:text-lg">
                          Read More
                        </span>
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </header>

        {/* Blog Posts Grid */}
        <div className="relative w-full max-w-7xl pl-4 sm:pl-8 md:pl-16 lg:pl-[85px] pr-4 sm:pr-8 md:pr-16 lg:pr-[85px] mx-auto py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {blogPosts.map((post, index) => (
              <Card
                key={index}
                className="w-full bg-white rounded-[10px] border border-solid border-[#bcbaba] hover:shadow-lg transition-shadow group"
              >
                <CardContent className="p-6 h-full flex flex-col">
                  <h2 className="font-playfair font-semibold text-[#162694] text-xl sm:text-2xl lg:text-[28px] leading-tight lg:leading-[35.8px] mb-6">
                    {post.title}
                  </h2>
                  <p className="font-gantari  text-black text-sm sm:text-base leading-relaxed lg:leading-[27.8px] flex-1 mb-6">
                    {post.content}
                  </p>
                  <div className="flex justify-end">
                    <Link
                      href={post.url}
                      className="font-gantari font-normal text-[#162694] text-base sm:text-lg underline hover:text-[#1a2ba8] transition-colors group-hover:no-underline"
                    >
                      Read More
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer links={footerLinks} />
    </div>
  );
}