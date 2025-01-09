import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Newsletter() {
  return (
    <div className="min-h-[600px] w-full py-12 lg:px-16 xl:px-0 lg:py-16">
      <div className="relative flex items-center justify-center w-full lg:h-[572px] xl:h-[608px] lg:w-[897px] xl:w-[1184px] mx-auto bg-[#FDF8F4] rounded-[32px]">
        <div className="absolute -top-17 -left-8 w-46 h-44 hidden lg:block">
          <Image
            src="/icons/trianglePolkadots.svg"
            alt="Leaf Icon"
            width={183}
            height={176}
          />
        </div>
        <div className="relative w-[398px] h-[547px] lg:h-[572px] lg:w-[897px] xl:w-[1056px] py-8 px-8 lg:px-16 lg:py-16 xl:pt-32">
          <div className="max-w-5xl text-center space-y-8 pt-8">
            <p className="text-customColors-pink text-[16px] leading-[19px] lg:text-[23px] lg:leading-[27px] font-medium tracking-wide uppercase px-8">
              Subscribe to our newsletter
            </p>
            <h2 className="text-[32px] leading-[38px] lg:text-[40px] lg:leading-[48px] xl:text-[55px] xl:leading-[66px] font-circular font-bold text-customColors-black">
              Prepare yourself & let&apos;s explore the beauty of the world
            </h2>
            <div className="flex flex-col items-center sm:flex-row gap-8 xl:gap-16 py-8">
              <div className="relative flex-1">
                <Image
                  src="/icons/messageIcon.svg"
                  alt="Message Icon"
                  width={32}
                  height={32}
                  className="absolute left-6 top-1/2 -translate-y-1/2"
                />

                <Input
                  type="email"
                  placeholder="Your Email"
                  className="pl-16 h-18 lg:h-24 w-[334px] lg:w-[502px] xl:w-[757px] rounded-[32px] font-circular !text-[14px] !leading-[16px] lg:!text-[23px] lg:!leading-[27px] font-bold placeholder:text-customColors-black/75 placeholder:text-[16px] lg:placeholder:text-[23px] placeholder:leading-[16px] lg:placeholder:leading-[27px] placeholder:font-bold placeholder:pl-2"
                />
              </div>
              <Button className="h-18 lg:h-24 w-[334px] xl:w-[235px] rounded-[32px] px-16 py-8 bg-[#7C5DFA] hover:bg-[#6C4AE5]">
                <span className="text-customColors-white font-circular text-[16px] leading-[19px] lg:text-[23px] lg:leading-[27px]">
                  Subscribe
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
