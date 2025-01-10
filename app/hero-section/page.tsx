import Image from "next/image";
import { Button } from "../../components/ui/button";

export default function HeroSection() {
  return (
    <section id="home" className="flex flex-col-reverse xl:flex-col xl:grid xl:grid-cols-2 p-4 lg:p-6 xl:p-8 max-w-7xl mx-auto relative">
      <div className="absolute -left-14 -bottom-36 hidden xl:flex flex-col  gap-6">
        <Image
          src="/icons/triangleSideIcon.svg"
          alt="Triangle side"
          width={65}
          height={169}
          className="text-customColors-orange"
        />
      </div>

      <div className="space-y-11 lg:max-w-[896px] xl:max-w-[412px] mx-auto xl:mx-0 text-center xl:text-left ">
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

        <h1 className="text-4xl lg:text-5xl xl:text-[69px] font-bold font-circular leading-[82px]">
          Travel{" "}
          <span className="text-customColors-pink leading-[82px]">
            top destination
          </span>{" "}
          of the world
        </h1>

        <div className="space-y-1 text-base lg:text-lg font-inter text-customColors-black/50 leading-7">
          <p>We always make our customer happy by providing</p>
          <p>as many choices as possible</p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center xl:justify-start gap-4 pt-4">
          <Button className="w-full font-circular lg:w-auto px-8 py-4 h-14 bg-customColors-purple text-white rounded-full hover:bg-customColors-purple font-bold shadow-xl shadow-gray-200 drop-shadow-md">
            Get Started
          </Button>
          <Button
            variant="outline"
            className="w-full font-circular lg:w-auto flex items-center justify-center gap-2 px-8 py-4 h-14 text-gray-900 hover:bg-gray-100 rounded-full font-bold"
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

      <div className="relative lg:h-[713px] -mt-56 lg:-mt-40 xl:-mt-12 w-full pt-16 lg:pt-16 xl:pt-0">
        <div className="absolute inset-0 z-0 w-full">
          <div className="absolute inset-0 z-0 xl:w-[772px] xl:h-[287px] h-full xl:-left-40">
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
                <div className="relative w-[139px] h-[154px] lg:w-[272px] lg:h-[300px] -left-2">
                  <Image
                    src="/image/santoriniView.png"
                    alt="Santorini view"
                    width={272}
                    height={300}
                    className="object-cover rounded-[32px]"
                  />
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 xl:-left-3 top-[300px] xl:top-68 -translate-y-1/2">
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

              <div className="relative mt-16 xl:mt-28 xl:-left-9">
                <div className="relative w-[139px] h-[154px] lg:w-[272px] lg:h-[300px] mx-auto">
                  <Image
                    src="/image/cityView.png"
                    alt="City view"
                    width={272}
                    height={300}
                    className="object-cover rounded-[32px]"
                  />
                </div>
                <div className="absolute xl:-right-20 top-[320px] xl:top-74 bg-white rounded-full py-4 px-8 h-14 shadow-lg flex items-center gap-2">
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

            <div className="relative -mt-32 xl:-mt-20 xl:-left-44">
              <div className="relative w-[139px] h-[154px] lg:w-[272px] lg:h-[300px] mx-auto">
                <Image
                  src="/image/mountainView.png"
                  alt="Mountain view"
                  width={272}
                  height={300}
                  className="object-cover rounded-[32px]"
                />
              </div>
            </div>

            <div className="absolute bottom-4 xl:bottom-0 right-1/4 xl:right-44">
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
    </section>
  );
}
