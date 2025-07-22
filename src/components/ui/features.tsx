import { cn } from "@/lib/utils";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import application from "@/assets/icons/application.webp";
import cloud from "@/assets/icons/cloud.webp";
import devops from "@/assets/icons/devops.webp";
import iot from "@/assets/icons/iot.webp";
import data from "@/assets/icons/data.webp";
import digital from "@/assets/icons/digital.webp";
import automation from "@/assets/icons/automation.webp";
import penetration from "@/assets/icons/penetration.webp";

export function Features() {
  const features = [
    {
      title: "Application Services",
      description:
        "We offer a suite of services that enhance application performance through monitoring, load balancing, autoscaling, and optimization.",
      iconSrc: application,
    },
    {
      title: "Cloud Services",
      description:
        "We help businesses reduce IT costs by offering reliable cloud services, currently focused on public cloud and expanding into hybrid solutions, so they can stay focused on growth instead of infrastructure.",
      iconSrc: cloud,
    },
    {
      title: "Enterprise Agile DevOps",
      description:
        "We support your digital transformation with Agile DevOps solutions that streamline development, boost delivery speed, and keep your business competitive through continuous innovation and customer focus.",
      iconSrc: devops,
    },
    {
      title: "Internet of Things",
      description:
        "Our IoT services offer end-to-end scalable solutions powered by AI and real-time insights, making it easy for businesses to deploy, manage, and transform through connected, secure, and intelligent systems.",
      iconSrc: iot,
    },
    {
      title: "Data & Analytics Service",
      description:
        "Our data and analytics services deliver fast, customizable insights through efficient dashboards and reports, helping businesses make smarter decisions while staying secure, scalable, and ahead of the competition.",
      iconSrc: data,
    },
    {
      title: "Digital Services",
      description:
        "Our digital services bundle helps businesses grow by boosting online visibility, streamlining customer engagement, and driving sales through tailored, end-to-end digital strategies.",
      iconSrc: digital,
    },
    {
      title: "Automation Testing",
      description:
        "Our automation testing services ensure faster, more reliable software releases by reducing regression time, supporting multi-platform testing, and improving performance with flexible, data-driven methods.",
      iconSrc: automation,
    },
    {
      title: "Penetration Testing Service",
      description:
        "Our penetration testing services provide in-depth security checks to identify and fix vulnerabilities in your IT infrastructure, using white, gray, or black box methods tailored to your needs.",
      iconSrc: penetration,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}
interface FeatureProps {
  title: string;
  description: string;
  iconSrc: StaticImageData;
  index: number;
}

const Feature = ({
  title,
  description,
  iconSrc,
  index,
}: {
  title: string;
  description: string;
  iconSrc: StaticImageData;
  index: number;
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: index * 0.1 },
      });
    } else {
      controls.start({ opacity: 0, y: 30 });
    }
  }, [inView, controls, index]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={controls}
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature border-[#292929]",
        (index === 0 || index === 4) && "lg:border-l border-[#292929]",
        index < 4 && "lg:border-b border-[#292929]"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-[#105474] to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-[#105474] to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-[#0289b6]">
        <Image
          src={iconSrc}
          alt={`${title} icon`}
          width={50}
          height={50}
          className="object-contain"
        />
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-[#0289b6] font-normal text-2xl">
          {title}
        </span>
      </div>
      <p className="text-md text-[#F5F6FB] text-thin max-w-xs relative z-10 px-10">
        {description}
      </p>
    </motion.div>
  );
};
