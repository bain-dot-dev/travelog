import HeroSection from "@/components/hero-section";
import PartnerLogos from "@/components/partner-logos";
import Services from "@/components/services";
import Destinations from "@/components/destinations";
import TravelPoint from "@/components/travel-point";
import Features from "@/components/features";
import TestimonialsSection from "@/components/testimonials";
import Newsletter from "@/components/newsletter";
import Footer from "@/components/footer";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
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
