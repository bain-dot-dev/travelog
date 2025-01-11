import Image from "next/image";

const partners = [
  {
    name: "TripAdvisor",
    source: "/icons/tripadvisorIcon.svg",
    width: 140,
  },
  { name: "Expedia", source: "/icons/expediaIcon.svg", width: 120 },
  {
    name: "Booking.com",
    source: "/icons/bookingIcon.svg",
    width: 160,
  },
  { name: "Airbnb", source: "/icons/airbnbIcon.svg", width: 100 },
  { name: "ORBITZ", source: "/icons/orbitzIcon.svg", width: 120 },
];

export default function PartnerLogos() {
  return (
    <div className="pb-4 lg:pb-16 lg:pt-20">
      <div className="absolute top-96  right-0 xl:block hidden gap-6">
        <Image
          src="/icons/yellowOrb.svg"
          alt="Yellow orb"
          width={500}
          height={500}
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 lg:px-32 xl:px-10">
        <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-[102px]">
          {partners.map((partner, index) => (
            <Image
              key={index}
              src={partner.source}
              alt={partner.name}
              width={partner.width}
              height={40}
              className="h-5 lg:h-8 w-auto text-customColors-black/50 hover:opacity-70 transition-opacity z-50"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
