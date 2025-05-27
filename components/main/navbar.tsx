'use client';
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { NAV_LINKS } from "@/constants";

export const Navbar = () => {
  const [active, setActive] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`w-full h-[65px] fixed shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 ${
        isScrolled ? "scrolled" : ""
      }`}
    >
      {/* Navbar Container */}
      <div className="w-full max-w-[1232px] h-full flex items-center justify-between m-auto px-[10px] sm:px-[20px] md:px-[40px] xl:px-0">
        <div className="animate-slidedown w-full flex justify-between items-center">
          <Link
            href="/"
            className="flex items-center gap-1 text-slate-100 transition duration-300"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <Image
              src="/logo.png"
              alt="Logo"
              width={70}
              height={70}
              draggable={false}
              className="w-14 h-14 object-contain cursor-pointer logo-hover"
            />
            <div className="flex flex-col">
                <p className="text-[18px] font-bold cursor-pointer">Sanger Ramirez</p>
                <span className="hidden sm:block text-xs">
                  Full Stack Engineering
                </span>
              </div>
          </Link>
          <ul className="hidden md:flex gap-10">
            {NAV_LINKS.map((nav) => (
              <Link
                key={nav.title}
                href={nav.link}
                className={`text-[18px] font-medium cursor-pointer ${
                  active === nav.title ? "text-slate-100" : "text-secondary"
                } hover:text-white transition duration-300`}
                onClick={() => setActive(nav.title)}
              >
                {nav.title}
              </Link>
            ))}
          </ul>
          <div className="md:hidden">
            <Image
              src={isMenuOpen ? '/close.svg' : '/menu.svg'}
              alt="menu"
              width={50}
              height={50}
              className="w-[28px] h-[28px] object-contain cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
            {isMenuOpen && (
              <div className="absolute top-[56px] right-0 mx-2 my-2 min-w-[140px] rounded-xl bg-black-gradient p-6 black-gradient">
                <ul className="flex flex-col gap-4">
                  {NAV_LINKS.map((nav) => (
                    <Link
                      key={nav.title}
                      href={nav.link}
                      className={`font-medium cursor-pointer text-[16px] ${
                        active === nav.title ? "text-white" : "text-secondary"
                      }`}
                      onClick={() => {
                        setIsMenuOpen(false);
                        setActive(nav.title);
                      }}
                    >
                      {nav.title}
                    </Link>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};