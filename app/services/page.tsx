import { ServiceCard } from "../../components/service-card";

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
      className="pt-8 xl:pt-16 pl-4 lg:pl-0 xl:pl-32 2xl:pl-0 relative lg:py-8 xl:py-20"
    >
      <div className="flex flex-col xl:flex-row 2xl:flex-col relative">
        <div className=" w-auto py-8 xl:py-32 -pr-16">
          <div className="space-y-4 text-left">
            <span className="flex justify-center xl:justify-start 2xl:justify-center text-customColors-pink text-[23px] font-circular leading-[27px] font-bold uppercase tracking-widest">
              Services
            </span>
            <h2 className="text-[32px] leading-[38px] lg:text-[40px] lg:leading-[48px] xl:text-[44px] xl:leading-[52px] text-center xl:text-start 2xl:text-center font-circular font-bold text-customColors-black">
              Our top value categories for you
            </h2>
          </div>
        </div>

        {/* Scrollable Cards */}
        <div className="flex lg:items-center lg:justify-center xl:items-start xl:justify-start 2xl:justify-center overflow-hidden xl:overflow-x-auto no-scrollbar mx-0 lg:px-16">
          <div className="flex flex-col lg:flex-row w-[398px] h-[900px] lg:w-[869px] lg:h-[480px] xl:w-[1092px] xl:h-[480px] gap-5">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
