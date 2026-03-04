"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ABOUT_PAGE, IMAGES } from "@/lib/constants";

const icons: Record<string, React.ReactNode> = {
  Status: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
  Certification: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    </svg>
  ),
  Founded: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.25m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
    </svg>
  ),
  President: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>
  ),
  "Areas of expertise": (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
    </svg>
  ),
  "Primary Contract": (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
  ),
};

const highlightLabels = new Set(["Status", "Founded"]);

export function CompanyProfile() {
  const { companyProfile } = ABOUT_PAGE;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduceMotion = useReducedMotion();

  return (
    <section ref={ref} className="relative py-10 sm:py-14 md:py-16 overflow-hidden">
      {/* Background: image from section above (FounderBio) */}
      <div className="absolute inset-0">
        <Image
          src={IMAGES.people}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy/85 via-navy/75 to-navy/65" aria-hidden />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(27,92,255,0.15),transparent_50%)]" aria-hidden />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.header
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-aviation-blue/90 mb-3">
            Company Info
          </p>
          <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl md:text-4xl mb-3">
            {companyProfile.heading}
          </h2>
          <p className="text-base text-white/80 font-medium">{companyProfile.subheading}</p>
        </motion.header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {companyProfile.details.map((d, i) => {
            const isHighlight = highlightLabels.has(d.label);
            return (
              <motion.article
                key={d.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.45,
                  delay: 0.06 + i * 0.06,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                whileHover={reduceMotion ? undefined : { y: -6, scale: 1.02 }}
                className={`group relative flex flex-col rounded-3xl overflow-hidden p-6 sm:p-7 text-left focus-within:ring-2 focus-within:ring-aviation-blue/40 focus-within:ring-offset-2 focus-within:ring-offset-navy/50
                  bg-gradient-to-br from-white/80 via-white/60 to-white/40 backdrop-blur-2xl
                  border border-white/70
                  shadow-[0_0_0_1px_rgba(255,255,255,0.5)_inset,0_4px_24px_rgba(10,31,68,0.15),0_12px_48px_-12px_rgba(0,0,0,0.25)]
                  hover:shadow-[0_0_0_1px_rgba(255,255,255,0.6)_inset,0_8px_32px_rgba(10,31,68,0.2),0_24px_64px_-16px_rgba(0,0,0,0.35),0_0_40px_-20px_rgba(27,92,255,0.2)]
                  hover:border-white/90
                  transition-all duration-300 ease-out ${isHighlight ? "pl-7 sm:pl-8" : ""}`}
              >
                {/* Top-edge glass highlight */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" aria-hidden />
                {isHighlight && (
                  <div className="absolute top-0 left-0 bottom-0 w-1.5 rounded-l-3xl bg-gradient-to-b from-aviation-blue via-aviation-blue to-navy shadow-[0_0_12px_rgba(27,92,255,0.4)]" aria-hidden />
                )}
                <div className={d.label === "Certification" ? "flex flex-col sm:flex-row sm:items-center sm:justify-between sm:gap-6 gap-4" : ""}>
                  <dl className="m-0 min-w-0">
                    <dt className="sr-only">{d.label}</dt>
                    <dd className="m-0">
                      <div
                        className={`inline-flex items-center gap-2.5 rounded-full px-3 py-1.5 mb-4 ${isHighlight ? "bg-aviation-blue/15 text-aviation-blue" : "bg-white/50 text-gray-500"}`}
                        aria-hidden
                      >
                        {icons[d.label] ?? null}
                        <span className="text-[11px] font-semibold uppercase tracking-widest">
                          {d.label}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-baseline gap-2">
                        <span
                          className={`font-heading font-semibold leading-snug ${
                            isHighlight ? "text-navy text-lg sm:text-xl" : "text-navy text-base sm:text-lg"
                          }`}
                        >
                          {d.value}
                        </span>
                        {d.label === "Status" && (
                          <span className="inline-flex items-center rounded-full bg-aviation-blue/10 px-2.5 py-0.5 text-xs font-semibold text-aviation-blue">
                            WOSB
                          </span>
                        )}
                      </div>
                    </dd>
                  </dl>
                  {d.label === "Certification" && (
                    <div className="shrink-0 flex items-center justify-end">
                      <Image
                        src={IMAGES.efast}
                        alt="FAA eFAST MOA Holder"
                        width={120}
                        height={48}
                        className="h-10 w-auto object-contain object-right"
                      />
                    </div>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
