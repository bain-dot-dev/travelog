import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { PartnerLogos } from "@/components/partner-logos";
import Image from "next/image";
import { Services } from "@/components/services";
import { Destinations } from "@/components/destinations";
import { TravelPoint } from "@/components/travel-point";
import { Features } from "@/components/features";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="absolute top-0 left-0 md:block hidden lg:hidden sm:hidden gap-6">
        <Image
          src="/icons/orangeOrb.svg"
          alt="Orange orb"
          width={500}
          height={500}
          className="text-customColors-orange "
        />
      </div>
      <Navbar />
      <main className="py-16">
        <HeroSection />
      </main>
      <PartnerLogos />
      <Services />
      <Destinations />
      <TravelPoint />
      <Features />
    </div>
  );
}
