import Image from "next/image";
import { Button } from "./ui/button";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="flex flex-col-reverse xl:flex-col xl:grid xl:grid-cols-2 p-4 pb-16 pt-8 lg:p-6 xl:p-8 max-w-7xl mx-auto relative"
    >
      <div className="absolute inset-0 -top-30 left-0 xl:hidden lg:block hidden">
        <Image
          src="/icons/orangeOrb.svg"
          alt="Orange orb"
          width={500}
          height={500}
          className="text-customColors-orange "
        />
      </div>
      <div className="absolute lg:-bottom-8 xl:-left-14 xl:-bottom-20 hidden lg:flex flex-col  gap-6">
        <Image
          src="/icons/triangleSideIcon.svg"
          alt="Triangle side"
          width={65}
          height={169}
          className="text-customColors-orange"
        />
      </div>

      <div className="space-y-6 lg:space-y-11 lg:max-w-[896px] xl:max-w-[412px] mx-auto xl:mx-0 text-center xl:text-left pt-10 lg:pt-28 xl:pt-16">
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
        <div className="w-full max-w-4xl mx-auto px-4 lg:px-32 xl:px-0">
          <h1 className="text-4xl lg:text-[56px] xl:text-[69px] font-bold font-circular leading-[48px] lg:leading-[67px] xl:leading-[82px]">
            Travel{" "}
            <span className="text-customColors-pink leading-[48px] lg:leading-[67px] xl:leading-[82px]">
              top destination
            </span>{" "}
            of the world
          </h1>
        </div>

        <div className="space-y-1 text-base lg:text-lg font-inter text-customColors-black/50 leading-7">
          <p>We always make our customer happy by providing</p>
          <p>as many choices as possible</p>
        </div>

        <div className="flex flex-col md:flex-row lg:flex-row items-center justify-center xl:justify-start gap-6 lg:gap-4 pt-4">
          <Button className="w-full font-circular lg:w-auto px-8 py-4 h-[65px] lg:h-[49px] bg-customColors-purple text-white rounded-full hover:bg-customColors-purple font-bold shadow-xl shadow-gray-200 drop-shadow-md">
            Get Started
          </Button>
          <Button
            variant="outline"
            className="w-full font-circular lg:w-auto flex items-center justify-center gap-2 px-8 py-4 h-18 lg:h-14 text-gray-900 hover:bg-gray-100 rounded-full font-bold"
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

      <div className="relative mx-auto h-[366px] md:h-[713px] md:max-w-lg lg:max-w-5xl xl:max-w-7xl pt-16 xl:pt-0">
        <div className="absolute inset-0 z-0 w-full">
          <div className="absolute inset-0 z-0 w-[396px] h-[147px] md:w-[762px] md:h-[277px] -left-22 md:-left-32 lg:left-6 lg:top-12 xl:-left-40 xl:top-0">
            <Image
              src="/icons/globeIcon.svg"
              alt="Globe"
              fill
              className="text-customColors-orange absolute object-contain "
            />
          </div>
        </div>

        <div className="relative z-10 top-5 md::top-20 sm:-left-16">
          <div className="grid relative z-30">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="relative">
                <div className="relative w-[139px] h-[154px] md:w-[272px] md:h-[300px] -left-10 md:left-8 lg:left-44 -top-10 md:-top-2 lg:top-10  xl:-left-2 xl:top-0">
                  <Image
                    src="/image/santoriniView.png"
                    alt="Santorini view"
                    fill
                    className="object-cover rounded-2xl lg:rounded-[32px]"
                  />
                </div>
                <div className="absolute transform -translate-x-1/2 -left-10 top-28 md:left-8 lg:left-44 xl:-left-3 md:top-74 lg:top-84 xl:top-74 -translate-y-1/2">
                  <div className="bg-customColors-pink h-8 w-8 md:h-16 md:w-16 rounded-full p-2 md:p-4 shadow-2xl drop-shadow-2xl">
                    <Image
                      src="/icons/paperPlaneIcon.svg"
                      alt="Paper plane"
                      width={28}
                      height={28}
                      className="text-white w-4 h-4 md:h-8 md:w-8"
                    />
                  </div>
                </div>
              </div>

              <div className="relative w-[220px] lg:w-[400px] xl:w-[500px] -mt-41 md:mt-26 lg:mt-38 xl:mt-28 left-18 md:left-16 lg:-left-2 xl:-left-34">
                <div className="relative w-[139px] h-[205px] md:w-[272px] md:h-[400px] mx-auto">
                  <Image
                    src="/image/cityView.png"
                    alt="City view"
                    fill
                    className="object-cover rounded-[32px]"
                  />
                </div>
                <div className="absolute -right-2 md:-right-36 lg:-right-7 xl:right-5 top-38 md:top-72 lg:top-74 xl:top-74 bg-white rounded-full py-4 px-4 md:px-8 h-7 md:h-14 backdrop-blur-2xl backdrop-filter shadow-sm drop-shadow-2xl flex items-center gap-2">
                  <div className="flex items-center space-x-2">
                    <Image
                      src="/icons/mapPinIcon.svg"
                      alt="City view"
                      width={24}
                      height={24}
                      className="text-customColors-dandelion w-3 h-3 md:w-6 md:h-6"
                    />
                    <span className="text-[7px] leading-[8px] md:text-sm md:leading-4h  font-medium font-circular">
                      Top Places
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative -mt-24 md:-mt-45 lg:-mt-45 -left-21 md:-left-22 lg:-left-24 xl:-left-44">
              <div className="relative w-[139px] h-[154px] md:w-[272px] md:h-[300px] mx-auto">
                <Image
                  src="/image/mountainView.png"
                  alt="Mountain view"
                  fill
                  className="object-cover rounded-[32px]"
                />
              </div>
            </div>

            <div className="absolute -bottom-1 right-30 md:right-10  lg:right-48 xl:left-94">
              <div className="bg-customColors-orange h-8 w-8 md:h-16 md:w-16 rounded-full p-2 md:p-4 backdrop-blur-3xl backdrop-filter shadow-xl drop-shadow-2xl">
                <Image
                  src="/icons/userIcon.svg"
                  alt="User icon"
                  width={32}
                  height={32}
                  className="text-customColors-white w-4 h-4 md:h-8 md:w-8"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
