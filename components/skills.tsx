"use client"

import { motion } from "framer-motion"
import { useTheme } from "@/lib/theme-context"
import { Card, CardContent } from "@/components/ui/card"

type Skill = {
  category: string
  skills: {
    name: string
    level: number
  }[]
}

const skillsData: Skill[] = [
  {
    category: "Frontend Development",
    skills: [
      { name: "React", level: 90 },
      { name: "HTML/CSS", level: 95 },
      { name: "JavaScript", level: 85 },
      { name: "TypeScript", level: 80 },
    ]
  },
  {
    category: "Backend Development",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 80 },
      { name: "MongoDB", level: 75 },
      { name: "SQL", level: 70 },
    ]
  },
  {
    category: "Tools & Technologies",
    skills: [
      { name: "Git", level: 85 },
      { name: "Docker", level: 70 },
      { name: "AWS", level: 65 },
      { name: "Linux", level: 75 },
    ]
  }
]

export function Skills() {
  const { currentTheme } = useTheme()

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-5xl font-bold text-center mb-12"
          style={{ color: currentTheme.primary }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skills & Expertise
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full" style={{ borderColor: currentTheme.accent }}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6" style={{ color: currentTheme.secondary }}>
                    {category.category}
                  </h3>
                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>{skill.name}</span>
                          <span>{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
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
        </div>
      </div>
    </section>
  )
}

