"use client";
import { DestinationCard } from "./destination-card";
import { Button } from "./ui/button";
import Image from "next/image";

const destinations = [
  {
    image: "/image/paradiseBeach.png",
    title: "Paradise Beach, Bantayan Island",
    location: "Rome, Italy",
    price: 550.16,
    rating: 4.8,
  },
  {
    image: "/image/oceanColors.png",
    title: "Ocean with full of Colors",
    location: "Maldives",
    price: 20.99,
    rating: 4.5,
  },
  {
    image: "/image/mountainViewCloud.png",
    title: "Mountain View, Above the cloud",
    location: "United Arab Emirates",
    price: 150.99,
    rating: 5.0,
  },
];

export function Destinations() {
  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-10">
      <div className="flex flex-col lg:flex-row justify-between items-center py-4 md:py-16">
        <div className="space-y-4 font-circular">
          <span className="flex justify-center lg:justify-start text-customColors-pink text-[16px] leading-[19px] lg:text-[23px] lg:leading-[27px] font-bold uppercase tracking-wider">
            Top Destination
          </span>
          <h2 className="text-[32px] leading-[38px] md:text-[44px] md:leading-[52px] font-bold text-customColors-black-">
            Explore top destination
          </h2>
        </div>

        <div className="flex items-center py-4 md:py-0 gap-60  md:gap-8">
          <Button
            variant="outline"
            className="w-20 h-20 rounded-full hover:bg-gray-100 transition-colors"
          >
            <Image
              src="/icons/arrowLeftIcon.svg"
              alt="Arrow Left"
              width={24}
              height={24}
              className="w-6 h-6"
            />
          </Button>
          <Button className="w-20 h-20 rounded-full bg-customColors-purple text-white hover:bg-customColors-purple transition-colors shadow-gray-200 shadow-xl drop-shadow-lg">
            <Image
              src="/icons/arrowRightIcon.svg"
              alt="Arrow Left"
              width={24}
              height={24}
              className="w-6 h-6"
            />
          </Button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {destinations.map((destination, index) => (
          <DestinationCard key={index} {...destination} />
        ))}
      </div>
    </section>
  );
}
