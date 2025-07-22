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
        "group flex items-center gap-3 rounded-full border border-transparent cursor-pointer hover:border-[#F5F6FB] bg-[#fff] px-5 py-2 text-black transition-colors duration-300 hover:bg-black hover:text-[#F5F6FB]",
        className
      )}
    >
      <span className="text-md font-bold uppercase">Learn more</span>
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white transition-colors duration-300 group-hover:bg-[#F5F6FB] group-hover:text-black">
        <ArrowRight size={18} />
      </div>
    </button>
  );
};
