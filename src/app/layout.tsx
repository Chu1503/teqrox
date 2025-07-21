"use client";
import "./globals.css";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavToggle,
  MobileNavHeader,
  MobileNavMenu,
  NavbarLogo,
} from "@/components/ui/resizable-navbar";
import { Be_Vietnam_Pro } from "next/font/google";

import React, { useState } from "react";
import Image from "next/image";
import teqrox_h_logo from "@/assets/teqrox_h_logo.webp";
import { ScrollProgress } from "@/components/ui/scroll-progress";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const navItems = [
  { name: "Home", link: "/" },
  { name: "What We Do", link: "/what-we-do" },
  { name: "Customers", link: "/customers" },
  { name: "About Us", link: "/about" },
  { name: "Services", link: "/services" },
  { name: "Brochure", link: "/brochure.pdf" },
  { name: "Blog", link: "/blog" },
  { name: "Contact Us", link: "/contact" },
];

<svg style={{ position: "absolute", width: 0, height: 0 }}>
  <filter id="frosted" primitiveUnits="objectBoundingBox">
    <feGaussianBlur in="SourceGraphic" stdDeviation="0.02" result="blur" />
    <feDisplacementMap
      in="blur"
      in2="map"
      scale="1"
      xChannelSelector="R"
      yChannelSelector="G"
    >
      <animate
        attributeName="scale"
        to="1.4"
        dur="0.3s"
        begin="btn.mouseover"
        fill="freeze"
      />
      <animate
        attributeName="scale"
        to="1"
        dur="0.3s"
        begin="btn.mouseout"
        fill="freeze"
      />
    </feDisplacementMap>
  </filter>
</svg>;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <html lang="en">
      <body className={beVietnamPro.className}>
        <div className="relative z-50">
          <Navbar>
            <NavBody>
              {/* <NavbarLogo /> */}
              <NavItems items={navItems} />
            </NavBody>

            <MobileNav>
              <MobileNavHeader className="flex justify-between items-center w-full ">
                <Image
                  src={teqrox_h_logo}
                  alt="TEQROX"
                  // width={30}
                  height={35}
                  className="object-contain"
                  priority
                />
                <MobileNavToggle
                  isOpen={isOpen}
                  onClick={() => setIsOpen(!isOpen)}
                />
              </MobileNavHeader>

              <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
                {navItems.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.link}
                    onClick={() => setIsOpen(false)}
                    className="text-white text-base font-medium"
                  >
                    {item.name}
                  </a>
                ))}
              </MobileNavMenu>
            </MobileNav>
          </Navbar>

          <ScrollProgress className="h-1" />
        </div>
        {children}
      </body>
    </html>
  );
}
