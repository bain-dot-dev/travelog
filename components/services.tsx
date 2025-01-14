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
    title: "Weather Forecast",
    description:
      "What looked like a small patch of purple grass, above five feet.",
    icon: "/icons/cloudyIcon.svg",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="pt-8 pl-4 lg:pl-0 xl:pl-30  2xl:pl-24 2xl:pr-0 relative lg:py-8 xl:pt-8 xl:pb-0"
    >
      <div className="absolute bottom-40 xl:-top-200  right-0 lg:block hidden gap-6">
        <Image
          src="/icons/yellowOrb.svg"
          alt="Yellow orb"
          width={500}
          height={500}
        />
      </div>
      <div className="flex flex-col xl:flex-row relative 2xl:max-w-7xl 2xl:justify-self-center 2xl:gap-2">
        <div className="w-auto 2xl:w-[444px]  py-8 xl:py-32 -pr-16">
          <div className="space-y-4 text-left">
            <span className="flex justify-center xl:justify-start text-customColors-pink text-[16px] lg:text-[23px] font-circular leading-[19px] lg:leading-[27px] font-bold uppercase tracking-widest">
              Services
            </span>
            <h2 className="text-[32px] leading-[38px] lg:text-[40px] lg:leading-[48px] xl:text-[44px] xl:leading-[52px] text-center xl:text-start  font-circular font-bold text-customColors-black">
              Our top value categories for you
            </h2>
          </div>
        </div>

        <div className="flex lg:items-center lg:justify-center xl:items-start xl:justify-start overflow-hidden xl:overflow-x-auto no-scrollbar mx-0 lg:px-16 xl:px-0">
          <div className="flex flex-col md:flex-row lg:flex-row w-[398px] h-[900px] md:w-[869px] md:h-[420px] lg:w-[869px] lg:h-[520px] xl:w-[1092px] xl:h-[480px] gap-5">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
