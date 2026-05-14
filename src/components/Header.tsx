"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Header({
  activePage = "Home",
  inBanner = false,
}: {
  activePage?: string;
  inBanner?: boolean;
}) {
  const [open, setOpen] = useState(false);

  const links = useMemo(
    () =>
      navLinks.map((link) => ({
        ...link,
        isActive: link.label.toLowerCase() === activePage.toLowerCase(),
      })),
    [activePage]
  );

  return (
    <header
      className={`sticky top-0 z-50 w-full ${inBanner ? "bg-transparent" : "bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60"
        }`}
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-[100px] py-4">
        <nav className="w-full max-w-[1240px] mx-auto flex items-center justify-between h-16 lg:h-[103px] px-4 lg:px-6 bg-white border border-primary rounded-[32px] lg:rounded-[64px]">
          {/* Logo Container */}
          <div className="flex-1 flex items-center justify-start">
            <Link href="/" className="flex-shrink-0" onClick={() => setOpen(false)}>
              <Image
                src="/images/Logo.png"
                alt="M SPACE Logo"
                width={188}
                height={61}
                className="h-auto w-[130px] lg:w-[170px] xl:w-[188px]"
              />
            </Link>
          </div>

          {/* Navigation Links - Exactly Centered */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-12">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[18px] xl:text-[20px] leading-6 whitespace-nowrap ${link.isActive
                  ? "font-semibold text-primary"
                  : "font-normal text-[#676767] hover:text-primary transition-colors"
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Button Container */}
          <div className="flex-1 flex items-center justify-end">
            <div className="hidden lg:block">
              <Link
                href="/contact"
                className="flex items-center justify-center px-8 h-[50px] xl:h-[61px] bg-primary text-white font-semibold text-[18px] xl:text-[20px] rounded-[48px] shadow-[0px_4px_10px_rgba(0,0,0,0.25)] hover:opacity-90 transition-opacity whitespace-nowrap"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              type="button"
              className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-2xl border border-primary/30 text-primary"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path
                    d="M6 6L18 18M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path
                    d="M4 7H20M4 12H20M4 17H20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </button>
          </div>
        </nav>

        {/* Mobile menu panel */}
        {open ? (
          <div className="lg:hidden max-w-[1240px] mx-auto mt-3 rounded-3xl border border-primary bg-white shadow-[0px_10px_30px_rgba(0,0,0,0.08)] overflow-hidden">
            <div className="flex flex-col p-4">
              <div className="flex flex-col gap-3">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`px-4 py-3 rounded-2xl text-[18px] leading-6 ${link.isActive
                      ? "bg-primary/10 text-primary font-semibold"
                      : "text-[#343434] hover:bg-primary/5"
                      }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="mt-4">
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center w-full px-6 py-4 bg-primary text-white font-semibold text-[18px] rounded-[24px] shadow-[0px_4px_10px_rgba(0,0,0,0.15)] hover:opacity-90 transition-opacity"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
