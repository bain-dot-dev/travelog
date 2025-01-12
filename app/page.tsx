import HeroSection from "@/app/hero-section/page";
import PartnerLogos from "@/app/partner-logos/page";
import Services from "@/app//services/page";
import Destinations from "@/app/destinations/page";
import TravelPoint from "@/app/travel-point/page";
import Features from "@/app/features/page";
import TestimonialsSection from "@/app//testimonials/page";
import Newsletter from "@/app/newsletter/page";
import Footer from "@/app/footer/page";
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
