import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  className?: string;
}

export function ServiceCard({
  icon,
  title,
  description,
  className = "",
}: ServiceCardProps) {
  return (
    <Card
      className={`rounded-[32px] hover:shadow-xl border hover:border-none hover:drop-shadow-xl backdrop-blur-2xl backdrop-filter transition-shadow h-[279px] lg:w-[288px] lg:h-[443px] xl:w-[350px] xl:h-[443px] ${className}`}
    >
      <CardHeader className="flex items-center justify-center py-8 lg:py-16">
        <div className="w-16 h-16 relative">
          <Image src={icon} alt={title} fill className="object-contain" />
        </div>
      </CardHeader>
      <CardContent className="space-y-8 text-center px-8 xl:px-16">
        <h3 className="text-[24px] lg:text-[28px] leading-[28px] lg:leading-[33px]  font-circular font-bold text-customColors-black">
          {title}
        </h3>
        <p className="text-customColors-black/50 font-inter text-center text-[18px] leading-7">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}
