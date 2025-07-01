'use client'
import React from "react";
import Link from 'next/link';

interface ComparisonSectionProps {
  features: string[];
}

export const ComparisonSection: React.FC<ComparisonSectionProps> = ({ features }) => {
  const CheckIcon = ({ color }: { color: string }) => (
    <svg className={`w-5 h-5 text-${color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );

  const CrossIcon = () => (
    <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );

  return (
    <section className="mt-16 sm:mt-24 lg:mt-32 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col">
          <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-semibold">
            There&apos;s an <br className="hidden sm:block" />
            IntelDoc that&apos;s right for <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">you</span>
          </h2>

          {/* Comparison Table */}
          <div className="mt-12 w-full overflow-x-auto">
            <div className="min-w-[768px] grid grid-cols-4 gap-0">
              {/* Features Column */}
              <div className="pt-[88px] pr-8">
                <div className="space-y-8">
                  {features.map((feature, index) => (
                    <div key={index} className="h-12 flex items-center">
                      <span className="text-gray-600 text-lg">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Chrome Extension Column */}
              <div className="border rounded-tl-lg rounded-tr-lg">
                <div className="h-24 bg-[#7C3AED] rounded-tl-lg rounded-tr-lg p-6">
                  <div className="flex items-center space-x-3">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <h3 className="text-white text-xl font-medium">Chrome<br />extension</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-8">
                    <div className="h-12 flex items-center justify-center">
                      <CheckIcon color="[#7C3AED]" />
                    </div>
                    <div className="h-12 flex items-center justify-center">
                      <CheckIcon color="[#7C3AED]" />
                    </div>
                    <div className="h-12 flex items-center justify-center">
                      <CrossIcon />
                    </div>
                    <div className="h-12 flex items-center justify-center">
                      <CrossIcon />
                    </div>
                    <div className="h-12 flex items-center justify-center">
                      <CrossIcon />
                    </div>
                    <div className="h-12 flex items-center justify-center">
                      <CrossIcon />
                    </div>
                  </div>
                </div>
                <div className="p-6 border-t">
                  <Link href="/tryfree" target="_blank">
                    <button className="w-full py-3 bg-[#7C3AED] text-white rounded-md font-medium hover:bg-[#6D28D9] transition-colors">
                      Download Now
                    </button>
                  </Link>
                </div>
              </div>

              {/* Direct Integration Column */}
              <div className="border-t border-r border-b">
                <div className="h-24 bg-[#F97316] p-6">
                  <div className="flex items-center space-x-3">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <h3 className="text-white text-xl font-medium">Direct<br />integration</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-8">
                    <div className="h-12 flex items-center justify-center">
                      <CheckIcon color="[#F97316]" />
                    </div>
                    <div className="h-12 flex items-center justify-center">
                      <CheckIcon color="[#F97316]" />
                    </div>
                    <div className="h-12 flex items-center justify-center">
                      <CheckIcon color="[#F97316]" />
                    </div>
                    <div className="h-12 flex items-center justify-center">
                      <CheckIcon color="[#F97316]" />
                    </div>
                    <div className="h-12 flex items-center justify-center">
                      <CheckIcon color="[#F97316]" />
                    </div>
                    <div className="h-12 flex items-center justify-center">
                      <CrossIcon />
                    </div>
                  </div>
                </div>
                <div className="p-6 border-t">
                  <Link href="/contact">
                    <button className="w-full py-3 bg-[#F97316] text-white rounded-md font-medium hover:bg-[#EA580C] transition-colors">
                      Contact Sales
                    </button>
                  </Link>
                </div>
              </div>

              {/* Custom Column */}
              <div className="border rounded-tr-lg rounded-br-lg">
                <div className="h-24 bg-black p-6">
                  <div className="flex items-center space-x-3">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <h3 className="text-white text-xl font-medium">Custom</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-8">
                    {Array(6).fill(0).map((_, index) => (
                      <div key={index} className="h-12 flex items-center justify-center">
                        <CheckIcon color="black" />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-6 border-t">
                  <Link href="/contact">
                    <button className="w-full py-3 bg-black text-white rounded-md font-medium hover:bg-gray-800 transition-colors">
                      Contact Sales
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};