import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export function Features() {
  const features = [
    {
      title: "Application Services",
      description:
        "Our Application Services enhance functionality through performance monitoring, load balancing, autoscaling, acceleration, and micro-segmentation, ensuring your applications are continuously optimized, monitored, and efficiently orchestrated.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "Cloud Services",
      description:
        "Are infrastructure costs consuming your IT budget, leaving little room for innovation? TEQROX Solutions LLP helps you refocus on your business by taking over IT management with expert cloud services. ",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "Enterprise Agile DevOps",
      description:
        "We empower your digital transformation with a customer-centric, agile approach. By integrating Enterprise Agile DevOps into your software development, we help you accelerate delivery, streamline processes, and enhance customer experience.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "Internet of Things (IoT)",
      description:
        "We offer IoT as a specialized service to help clients unlock new possibilities through scalable end-to-end solutions. From hardware and software to seamless plug-and-play deployments, our expert teams eliminate fragmented systems and complex tech, making IoT rollouts faster, more efficient, and easier to manage.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "Data & Analytics Service",
      description:
        "Our data and analytics services deliver fast, reliable insights through lightweight, customizable dashboards tailored to your needs, typically live within 24 hours. We handle everything from deployment to integration and maintenance, ensuring seamless, efficient analysis with minimal cloud usage.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "Digital Services",
      description:
        "We offer end-to-end digital services, including Digital Commerce, Digital Interactions, and Digital Marketing, to drive growth and enhance customer engagement. Our solutions are designed to boost visibility, streamline operations, and elevate brand presence across all digital channels.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "Automation Testing",
      description:
        "We deliver modern Automation Testing services that minimize regression time, enhance reusability, and reduce maintenance costs, ensuring faster, error-free software delivery.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "Penetration Testing Service",
      description:
        "Penetration Testing (Pentest) is an in-depth ethical cybersecurity assessment designed to identify and safely address vulnerabilities or misconfigurations in IT infrastructure and web applications. Unlike basic vulnerability assessments, Pentests simulate real-world attack scenarios using white, gray, or black box approaches to uncover deeper security flaws.",
      icon: <IconRouteAltLeft />,
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

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
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
      <div className="mb-4 relative z-10 px-10 text-[#0289b6]">{icon}</div>
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
