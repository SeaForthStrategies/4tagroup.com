"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SITE_CONFIG, NAV_LINKS, FOOTER, IMAGE_CREDITS, IMAGES } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();
  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-80px" });

  return (
    <>
      {/* Pre-footer CTA — white section */}
      <section ref={ctaRef} className="bg-white border-t border-gray-100 py-16 sm:py-20 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-400 mb-3">Get in Touch</p>
          <h2 className="font-heading text-2xl font-bold text-navy sm:text-3xl md:text-4xl">
            Ready to work with us?
          </h2>
          <p className="mt-3 sm:mt-4 text-gray-500 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
            Call our office to schedule a consultation and we&apos;ll address your needs from there.
          </p>
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-6 bg-navy text-white text-sm font-semibold rounded-xl hover:bg-navy-light transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              Contact us today
              <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href={`tel:${SITE_CONFIG.phone.replace(/[^0-9]/g, "")}`}
              className="min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-6 border border-gray-200 text-gray-700 text-sm font-semibold rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-colors"
            >
              <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {SITE_CONFIG.phone}
            </a>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-navy text-white py-10 sm:py-14 pb-[max(2.5rem,env(safe-area-inset-bottom))]" role="contentinfo">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:gap-10 sm:grid-cols-2 lg:grid-cols-4">

            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-1">
              <Link href="/" aria-label="Home" className="inline-flex items-center gap-3 mb-4">
                <Image src={IMAGES.logo} alt="The Fortier Group" width={80} height={40} className="logo-brand-dark h-8 w-auto" />
                <span className="font-heading text-sm font-bold tracking-wide">THE FORTIER GROUP</span>
              </Link>
              <p className="text-sm text-white/50 leading-relaxed max-w-[220px]">
                {SITE_CONFIG.tagline}
              </p>
            </div>

            {/* Links */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/35 mb-4">Navigation</p>
              <ul className="space-y-1 sm:space-y-2.5">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="min-h-[44px] sm:min-h-0 flex items-center sm:block py-2 sm:py-0 text-sm text-white/60 hover:text-white transition-colors duration-150">
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/contact" className="min-h-[44px] sm:min-h-0 flex items-center sm:block py-2 sm:py-0 text-sm text-white/60 hover:text-white transition-colors duration-150">Contact</Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/35 mb-4">Services</p>
              <ul className="space-y-1 sm:space-y-2.5">
                {["ATC Training", "Quality Assurance", "Consulting", "STARS Training"].map((s) => (
                  <li key={s}>
                    <Link href="/services" className="min-h-[44px] sm:min-h-0 flex items-center sm:block py-2 sm:py-0 text-sm text-white/60 hover:text-white transition-colors duration-150">{s}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/35 mb-4">Contact</p>
              <address className="not-italic space-y-1 sm:space-y-2.5">
                <a href={`tel:${SITE_CONFIG.phone.replace(/[^0-9]/g, "")}`} className="min-h-[44px] sm:min-h-0 flex items-center sm:block py-2 sm:py-0 text-sm text-white/60 hover:text-white transition-colors">
                  {SITE_CONFIG.phone}
                </a>
                <a href={`mailto:${SITE_CONFIG.email}`} className="min-h-[44px] sm:min-h-0 flex items-center sm:block py-2 sm:py-0 text-sm text-white/60 hover:text-white transition-colors">
                  {SITE_CONFIG.email}
                </a>
                <a href={SITE_CONFIG.mapsUrl} target="_blank" rel="noopener noreferrer" className="min-h-[44px] sm:min-h-0 flex items-center sm:block py-2 sm:py-0 text-sm text-white/60 hover:text-white transition-colors leading-snug">
                  {SITE_CONFIG.address}
                </a>
              </address>
            </div>
          </div>

          <div className="mt-8 sm:mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
            <p className="text-xs text-white/30">&copy; {year} {FOOTER.copyright}</p>
            <details>
              <summary className="text-xs text-white/25 cursor-pointer hover:text-white/40 transition-colors">Photo credits</summary>
              <div className="mt-2 text-[10px] text-white/25 leading-loose text-right">
                {IMAGE_CREDITS.map((c, i) => (
                  <span key={c.url}>
                    <a href={c.url} target="_blank" rel="noopener noreferrer" className="hover:text-white/50 transition-colors">{c.photographer}</a>
                    {" / "}{c.source}{i < IMAGE_CREDITS.length - 1 && " · "}
                  </span>
                ))}
              </div>
            </details>
          </div>
        </div>
      </footer>
    </>
  );
}
