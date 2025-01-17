"use client";

import { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useTheme } from "@/lib/theme-context";
import { Card, CardContent } from "@/components/ui/card";
// import Video from "next-video";

type Skill = {
  category: string;
  skills: {
    name: string;
    level: number;
  }[];
};

const skillsData: Skill[] = [
  {
    "category": "Frontend Development",
    "skills": [
      { "name": "React", "level": 90 },
      { "name": "HTML/CSS", "level": 95 },
      { "name": "JavaScript", "level": 85 },
      { "name": "TypeScript", "level": 80 }
    ]
  },
  {
    "category": "Backend Development",
    "skills": [
      { "name": "Node.js", "level": 85 },
      { "name": "Express", "level": 80 },
      { "name": "MongoDB", "level": 75 },
      { "name": "SQL", "level": 70 }
    ]
  },
  {
    "category": "Tools and Technologies",
    "skills": [
      { "name": "Git", "level": 85 },
      { "name": "Docker", "level": 70 },
      { "name": "AWS", "level": 65 },
      { "name": "Linux", "level": 75 }
    ]
  },
  {
    "category": "Programming and Scripting",
    "skills": [
      { "name": "Python", "level": 90 },
      { "name": "Core Java", "level": 85 },
      { "name": "C Programming", "level": 80 },
      { "name": "Machine Learning", "level": 75 }
    ]
  },
  {
    "category": "Database and Data Management",
    "skills": [
      { "name": "MySQL", "level": 85 },
      { "name": "MongoDB", "level": 75 },
      { "name": "SQL", "level": 70 },
      { "name": "Data Analysis & Visualization", "level": 80 }
    ]
  },
  {
    "category": "Soft Skills and Expertise",
    "skills": [
      { "name": "Team Collaboration", "level": 90 },
      { "name": "Problem-Solving", "level": 85 },
      { "name": "Attention to Detail", "level": 85 },
      { "name": "Adaptability", "level": 80 }
    ]
  }
];

export function Skills() {
  const { currentTheme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.stop();
    }
  }, [isInView, controls]);

  const cardWidth = 300; // Adjust this value based on your card width
  const totalWidth = cardWidth * skillsData.length;

  return (
    <section id="skills" className="relative py-20 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 -z-10 h-full w-full overflow-hidden">
        <video
          src="/videos/background.mp4"
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.h2
          className="text-5xl font-bold text-center mb-12"
          style={{ color: currentTheme.primary }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skills & Expertise
        </motion.h2>

        {/* Infinite Scrolling Cards */}
        <div className="relative overflow-hidden" ref={containerRef}>
          <motion.div
            className="flex space-x-8"
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { x: 0 },
              visible: {
                x: [-totalWidth, 0],
                transition: {
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 100,
                    ease: "linear",
                  },
                },
              },
            }}
            style={{
              width: `${totalWidth * 2}px`,
            }}
          >
            {[...skillsData, ...skillsData].map((category, index) => (
              <motion.div
                key={`${category.category}-${index}`}
                className="flex-shrink-0"
                style={{ width: `${cardWidth}px`, minWidth: '250px' }}
              >
                <Card
                  className="h-full backdrop-blur-md bg-white/10 "
                  style={{ borderColor: currentTheme.accent }}
                >
                  <CardContent className="p-6">
                    <h3
                      className="text-2xl font-bold mb-6"
                      style={{ color: currentTheme.secondary }}
                    >
                      {category.category}
                    </h3>
                    <div className="space-y-4">
                      {category.skills.map((skill) => (
                        <div key={skill.name} className="space-y-2">
                          <div
                            className="flex justify-between text-sm"
                            style={{ color: currentTheme.primary }}
                          >
                            <span>{skill.name}</span>
                            <span>{skill.level}%</span>
                          </div>
                          <div className="h-2 bg-gray-200 rounded-full overflow-hidden w-full">
                            <motion.div
                              className="h-full rounded-full"
                              style={{ backgroundColor: currentTheme.primary }}
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, ease: "easeOut" }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

