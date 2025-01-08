import Image from "next/image";
import { Button } from "./ui/button";

export function HeroSection() {
  return (
    <div className="flex flex-col-reverse lg:flex-col lg:grid lg:grid-cols-2 p-4 md:p-6 lg:p-8 max-w-7xl mx-auto relative">
      <div className="absolute -left-14 -bottom-36 hidden lg:flex flex-col  gap-6">
        <Image
          src="/icons/triangleSideIcon.svg"
          alt="Triangle side"
          width={65}
          height={169}
          className="text-customColors-orange"
        />
      </div>

      <div className="space-y-11 md:max-w-[896px] lg:max-w-[412px] px-auto lg:mx-0 text-center lg:text-left ">
        <Button className="text-sm font-bold bg-white outline-customColors-white hover:bg-gray-100 rounded-full shadow-lg shadow-gray-200/50 drop-shadow-sm">
          <span className="text-customColors-pink text-md font-bold font-circular">
            Explore the world!
          </span>
          <Image
            src="/icons/workIcon.svg"
            alt="Work icon"
            width={16}
            height={16}
            className="ml-2"
          />
        </Button>

        <h1 className="text-4xl md:text-5xl lg:text-[69px] font-bold font-circular leading-[82px]">
          Travel{" "}
          <span className="text-customColors-pink leading-[82px]">
            top destination
          </span>{" "}
          of the world
        </h1>

        <div className="space-y-1 text-base md:text-lg font-inter text-customColors-black/50 leading-7">
          <p>We always make our customer happy by providing</p>
          <p>as many choices as possible</p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
          <Button className="w-full font-circular md:w-auto px-8 py-4 h-14 bg-customColors-purple text-white rounded-full hover:bg-customColors-purple font-bold shadow-xl shadow-gray-200 drop-shadow-md">
            Get Started
          </Button>
          <Button
            variant="outline"
            className="w-full font-circular md:w-auto flex items-center justify-center gap-2 px-8 py-4 h-14 text-gray-900 hover:bg-gray-100 rounded-full font-bold"
          >
            <Image
              src="/icons/playButtonIcon.svg"
              alt="Play Button icon"
              width={24}
              height={24}
            />
            Watch Demo
          </Button>
        </div>
      </div>

      <div className="relative -mt-56 md:-mt-40 lg:-mt-12 w-full">
        {/* Flight path and icons */}
        <div className="absolute inset-0 z-0 w-full">
          <div className="absolute inset-0 z-0 lg:w-[772px] lg:h-[287px] h-full lg:-left-40">
            <Image
              src="/icons/globeIcon.svg"
              alt="Globe"
              fill
              className="text-customColors-orange absolute object-contain "
            />
          </div>
        </div>

        <div className="relative z-10 top-5 sm:top-20 sm:-left-16">
          <div className="grid relative z-30">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="relative">
                <div className="relative w-[139px] h-[154px] md:w-[272px] md:h-[300px] -left-2">
                  <Image
                    src="/image/santoriniView.png"
                    alt="Santorini view"
                    width={272}
                    height={300}
                    className="object-cover rounded-[32px]"
                  />
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 lg:-left-3 top-[300px] lg:top-68 -translate-y-1/2">
                  <div className="bg-customColors-pink rounded-full p-4 shadow-2xl drop-shadow-2xl">
                    <Image
                      src="/icons/paperPlaneIcon.svg"
                      alt="Paper plane"
                      width={28}
                      height={28}
                      className="text-white"
                    />
                  </div>
                </div>
              </div>

              <div className="relative mt-16 lg:mt-28 lg:-left-9">
                <div className="relative w-[139px] h-[154px] md:w-[272px] md:h-[300px] mx-auto">
                  <Image
                    src="/image/cityView.png"
                    alt="City view"
                    width={272}
                    height={300}
                    className="object-cover rounded-[32px]"
                  />
                </div>
                <div className="absolute lg:-right-20 top-[320px] lg:top-74 bg-white rounded-full py-4 px-8 h-14 shadow-lg flex items-center gap-2">
                  <div className="flex items-center space-x-2">
                    <Image
                      src="/icons/mapPinIcon.svg"
                      alt="City view"
                      width={24}
                      height={24}
                      className="text-customColors-dandelion"
                    />
                    <span className="text-sm font-medium font-circular">
                      Top Places
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative -mt-32 lg:-mt-20 lg:-left-44">
              <div className="relative w-[139px] h-[154px] md:w-[272px] md:h-[300px] mx-auto">
                <Image
                  src="/image/mountainView.png"
                  alt="Mountain view"
                  width={272}
                  height={300}
                  className="object-cover rounded-[32px]"
                />
              </div>
            </div>

            <div className="absolute bottom-4 lg:bottom-0 right-1/4 lg:right-44">
              <div className="bg-customColors-orange rounded-full p-4 shadow-2xl drop-shadow-2x">
                <Image
                  src="/icons/userIcon.svg"
                  alt="User icon"
                  width={28}
                  height={28}
                  className="text-customColors-white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
