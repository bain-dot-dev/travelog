"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { DestinationCard } from "./destination-card";
import { Button } from "./ui/button";

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
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-10">
        <div className="flex justify-between items-center py-16">
          <div className="space-y-4 font-circular">
            <span className="text-customColors-pink text-[23px] leading-[27px] font-bold uppercase tracking-wider">
              Top Destination
            </span>
            <h2 className="text-3xl md:text-[44px] leading-[52px] font-bold text-customColors-black-">
              Explore top destination
            </h2>
          </div>

          <div className="flex items-center gap-8">
            <Button
              variant="outline"
              className="w-20 h-20 rounded-full hover:bg-gray-100 transition-colors"
            >
              <ArrowLeft className="w-6 h-6" />
            </Button>
            <Button className="w-20 h-20 rounded-full bg-customColors-purple text-white hover:bg-customColors-purple transition-colors">
              <ArrowRight className="w-6 h-6" />
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <DestinationCard key={index} {...destination} />
          ))}
        </div>
      </div>
    </section>
  );
}
