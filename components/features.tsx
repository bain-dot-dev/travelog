import Image from "next/image";

interface FeatureItemProps {
  icon: string;
  title: string;
  description: string;
}

function FeatureItem({ icon, title, description }: FeatureItemProps) {
  return (
    <div className="flex items-start gap-6">
      <div className=" rounded-2xl p-4 shrink-0">
        <Image
          src={icon}
          alt={title}
          width={32}
          height={32}
          className="w-20 h-20"
        />
      </div>
      <div className="space-y-2">
        <h3 className="text-xl font-bold text-[#1E1E1E]">{title}</h3>
        <p className="text-gray-500 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export function Features() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-12">
            <div className="space-y-6">
              <span className="text-customColors-pink text-[23px] leading-[27px] font-circular font-bold uppercase tracking-wider">
                Key Features
              </span>
              <h2 className="text-4xl md:text-[44px] font-bold font-circular text-customColors-black">
                We offer best services
              </h2>
              <p className="text-gray-500 text-[18px] font-inter leading-relaxed w-[px]">
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
          <div className="relative">
            <div className="relative">
              <div className="relative rounded-t-full overflow-hidden">
                <Image
                  src="/image/paradiseOnEarth.png"
                  alt="Black church in field"
                  width={600}
                  height={800}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
