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
    image: "/images/StockSnap_6FI8W1L305.png",
  },
  {
    title: "25+ years average experience",
    desc: "QA oversight, instruction, and detailed reporting—delivered globally for nearly two decades.",
    image: "/images/ruby-khoesial-ciUcYX0eXnQ-unsplash.png",
  },
  {
    title: "Certified WOSB",
    desc: "A Women Owned Small Business ready to support FAA, DoD, and international clients.",
    image: "/images/StockSnap_KAUU1CKET4.png",
  },
];

export function TrustSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-16 sm:py-24 md:py-32 bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.header
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="mb-10 sm:mb-12"
        >
          <h2 className="font-heading text-2xl font-bold text-navy sm:text-3xl lg:text-[2rem] leading-tight">
            Veteran-led expertise. Mission-ready support.
          </h2>
          <p className="mt-3 text-gray-500 text-base sm:text-lg max-w-2xl leading-relaxed">
            We bring decades of air traffic control experience to every engagement—training, consulting, and quality assurance for agencies that demand precision.
          </p>
          <Link
            href="/about"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-aviation-blue hover:text-aviation-blue-light transition-all duration-200 hover:gap-3"
          >
            Meet our team
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.header>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.05, ease: [0.25, 0.46, 0.45, 0.94] }}
            whileHover={{ y: -2 }}
            className="aspect-[2/1] relative rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5"
          >
            <Image src={IMAGES.runway} alt="" fill className="object-cover object-center" sizes="(max-width: 640px) 100vw, 50vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/50 to-navy/30" aria-hidden />
          </motion.div>
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ y: -2 }}
              className="aspect-[2/1] relative rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5"
            >
              <Image
                src={item.image}
                alt=""
                fill
                className="object-cover object-center"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/75 to-navy/55" aria-hidden />
              <div className="relative z-10 p-5 sm:p-6 flex flex-col justify-center h-full">
                <h3 className="font-heading text-base font-bold text-white sm:text-lg">
                  {item.title}
                </h3>
                <p className="text-sm text-white/85 leading-relaxed mt-2">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
