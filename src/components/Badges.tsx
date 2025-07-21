"use client";

import { EvervaultCard, Icon } from "@/components/ui/evervault-card";
import badge1 from "@/assets/badge1.webp";
import badge2 from "@/assets/badge2.webp";
import badge3 from "@/assets/badge3.webp";
import badge4 from "@/assets/badge4.webp";

export default function BadgeGrid() {
  const badges = [badge1, badge2, badge3, badge4];

  return (
    <div className="w-full flex justify-center px-4 lg:px-10 mt-10 mb-10">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-20 lg:gap-10 mt-10">
        {badges.map((badge, index) => (
          <div
            key={index}
            className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start p-4 relative w-[280px] h-[300px]"
          >
            <Icon className="absolute h-5 w-5 -top-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-5 w-5 -bottom-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-5 w-5 -top-3 -right-3 dark:text-white text-black" />
            <Icon className="absolute h-5 w-5 -bottom-3 -right-3 dark:text-white text-black" />
            <EvervaultCard image={badge} />
          </div>
        ))}
      </div>
    </div>
  );
}
