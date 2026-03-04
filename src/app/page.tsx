import { Hero, ServiceCards, TrustSection, StatBar } from "@/components/sections";
import { homeMetadata } from "@/lib/metadata";

export const metadata = homeMetadata;

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServiceCards />
      <TrustSection />
      <StatBar />
    </>
  );
}
