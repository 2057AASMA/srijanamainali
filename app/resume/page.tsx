"use client";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import { FaSlack } from "react-icons/fa";
import { SiAdobe, SiJirasoftware, SiCanva, SiSketch } from "react-icons/si";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";

const about = {
  title: "About me",
  description:
    "Greeting of the day! I am Srijana Mainali, a passionate and dedicated UI/UX designer with a strong drive to use my knowledge in creating meaningful and impactful user experiences. I work hard and with desire, always aiming for excellence in whatever I do.",
  info: [
    { fieldName: "Name", fieldValue: "Srijana Mainali" },
    { fieldName: "Phone", fieldValue: "+977 9818411263" },
    { fieldName: "Experience", fieldValue: "2+ Years" },
    // { fieldName: "Skype", fieldValue: "luke.01" },
    { fieldName: "Nationality", fieldValue: "nepali" },
    { fieldName: "Email", fieldValue: "aasmamnl@gmail.com" },
    { fieldName: "Freelance", fieldValue: "Available" },
    { fieldName: "Languages", fieldValue: "English,Nepali,Hindi" },
  ],
};
const experience = {
  icon: "assets/icons/experience.svg",
  title: "My Experience",
  description:
    "A comprehensive overview of my professional journey, showcasing roles I've held and the skills I've developed.",
  items: [
    {
      company: "Nepali Case Study",
      position: "Graphic Designer",
      duration: "May 2022 - December 2022",
      location: "Godawari, Lalitpur",
    },
    {
      company: "TT Byte Nepal",
      position: "Social Media Handler",
      duration: "January 2021 - June 2021",
      location: "Godawari, Lalitpur",
    },
    {
      company: "Virinchi College",
      position: "UI/UX Design Instructor",
      duration: "January 2023 - December 2023",
      location: "Kumaripati, Lalitpur",
    },
    {
      company: "Mero Ghar",
      position: "UI/UX Designer",
      duration: "January 2024 - November 2024",
      location: "Sadobato, Lalitpur",
    },
  ],
};

// const education = {
//   icon: "assets/icons/education.svg",
//   title: "My Education",
//   description:
//     "A brief overview of my educational background, highlighting my academic achievements and the institutions I've attended.",
//   items: [
//     {
//       institution: "University of Technology",
//       degree: "Bachelor of Science in Computer Science",
//       duration: "2018 - 2022",
//     },
//     {
//       institution: "Tech Academy",
//       degree: "Diploma in Software Development",
//       duration: "2016 - 2018",
//     },
//     {
//       institution: "Online Courses",
//       degree: "Various Certifications",
//       duration: "Ongoing",
//       details: [
//         "Advanced JavaScript Course",
//         "Full Stack Web Development",
//         "Python for Data Science",
//       ],
//     },
//     {
//       institution: "High School",
//       degree: "High School Diploma",
//       duration: "2012 - 2016",
//     },
//   ],
// };

const education = {
  icon: "assets/icons/education.svg",
  title: "My Education",
  description:
    "A brief overview of my educational background, highlighting my academic achievements and the institutions I've attended.",
  items: [
    {
      institution:
        "Higher Education, Bluebird Secondary School, Kumaripati, Lalitpur",
      degree: "Bachelor in Information and Communication Technology",
      duration: "2018 - 2020",
    },
    {
      institution: "Asia e-University, Virinchi College, Kumaripati, Lalitpur",
      degree: "Bachelor in Information and Communication Technology",
      duration: "2020 - Present (8th Semester)",
    },
  ],
};

const skills = {
  title: "Skills",
  description:
    "A versatile skill set in design and development tools, enabling me to create innovative, user-friendly digital experiences.",
  skillList: [
    { fieldName: "HTML5", icon: <FaHtml5 /> },
    { fieldName: "CSS3", icon: <FaCss3 /> },
    { fieldName: "JavaScript", icon: <FaJs /> },
    { fieldName: "Adobe XD", icon: <SiAdobe /> }, // Adobe XD
    { fieldName: "Figma", icon: <FaFigma /> },
    { fieldName: "Photoshop", icon: <SiAdobe /> }, // Photoshop shares Adobe icon
    { fieldName: "Canva", icon: <SiCanva /> },
    { fieldName: "Slack", icon: <FaSlack /> },
    { fieldName: "Jira", icon: <SiJirasoftware /> },
    { fieldName: "Sketch", icon: <SiSketch /> },
  ],
};

const Resume = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
        className="min-h[80vh] flex items-center justify-center py-12 xl:py-0"
      >
        <div className="container mx-auto">
          <Tabs
            defaultValue="experience"
            className="flex flex-col xl:flex-row gap-6"
          >
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-5">
              <TabsTrigger value={"experience"}>Experience</TabsTrigger>
              <TabsTrigger value={"education"}>Education</TabsTrigger>
              <TabsTrigger value={"skills"}>Skills</TabsTrigger>
              <TabsTrigger value={"about"}>About</TabsTrigger>
            </TabsList>

            {/* content */}
            <div className="min-h[70vh] w-full">
              {/* experience */}
              <TabsContent value="experience" className="w-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{experience.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {experience.description}
                  </p>
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {}
                      {experience.items.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className="bg-[#232329] has-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                          >
                            <span className="text-accent">{item.duration}</span>
                            <span className="text-xl max-w[260px] min-h-[60px]">
                              {item.position}
                            </span>
                            <div className="flex items-center gap-3">
                              {/* dot */}
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <p className="text-white/60">{item.company}</p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>
              {/* education */}
              <TabsContent value="education" className="w-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{education.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {education.description}
                  </p>
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {}
                      {education.items.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className="bg-[#232329] has-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                          >
                            <span className="text-accent">{item.duration}</span>
                            <span className="text-xl max-w[260px] min-h-[60px]">
                              {item.degree}
                            </span>
                            <div className="flex items-center gap-3">
                              {/* dot */}
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <p className="text-white/60">
                                {item.institution}
                              </p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>
              {/* skills */}
              <TabsContent value="skills" className="w-full h-full">
                <div className="flex flex-col gap-[30px]">
                  <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                      {skills.description}
                    </p>
                  </div>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {skills.skillList.map((skill, index) => {
                      return (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                  {skill.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{skill.fieldName}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </TabsContent>
              {/* about */}
              <TabsContent
                value="about"
                className="w-full text-center xl:text-left"
              >
                <div className="flex flex-col gap-[30px]">
                  <h3 className="text-4xl font-bold">{about.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {about.description}
                  </p>
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                    {about.info.map((info, index) => {
                      return (
                        <li
                          key={index}
                          className="flex justify-center items-center gap-4 xl:justify-start "
                        >
                          <span className="text-white/50">
                            {info.fieldName}
                          </span>
                          <span className="text-xl">{info.fieldValue}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </motion.div>
    </>
  );
};

export default Resume;
