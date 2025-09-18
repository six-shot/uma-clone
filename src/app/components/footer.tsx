import React from "react";
import { Discord, Discourse, Github, Logo, Medium, TimeIcon, Twitter } from "./ui/icons";
import { IoArrowBack } from "react-icons/io5";

export default function Footer() {
  return (
    <div className="bg-[#E0E0E0] pt-[108px]">
      <div className="max-w-[1148px] mx-auto   ">
        <div className=" bg-[#EDEDED] h-[48px] rounded-lg  flex justify-between items-center px-2">
          <div className="flex items-center gap-[54px]">
            {" "}
            <div className="flex gap-4 items-center">
              <div className="w-8 h-8 bg-[rgba(255,77,77,0.10)] rounded-full flex justify-center items-center">
                <TimeIcon />
              </div>
              <h5 className="text-sm text-[#272528] leading-6">
                Time to commit vote:{" "}
                <span className="text-[15px] text-[#FF4D4D]">17:03:01</span>
              </h5>
            </div>
            <h5 className="text-sm text-[#F5F5F5] px-2 h-[32px] bg-[#5a575b] rounded-xl flex items-center">
              3 votes
            </h5>
          </div>
          <div className="flex items-center">
            <h5 className="text-sm text-[#272528] leading-6">More details</h5>
            <div className="w-6 h-6 flex justify-center items-center rotate-150">
              <IoArrowBack className="text-[18px] text-[#272528]" />
            </div>
          </div>
        </div>

        <div className="mt-12">
          <div className="flex justify-end text-[#413d42] mb-8 text-xl">
            <p>Receive the latest UMA and OO news, straight to your inbox.</p>
          </div>
          <div className=" grid h-fit grid-cols-2 justify-center justify-items-start ">
            <div className="cols-span-2 mb-[56px]   grid h-fit grid-rows-2 justify-center w-full justify-items-start md:row-start-auto md:h-auto md:grid-rows-none md:justify-normal xl:grid-cols-3 xl:grid-rows-none">
              <Logo className="logo-custom-fill" />
              <ul>
                <li className="mb-4 last:mb-0 text-[#272528]">oSnap</li>
                <li className="mb-4 last:mb-0 text-[#272528]">Oval</li>
                <li className="mb-4 last:mb-0 text-[#272528]">Docs</li>
                <li className="mb-4 last:mb-0 text-[#272528]">Blog</li>
              </ul>
              <ul>
                <li className="mb-4 last:mb-0 text-[#272528]">
                  Optimistic Oracle (OO)
                </li>
                <li className="mb-4 last:mb-0 text-[#272528]">Docs</li>
                <li className="mb-4 last:mb-0 text-[#272528]">Stats</li>
                <li className="mb-4 last:mb-0 text-[#272528]">Blog</li>
              </ul>
            </div>

            <div className="flex w-full flex-col items-center gap-6 md:items-start md:gap-0 xl:items-end ">
              <form className="flex w-full flex-col items-center justify-end gap-3 lg:flex-row">
                <input
                  className="h-12 w-full max-w-[528px] rounded-lg border-2 border-[transparent] bg-white px-4 py-3 text-lg caret-grey-900 outline-none transition hover:border-grey-500 focus:border-grey-900 xl:max-w-[350px] text-grey-900"
                  placeholder=" Your email"
                />
                <button className="flex h-12 w-full bg-[#FF4D4D] min-w-fit max-w-[528px] items-center justify-center gap-0.5 whitespace-nowrap rounded-lg bg-red px-[24px] py-2 text-lg text-white transition hover:opacity-50 lg:w-fit">
                  Signup
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="pb-[64px] flex justify-between items-center  ">
          <p className="text-[#838183]">© 2025 Risk Labs Foundation</p>
          <p className="text-[#838183]">Terms of Service</p>
          <div className="flex gap-6 items-center">
            <Discord />
            <Medium />
            <Twitter />
            <Discourse />
            <Github />
          </div>
        </div>
      </div>
    </div>
  );
}
