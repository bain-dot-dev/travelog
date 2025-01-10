import Image from "next/image";
import { Card, CardContent } from "../../components/ui/card";

const stats = [
  { value: "500+", label: "Holiday Package" },
  { value: "100", label: "Luxury Hotel" },
  { value: "7", label: "Premium Airlines" },
  { value: "2k+", label: "Happy Customer" },
];

export default function TravelPoint() {
  return (
    <section id="travelpoint" className="pt-32 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 lg:px-20 xl:px-4">
        <div className="grid xl:grid-cols-2 lg:gap-20 xl:gap-80 items-center">
          {/* Left side with image and decorative elements */}
          <div className="relative w-[398px] h-[318px] lg:w-[871px] lg:h-[697px]">
            {/* Yellow background circle */}
            <div className="absolute w-[398px] h-[318px] lg:w-[871px] lg:h-[697px] top-1/2 -left-0 lg:left-0 xl:-left-24 -translate-y-1/2 rounded-full">
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
            <div className="space-y-6 w-full">
              <span className="flex justify-center xl:justify-start text-customColors-pink text-[16px] lg:text-[23px] xl:text-start font-circular leading-[19px] lg:leading-[27px] font-bold uppercase tracking-[4.6px]">
                Travel Point
              </span>

              <h2 className="text-[32px] text-center xl:text-start lg:text-[40px] xl:text-[44px] font-bold font-circular text-customColors-black leading-[38px] lg:leading-[48px] xl:leading-[53px]">
                We helping you find your dream location
              </h2>

              <p className="text-customColors-black/50 text-[18px] text-center xl:text-start font-inter font-medium leading-[29px] lg:pl-8 xl:pl-0 lg:pr-8 xl:pt-4">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC.
              </p>

              {/* Stats grid */}
              <div className="grid grid-rows-2 lg:grid-cols-2 gap-8 xl:pt-12">
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
            <div className="absolute top-60 -right-11 w-28 rounded-full hidden xl:block">
              <Image
                src="/image/starCoupon.png"
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
