"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/lib/theme-context";
import Image from "next/image";
import Typed from "typed.js";
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
  const roleRef = useRef(null);

  useEffect(() => {
    const roleOptions = {
      strings: [
        "Front-End Developer",
        "a Coder",
        "UI Designer",
        "a Creative Thinker",
        "a Problem Solver",
        "an Enthusiast Learner",
        "a Web Developer",
        "a Tech Lover",
      ],
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 1000,
    };

    const roleTyped = new Typed(roleRef.current, roleOptions);

    return () => {
      roleTyped.destroy();
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Section */}
          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1
              className="text-4xl md:text-6xl font-bold mb-6"
              style={{ color: currentTheme.primary }}
            >
              Hi, I&apos;m Rashika,
              <br />{" "}
              <span
                ref={roleRef}
                style={{ color: currentTheme.primary }}
              ></span>
            </h1>
            <p
              className="text-xl md:text-2xl mb-8"
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

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button
                className="px-8 py-6 text-lg rounded-full"
                style={{
                  backgroundColor: currentTheme.primary,
                  color: "white",
                }}
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                className="px-8 py-6 text-lg rounded-full"
                style={{
                  backgroundColor: currentTheme.primary,
                  color: "white",
                }}
              >
                Contact Me
              </Button>
            </div>

            {/* Tech Stack Section */}
            <div className="flex flex-col lg:flex-row items-center gap-5 mt-10">
              <h1
                className="text-sm font-bold md:text-lg lg:text-3xl border-r-2 pr-2"
                style={{
                  color: currentTheme.primary,
                  borderColor: currentTheme.primary,
                }}
              >
                Tech Stack
              </h1>
              <div className="flex items-center justify-center lg:justify-start flex-wrap gap-5 m-2">
                <FaHtml5
                  className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 hover:scale-125 transition-transform animate-pulse"
                  style={{ color: currentTheme.primary }}
                />
                <FaCss3Alt
                  className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 hover:scale-125 transition-transform animate-pulse"
                  style={{ color: currentTheme.primary }}
                />
                <IoLogoJavascript
                  className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 hover:scale-125 transition-transform animate-pulse"
                  style={{ color: currentTheme.primary }}
                />
                <SiTailwindcss
                  className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 hover:scale-125 transition-transform animate-pulse"
                  style={{ color: currentTheme.primary }}
                />
                <DiMongodb
                  className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 hover:scale-125 transition-transform animate-pulse"
                  style={{ color: currentTheme.primary }}
                />
                <SiExpress
                  className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 hover:scale-125 transition-transform animate-pulse"
                  style={{ color: currentTheme.primary }}
                />
                <FaReact
                  className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 hover:scale-125 transition-transform animate-pulse"
                  style={{ color: currentTheme.primary }}
                />
                <FaNode
                  className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 hover:scale-125 transition-transform animate-pulse"
                  style={{ color: currentTheme.primary }}
                />
                <SiNextdotjs
                  className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 hover:scale-125 transition-transform animate-pulse"
                  style={{ color: currentTheme.primary }}
                />
                <FaGit
                  className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 hover:scale-125 transition-transform animate-pulse"
                  style={{ color: currentTheme.primary }}
                />
                <FaGithub
                  className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 hover:scale-125 transition-transform animate-pulse"
                  style={{ color: currentTheme.primary }}
                />
                <GiArtificialIntelligence
                  className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 hover:scale-125 transition-transform animate-pulse"
                  style={{ color: currentTheme.primary }}
                />
                <SiGithubcopilot
                  className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 hover:scale-125 transition-transform animate-pulse"
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
            <div className="relative w-[27rem] h-[33rem] mx-auto">
              <Image
                src="public\rashika-photo-2.jpeg"
                alt="Rashika Kumari"
                fill
                className="rounded-full object-cover border-4"
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
