"use client";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

import React, { useRef, useState } from "react";
import Image from "next/image";
import teqrox_h_logo from "@/assets/teqrox_h_logo.webp";

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface NavItemsProps {
  items: {
    name: string;
    link: string;
  }[];
  className?: string;
  onItemClick?: () => void;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  visible?: boolean;
  onClose: () => void;
}

export const Navbar = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const [visible, setVisible] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <motion.div
      ref={ref}
      className={cn("fixed inset-x-0 top-10 z-40 w-full", className)}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{ visible?: boolean }>,
              { visible }
            )
          : child
      )}
    </motion.div>
  );
};

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        boxShadow: visible
          ? "0 0 24px rgba(0,0,0,0.08), 0 1px 1px rgba(0,0,0,0.06), 0 0 0 1px rgba(255,255,255,0.06), 0 0 4px rgba(255,255,255,0.08), 0 16px 68px rgba(0,0,0,0.04), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "none",
        width: visible ? "56rem" : "100%",
        y: visible ? 20 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      style={{
        width: "100%",
        background: visible ? "rgba(255, 255, 255, 0.06)" : "transparent",
        backdropFilter: visible ? "blur(10px)" : "none",
        WebkitBackdropFilter: visible ? "blur(10px)" : "none",
        borderRadius: "9999px",
      }}
      className={cn(
        "relative z-[60] mx-auto hidden flex-row items-center justify-between self-start px-4 py-2 min-h-[52px] lg:flex",
        visible && "border border-white/10 shadow-inner"
      )}
    >
      {children}
    </motion.div>
  );
};

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium text-dark transition duration-200 lg:flex lg:space-x-2",
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          onMouseEnter={() => setHovered(idx)}
          onClick={onItemClick}
          className="relative px-4 py-2 text-dark "
          key={`link-${idx}`}
          href={item.link}
        >
          {hovered === idx && (
            <motion.div
              layoutId="hovered"
              className="absolute inset-0 h-full w-full rounded-full bg-light"
            />
          )}
          <span className="relative z-20 whitespace-nowrap">{item.name}</span>
        </a>
      ))}
    </motion.div>
  );
};
type AnchorProps = {
  as?: "a";
  href: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

type ButtonProps = {
  as: "button";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

type NavbarButtonProps = (AnchorProps | ButtonProps) & {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark" | "gradient";
};

export const NavbarButton = (props: NavbarButtonProps) => {
  const { as = "a", children, className, variant = "primary", ...rest } = props;

  const baseStyles =
    "px-4 py-2 rounded-full bg-dark text-black text-base font-mdeium cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center";

  const variantStyles = {
    primary:
      "shadow-[0_0_24px_rgba(0,0,0,0.08),_0_1px_1px_rgba(0,0,0,0.06),_0_0_0_1px_rgba(255,255,255,0.06),_0_0_4px_rgba(255,255,255,0.08),_0_16px_68px_rgba(0,0,0,0.04),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
    secondary: "bg-transparent shadow-none text-dark",
    dark: "bg-black text-dark",
    gradient: "bg-gradient-to-b from-blue-500 to-blue-700 text-dark",
  };

  if (as === "button") {
    const buttonProps = rest as React.ButtonHTMLAttributes<HTMLButtonElement>;

    return (
      <button
        className={cn(baseStyles, variantStyles[variant], className)}
        {...buttonProps}
      >
        {children}
      </button>
    );
  }

  const { href, ...anchorRest } = rest as AnchorProps;

  return (
    <a
      href={href}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...anchorRest}
    >
      {children}
    </a>
  );
};

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        boxShadow: visible
          ? "0 0 24px rgba(0,0,0,0.08), 0 1px 1px rgba(0,0,0,0.06), 0 0 0 1px rgba(255,255,255,0.06), 0 0 4px rgba(255,255,255,0.08), 0 16px 68px rgba(0,0,0,0.04), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "none",
        width: visible ? "90%" : "100%",
        paddingRight: visible ? "12px" : "40px",
        paddingLeft: visible ? "12px" : "40px",
        borderRadius: visible ? "4px" : "2rem",
        background: visible ? "rgba(255, 255, 255, 0.06)" : "transparent",
        border: visible ? "1px solid rgba(255,255,255,0.1)" : "none",
        y: visible ? 20 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      className={cn(
        "relative z-50 mx-auto flex w-full  flex-col items-center justify-between bg-transparent px-0 py-2 lg:hidden",
        visible && "border border-white/10 shadow-inner",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const MobileNavHeader = ({
  children,
  className,
}: MobileNavHeaderProps) => {
  return (
    <div
      className={cn(
        "flex w-full flex-row items-center justify-between",
        className
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
  onClose,
  visible,
}: MobileNavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
          }}
          exit={{ opacity: 0 }}
          style={{
            background: "rgba(0, 0, 0, 0.9)",
            WebkitBackdropFilter: "blur(10px)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255,255,255,0.1)",
            boxShadow:
              "0 0 24px rgba(0,0,0,0.08), 0 1px 1px rgba(0,0,0,0.06), 0 0 0 1px rgba(255,255,255,0.06), 0 0 4px rgba(255,255,255,0.08), 0 16px 68px rgba(0,0,0,0.04), 0 1px 0 rgba(255, 255, 255, 0.1) inset",
          }}
          className={cn(
            "absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-lg px-4 py-8 transition-all duration-300 ease-in-out",
            className
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return isOpen ? (
    <IconX className="dark:text-dark" onClick={onClick} />
  ) : (
    <IconMenu2 className="text-dark" onClick={onClick} />
  );
};

export const NavbarLogo = () => {
  return (
    <a
      href="#"
      className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black"
    >
      <Image
        src={teqrox_h_logo}
        alt="TEQROX"
        // width={30}
        height={35}
        className="object-contain"
        priority
      />
      {/* <span className="font-medium text-black dark:text-dark">Startup</span> */}
    </a>
  );
};
