import { Mail, Phone, MapPin } from "lucide-react";
import { FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import footer_logo from "@/assets/footer_logo.webp";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0b0b0b] text-white px-10 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center lg:items-start">
        <div>
          <Image
            src={footer_logo}
            alt="Logo"
            className="mb-6"
            // width={160}
            height={70}
          />
          <div className="text-[#F5F6FB] text-center lg:text-left">
            <ul className="grid grid-cols-2 gap-y-3 gap-x-8">
              <li className="hover:text-[#0289b6]">
                <Link href="/about">About</Link>
              </li>
              <li className="hover:text-[#0289b6]">
                <Link href="/what-we-do">What We Do</Link>
              </li>
              <li className="hover:text-[#0289b6]">
                <Link href="/customers">Customers</Link>
              </li>
              <li className="hover:text-[#0289b6]">
                <Link href="/about">About Us</Link>
              </li>
              <li className="hover:text-[#0289b6]">
                <Link href="/services">Services</Link>
              </li>
              <li className="hover:text-[#0289b6]">
                <Link href="/brochure.pdf">Brochure</Link>
              </li>
              <li className="hover:text-[#0289b6]">
                <Link href="/blog">Blog</Link>
              </li>
              <li className="hover:text-[#0289b6]">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-[#F5F6FB] text-center">
          <h3 className="text-xl font-normal text-[#0289b6]">Pune Office</h3>
          <p className="mb-6 font-bold text-lg">
            RST, 3rd floor, 5087/101, Nehru Nagar Rd, Nehru Nagar, Pimpri
            Colony, Pune, Pimpri-Chinchwad, Maharashtra 411018
          </p>
          <h3 className="text-xl font-normal text-[#0289b6]">Madurai Office</h3>
          <p className="font-bold text-lg">
            55, Selvalakshmi Nagar, Kappalur Madurai, Tamil Nadu 625008, India
          </p>
        </div>

        <div className="text-[#F5F6FB] text-center lg:text-right">
          <h3 className="text-xl font-normal text-[#0289b6] mb-6">
            Get in Touch
          </h3>
          <p className="mb-6">📞 +91 97638 33777</p>
          <p className="mb-6">📧 info@teqrox.com</p>
          <div className="flex justify-center lg:justify-end gap-10 mt-2 text-xl">
            <Link href="https://www.linkedin.com/company/teqrox" target="_blank">
              <FaLinkedin className="text-[#0A66C2] scale-150 transition-transform" />
            </Link>

            <Link href="https://www.instagram.com/teqrox/#" target="_blank">
              <FaInstagram className="text-[#E1306C] scale-150 transition-transform" />
            </Link>
            <Link href="https://www.facebook.com/teqroxsolutions" target="_blank">
              <FaFacebook className="text-[#1877F2] scale-150 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
