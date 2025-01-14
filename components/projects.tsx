"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, ExternalLink } from 'lucide-react'
import { useTheme } from "@/lib/theme-context"
import Image from "next/image"

const projects = [
  {
    title: "Emotion-Based Recommendation System",
    description: "An AI-powered system that recommends content based on user emotions detected through facial recognition.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/project-emotion.webp-jbqg35JN7l6yofBeyQTWf91MsPrTVI.png",
    techStack: ["Python", "TensorFlow", "OpenCV", "Flask"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "Credit Card Fraud Detection",
    description: "Machine learning model to detect fraudulent credit card transactions with high accuracy.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/project-fraud-FWTPLnLkPpABWS98gNxOfqfWqfaaDi.png",
    techStack: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "Netflix Clone",
    description: "A responsive web application mimicking the Netflix interface with dynamic content loading.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/project-netflix-6D7bkilq3yDR2wtWBWRB19VuQkiBKH.png",
    techStack: ["React", "Firebase", "CSS", "TMDb API"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "Dynamic To-Do List",
    description: "Interactive to-do list application with task prioritization and due dates.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/project-todo-E4TTiLPWUZA4wFCuOtBtCkriNK8sjo.png",
    techStack: ["JavaScript", "HTML", "CSS", "Local Storage"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "Scientific Calculator",
    description: "Feature-rich calculator web app with advanced mathematical functions.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/project-calculator.jpg-oaipwLrqlFLrwk3hGTpBkyhRciMjB2.jpeg",
    techStack: ["JavaScript", "HTML", "CSS", "Math.js"],
    githubUrl: "#",
    liveUrl: "#"
  }
]

export function Projects() {
  const { currentTheme } = useTheme()

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-5xl font-bold text-center mb-12"
          style={{ color: currentTheme.primary }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle style={{ color: currentTheme.primary }}>{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4" style={{ color: currentTheme.secondary }}>{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 rounded-full text-xs bg-transparent"
                        style={{ 
                          color: currentTheme.primary
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 hover:text-primary transition-colors"
                      style={{ color: currentTheme.accent }}
                    >
                      <Github size={20} />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 hover:text-primary transition-colors"
                      style={{ color: currentTheme.accent }}
                    >
                      <ExternalLink size={20} />
                      <span>Live Demo</span>
                    </a>
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

