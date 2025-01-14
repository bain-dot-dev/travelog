import Image from "next/image";
import { FeatureItem } from "./feature-item";

const features = [
  {
    icon: "/icons/mapPin.svg",
    title: "We offer best services",
    description: "Lorem Ipsum is not simply random text",
  },
  {
    icon: "/icons/calendarIcon.svg",
    title: "Schedule your trip",
    description: "It has roots in a piece of classical",
  },
  {
    icon: "/icons/couponIcon.svg",
    title: "Get discounted coupons",
    description: "Lorem Ipsum is not simply random text",
  },
];

export default function Features() {
  return (
    <section className="pt-16 pb-10 lg:pt-0 lg:pb-20">
      <div className="max-w-7xl  lg:h-[1800px] xl:h-[800px] mx-auto px-4">
        <div className="flex flex-col-reverse xl:grid xl:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            <div className="space-y-6">
              <span className="flex justify-center xl:justify-start text-customColors-pink text-[16px] leading-[19px] lg:text-[23px] lg:leading-[27px] font-circular font-bold uppercase tracking-wider">
                Key Features
              </span>
              <h2 className="text-[32px] leading-[38px] lg:text-[40px] lg:leading-[48px] xl:text-[44px] xl:leading-[52px] text-center xl:text-start font-bold font-circular text-customColors-black">
                We offer best services
              </h2>
              <div className="px-8 lg:px-20 lg:pt-8 xl:px-0">
                <p className="text-customColors-black/50 text-[16px] leading-[25px] lg:text-[18px] lg:leading-7 text-center xl:text-start font-inter w-[px]">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC.
                </p>

                <div className="space-y-8 pt-8 lg:pt-16">
                  {features.map((feature, index) => (
                    <FeatureItem
                      key={index}
                      icon={feature.icon}
                      title={feature.title}
                      description={feature.description}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="relative mx-auto ">
            <div className="relative xl:w-[670px] xl:mt-20 xl:px-0 lg:px-24 px-0">
              <div className="relative w-[350px] h-[439px] md:w-[493px] md:h-[696px] lg:w-[693px] lg:h-[869px] xl:w-[688px] ">
                <Image
                  src="/image/paradiseOnEarth.png"
                  alt="Black church in field"
                  width={700}
                  height={870}
                  className="w-[350px] h-[439px] md:w-[493px] lg:w-[693px] md:h-[696px] lg:h-[869px] xl:w-[693px] xl:h-[869px] "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
