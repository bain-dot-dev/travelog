"use client";
import { useState } from "react";
import { DestinationCard } from "../../components/destination-card";
import { Button } from "../../components/ui/button";
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
  {
    image: "/image/alpineLake.png",
    title: "Alpine Lake Serenity",
    location: "Switzerland",
    price: 300.5,
    rating: 4.9,
  },
  {
    image: "/image/savannaWildlife.png",
    title: "Savanna Wildlife Safari",
    location: "Kenya",
    price: 450.75,
    rating: 4.7,
  },
  {
    image: "/image/northernLights.png",
    title: "Northern Lights Adventure",
    location: "Iceland",
    price: 600.25,
    rating: 4.8,
  },
  {
    image: "/image/hiddenWaterfall.png",
    title: "Hidden Waterfall Haven",
    location: "Bali, Indonesia",
    price: 75.99,
    rating: 4.6,
  },
  {
    image: "/image/tropicalLagoon.png",
    title: "Tropical Lagoon Escape",
    location: "Phuket, Thailand",
    price: 95.25,
    rating: 4.4,
  },
  {
    image: "/image/sunsetDunes.png",
    title: "Sunset Over Golden Dunes",
    location: "Sahara Desert, Morocco",
    price: 250.5,
    rating: 4.7,
  },
  {
    image: "/image/fjordCruise.png",
    title: "Fjord Cruise Adventure",
    location: "Norway",
    price: 350.99,
    rating: 4.9,
  },
  {
    image: "/image/coralReefDiving.png",
    title: "Coral Reef Diving Experience",
    location: "Great Barrier Reef, Australia",
    price: 500.0,
    rating: 4.8,
  },
  {
    image: "/image/arcticExpedition.png",
    title: "Arctic Expedition Journey",
    location: "Greenland",
    price: 700.75,
    rating: 5.0,
  },
];

export default function Destinations() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 3 >= destinations.length ? 0 : prevIndex + 3
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 3 < 0 ? Math.max(destinations.length - 3, 0) : prevIndex - 3
    );
  };
  return (
    <section className="max-w-7xl mx-auto px-4 xl:px-10">
      <div className="flex flex-col xl:flex-row justify-between items-center py-4 lg:py-0">
        <div className="space-y-4  font-circular">
          <span className="flex justify-center xl:justify-start text-customColors-pink text-[16px] leading-[19px] xl:text-[23px] xl:leading-[27px] font-bold uppercase tracking-wider">
            Top Destination
          </span>
          <h2 className="text-[32px] leading-[38px] lg:text-[44px] lg:leading-[52px] font-bold text-customColors-black ">
            Explore top destination
          </h2>
        </div>

        <div className="flex items-center pb-4 pt-6 lg:py-16 gap-65  lg:gap-8">
          <Button
            variant="outline"
            className="px-4 w-16 h-16 lg:w-[100px] lg:h-[100px] rounded-full hover:bg-white transition-colors shadow-lg border shadow-gray-200/50 hover:drop-shadow-2xl backdrop-blur-2xl backdrop-filter"
            onClick={prevSlide}
          >
            <Image
              src="/icons/arrowLeftIcon.svg"
              alt="Arrow Left"
              width={24}
              height={24}
              className="w-4 h-4 lg:w-6 lg:h-6"
            />
          </Button>
          <Button
            className="px-4 w-16 h-16 lg:w-[100px] lg:h-[100px] rounded-full bg-customColors-purple text-white hover:bg-customColors-purple transition-colors shadow-lg border shadow-gray-200/50 hover:drop-shadow-2xl backdrop-blur-2xl backdrop-filter"
            onClick={nextSlide}
          >
            <Image
              src="/icons/arrowRightIcon.svg"
              alt="Arrow Left"
              width={24}
              height={24}
              className="w-4 h-4 lg:w-6 lg:h-6"
            />
          </Button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-4">
        {destinations
          .slice(currentIndex, currentIndex + 3)
          .map((destination, index) => (
            <DestinationCard key={currentIndex + index} {...destination} />
          ))}
      </div>
    </section>
  );
}
