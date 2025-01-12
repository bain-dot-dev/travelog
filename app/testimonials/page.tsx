"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "../../components/ui/button";

interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Mark Smith",
    role: "Travel Enthusiast",
    content:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.",
    avatar: "/image/markSmith.png",
    rating: 5,
  },
  {
    name: "Robin Buckley",
    role: "Business Owner",
    content:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    avatar: "/image/robinBuckley.png",
    rating: 5,
  },
  {
    name: "Lucifer Morningstar",
    role: "Tech Professional",
    content:
      "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
    avatar: "/image/lucifer.png",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="relative h-[810px] lg:h-[750px] xl:h-[950px] py-4">
      <div className="absolute inset-0 -top-55 hidden xl:block">
        <Image src="/image/bgFluid.png" alt="Fluid" width={2506} height={958} />
      </div>
      <div className="absolute inset-0 -top-102 z-0 hidden lg:block xl:hidden">
        <Image
          src="/image/bgFluid2.png"
          alt="Fluid"
          width={1204}
          height={258}
        />
      </div>
      <div className="relative container mx-auto lg:pt-0 xl:pt-32 px-4">
        <div className="text-center space-y-4 mb-16">
          <p className="text-customColors-pink text-[16px] leading-[19px] lg:text-[23px] lg:leading-[27px]  font-medium tracking-wide uppercase">
            TESTIMONIALS
          </p>
          <h2 className="text-[32px] leading-[38px] lg:text-[40px] lg:leading-[48px] xl:text-[44px] xl:leading-[52px] font-bold text-customColors-black">
            Trust our clients
          </h2>
          <Button
            onClick={prevSlide}
            className="px-4 w-16 h-16 lg:w-[100px] lg:h-[100px] absolute left-12 lg:left-40 top-full -translate-x-8 lg:top-80 xl:top-108 lg:-translate-y-1/2 lg:-translate-x-28 xl:-translate-x-32 rounded-full bg-white shadow-lg flex items-center justify-center z-10 hover:bg-gray-50 transition-colors"
            aria-label="Previous testimonial"
          >
            <Image
              src="/icons/arrowLeftIcon.svg"
              alt="Arrow Left"
              width={24}
              height={24}
              className="w-4 h-4 lg:w-6 lg:h-6"
            />
          </Button>
          <Button
            onClick={nextSlide}
            className="px-4 w-16 h-16 lg:w-[100px] lg:h-[100px] absolute right-12 lg:right-40 top-full translate-x-8 lg:top-80 xl:top-108 lg:-translate-y-1/2 lg:translate-x-28 xl:translate-x-32 rounded-full bg-purple-600 flex items-center justify-center z-10 hover:bg-purple-700 transition-colors shadow-gray-200 shadow-xl drop-shadow-lg"
            aria-label="Next testimonial"
          >
            <Image
              src="/icons/arrowRightIcon.svg"
              alt="Arrow Left"
              width={24}
              height={24}
              className="w-4 h-4 lg:w-6 lg:h-6"
            />
          </Button>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="text-center">
            <div className="mb-8">
              <div className="w-32 h-32 rounded-full bg-customColors-orange mx-auto mb-14 overflow-hidden">
                <Image
                  src={testimonials[currentSlide].avatar}
                  alt="Avatar"
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-row items-center justify-center space-y-1">
                <h5 className="text-[28px] leading-[33px] font-circular font-semibold text-customColors-orange mr-2">
                  {testimonials[currentSlide].name}
                </h5>
                <h6 className="text-customColors-black/75 text-[24px] leading-[33px] font-circular font-semibold mr-2 rotate-12">
                  /
                </h6>
                <h5 className="text-customColors-black/75 text-[24px] leading-[27px] font-circular font-semibold">
                  {testimonials[currentSlide].role}
                </h5>
              </div>
            </div>

            <div className="flex justify-center gap-4 mb-8">
              {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>

            <p className="text-gray-600 text-[16px] leading-[25px] lg:text-[18px] lg:leading-[28px] xl:text-[23px] xl:leading-9 lg:max-w-lg xl:max-w-[870px] mx-auto  pt-5">
              {testimonials[currentSlide].content}
            </p>
          </div>

          <div className="flex justify-center gap-6 py-16">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={cn(
                  "w-5 h-5 rounded-full transition-all duration-300",
                  currentSlide === index
                    ? "bg-customColors-pink w-5 h-5"
                    : "bg-gray-300 hover:bg-gray-400"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
