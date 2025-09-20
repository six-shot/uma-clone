import React from "react";
import {
  Discord,
  Discourse,
  Github,
  Logo,
  Medium,
  TimeIcon,
  Twitter,
} from "./ui/icons";
import { IoArrowBack } from "react-icons/io5";

export default function Footer() {
  return (
    <div className="bg-[#E0E0E0] pt-[108px] lg:px-0 px-4">
      <div className="max-w-[1148px] mx-auto   ">
        <div className=" bg-[#EDEDED] h-[48px] rounded-lg  flex justify-between items-center px-2">
          <div className="flex items-center gap-[54px]">
            {" "}
            <div className="flex gap-4 items-center">
              <div className="w-8 h-8 bg-[rgba(255,77,77,0.10)] rounded-full flex justify-center items-center">
                <TimeIcon />
              </div>
              <h5 className="text-sm text-[#272528] leading-6 flex gap-1 items-center">
                <span className="md:flex hidden"> Time to commit vote: </span>
                <span className="md:flex block"> reveal votes: </span>
                <span className="text-[15px] text-[#FF4D4D]">17:03:01</span>
              </h5>
            </div>
            <h5 className="hidden text-sm text-[#F5F5F5] px-2 h-[32px] bg-[#5a575b] rounded-xl md:flex items-center">
              3 votes
            </h5>
          </div>
          <div className="flex items-center">
            <h5 className="md:hiddeb block text-sm text-[#272528] leading-6">
              More details
            </h5>
            <div className="w-6 h-6 flex justify-center items-center rotate-150">
              <IoArrowBack className="text-[18px] text-[#272528]" />
            </div>
          </div>
        </div>

        <div className="mt-12 ">
          <div className="grid h-fit md:grid-cols-2 justify-center  md:items-start md:gap-8">
            {/* Mobile order: Logo, Paragraph, Form, ULs */}
            <div className="w-full order-1 md:order-1 flex md:justify-start justify-center items-center">
              <Logo className="logo-custom-fill" />
            </div>

            <div className="w-full order-2 md:order-2 text-[#413d42] text-xl text-center md:text-left md:my-0 my-6">
              <p>Receive the latest UMA and OO news, straight to your inbox.</p>
            </div>

            <div className="w-full order-3 md:order-4 flex flex-col items-center md:items-start  xl:items-end ">
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

            <div className="w-full order-4 md:order-3 flex justify-center md:block md:gap-0 my-[56px]">
              <div className="grid gap-8 grid-cols-1 xl:grid-cols-2 md:grid-cols-2">
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
            </div>
          </div>
        </div>
        <div className="pb-[64px] flex md:flex-row flex-col justify-between items-center md:gap-4 gap-[1.5rem]">
          <div className="flex gap-6 items-center order-1 md:order-2">
            <Discord />
            <Medium />
            <Twitter />
            <Discourse />
            <Github />
          </div>

          <p className="text-[#838183] order-3 md:order-1">
            © 2025 Risk Labs Foundation
          </p>
          <p className="text-[#838183] order-2 md:order-1">Terms of Service</p>
        </div>
      </div>
    </div>
  );
}
