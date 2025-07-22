import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ children, className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "group relative overflow-hidden rounded-full border border-primary bg-background px-6 py-2 text-center font-semibold text-primary transition-all duration-300",
        // background fill
        "before:absolute before:inset-0 before:-z-10 before:translate-x-[-100%] before:bg-primary before:transition-transform before:duration-300 before:content-['']",
        "hover:before:translate-x-0",
        className,
      )}
      {...props}
    >
      {/* Non-hover content */}
      <span className="inline-block w-full text-center transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
        {children}
      </span>

      {/* Hover content */}
      <div className="absolute inset-0 z-10 flex items-center justify-center gap-2 text-white opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
        <span>{children}</span>
        <ArrowRight />
      </div>
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";
