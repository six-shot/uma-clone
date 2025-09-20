"use client";

import React from "react";
import Image from "next/image";
import { IoArrowBack } from "react-icons/io5";

export default function Voter() {


  return (
    <div className=" mb-[64px] md:px-0 px-4">
      <div className="max-w-[1148px] mx-auto">
        <h2 className="border-b border-[#E0E0E0] pb-3 text-lg md:pb-4 md:text-4xl [&>strong]:font-normal [&>strong]:text-red">
          Participate as a <span className="text-[#FF4D4D]">UMA</span> Voter
        </h2>
        <div className="mt-10 mb-8 w-full text-[2.5rem] md:mb-16 md:w-[720px]  lg:mb-[96px] leading-[1em] lg:mt-12 lg:w-[1020px] lg:text-[6rem] xl:mb-[128px] xl:mt-12">
          <h2>
            Stake, vote & earn <br /> up to 16% APR
          </h2>
        </div>

        {/* Animated SVG Container */}
        <div className="grid md:grid-cols-3 grid-cols-1 pb-6">
          <div className="md:p-10 p-6 group  items-start justify-start md:gap-2 border border-white text-grey-900 transition duration-300 hover:-translate-y-2 hover:border-gray-400 hover:text-[red] ">
            <Image
              src="/earn.svg"
              alt="Stake animation"
              width={260}
              height={260}
              className="md:w-[260px] md:h-[260px] w-[92px] h-[92px]"
            />
            <div className="flex mt-1 flex-col">
              <h4 className="md:text-[60px] text-[36px] text-[#272528] group-hover:text-[red] transition-colors duration-300">
                Stake
              </h4>
              <p className="md:text-xl text-base text-[#272528] md:mt-0 mt-1">
                Stake your $UMA to help secure
                <br className="md:flex hidden" /> UMA&apos;s Optimistic Oracle.
              </p>
            </div>
          </div>
          <div className="md:p-10 p-6 group  items-start justify-start md:gap-2 border border-white text-grey-900 transition duration-300 hover:-translate-y-2 hover:border-gray-400 hover:text-[red] ">
            <Image
              src="/vote.svg"
              alt="Stake animation"
              width={260}
              height={260}
              className="md:w-[260px] md:h-[260px] w-[92px] h-[92px]"
            />
            <div className="flex mt-1 flex-col">
              <h4 className="md:text-[60px] text-[36px] text-[#272528] group-hover:text-[red] transition-colors duration-300">
                Vote
              </h4>
              <p className="md:text-xl text-base text-[#272528] md:w-[288px] w-full">
                Token holders who vote correctly and consistently earn higher
                APYs.
              </p>
            </div>
          </div>
          <div className="md:p-10 p-6 group  items-start justify-start md:gap-2 border border-white text-grey-900 transition duration-300 hover:-translate-y-2 hover:border-gray-400 hover:text-[red] ">
            <Image
              src="/stake.svg"
              alt="Stake animation"
              width={260}
              height={260}
              className="md:w-[260px] md:h-[260px] w-[92px] h-[92px]"
            />
            <div className="flex mt-1 flex-col">
              <h4 className="md:text-[60px] text-[36px] text-[#272528] group-hover:text-[red] transition-colors duration-300">
                Earn
              </h4>
              <p className="md:text-xl text-base text-[#272528] md:w-[288px] w-full">
                Successful voters will gradually own a higher percentage of the
                protocol than unsuccessful or inactive voters.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-[#E0E0E0] pb-6 h-[1px] w-full">
          <div className="flex items-center mt-6 group cursor-pointer">
            <h4 className="text-xl text-[#FF4D4D] transition-colors duration-300">
              Launch Voter app
            </h4>
            <div className="w-8 h-8 border border-[#FF4D4D] rounded-[8px] flex items-center justify-center ml-4 group-hover:bg-black group-hover:border-black transition-all duration-300">
              <IoArrowBack className="text-[18px] text-[#FF4D4D] group-hover:text-white rotate-150 transition-colors duration-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
