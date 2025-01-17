"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/lib/theme-context";
import Image from "next/image";
import { FlipWords } from "@/components/ui/flip-words"; 
import Video from "next-video";

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaGit,
  FaNode,
} from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiTailwindcss,
  SiExpress,
  SiGithubcopilot,
  SiNextdotjs,
} from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";
import { DiMongodb } from "react-icons/di";

export function Hero() {
  const { currentTheme } = useTheme();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
        <video
          src="/videos/background.mp4"
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-24 md:py-32 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Text Section */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6"
              style={{ color: currentTheme.primary }}
            >
              Hi, I&apos;m Rashika,
              <br />
              {/* FlipWords Component */}
              <FlipWords
                words={[
                  "Front-End Developer",
                  "a Coder",
                  "UI Designer",
                  "a Creative Thinker",
                  "a Problem Solver",
                  "an Innovator",
                  "a Web Developer",
                  "a Tech Lover",
                ]}
                duration={3000}
                className="text-primary"
                style={{ color: currentTheme.primary }} // Add theme color here
              />
            </h1>
            <p
              className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8"
              style={{ color: currentTheme.primary }}
            >
              A passionate IT student, aspiring software engineer, and developer
              from Prayagraj, India, with expertise in frontend development,
              machine learning, and database management. Skilled in crafting
              responsive and user-friendly applications using modern
              technologies like React.js, Python, and MySQL. Dedicated to
              solving real-world problems through innovative tech solutions and
              continuously enhancing technical and problem-solving skills.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button
                className="px-8 py-6 text-lg rounded-full"
                style={{
                  backgroundColor: currentTheme.primary,
                  color: "black",
                }}
                onClick={() => scrollToSection("projects")} // Scroll to Projects section
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                className="px-8 py-6 text-lg rounded-full"
                style={{
                  backgroundColor: currentTheme.primary,
                  color: "black",
                }}
                onClick={() => scrollToSection("contact")} // Scroll to Contact section
              >
                Contact Me
              </Button>
            </div>

            {/* Tech Stack Section */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5 mt-8 sm:mt-10">
              <h1
                className="text-sm font-bold sm:text-lg md:text-2xl lg:text-3xl sm:border-r-2 sm:pr-2 mb-2 sm:mb-0"
                style={{
                  color: currentTheme.primary,
                  borderColor: currentTheme.primary,
                }}
              >
                Tech Stack
              </h1>
              <div className="flex items-center justify-center lg:justify-start flex-wrap gap-5 m-2">
                <FaHtml5
                  className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 hover:scale-125 transition-transform "
                  style={{ color: currentTheme.primary }}
                />
                <FaCss3Alt
                  className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 hover:scale-125 transition-transform "
                  style={{ color: currentTheme.primary }}
                />
                <IoLogoJavascript
                  className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 hover:scale-125 transition-transform"
                  style={{ color: currentTheme.primary }}
                />
                <SiTailwindcss
                  className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 hover:scale-125 transition-transform "
                  style={{ color: currentTheme.primary }}
                />
                <DiMongodb
                  className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 hover:scale-125 transition-transform "
                  style={{ color: currentTheme.primary }}
                />
                <SiExpress
                  className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 hover:scale-125 transition-transform "
                  style={{ color: currentTheme.primary }}
                />
                <FaReact
                  className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 hover:scale-125 transition-transform "
                  style={{ color: currentTheme.primary }}
                />
                <FaNode
                  className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 hover:scale-125 transition-transform "
                  style={{ color: currentTheme.primary }}
                />
                <SiNextdotjs
                  className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 hover:scale-125 transition-transform "
                  style={{ color: currentTheme.primary }}
                />
                <FaGit
                  className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 hover:scale-125 transition-transform "
                  style={{ color: currentTheme.primary }}
                />
                <FaGithub
                  className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 hover:scale-125 transition-transform "
                  style={{ color: currentTheme.primary }}
                />
                <GiArtificialIntelligence
                  className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 hover:scale-125 transition-transform "
                  style={{ color: currentTheme.primary }}
                />
                <SiGithubcopilot
                  className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 hover:scale-125 transition-transform "
                  style={{ color: currentTheme.primary }}
                />
              </div>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="flex-1 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[29rem] lg:h-[29rem] mx-auto">
              <Image
                src="/images/Rashika 1.jpeg"
                alt="Rashika Kumari"
                width={464}
                height={464}
                className="rounded-full object-cover border-4 w-full h-full"
                style={{ borderColor: currentTheme.primary }}
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

