"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { HOME_PAGE, IMAGES } from "@/lib/constants";

const cardImages = [
  { src: IMAGES.cockpit, alt: "ATC systems training cockpit" },
  { src: IMAGES.runway, alt: "Runway and aviation operations" },
  { src: IMAGES.people, alt: "Aviation professionals" },
];

export function ServiceCards() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="relative w-full py-16 sm:py-24 md:py-28 overflow-hidden"
      aria-label="Training, consulting and quality assurance"
    >
      {/* Background for glass effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-aviation-blue/5" aria-hidden />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_70%_20%,rgba(27,92,255,0.06),transparent_50%)]" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.header
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45 }}
          className="mb-10 sm:mb-14"
        >
          <h2 className="font-heading text-2xl font-bold text-navy sm:text-3xl lg:text-[2.25rem] leading-tight">
            Training, consulting & quality assurance
          </h2>
          <p className="mt-4 text-gray-600 text-base sm:text-lg max-w-2xl leading-relaxed">
            End-to-end support for FAA, DoD, and international clients—from simulation and instruction to oversight and reporting.
          </p>
          <Link
            href="/services"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-aviation-blue hover:text-aviation-blue-light transition-all duration-200 hover:gap-3 underline underline-offset-4 decoration-2 decoration-aviation-blue/50 hover:decoration-aviation-blue"
          >
            Our services
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.header>

        {/* Different layout: one large card left, two stacked right (bento-style) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            whileHover={{ y: -3 }}
            className="relative flex flex-col rounded-2xl overflow-hidden lg:row-span-2 bg-white/70 dark:bg-white/60 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_rgba(10,31,68,0.08),0_2px_8px_rgba(255,255,255,0.5)_inset]"
          >
            <div className="relative h-44 sm:h-52 lg:h-64 shrink-0">
              <Image
                src={cardImages[0].src}
                alt={cardImages[0].alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            <div className="flex flex-col flex-1 p-6 sm:p-7">
              <h3 className="font-heading text-lg font-bold text-navy">{HOME_PAGE.services[0].title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed mt-2 flex-1">{HOME_PAGE.services[0].description}</p>
              <Link
                href="/services"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-aviation-blue hover:text-aviation-blue-light transition-colors"
              >
                Learn more
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </motion.article>

          {HOME_PAGE.services.slice(1).map((service, i) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.18 + i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ y: -3 }}
              className="relative flex flex-col rounded-2xl overflow-hidden bg-white/70 dark:bg-white/60 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_rgba(10,31,68,0.08),0_2px_8px_rgba(255,255,255,0.5)_inset]"
            >
              <div className="relative h-32 sm:h-36 shrink-0">
                <Image
                  src={cardImages[i + 1].src}
                  alt={cardImages[i + 1].alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <div className="flex flex-col flex-1 p-6 sm:p-7">
                <h3 className="font-heading text-base font-bold text-navy sm:text-lg">{service.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mt-2 flex-1 line-clamp-3">{service.description}</p>
              {"bulletPoints" in service && service.bulletPoints && (
                <ul className="mt-3 space-y-1">
                  {service.bulletPoints.slice(0, 2).map((pt) => (
                    <li key={pt} className="flex items-start gap-2 text-xs text-gray-600">
                      <svg className="mt-0.5 h-3.5 w-3.5 shrink-0 text-aviation-blue" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {pt}
                    </li>
                  ))}
                </ul>
              )}
              <Link
                  href="/services"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-aviation-blue hover:text-aviation-blue-light transition-colors"
                >
                  Learn more
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
