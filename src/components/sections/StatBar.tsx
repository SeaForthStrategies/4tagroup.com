"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState, useCallback } from "react";
import { ABOUT_PAGE } from "@/lib/constants";

interface CountUpProps {
  end: string;
  duration?: number;
  isInView: boolean;
}

function CountUp({ end, duration = 2, isInView }: CountUpProps) {
  const numericEnd = parseInt(end.replace(/\D/g, ""), 10);
  const suffix = end.replace(/[0-9]/g, "");
  const isYear = end.length === 4 && !suffix;
  const [count, setCount] = useState(isYear ? end : "0");
  const hasAnimated = useRef(false);

  const animate = useCallback((): (() => void) | undefined => {
    if (isYear || hasAnimated.current) return undefined;
    hasAnimated.current = true;
    let startTime: number;
    let frame: number;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * numericEnd) + suffix);
      if (progress < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [duration, numericEnd, suffix, isYear]);

  useEffect(() => {
    if (isInView && !hasAnimated.current) return animate();
  }, [isInView, animate]);

  return <>{count}</>;
}

export function StatBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="bg-navy py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 divide-x divide-white/10">
          {ABOUT_PAGE.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-center px-3 sm:px-6 lg:px-12 first:pl-0 last:pr-0 min-w-0"
            >
              <div className="font-heading text-3xl font-bold text-red sm:text-4xl md:text-5xl lg:text-6xl tabular-nums">
                <CountUp end={stat.value} isInView={inView} />
              </div>
              <p className="mt-2 sm:mt-3 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.12em] sm:tracking-[0.18em] text-white/45 leading-tight">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
