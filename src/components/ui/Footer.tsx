"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { PenLine } from "lucide-react";
import { SITE_CONFIG, NAV_LINKS, FOOTER, IMAGE_CREDITS } from "@/lib/constants";

const SERVICES_LIST = ["ATC Training", "Quality Assurance", "Consulting", "STARS Training"];

export function Footer() {
  const year = new Date().getFullYear();
  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-80px" });

  return (
    <>
      {/* Pre-footer CTA */}
      <section ref={ctaRef} className="relative text-white overflow-hidden">
        {/* Background: deep blue with soft radial glow */}
        <div className="absolute inset-0 bg-[#071428]" aria-hidden />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(27,92,255,0.2),transparent_55%)]" aria-hidden />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-aviation-blue/30 to-transparent" aria-hidden />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-14 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <span className="inline-block text-[10px] font-semibold uppercase tracking-[0.28em] text-aviation-blue">
                Get in touch
              </span>
              <h2 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl md:text-[2rem] text-white leading-tight max-w-xl mx-auto">
                Ready to work with us?
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Link
                href="/contact"
                className="group w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-aviation-blue text-white text-sm font-semibold rounded-lg hover:bg-aviation-blue-light transition-all duration-200 shadow-lg shadow-aviation-blue/25 hover:shadow-aviation-blue/35 hover:-translate-y-0.5"
              >
                Contact us
                <svg className="w-3.5 h-3.5 shrink-0 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href={`tel:+1${SITE_CONFIG.phone.replace(/[^0-9]/g, "")}`}
                className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 px-6 py-2.5 border-2 border-white/25 text-white text-sm font-medium rounded-lg hover:bg-white/10 hover:border-white/40 transition-colors"
              >
                <svg className="w-4 h-4 shrink-0 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {SITE_CONFIG.phone}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="bg-[#050b14] text-white"
        role="contentinfo"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-12 sm:pt-14 lg:pt-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">
            {/* Brand + tagline */}
            <div className="md:col-span-5 lg:col-span-4">
              <Link
                href="/"
                aria-label="Home"
                className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050b14] rounded"
              >
                <span className="font-heading text-lg font-bold tracking-wide text-white">
                  THE FORTIER GROUP
                </span>
              </Link>
              <p className="mt-2 text-sm text-white/55 leading-relaxed max-w-xs">
                {SITE_CONFIG.tagline}
              </p>
            </div>

            {/* Nav */}
            <div className="md:col-span-3 lg:col-span-2">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/45 mb-3">
                Navigation
              </p>
              <ul className="space-y-2.5">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/65 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/contact" className="text-sm text-white/65 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div className="md:col-span-4 lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/45 mb-3">
                Services
              </p>
              <ul className="space-y-2.5">
                {SERVICES_LIST.map((s) => (
                  <li key={s}>
                    <Link href="/services" className="text-sm text-white/65 hover:text-white transition-colors">
                      {s}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="md:col-span-12 lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/45 mb-3">
                Contact
              </p>
              <address className="not-italic space-y-2">
                <a
                  href={`tel:+1${SITE_CONFIG.phone.replace(/[^0-9]/g, "")}`}
                  className="block text-sm text-white/65 hover:text-white transition-colors"
                >
                  {SITE_CONFIG.phone}
                </a>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="block text-sm text-white/65 hover:text-white transition-colors break-all"
                >
                  {SITE_CONFIG.email}
                </a>
                <a
                  href={SITE_CONFIG.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-white/65 hover:text-white transition-colors leading-snug"
                >
                  {SITE_CONFIG.address}
                </a>
              </address>
            </div>
          </div>

          {/* Bottom bar: copyright, credits, disclosures */}
          <div className="mt-12 sm:mt-14 pt-8 border-t border-white/10">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-white/45">
                <p>
                  &copy; {year} {FOOTER.copyright}
                </p>
                <p className="inline-flex items-center gap-2">
                <PenLine className="w-4 h-4 text-white/55 shrink-0" aria-hidden />
                Site by{" "}
                <a
                  href="https://www.seaforthstrategies.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/55 hover:text-white/80 transition-colors underline underline-offset-2"
                >
                  SeaForth Strategies
                </a>
              </p>
              </div>

              {/* Expandable: Photo credits + Disclosures */}
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                <details className="group/details">
                  <summary className="cursor-pointer list-none text-xs text-white/45 hover:text-white/65 transition-colors inline-flex items-center gap-1.5 [&::-webkit-details-marker]:hidden">
                    <span className="group-open/details:rotate-90 transition-transform inline-block">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                    Photo credits
                  </summary>
                  <div className="mt-2 pl-5 text-[11px] text-white/35 leading-relaxed max-w-2xl">
                    {IMAGE_CREDITS.map((c, i) => (
                      <span key={c.url}>
                        <a
                          href={c.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-white/55 transition-colors"
                        >
                          {c.photographer}
                        </a>
                        {" / "}
                        {c.source}
                        {i < IMAGE_CREDITS.length - 1 && " · "}
                      </span>
                    ))}
                  </div>
                </details>

                <details className="group/disclosures">
                  <summary className="cursor-pointer list-none text-xs text-white/45 hover:text-white/65 transition-colors inline-flex items-center gap-1.5 [&::-webkit-details-marker]:hidden">
                    <span className="group-open/disclosures:rotate-90 transition-transform inline-block">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                    Disclosures
                  </summary>
                  <div className="mt-2 pl-5 text-[11px] text-white/35 leading-relaxed max-w-xl">
                    {FOOTER.disclosures}
                  </div>
                </details>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[max(2rem,env(safe-area-inset-bottom))]" />
      </footer>
    </>
  );
}
