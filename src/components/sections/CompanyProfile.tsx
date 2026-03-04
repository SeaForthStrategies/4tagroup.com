"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ABOUT_PAGE } from "@/lib/constants";

export function CompanyProfile() {
  const { companyProfile } = ABOUT_PAGE;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-16 sm:py-24 md:py-32 bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="max-w-2xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-400 mb-3">Company Info</p>
          <h2 className="font-heading text-2xl font-bold text-navy sm:text-3xl md:text-4xl mb-6 sm:mb-8">{companyProfile.heading}</h2>

          <dl className="divide-y divide-gray-100">
            {companyProfile.details.map((d, i) => (
              <motion.div
                key={d.label}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.1 + i * 0.04, duration: 0.3 }}
                className="flex flex-col sm:flex-row sm:gap-6 py-3.5"
              >
                <dt className="text-xs font-semibold uppercase tracking-wide text-gray-400 sm:w-36 sm:pt-0.5">{d.label}</dt>
                <dd className="text-sm font-medium text-gray-800 mt-0.5 sm:mt-0">{d.value}</dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  );
}
