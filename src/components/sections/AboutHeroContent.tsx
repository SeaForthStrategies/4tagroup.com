"use client";

import { motion } from "framer-motion";

interface AboutHeroContentProps {
  headline: string;
}

export function AboutHeroContent({ headline }: AboutHeroContentProps) {
  return (
    <>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-xs font-semibold uppercase tracking-[0.18em] text-red mb-4"
      >
        About The Fortier Group
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.08 }}
        className="font-heading text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl max-w-3xl leading-tight"
      >
        {headline}
      </motion.h1>
    </>
  );
}
