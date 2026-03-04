"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ABOUT_PAGE } from "@/lib/constants";

export function FounderBio() {
  const { founder } = ABOUT_PAGE;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-aviation-blue mb-2">
            Our Legacy
          </p>
          <h2 className="font-heading text-2xl font-bold text-navy sm:text-3xl tracking-tight">
            {founder.name}
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            {founder.heading} · {founder.years}
          </p>

          <div className="mt-8 space-y-5 text-gray-600 leading-[1.65] text-[15px] sm:text-base">
            {founder.bioParagraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <p className="mt-8 text-navy text-[15px] sm:text-base leading-relaxed">
            {founder.closing}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
