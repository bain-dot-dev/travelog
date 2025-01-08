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

export function Services() {
  return (
    <section className="pt-8 lg:pt-16 md:py-24 pl-4 lg:pl-32 2xl:pl-64 relative xl:py-20">
      {/* Content Section */}
      <div className="flex flex-col lg:flex-row relative">
        {/* Left Section */}
        <div className=" w-auto py-8 lg:py-32 -pr-16">
          <div className="space-y-4 text-left">
            <span className="flex justify-center lg:justify-start text-customColors-pink text-[23px] font-circular leading-[27px] font-bold uppercase tracking-widest">
              Services
            </span>
            <h2 className="text-[32px] leading-[38px] md:text-[40px] md:leading-[48px] lg:text-[44px] lg:leading-[52px] text-center lg:text-start font-circular font-bold text-customColors-black">
              Our top value categories for you
            </h2>
          </div>
        </div>

        {/* Scrollable Cards */}
        <div className="overflow-hidden lg:overflow-x-auto no-scrollbar">
          <div className="flex flex-col md:flex-row w-[398px] h-[869px] md:w-[869px] md:h-[443px] lg:w-[1092px] lg:h-[480px] gap-5">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
