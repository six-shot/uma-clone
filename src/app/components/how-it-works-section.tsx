"use client";

import React, { useEffect, useState, useMemo } from "react";

export default function HowItWorksSection() {
  const [activeSection, setActiveSection] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  const sections = useMemo(
    () => [
      {
        id: "statement",
        title: "Statement",
        subtitle: "A statement is proposed as true.",
        description:
          "A natural-language statement is submitted along with a bond. The bond acts as a bounty for anyone to dispute it if they have evidence to the contrary.",
        number: "01",
        video: "/step-1.mp4",
      },
      {
        id: "challenge",
        title: "Challenge Period",
        subtitle: "Most statements go undisputed.",
        description:
          "Anyone can propose an answer to a data request, and it is accepted as true if it is not disputed during the challenge period.",
        number: "02",
        video: "/step-2.mp4",
      },
      {
        id: "dispute",
        title: "Dispute",
        subtitle: "Anyone can dispute a statement.",
        description:
          'Each statement submitted for validation is an opportunity for anyone to earn a reward by disputing it successfully. As the game theory would predict, disputes are rare in practice because the incentives are always to be honest. That makes the OO "optimistic".',
        number: "03",
        video: "/step-3.mp4",
      },
      {
        id: "Voting",
        title: "Voting",
        subtitle: "Tokenholders vote on disputes and earn rewards",
        description:
          "The UMA token provides economic guarantees to the Optimistic Oracle. The community of tokenholders provide the human component, as voters, for the OO's final resolution on disputes or queries. Those who vote with the majority earn rewards.",
        number: "04",
        video: "/step-4.mp4",
      },
    ],
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      // Find active section based on scroll position
      const sectionElements = sections.map((_, index) =>
        document.getElementById(`section-${index}`)
      );

      let currentSection = 0;
      let progress = 0;

      sectionElements.forEach((element, index) => {
        if (element) {
          const rect = element.getBoundingClientRect();
          const viewportHeight = window.innerHeight;
          const elementTop = rect.top;
          const elementHeight = rect.height;

          // Check if section is in view
          if (
            elementTop <= viewportHeight / 2 &&
            elementTop + elementHeight >= viewportHeight / 2
          ) {
            currentSection = index;

            // Calculate progress within this section
            const sectionProgress = Math.max(
              0,
              Math.min(1, (viewportHeight / 2 - elementTop) / elementHeight)
            );
            progress = (index + sectionProgress) / sections.length;
          } else if (elementTop < viewportHeight / 2) {
            // Section is above viewport
            currentSection = index;
            progress = (index + 1) / sections.length;
          }
        }
      });

      setActiveSection(currentSection);
      setScrollProgress(progress);
    };

    const updateNumberPositions = () => {
      const sectionElements = sections.map((_, index) =>
        document.getElementById(`section-${index}`)
      );

      sectionElements.forEach((element, index) => {
        if (element) {
          const numberElement = document.getElementById(`number-${index}`);
          if (numberElement) {
            const rect = element.getBoundingClientRect();
            const containerRect =
              element.parentElement?.getBoundingClientRect();
            if (containerRect) {
              const relativeTop = rect.top - containerRect.top;
              numberElement.style.top = `${relativeTop}px`;
            }
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", updateNumberPositions);
    handleScroll(); // Call once to set initial state
    updateNumberPositions(); // Set initial positions

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateNumberPositions);
    };
  }, [sections]);

  return (
    <div className=" py-24">
      <div className="max-w-[1148px] mx-auto">
        <div className="flex flex-col gap-8">
          <h2 className="border-b border-grey-400 pb-3 text-lg md:pb-4 md:text-4xl [&>strong]:font-normal [&>strong]:text-red">
            How <span className="text-[#FF4D4D]">UMA</span> works
          </h2>
          <div className="mb-10 mt-6 w-full text-sm-fluid md:mb-16 md:w-[720px] md:text-md-fluid lg:mb-[96px] leading-[7rem] lg:mt-12 lg:w-[1020px] lg:text-[6rem] xl:mb-[128px] xl:mt-12">
            <h2>
              The Optimistic Oracle <br /> verifies data in stages
            </h2>
          </div>

          {/* Scroll Tracker Container */}
          <div className="relative">
            {/* Left Scroll Tracker */}
            <div className="absolute left-0 top-0 h-full flex flex-col items-center z-10">
              {/* Vertical Line */}
              <div className="h-full w-[1px] bg-[linear-gradient(180deg,#838183_0%,rgba(131,129,131,0.00)_100%)] lg:h-[calc(100%+96px)] relative -z-10">
                {/* Progress Fill */}
                <div
                  className="absolute top-0 left-0 w-full bg-[#FF4D4D] transition-all duration-300 ease-out"
                  style={{ height: `${scrollProgress * 100}%` }}
                />
              </div>

              {/* Numbered Boxes - positioned on the line */}
              {sections.map((section, index) => (
                <div
                  key={section.id}
                  id={`number-${index}`}
                  className="absolute left-1/2 -translate-x-1/2"
                  style={{
                    top: `${index * 600}px`, // Initial position, will be updated dynamically
                  }}
                >
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-base transition-all duration-300  ${
                      index <= activeSection
                        ? "bg-[#FF4D4D] border-[#FF4D4D]"
                        : "bg-[#FF4D4D] border-[#FF4D4D]"
                    }`}
                  >
                    {section.number}
                  </div>
                </div>
              ))}
            </div>

            {/* Content Sections */}
            <div className="ml-20">
              {sections.map((section, index) => (
                <div
                  key={section.id}
                  id={`section-${index}`}
                  className=" flex items-center "
                  style={{
                    marginBottom: index < sections.length - 1 ? "96px" : "0",
                  }}
                >
                  <div className="w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-[52px] items-start">
                      {/* Text Content */}
                      <div className="space-y-[52px]">
                        <div className="space-y-4">
                          <h3 className=" font-medium text-[#FF4D4D] capitalize tracking-wider">
                            {section.title}
                          </h3>
                          <h2 className="text-5xl lg:text-6xl  text-black leading-[1] w-[450px] mt-2 mb-4">
                            {section.subtitle}
                          </h2>
                        </div>
                        <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                          {section.description}
                        </p>
                      </div>

                      {/* Video Content */}
                      <div className="flex justify-center lg:justify-end">
                        <div className="min-h-[400px] border border-grey-400 md:max-w-[754px] lg:max-w-[520px] w-full">
                          <video
                            className="h-full w-full object-cover"
                            src={section.video}
                            autoPlay
                            muted
                            loop
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
