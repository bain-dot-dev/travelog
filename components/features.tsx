import Image from "next/image";
import { FeatureItem } from "./feature-item";

export function Features() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-12">
            <div className="space-y-6">
              <span className="flex justify-center lg:justify-start text-customColors-pink text-[16px] leading-[19px] md:text-[23px] md:leading-[27px] font-circular font-bold uppercase tracking-wider">
                Key Features
              </span>
              <h2 className="text-[32px] leading-[38px] md:text-[40px] md:leading-[48px] lg:text-[44px] lg:leading-[52px] text-center lg:text-start font-bold font-circular text-customColors-black">
                We offer best services
              </h2>
              <p className="text-customColors-black/50 text-[16px] leading-[25px] md:text-[18px] md:leading-7 text-center lg:text-start font-inter w-[px]">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC.
              </p>
            </div>

            <div className="space-y-8">
              <FeatureItem
                icon="/icons/mapPin.svg"
                title="We offer best services"
                description="Lorem Ipsum is not simply random text"
              />
              <FeatureItem
                icon="/icons/calendarIcon.svg"
                title="Schedule your trip"
                description="It has roots in a piece of classical"
              />
              <FeatureItem
                icon="/icons/couponIcon.svg"
                title="Get discounted coupons"
                description="Lorem Ipsum is not simply random text"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="relative mx-auto">
            <div className="relative lg:mt-20 lg:px-0 md:px-24 px-0">
              <div className="relative rounded-t-full overflow-hidden">
                <Image
                  src="/image/paradiseOnEarth.png"
                  alt="Black church in field"
                  width={600}
                  height={800}
                  className="w-[350px] h-[439px] md:w-[693px] md:h-[869px] lg:w-[693px] lg:h-[869px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
