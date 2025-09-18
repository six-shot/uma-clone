"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import React from "react";
import TopNav from "./top-header";
import { Logo } from "./ui/icons";
import { IoArrowBack } from "react-icons/io5";
import { Button } from "./ui/button";

const menuItems = [
  { name: "How it works", href: "/products", hasDropdown: false },
  { name: "For Voters", href: "/services", hasDropdown: false },
  { name: "For Builders", href: "/options", hasDropdown: false },
  { name: "oSnap", href: "/contact", hasDropdown: false },
  { name: "Oval", href: "/login", hasDropdown: false },
  { name: "Docs", href: "/login", hasDropdown: true },
  { name: "Blog", href: "/login", hasDropdown: true },
];

export const HeroHeader = () => {
  const [menuState, setMenuState] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isTopNavVisible, setIsTopNavVisible] = React.useState(true);
  const [isDismissed, setIsDismissed] = React.useState(false);
  const [lastScrollY, setLastScrollY] = React.useState(0);
  const [isInHero, setIsInHero] = React.useState(true);
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(
    null
  );

  const pathname = usePathname();

  const handleCloseTopNav = () => {
    setIsTopNavVisible(false);
    setIsDismissed(true);
  };

  const handleDropdownToggle = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollThreshold = 50; // Increased threshold for better UX
      const heroHeight = 1313; // Hero section height

      // Track if we're in the hero section
      setIsInHero(currentScrollY < heroHeight);

      // Only apply scroll behavior if top nav is not dismissed
      if (!isDismissed) {
        // Show top nav only when at the very top (original position)
        if (currentScrollY <= scrollThreshold) {
          setIsTopNavVisible(true);
        }
        // Hide when scrolling down from the top
        else if (
          currentScrollY > lastScrollY &&
          currentScrollY > scrollThreshold
        ) {
          // Scrolling down - hide top nav
          setIsTopNavVisible(false);
        }
        // Show when scrolling up and we're near the top
        else if (
          currentScrollY < lastScrollY &&
          currentScrollY <= scrollThreshold
        ) {
          setIsTopNavVisible(true);
        }
      }

      setIsScrolled(currentScrollY > scrollThreshold);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed, lastScrollY]);

  return (
    <header className="">
      <nav
        data-state={menuState && "active"}
        className={`fixed z-[100] left-0 right-0 backdrop-blur-sm transition-all duration-300 ${
          isInHero
            ? "bg-[#272528] shadow-[0px_24px_24px_24px_#272528]"
            : "bg-white shadow-[0px_24px_24px_24px_white]"
        }`}
      >
        {!isDismissed && (
          <div
            className={`transition-all duration-500 ease-in-out ${
              isTopNavVisible
                ? "translate-y-0 opacity-100"
                : "-translate-y-full opacity-0"
            }`}
          >
            <TopNav onClose={handleCloseTopNav} />
          </div>
        )}
        <div
          className={`transition-all duration-500 ease-in-out ${
            isTopNavVisible && !isDismissed ? "mt-1" : "-mt-[74px]"
          }`}
        >
          <div
            className={`max-w-[1440px] mx-auto w-full px-4 lg:w-[1148px] lg:px-0 md:h-[56px] h-10 flex items-end transition-all duration-300 md:pb-1.5 pb-4 ${
              isScrolled ? " " : ""
            }`}
          >
            <div className="transition-all duration-300 flex justify-between w-full">
              <div className="relative flex justify-between w-full">
                <div className="flex items-center justify-between w-full">
                  <div className="flex w-full items-center justify-between   lg:w-auto">
                    <div className="md:hidden flex">
                      {" "}
                      <button
                        onClick={() => setMenuState(!menuState)}
                        aria-label={menuState ? "Close Menu" : "Open Menu"}
                        className="relative z-20 block cursor-pointer lg:hidden"
                        data-state={menuState ? "active" : "inactive"}
                      >
                        <div className="flex flex-col gap-[7px]">
                          <div
                            className={`w-[21px] h-[2px] bg-[#838183] transition-all duration-300 ${
                              menuState ? "rotate-45 translate-y-[6px]" : ""
                            }`}
                          />
                        
                          <div
                            className={`w-[21px] h-[2px] bg-[#838183] transition-all duration-300 ${
                              menuState ? "-rotate-45 -translate-y-[6px]" : ""
                            }`}
                          />
                        </div>
                      </button>
                    </div>
                    <Link href="/" aria-label="home" className="">
                      <Logo fill={!isInHero ? "#272528" : "white"} />
                    </Link>
                    <div className="md:hidden flex items-center">
                      <h5 className=" text-sm text-[#E0E0E0] leading-6">App</h5>
                      <div className="w-6 h-6 flex justify-center items-center rotate-150">
                        <IoArrowBack className="text-[18px] text-[#e0e0e0]" />
                      </div>
                    </div>
                  </div>
                  <div className="hidden lg:block">
                    <ul className="flex gap-1">
                      {menuItems.map((item, index) => (
                        <li key={index} className="relative">
                          {item.hasDropdown ? (
                            <button
                              onClick={() => handleDropdownToggle(item.name)}
                              className={`hover:text-[#AFAEB2] duration-150 flex items-center gap-1 pl-4 text-[15px] ${
                                pathname === item.href
                                  ? "text-[#AFAEB2]"
                                  : "text-[#AFAEB2]"
                              }`}
                            >
                              <span>{item.name}</span>
                              <div className="w-6 h-6 flex justify-center items-center ">
                                {" "}
                                <IoArrowBack
                                  className={`text-[18px] rotate-150 transition-transform duration-200 ${
                                    activeDropdown === item.name ? "" : ""
                                  }`}
                                />
                              </div>
                            </button>
                          ) : (
                            <Link
                              href={item.href}
                              className={`hover:text-[#AFAEB2] duration-150 flex items-center gap-1 pl-4 text-[15px] ${
                                pathname === item.href
                                  ? "text-[#AFAEB2]"
                                  : "text-[#AFAEB2]"
                              }`}
                            >
                              <span>{item.name}</span>
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button
                    className={`md:flex hidden transition-all duration-300 ${
                      !isInHero
                        ? "bg-[#272528] text-white hover:bg-[#272528]/90"
                        : ""
                    }`}
                  >
                    Launch app
                  </Button>
                </div>

                <div
                  className={`fixed top-[72px] left-0 right-0 bottom-0 z-[1000] bg-black/80 backdrop-blur-md transition-all duration-300 lg:hidden ${
                    menuState ? "opacity-100 visible" : "opacity-0 invisible"
                  }`}
                  onClick={() => setMenuState(false)}
                >
                  <div
                    className={`absolute top-0 left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-white/10 shadow-2xl transition-all duration-300 ${
                      menuState ? "translate-y-0" : "translate-y-full"
                    }`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="p-6">
                      <ul className="space-y-6 text-base">
                        {menuItems.map((item, index) => (
                          <li key={index}>
                            {item.hasDropdown ? (
                              <button
                                onClick={() => handleDropdownToggle(item.name)}
                                className={`hover:text-accent-foreground flex items-center gap-2 duration-300 ${
                                  pathname === item.href
                                    ? "text-[#fff]/50"
                                    : "text-[#fff]/50"
                                }`}
                              >
                                <span>{item.name}</span>
                                <IoArrowBack
                                  className={`text-[18px] transition-transform duration-200 ${
                                    activeDropdown === item.name
                                      ? "rotate-90"
                                      : ""
                                  }`}
                                />
                              </button>
                            ) : (
                              <Link
                                href={item.href}
                                className={`hover:text-accent-foreground block duration-300 ${
                                  pathname === item.href
                                    ? "text-[#fff]/50"
                                    : "text-[#fff]/50"
                                }`}
                                onClick={() => setMenuState(false)}
                              >
                                <span>{item.name}</span>
                              </Link>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
