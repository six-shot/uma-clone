import React from "react";
import { OOLogo, OrangeArrow } from "./ui/icons";
import { HeroHeader } from "./hero-header";

export default function HeroSection() {
  return (
    <section className="relative w-full bg-[#272528] overflow-hidden md:h-[1313px] h-screen">
      <HeroHeader />
      {/* Video Background */}
      <div className="w-full h-full relative ">
        {" "}
        <div className="absolute w-full bottom-0 ">
          <video
            autoPlay
            muted
            loop
            playsInline
            className=" mx-auto w-full h-full object-cover opacity-10 mix-blend-luminosity lg:w-[80%] "
          >
            <source src="/hero.webm" type="video/webm" />

            <div className="w-full h-full bg-[#272528]"></div>
          </video>
        </div>
      </div>

      {/* Hero Text Content */}
      <div className="absolute md:top-[400px] top-[160px] left-1/2 transform -translate-x-1/2  z-20 animate-fade-in">
        <div className="flex flex-col gap-8 justify-center items-center h-full">
          <div className="md:p-[5px] p-1 rounded-[16px] top-bg relative overflow-hidden">
            <div className="w-10 h-10 bg-[#AFAEB2] opacity-[0.4] blur-[8px] absolute -top-[25px] -right-[15px]"></div>
            <div className="w-10 h-10 bg-[#AFAEB2] opacity-[0.4] blur-[6px] absolute -bottom-[36px] -left-[18px]"></div>
            <div className="md:h-[50px] h-[45px] md:px-[13px] px-3  rounded-xl border border-white/5 flex items-center">
              <h5 className="md:text-[24px] text-[20px] leading-[32px] text-white  ">
                <span className="text-[#FF4D4D] mr-[5px]">$2.05B</span>
                Total Value Secured
              </h5>
            </div>
          </div>
          <div className="text-center ">
            <h1 className="md:text-[96px] text-[40px] md:leading-[112px] leading-[56px] text-white">
              A decentralized
            </h1>
            <div className="flex items-center md:gap-4 gap-2 md:mt-2 -mt-6">
              <h1 className="md:text-[96px] text-[40px] md:leading-[112px] leading-[56px] text-white">
                truth
              </h1>
              <div className="md:mt-4 mt-2">
                {" "}
                <OOLogo className="w-20 md:w-auto" />
              </div>
              <h1 className="md:text-[96px] text-[40px] md:leading-[112px] leading-[56px] text-white">
                machine
              </h1>
            </div>
          </div>
          <h2 className="md:text-xl text-[30px] -mt-6 md:mt-2  mx-auto md:max-w-[min(562px,80%)] text-center text-white/70 leading-[2.25rem] md:leading-[1.75rem]">
            UMA&apos; s optimistic oracle (OO) can record any verifiable truth
            or data onto a blockchain.
          </h2>
        </div>
      </div>

      {/* Explore indicator */}
      {/* <div className="absolute md:bottom-[190px] bottom-0 left-1/2 transform -translate-x-1/2 z-20 animate-fade-in">
        <div className=" flex-col gap-2 w-[48px] h-[48px] rounded-lg bg-[#252125] border border-[#FF4D4D] flex justify-center items-center">
          <OrangeArrow />
        </div>
      </div> */}
    </section>
  );
}
