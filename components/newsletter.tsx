import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Newsletter() {
  return (
    <div className="min-h-[600px] w-full py-12 px-4 md:py-16">
      <div className="relative flex items-center justify-center w-full h-[608px] max-w-[1184px] mx-auto bg-[#FDF8F4] rounded-[32px]">
        {/* Content */}
        <div className="relative w-[1056px] py-32 md:py-16 lg:pt-32">
          <div className="max-w-5xl mx-auto text-center space-y-6">
            <p className="text-customColors-pink lg:text-[23px] lg:leading-[27px] font-medium tracking-wide uppercase pb-8">
              Subscribe to our newsletter
            </p>
            <h2 className="text-[32px] leading-[38px] md:text-[40px] md:leading-[48px] lg:text-[55px] lg:leading-[66px] font-circular font-bold text-customColors-black">
              Prepare yourself & let&apos;s explore the beauty of the world
            </h2>
            <div className="flex flex-col sm:flex-row gap-16 py-8">
              <div className="relative flex-1">
                <Image
                  src="/icons/messageIcon.svg"
                  alt="Message Icon"
                  width={32}
                  height={32}
                  className="absolute left-3 top-1/2 -translate-y-1/2"
                />

                <Input
                  type="email"
                  placeholder="Your Email"
                  className="pl-16 h-24 w-[757px] rounded-[32px] font-circular text-[23px] leading-[27px] font-bold"
                />
              </div>
              <Button className="h-24 w-[235px] rounded-[32px] px-16 py-8 bg-[#7C5DFA] hover:bg-[#6C4AE5]">
                <span className="text-customColors-white font-circular text-[23px] leading-[27px]">
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
