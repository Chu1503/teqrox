// app/layout.tsx
import "./globals.css";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
} from "@/components/ui/resizable-navbar";

export const metadata = {
  title: "TEQROX",
  description: "A Global Technology Group",
};

const navItems = [
  { name: "Home", link: "/" },
  { name: "What We Do", link: "/what-we-do" },
  { name: "Customers", link: "/customers" },
  { name: "About Us", link: "/about" },
  { name: "Service", link: "/service" },
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
  return (
    <html lang="en">
      <body>
        <Navbar>
          <NavBody>
            <NavItems items={navItems} />
          </NavBody>
        </Navbar>
        {children}
      </body>
    </html>
  );
}
