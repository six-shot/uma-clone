import React from "react";
import { TimeIcon } from "./ui/icons";
import { IoArrowBack } from "react-icons/io5";

interface TopNavProps {
  onClose?: () => void;
}

export default function TopNav({ onClose }: TopNavProps) {
  return (
    <div className="flex justify-center my-4  ">
      <div className="w-[1148px] bg-[#413D42] h-[48px] rounded-lg  flex justify-between items-center px-2">
        <div className="flex items-center gap-[54px]">
          {" "}
          <div className="flex gap-4 items-center">
            <div className="w-8 h-8 bg-[rgba(255,77,77,0.10)] rounded-full flex justify-center items-center">
              <TimeIcon />
            </div>
            <h5 className="md:text-sm text-base text-[#E0E0E0] leading-6 flex items-center gap-1">
              <span className="md:flex hidden"> Time to commit vote: </span>
              <span className="md:flex block"> reveal votes: </span>
              <span className="text-[15px] text-white">17:03:01</span>
            </h5>
          </div>
          <h5 className=" hidden text-sm text-[#E0E0E0] px-2 h-[32px] bg-[#312F32] rounded-xl md:flex items-center">
            3 votes
          </h5>
        </div>
        <div className="flex items-center">
          <h5 className="md:block hidden text-sm text-[#E0E0E0] leading-6">
            More details
          </h5>
          <div className="w-6 h-6 flex justify-center items-center rotate-150">
            <IoArrowBack className="text-[18px] text-[#e0e0e0]" />
          </div>
        </div>
      </div>
    </div>
  );
}
