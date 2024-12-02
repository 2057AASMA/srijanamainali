"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";
import { Divide } from "lucide-react";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Building fast, responsive, and dynamic websites that deliver exceptional user experiences, tailored to meet your business needs.",
    href: "#",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "Creating intuitive and visually engaging user interfaces with a focus on enhancing user satisfaction through thoughtful design.",
    href: "#",
  },
  {
    num: "03",
    title: "Logo Design",
    description:
      "Crafting unique and memorable logos that capture your brand’s essence and leave a lasting impression on your audience.",
    href: "#",
  },
  {
    num: "04",
    title: "Graphic Design",
    description:
      "Designing eye-catching visuals, from marketing materials to social media assets, that effectively communicate your brand’s message.",
    href: "#",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent flex items-center justify-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-3xl font-extrabold text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/* description */}
                <p>{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
