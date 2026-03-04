"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { HOME_PAGE, IMAGES } from "@/lib/constants";

export function Hero() {
  const { hero } = HOME_PAGE;

  return (
    <section className="relative flex items-center bg-navy overflow-hidden min-h-[min(88vh,700px)] sm:min-h-[88vh]" style={{ paddingTop: "max(5rem, calc(5rem + env(safe-area-inset-top)))" }}>
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <Image
          src={IMAGES.hero}
          alt="Pilot in cockpit"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>
      {/* Directional overlays: strong left, fade to transparent right */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-navy/30" />

      <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-20 md:py-28">
        <div className="max-w-[640px]">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-red mb-6 sm:mb-8"
          >
            <span className="inline-block w-6 h-px bg-red/50" />
            Certified Women Owned Small Business
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="font-heading text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.1] tracking-tight"
          >
            {hero.headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="mt-4 sm:mt-6 text-base text-white/65 leading-relaxed sm:text-lg max-w-[480px]"
          >
            {hero.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="mt-8 sm:mt-10 flex flex-wrap gap-3"
          >
            <Link
              href={hero.ctaPrimary.href}
              className="inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-3 sm:px-6 bg-red text-white text-sm font-bold rounded-xl hover:bg-red-light transition-all duration-200 shadow-lg shadow-red/20 hover:scale-[1.02] active:scale-[0.98]"
            >
              {hero.ctaPrimary.label}
              <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href={hero.ctaSecondary.href}
              className="inline-flex items-center justify-center min-h-[44px] px-5 py-3 sm:px-6 text-white/85 border border-white/20 text-sm font-semibold rounded-xl hover:bg-white/8 hover:border-white/35 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              {hero.ctaSecondary.label}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
