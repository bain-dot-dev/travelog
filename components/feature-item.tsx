import Image from "next/image";
import { Card, CardContent } from "./ui/card";

interface FeatureItemProps {
  icon: string;
  title: string;
  description: string;
}

export function FeatureItem({ icon, title, description }: FeatureItemProps) {
  return (
    <Card className="flex items-start border-transparent hover:border-customColors-black/10 shadow-none gap-6 rounded-3xl p-8  transition-all">
      <CardContent className="flex flex-col lg:flex-row items-start lg:items-center gap-8 p-0">
        <Image
          src={icon}
          alt={title}
          width={32}
          height={32}
          className="w-24 h-24"
        />

        <div className="space-y-2">
          <h3 className="text-[23px] leading-[27px] font-bold text-[#1E1E1E]">
            {title}
          </h3>
          <p className="text-customColors-black/50 text-[18px] leading-7">
            {description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
