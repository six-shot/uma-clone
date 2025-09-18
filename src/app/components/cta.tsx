import React from "react";
import { IoArrowBack } from "react-icons/io5";

export default function CTA() {
  return (
    <div className="relative isolate bg-[linear-gradient(180deg,#ffffff_0%,#f9f9f9_100%)] ">
      <div>
        {" "}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="pointer-events-none  h-full w-full object-cover mix-blend-luminosity"
        >
          <source src="/uma.xyz.mp4" type="video/mp4" />

          <div className="w-full h-full bg-[#272528]"></div>
        </video>
        <div className="pointer-events-none absolute right-0 top-0 h-full w-full bg-[linear-gradient(0deg,#f0f0f0_0%,rgba(255,255,255,0.45)_50%,#ffffff_100%)]"></div>
      </div>
      <section className="pointer-events-auto absolute inset-0 z-10  flex min-h-[min(1024px,80dvh)] items-center px-4 ">
        <div className="max-w-[1148px] mx-auto w-full">
          <h2 className="max-w-[400px] text-6xl sm:max-w-[562px] mb-6">
            Supported by the Risk labs Foundations
          </h2>
          <p className="mb-[74px] text-lg sm:text-xl sm:max-w-[562px]">
            Risk Labs is the foundation and team behind UMA. Risk Labs&apos; mission
            is to make global markets universally fair, accessible, secure and
            decentralized.
          </p>
          <div className="mt-9 gap-6 flex flex-col ">
            <a className="group flex w-fit items-center gap-5 transition-[gap] hover:gap-4 hover:text-red">
              <div className="grid h-[40px] w-[40px] place-items-center rounded-[10px] border-[1.5px] border-grey-800 transition group-hover:border-[red] group-hover:bg-[red]">
                <IoArrowBack className="text-[26px] text-[#272528] rotate-150 font-semibold group-hover:text-[white]" />
              </div>
              <span className="text-3xl transition sm:text-5xl  group-hover:text-[red] ">
                Careers
              </span>
            </a>
            <a className="group flex w-fit items-center gap-5 transition-[gap] hover:gap-4 hover:text-red">
              <div className="grid h-[40px] w-[40px] place-items-center rounded-[10px] border-[1.5px] border-grey-800 transition group-hover:border-[red] group-hover:bg-[red]">
                <IoArrowBack className="text-[26px] text-[#272528] rotate-150 font-semibold group-hover:text-[white]" />
              </div>
              <span className="text-3xl transition sm:text-5xl group-hover:text-[red]">
                About
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
