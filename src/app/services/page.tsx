"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionWrapper } from "@/components/ui";
import { SERVICES_PAGE, IMAGES } from "@/lib/constants";

const sectionImages = [
  { src: IMAGES.cockpit,      alt: "Airplane cockpit — ATC systems training" },
  { src: IMAGES.controlTower, alt: "Air traffic control tower at dusk" },
  { src: IMAGES.terminal,     alt: "Airport terminal — consulting" },
];

export default function ServicesPage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy overflow-hidden" style={{ paddingTop: "max(5rem, calc(5rem + env(safe-area-inset-top)))" }}>
        <Image
          src={IMAGES.runway}
          alt="Aircraft on runway"
          fill
          priority
          className="object-cover opacity-35"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/40" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-20 md:py-28" ref={heroRef}>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red mb-4">Our Services</p>
            <h1 className="font-heading text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl max-w-3xl leading-tight">
              {SERVICES_PAGE.headline}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Service sections — image background with text overlay */}
      {SERVICES_PAGE.sections.map((section, i) => {
        const image = sectionImages[i];
        return (
          <SectionWrapper key={section.title} className="py-4 sm:py-6" delay={0}>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <section className="relative min-h-[320px] sm:min-h-[380px] rounded-2xl overflow-hidden">
              <Image src={image.src} alt="" fill className="object-cover" sizes="100vw" />
              <div className="absolute inset-0 bg-gradient-to-r from-navy/92 via-navy/75 to-navy/50" aria-hidden />
              <div className="relative z-10 flex flex-col justify-center min-h-[320px] sm:min-h-[380px] px-6 sm:px-10 md:px-12 py-12 sm:py-16 max-w-2xl">
                <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl md:text-4xl mb-4 sm:mb-6">{section.title}</h2>
                <div className="space-y-3 sm:space-y-4">
                  {section.content.map((p, j) => (
                    <p key={j} className="text-white/85 leading-relaxed text-sm sm:text-base">{p}</p>
                  ))}
                </div>
              </div>
              </section>
            </div>
          </SectionWrapper>
        );
      })}

      {/* Training list — image background with text overlay */}
      <section className="py-4 sm:py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative min-h-[320px] sm:min-h-[360px] rounded-2xl overflow-hidden">
          <Image src={IMAGES.runway} alt="" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/75 to-navy/55" aria-hidden />
          <div className="relative z-10 flex flex-col justify-center min-h-[320px] sm:min-h-[360px] px-6 sm:px-10 md:px-12 py-12 sm:py-16 max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red mb-3">Training Programs</p>
            <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl md:text-4xl mb-6">{SERVICES_PAGE.trainingList.heading}</h2>
            <ul className="space-y-2.5 sm:space-y-3">
              {SERVICES_PAGE.trainingList.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-white/85 text-sm leading-relaxed">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-red" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          </div>
        </div>
      </section>

      {/* QA section — image background with text overlay */}
      <SectionWrapper className="py-4 sm:py-6" delay={0}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative min-h-[320px] sm:min-h-[360px] rounded-2xl overflow-hidden">
          <Image src={IMAGES.controlTower} alt="" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/92 via-navy/78 to-navy/55" aria-hidden />
          <div className="relative z-10 flex flex-col justify-center min-h-[320px] sm:min-h-[360px] px-6 sm:px-10 md:px-12 py-12 sm:py-16 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red mb-3">Quality Assurance</p>
            <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl md:text-4xl mb-4 sm:mb-6">{SERVICES_PAGE.qaSection.heading}</h2>
            <div className="space-y-3 sm:space-y-4">
              {SERVICES_PAGE.qaSection.content.map((p, i) => (
                <p key={i} className="text-white/85 leading-relaxed text-sm sm:text-base">{p}</p>
              ))}
            </div>
          </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
