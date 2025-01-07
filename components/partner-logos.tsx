import Image from "next/image";

export function PartnerLogos() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-[102px]">
          {[
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
          ].map((partner) => (
            <Image
              key={partner.name}
              src={partner.source}
              alt={partner.name}
              width={partner.width}
              height={40}
              className="h-8 w-auto grayscale opacity-50 hover:opacity-70 transition-opacity"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
