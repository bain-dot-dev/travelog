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
      className={`rounded-[32px] hover:shadow-xl transition-shadow w-[350px] h-[443px] ${className}`}
    >
      <CardHeader className="flex items-center justify-center py-16">
        <div className="w-16 h-16 relative">
          <Image src={icon} alt={title} fill className="object-contain" />
        </div>
      </CardHeader>
      <CardContent className="space-y-8 px-16">
        <h3 className="text-[28px] font-circular leading-[33px] font-bold text-customColors-black">
          {title}
        </h3>
        <p className="text-customColors-black/50 font-inter text-center text-[18px] leading-7">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}
