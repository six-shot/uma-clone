"use client";

import React, { useEffect, useState } from "react";

interface ScrollTrackerProps {
  sections: Array<{
    id: string;
    title: string;
    subtitle: string;
    description: string;
    number: string;
  }>;
}

export default function ScrollTracker({ sections }: ScrollTrackerProps) {
  const [activeSection, setActiveSection] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollTop / docHeight, 1);
      setScrollProgress(progress);

      // Find active section based on scroll position
      const sectionElements = sections.map((_, index) =>
        document.getElementById(`section-${index}`)
      );

      let currentSection = 0;
      sectionElements.forEach((element, index) => {
        if (element) {
          const rect = element.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            currentSection = index;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return (
    <div className="relative bg-white">
      {/* Content Sections */}
      <div className="max-w-7xl mx-auto">
        {sections.map((section, index) => (
          <div
            key={section.id}
            id={`section-${index}`}
            className="h-screen flex items-center relative"
          >
            <div className="w-full flex items-center px-8">
              {/* Scroll Tracker - positioned on the left */}
              <div className="flex-shrink-0 w-16 flex flex-col items-center mr-16">
                {/* Vertical Line */}
                <div className="w-0.5 h-80 bg-gray-200 relative">
                  {/* Progress Fill */}
                  <div
                    className="absolute top-0 left-0 w-full bg-[#FF4D4D] transition-all duration-500 ease-out"
                    style={{ height: `${scrollProgress * 100}%` }}
                  />
                </div>

                {/* Numbered Boxes */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col gap-20">
                  {sections.map((sectionItem, sectionIndex) => (
                    <div
                      key={sectionItem.id}
                      className={`w-8 h-8 rounded border-2 flex items-center justify-center text-white font-bold text-sm transition-all duration-300 ${
                        sectionIndex <= activeSection
                          ? "bg-[#FF4D4D] border-[#FF4D4D]"
                          : "bg-white border-gray-300 text-gray-400"
                      }`}
                    >
                      {sectionItem.number}
                    </div>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Text Content */}
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                      {section.title}
                    </h3>
                    <h2 className="text-5xl lg:text-6xl font-bold text-black leading-tight">
                      {section.subtitle}
                    </h2>
                  </div>
                  <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                    {section.description}
                  </p>
                </div>

                {/* Illustration Placeholder */}
                <div className="flex justify-center lg:justify-end">
                  <div className="w-96 h-96 bg-gray-100 rounded-2xl flex items-center justify-center border border-gray-200">
                    <span className="text-gray-400 text-lg font-medium">
                      Illustration {section.number}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
