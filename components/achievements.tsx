"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useTheme } from "@/lib/theme-context";

const achievements = [
  {
    title: "1st Place - National Hackathon",
    description: "Won first place in a national-level hackathon for developing an innovative AI-powered healthcare solution.",
    date: "2023"
  },
  {
    title: "Google Cloud Certification",
    description: "Earned Google Cloud Professional Data Engineer certification.",
    date: "2022"
  },
  {
    title: "Research Paper Publication",
    description: "Published a research paper on 'Emotion-Based Recommendation Systems' in a reputed international journal.",
    date: "2022"
  },
  {
    title: "Internship at Tech Innovators Inc.",
    description: "Completed a 3-month internship, working on cutting-edge machine learning projects.",
    date: "2021"
  }
]

export function Achievements() {
  const { currentTheme } = useTheme();
  return (
    <section id="achievements" className="py-20 bg-purple-900/30 backdrop-blur-lg">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12" style={{ color: currentTheme.primary }}>Achievements & Certifications</h2>
        <div className="max-w-3xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="mb-6 bg-white/10 hover:border-teal-500 transition-colors duration-300"style={{ borderColor: currentTheme.primary }}>
                <CardHeader>
                  <CardTitle className=""style={{ color: currentTheme.primary }}>{achievement.title}</CardTitle>
                  <CardDescription className=""style={{ color: currentTheme.secondary }}>{achievement.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className=""style={{ color: currentTheme.primary }}>{achievement.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

