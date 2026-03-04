"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, IMAGES } from "@/lib/constants";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 pt-[env(safe-area-inset-top)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 sm:h-24 items-center justify-between gap-4">

          <Link href="/" aria-label="The Fortier Group — Home" className="shrink-0 flex items-center min-h-[44px]">
            <Image
              src={IMAGES.logo}
              alt="The Fortier Group"
              width={240}
              height={120}
              className="logo-brand-light h-14 w-auto sm:h-16 md:h-20"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-0.5" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`min-h-[44px] inline-flex items-center px-3.5 py-2 rounded-lg text-sm font-medium transition-colors duration-150 ${
                  pathname === link.href
                    ? "text-navy bg-gray-100"
                    : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link
              href="/contact"
              className="min-h-[44px] inline-flex items-center gap-1.5 px-4 py-2.5 bg-navy text-white text-sm font-semibold rounded-lg hover:bg-navy-light transition-colors duration-150 whitespace-nowrap shrink-0"
            >
              Contact us
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <button
            type="button"
            className="md:hidden -mr-1 min-h-[44px] min-w-[44px] flex items-center justify-center p-3 text-gray-500 hover:text-gray-900 rounded-lg hover:bg-gray-50 transition-colors"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
              {open
                ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.15, ease: "easeInOut" }}
            className="md:hidden overflow-hidden border-t border-gray-100 bg-white"
          >
            <div className="px-4 py-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] space-y-0.5">
              <div className="flex items-center gap-2.5 px-3 py-2 mb-2 border-b border-gray-100 pb-3">
                <Image src={IMAGES.logo} alt="The Fortier Group" width={80} height={40} className="logo-brand-light h-8 w-auto" />
              </div>
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center min-h-[44px] px-3 py-3 rounded-lg text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? "text-navy bg-gray-100"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3">
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center min-h-[44px] py-3 text-center text-sm font-semibold text-white bg-navy rounded-lg hover:bg-navy-light transition-colors whitespace-nowrap"
                >
                  Contact us
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
