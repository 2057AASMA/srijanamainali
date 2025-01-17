"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import Link from "next/link";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    number: "01",
    category: "MeroGhar",
    title: "MeroGhar Construction Calculation",
    description:
      "Meroghar.com is your go-to platform for discovering modern, reliable, and personalized housing solutions. Whether you're looking to buy, sell, or rent properties, Meroghar.com offers a seamless experience tailored to meet your real estate needs.",
    stack: [{ name: "HTML5" }, { name: "CSS3" }, { name: "JavaScript" }],
    image: "/assets/work/work1.png",
    live: "#",
    github: "#",
  },
  {
    number: "02",
    category: "SuperTruck",
    title: "SuperTruck Dispatch Management System",
    description:
      "A comprehensive logistics platform that helps trucking companies optimize their operations. Features include real-time load tracking, intelligent route optimization, dynamic pricing algorithm to find highest-paying loads, and integrated payment processing through Stripe API.",
    stack: [
      { name: "React" },
      { name: "Node.js" },
      { name: "MongoDB" },
      { name: "Stripe API" },
    ],
    image: "/assets/work/work2.png",
    live: "#",
    github: "#",
  },
  {
    number: "03",
    category: "Culinary Connect",
    title: "Culinary Connect - Food Ordering Platform",
    description:
      "A robust food ordering web application that connects local restaurants with customers. Includes features like real-time menu updates, personalized recommendations, secure payment integration, restaurant management dashboard, and user review systems.",
    stack: [{ name: "Node.js" }, { name: "Express" }, { name: "MongoDB" }],
    image: "/assets/work/work3.png",
    live: "#",
    github: "#",
  },
  {
    number: "04",
    category: "SuperTruck Mobile ",
    title: "SuperTruck Driver Mobile App",
    description:
      "Mobile-first application for truck drivers to manage their dispatches, track earnings, view load details, navigate routes, and communicate with dispatchers. Includes GPS integration, earnings dashboard, and real-time notifications.",
    stack: [{ name: "React Native" }, { name: "Redux" }, { name: "Firebase" }],
    image: "/assets/work/work4.png",
    live: "#",
    github: "#",
  },
  {
    number: "05",
    category: "Educational Technology",
    title: "KidLearn - Interactive Learning Platform",
    description:
      "An engaging educational app designed to make learning fun for children. Features interactive lessons across subjects, gamified learning experiences, progress tracking, adaptive difficulty levels, and colorful, child-friendly interface with educational mini-games.",
    stack: [
      { name: "React Native" },
      { name: "Firebase" },
      { name: "Animations" },
    ],
    image: "/assets/work/work5.png",
    live: "#",
    github: "#",
  },
];

function Work() {
  const [project, setProject] = useState(projects[0]);

  const handleSliderChange = (swiper: SwiperType) => {
    // get curent slide index
    const currentSlide = swiper.activeIndex;
    // update project state based on curent slide index
    setProject(projects[currentSlide]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex--col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px]">
              {/* outline */}
              <div className="text-8xl leadinf-none font-extrabold text-transparent text-outline">
                {project.number}
              </div>
              {/* projects category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* removes the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>Live Project</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* git hub project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>Github Repo</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSliderChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/20 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          alt={project.category}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* swiper buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all "
                iconsStyles=""
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Work;
