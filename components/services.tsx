import Image from "next/image";
import { ServiceCard } from "./service-card";

const services = [
  {
    title: "Best Tour Guide",
    description:
      "What looked like a small patch of purple grass, above five feet.",
    icon: "/icons/destination.svg",
  },
  {
    title: "Easy Booking",
    description: "Square, was moving across the sand in their direction.",
    icon: "/icons/scheduleIcon.svg",
  },
  {
    title: "Best Tour Guide",
    description:
      "What looked like a small patch of purple grass, above five feet.",
    icon: "/icons/cloudyIcon.svg",
  },
];

export function Services() {
  return (
    <section className="py-16 md:py-24">
      <div className="absolute top-96 right-0 md:block hidden gap-6">
        <Image
          src="/icons/yellowOrb.svg"
          alt="Yellow orb"
          width={500}
          height={500}
          className="text-customColors-dandelion "
        />
      </div>
      <div className="flex flex-col lg:grid lg:grid-cols-2 relative max-w-7xl mx-auto px-10">
        <div className="w-[444px] py-16">
          <div className="space-y-4 text-left mb-12">
            <span className="text-customColors-pink text-[23px] font-circular leading-[27px] font-bold uppercase tracking-widest">
              Services
            </span>
            <h2 className="text-3xl md:text-[44px] leading-[52px] font-circular font-bold text-customColors-black">
              Our top value categories for you
            </h2>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-5 mx-auto overflow-hidden">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
