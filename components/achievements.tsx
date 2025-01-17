"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTheme } from "@/lib/theme-context";
import { useEffect, useState } from "react";

const achievements = [
  {
    title: "Flipkart Grid 6.0 Level 1: E-Commerce & Tech Quiz",
    description: "Completed Flipkart's E-Commerce & Tech Quiz in August 2024.",
    date: "Aug 2024",
  },
  {
    title: "Web Development Internship - Bharat Intern",
    description: "Completed Web Development internship at Bharat Intern (Sep 2023 - Oct 2023).",
    date: "Sep 2023",
  },
  {
    title: "Machine Learning - IIIT Allahabad",
    description: "Successfully completed Machine Learning course at IIIT Allahabad during the Engineer Core Summer Internship.",
    date: "Aug 2023",
  },
  {
    title: "Web Development Internship - CodSoft",
    description: "Completed Web Development internship at CodSoft (Aug 2023 - Sep 2023).",
    date: "Aug 2023",
  },
  {
    title: "Youth Empowerment & Skills workshop (YES!+)",
    description: "Participated in YES!+ workshop organized by The Art of Living.",
    date: "Nov 2022",
  },
  {
    title: "Hackathon Participant - Hack4Purpose",
    description: "Participated in Hack4Purpose Hackathon, IIT Delhi's Techfest, Tryst 2024.",
    date: "Apr 2024",
  },
];

export function Achievements() {
  const { currentTheme } = useTheme();
  const [shuffledAchievements, setShuffledAchievements] = useState(achievements);

  useEffect(() => {
    const shuffleInterval = setInterval(() => {
      setShuffledAchievements(prevAchievements => {
        const newAchievements = [...prevAchievements];
        for (let i = newAchievements.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [newAchievements[i], newAchievements[j]] = [newAchievements[j], newAchievements[i]];
        }
        return newAchievements;
      });
    }, 5000);

    return () => clearInterval(shuffleInterval);
  }, []);

  return (
    <section id="achievements" className="py-20 relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
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
        <h2 className="text-4xl font-bold text-center mb-12" style={{ color: currentTheme.primary }}>
          Achievements & Certifications
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {shuffledAchievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className="h-full overflow-hidden bg-white/10 backdrop-blur-md hover:scale-105 transition-all duration-300 shadow-lg"
                style={{
                  borderColor: currentTheme.primary,
                  
                }}
              >
                <CardHeader className="p-4">
                  <CardTitle className="text-lg font-bold" style={{ color: currentTheme.primary }}>
                    {achievement.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <p className="text-sm mb-2 font-semibold" style={{ color: currentTheme.secondary }}>
                    {achievement.date}
                  </p>
                  <p className="text-sm" style={{ color: currentTheme.primary }}>
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

