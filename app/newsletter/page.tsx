"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { addDoc } from "firebase/firestore";
import { newsletterCollection } from "@/lib/collection";
import { toast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic email validation
    if (!email.trim() || !email.includes("@")) {
      toast({
        variant: "destructive",
        title: "Invalid Email",
        description: "Please enter a valid email address.",
      });
      return;
    }

    setIsLoading(true);
    try {
      await addDoc(newsletterCollection, {
        email,
        subscribedAt: new Date().toISOString(),
      });

      toast({
        title: "Successfully subscribed!",
        description: "Thank you for subscribing to our newsletter.",
        className: "bg-[#8D7FFF] text-white",
      });
      setEmail("");
    } catch (error) {
      console.error("Error subscribing to newsletter:", error); // Debugging info
      toast({
        variant: "destructive",
        title: "Subscription failed",
        description: "Please try again later.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-[580px] md:min-h-[440px] lg:min-h-[580px] w-full  xl:pt-0 lg:px-16 xl:px-0 lg:py-16">
      <div className="relative flex items-center justify-center w-[396px] h-[547px] md:h-[400px] lg:h-[572px] xl:h-[608px] md:w-[700px] lg:w-[897px] xl:w-[1184px] mx-auto bg-[#FFFBF1] rounded-[32px]">
        <div className="absolute -top-17 -left-8 w-46 h-44 hidden lg:block">
          <Image
            src="/icons/trianglePolkadots.svg"
            alt="Leaf Icon"
            width={183}
            height={176}
          />
        </div>
        <div className="relative w-[396px] h-[547px] md:h-[400px] lg:h-[572px] md:w-[700px] lg:w-[897px] xl:w-[1184px] py-8 px-8 lg:px-16 lg:py-16 xl:pt-32">
          <form
            onSubmit={handleSubscribe}
            className="max-w-5xl text-center space-y-8 pt-8"
          >
            <p className="text-customColors-pink text-[16px] leading-[19px] font-circular lg:text-[23px] lg:leading-[27px] font-bold tracking-widest uppercase px-8">
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="pl-16 h-18 lg:h-24 w-[334px] md:w-[400px] lg:w-[502px] xl:w-[757px] rounded-[32px] font-circular !text-[16px] !leading-[23px] lg:!text-[23px] lg:!leading-[27px] font-bold placeholder:text-customColors-black/75 placeholder:text-[16px] lg:placeholder:text-[23px] placeholder:leading-[16px] lg:placeholder:leading-[27px] placeholder:font-bold placeholder:pl-2"
                />
              </div>
              <Button
                type="submit"
                disabled={isLoading}
                className="h-18 lg:h-24 w-[334px] xl:w-[235px] rounded-[32px] px-16 py-8 bg-[#7C5DFA] hover:bg-[#6C4AE5] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="text-customColors-white font-circular font-bold text-[16px] leading-[19px] lg:text-[23px] lg:leading-[27px]">
                  {isLoading ? "Subscribing..." : "Subscribe"}
                </span>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
