"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import logoWhite from "@/public/images/outboundLogoWhite.png";

import DesktopNav from "./DesktopNav";
import MobileDrawer from "./MobileDrawer";
import { navLinks } from "./navLinks";

const TopNavbar = () => {
  const [isWhiteBg, setIsWhiteBg] = useState(false);
  const drawerId = "main-drawer";

  useEffect(() => {
    const onScroll = () => setIsWhiteBg(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="drawer drawer-end">
      <input id={drawerId} type="checkbox" className="drawer-toggle" />

      <div className="drawer-content flex flex-col">
        <header
          className={`navbar fixed top-0 z-50 w-full h-[70px] transition-all duration-300 ${
            isWhiteBg ? "bg-base-100 shadow-md text-primary" : "bg-transparent text-white"
          }`}
        >
          <div className="flex flex-1 items-center justify-between px-2 lg:px-10 gap-3">
            <div className="flex items-center">
              <Link href="/" className="flex items-center gap-2 p-2">
                <Image
                  src={logoWhite}
                  alt="Outbound Travelers"
                  height={44}
                  priority
                  className={`object-contain h-10 sm:h-11 ${isWhiteBg ? "invert" : ""}`}
                />
                <span className="sm:inline text-lg sm:text-base md:text-lg font-semibold" style={{ fontFamily: "var(--font-lexend)" }}>
                  Outbound Travelers
                </span>
              </Link>
            </div>

            <DesktopNav navLinks={navLinks} isWhiteBg={isWhiteBg} />

            <div className="lg:hidden">
              <label
                htmlFor={drawerId}
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-6 w-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </label>
            </div>
          </div>
        </header>
      </div>

      <MobileDrawer navLinks={navLinks} logo={logoWhite} drawerId={drawerId} />
    </div>
  );
};

export default TopNavbar;
