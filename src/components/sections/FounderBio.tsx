"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ABOUT_PAGE, IMAGES } from "@/lib/constants";

export function FounderBio() {
  const { founder } = ABOUT_PAGE;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-16 sm:py-24 md:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:gap-16 lg:grid-cols-2 lg:gap-24 items-center">

          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.45 }}
            className="order-2 lg:order-1"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100">
              <Image
                src={IMAGES.people}
                alt="Aviation professionals"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.07 }}
            className="order-1 lg:order-2"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-400 mb-3">Our Legacy</p>
            <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl mb-6">{founder.heading}</h2>
            <p className="text-gray-500 leading-relaxed text-base">{founder.bio}</p>

            <div className="mt-8 flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
              <div className="shrink-0 w-10 h-10 rounded-full bg-navy/8 flex items-center justify-center">
                <svg className="w-5 h-5 text-red" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-navy">Larry Fortier Jr.</p>
                <p className="text-xs text-gray-400">1933 – 2012 · Founder</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
