import Image from "next/image";
import { Card, CardContent } from "./ui/card";

const stats = [
  { value: "500+", label: "Holiday Package" },
  { value: "100", label: "Luxury Hotel" },
  { value: "7", label: "Premium Airlines" },
  { value: "2k+", label: "Happy Customer" },
];

export function TravelPoint() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-80 items-center">
          {/* Left side with image and decorative elements */}
          <div className="relative">
            {/* Yellow background circle */}
            <div className="absolute -left-24 -translate-y-1/2 w-[871px] h-[697px]  rounded-full">
              <Image
                src="/image/happyWoman.png"
                alt="Traveler with luggage"
                width={871}
                height={697}
                className="relative z-10"
              />
            </div>
          </div>

          {/* Right side content */}
          <div className="relative">
            <div className="space-y-6 max-w-[441px]">
              <span className="text-customColors-pink text-[23px] font-circular leading-[27px] font-bold uppercase tracking-[4.6px]">
                Travel Point
              </span>

              <h2 className="text-4xl md:text-[44px] font-bold font-circular text-customColors-black leading-[53px]">
                We helping you find your dream location
              </h2>

              <p className="text-customColors-black/50 text-[18px] font-inter font-medium leading-[29px] pr-8 pt-4">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC.
              </p>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-8 pt-8">
                {stats.map((stat, index) => (
                  <Card key={index} className="space-y-2 rounded-[32px]">
                    <CardContent className="flex flex-col items-center justify-center py-8 mx-auto">
                      <h3 className="text-[35px] leading-[42px] font-circular font-bold text-customColors-orange pb-4">
                        {stat.value}
                      </h3>
                      <p className="text-customColors-black font-inter text-[18px] leading-7">
                        {stat.label}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute top-54 -right-24 w-64 rounded-full">
              <Image
                src="/icons/starTagIcon.svg"
                alt="Star Tag"
                width={277}
                height={353}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
