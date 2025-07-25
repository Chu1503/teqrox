import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const CustomButton = ({
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...props}
      className={cn(
        "group flex items-center gap-2 rounded-full border border-transparent cursor-pointer " +
          "hover:border-white bg-white px-2 py-1 text-black transition-colors duration-300 " +
          "hover:bg-black hover:text-white",
        className
      )}
    >
      <span className="text-[12px] font-bold uppercase ml-1">Learn more</span>
      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-white transition-colors duration-300 group-hover:bg-white group-hover:text-black">
        <ArrowRight size={15} />
      </div>
    </button>
  );
};
