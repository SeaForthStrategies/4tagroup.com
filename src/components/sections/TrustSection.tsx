"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { IMAGES } from "@/lib/constants";

const items = [
  {
    title: "Veteran FAA & DoD professionals",
    desc: "Enroute and terminal ATC veterans who speak your language and know your operations.",
  },
  {
    title: "25+ years average experience",
    desc: "QA oversight, instruction, and detailed reporting—delivered globally for nearly two decades.",
  },
  {
    title: "Certified WOSB",
    desc: "A Women Owned Small Business ready to support FAA, DoD, and international clients.",
  },
];

export function TrustSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="relative min-h-[min(600px,85vh)] flex flex-col justify-center overflow-hidden w-full"
      aria-label="Veteran-led expertise. Mission-ready support."
    >
      {/* The first block is ONLY the background — no card, no box */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={IMAGES.controlTower}
          alt=""
          fill
          className="object-cover object-center w-full h-full"
          sizes="100vw"
          priority
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-navy/92 via-navy/60 to-navy/38"
          aria-hidden
        />
      </div>

      <div className="relative z-10 w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 md:py-28">
        <motion.header
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45 }}
          className="mb-10 sm:mb-14"
        >
          <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl lg:text-[2.25rem] leading-tight drop-shadow-sm">
            Veteran-led expertise. Mission-ready support.
          </h2>
          <p className="mt-4 text-white/90 text-base sm:text-lg max-w-2xl leading-relaxed">
            We bring decades of air traffic control experience to every engagement—training, consulting, and quality assurance for agencies that demand precision.
          </p>
          <Link
            href="/about"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-white/90 transition-all duration-200 hover:gap-3 underline underline-offset-4 decoration-2 decoration-white/70 hover:decoration-white"
          >
            Meet our team
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.header>

        {/* Grid: first card full width, then 2 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ y: -3 }}
              className={`flex flex-col rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 p-6 sm:p-7 ${i === 0 ? "sm:col-span-2" : ""}`}
            >
              <h3 className="font-heading text-base font-bold text-white sm:text-lg">
                {item.title}
              </h3>
              <p className="text-sm text-white/90 leading-relaxed mt-2">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
