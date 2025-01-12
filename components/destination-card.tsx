import Image from "next/image";
import { Star } from "lucide-react";
import { Card, CardContent, CardHeader } from "./ui/card";

interface DestinationCardProps {
  image: string;
  title: string;
  location: string;
  price: number;
  rating: number;
}

export function DestinationCard({
  image,
  title,
  location,
  price,
  rating,
}: DestinationCardProps) {
  return (
    <Card className="w-[398px] lg:w-[278px] xl:w-[373px] bg-white border-none rounded-3xl shadow-sm drop-shadow-2xl backdrop-blur-3xl backdrop-filter transition-shadow">
      <CardHeader className="relative w-[398px] h-[314px] lg:w-[278px] lg:h-[314px] xl:w-[373px] xl:h-[350px] rounded-t-3xl">
        <Image src={image} alt={title} fill className="object-cover rounded-t-3xl" />
      </CardHeader>

      <CardContent className="space-y-2 p-8">
        <div className="flex flex-col-reverse xl:flex-row justify-between items-start">
          <div>
            <h3 className="font-bold text-[23px] font-circular leading-[27px] text-customColors-black">
              {title}
            </h3>
            <p className="text-customColors-black/75 font-medium text-[18px] leading-7 py-4">
              {location}
            </p>
          </div>
          <span className="text-customColors-pink font-bold text-[23px] font-circular leading-[27px] pb-4">
            ${price.toFixed(2)}
          </span>
        </div>

        <div className="flex items-center gap-1">
          <span className="text-customColors-orange font-bold text-[23px] font-circular leading-[27px]">
            {rating.toFixed(1)}
          </span>
          <Star className="w-5 h-5 fill-customColors-orange text-customColors-orange" />
        </div>
      </CardContent>
    </Card>
  );
}
