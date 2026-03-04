import Image from "next/image";
import { SectionWrapper } from "@/components/ui";
import { StatBar, CompanyProfile, FounderBio, AboutHeroContent } from "@/components/sections";
import { ABOUT_PAGE, IMAGES } from "@/lib/constants";
import { aboutMetadata } from "@/lib/metadata";

export const metadata = aboutMetadata;

export default function AboutPage() {
  return (
    <>
      {/* Page hero */}
      <section className="relative bg-navy overflow-hidden" style={{ paddingTop: "max(5rem, calc(5rem + env(safe-area-inset-top)))" }}>
        <Image
          src={IMAGES.biplane}
          alt="Vintage aircraft representing aviation heritage"
          fill
          priority
          className="object-cover opacity-35"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-navy/60" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-20 md:py-28">
          <AboutHeroContent headline={ABOUT_PAGE.headline} />
        </div>
      </section>

      {/* Intro text + image mosaic */}
      <SectionWrapper className="py-16 sm:py-24 md:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
            <div>
              <p className="text-xl font-semibold text-navy leading-snug mb-6">{ABOUT_PAGE.intro}</p>
              <p className="text-base text-gray-500 leading-relaxed">{ABOUT_PAGE.body}</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100">
                <Image src={IMAGES.controlTower} alt="Air traffic control tower" fill className="object-cover" sizes="25vw" />
              </div>
              <div className="flex flex-col gap-3 pt-8">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
                  <Image src={IMAGES.airplane} alt="Commercial aircraft" fill className="object-cover" sizes="25vw" />
                </div>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
                  <Image src={IMAGES.cockpit} alt="Aircraft cockpit" fill className="object-cover" sizes="25vw" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <StatBar />
      <FounderBio />
      <CompanyProfile />
    </>
  );
}
