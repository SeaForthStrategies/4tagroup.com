"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { HOME_PAGE, IMAGES } from "@/lib/constants";

const cardImages = [
  { src: IMAGES.cockpit,      alt: "ATC systems training cockpit" },
  { src: IMAGES.controlTower, alt: "Air traffic control tower" },
  { src: IMAGES.people,       alt: "Aviation professionals" },
];

export function ServiceCards() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-16 sm:py-24 md:py-32 bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <motion.header
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="mb-10 sm:mb-14 md:mb-16"
        >
          <div className="min-w-0">
            <h2 className="font-heading text-2xl font-bold text-navy sm:text-3xl lg:text-[2.5rem] leading-tight tracking-tight">
              Training, consulting & quality assurance
            </h2>
            <p className="mt-2 sm:mt-3 text-gray-500 text-base sm:text-lg leading-relaxed max-w-xl">
              End-to-end support for FAA, DoD, and international clients—from simulation and instruction to oversight and reporting.
            </p>
          </div>
        </motion.header>

        <div className="grid gap-5 sm:gap-6 grid-cols-1 lg:grid-cols-3">
          {HOME_PAGE.services.map((service, i) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ y: -4 }}
              className="group flex flex-col bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl hover:border-gray-300 transition-shadow duration-300"
            >
              <div className="relative h-48 shrink-0 overflow-hidden bg-gray-100">
                <Image
                  src={cardImages[i].src}
                  alt={cardImages[i].alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              <div className="flex flex-col flex-1 p-5 sm:p-6">
                <h3 className="font-heading text-lg font-bold text-navy mb-2">{service.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed flex-1">{service.description}</p>

                {"bulletPoints" in service && service.bulletPoints && (
                  <ul className="mt-4 space-y-1.5">
                    {service.bulletPoints.map((pt) => (
                      <li key={pt} className="flex items-start gap-2 text-sm text-gray-600">
                        <svg className="mt-0.5 h-4 w-4 shrink-0 text-red" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {pt}
                      </li>
                    ))}
                  </ul>
                )}

                <Link
                  href="/services"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-aviation-blue hover:text-aviation-blue-light transition-colors group/link"
                >
                  Learn more
                  <svg className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
