import HeroSection from "@/app/main/hero-section/page";
import PartnerLogos from "@/app/main/partner-logos/page";
import Services from "@/app/main/services/page";
import Destinations from "@/app/main/destinations/page";
import TravelPoint from "@/app/main/travel-point/page";
import Features from "@/app/main/features/page";
import TestimonialsSection from "@/app/main/testimonials/page";
import Newsletter from "@/app/main/newsletter/page";
import Footer from "@/app/main/footer/page";
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
