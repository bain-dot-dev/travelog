import { Navbar } from "@/components/navbar";
import HeroSection from "@/app/hero-section/page";
import PartnerLogos from "@/app/partner-logos/page";
import Image from "next/image";
import Services from "@/app/services/page";
import Destinations from "@/app/destinations/page";
import TravelPoint from "@/app/travel-point/page";
import Features from "@/app/features/page";
import TestimonialsSection from "@/app/testimonials/page";
import Newsletter from "@/app/newsletter/page";
import Footer from "@/app/footer/page";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="absolute top-0 left-0 lg:block hidden gap-6">
        <Image
          src="/icons/orangeOrb.svg"
          alt="Orange orb"
          width={500}
          height={500}
          className="text-customColors-orange "
        />
      </div>

      <div className="absolute top-96  right-0 lg:block hidden gap-6">
        <Image
          src="/icons/yellowOrb.svg"
          alt="Yellow orb"
          width={500}
          height={500}
          className="text-customColors-dandelion"
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
      <TestimonialsSection />
      <Newsletter />
      <Footer />
    </div>
  );
}
