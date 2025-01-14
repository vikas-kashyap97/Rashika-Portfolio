"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github } from 'lucide-react'

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management.",
    image: "/placeholder.svg",
    techStack: ["React", "Node.js", "MongoDB", "Socket.io"],
    githubUrl: "https://github.com",
  },
  {
    title: "AI-powered Chatbot",
    description: "An intelligent chatbot using natural language processing for customer support.",
    image: "/placeholder.svg",
    techStack: ["Python", "TensorFlow", "Flask", "React"],
    githubUrl: "https://github.com",
  },
  {
    title: "Blockchain Voting System",
    description: "A secure and transparent voting system built on blockchain technology.",
    image: "/placeholder.svg",
    techStack: ["Solidity", "Ethereum", "Web3.js", "React"],
    githubUrl: "https://github.com",
  },
]

export function ProjectShowcase() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="projects" className="py-20 bg-blue-900/30 backdrop-blur-lg">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className="overflow-hidden bg-blue-800/50 border-teal-500/30 hover:border-teal-500 transition-colors duration-300"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <CardHeader className="p-0">
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-2xl font-bold text-white mb-2">{project.title}</CardTitle>
                  <CardDescription className="text-teal-300 mb-4">{project.description}</CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-teal-700 text-white">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="bg-blue-700/50 p-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-white hover:text-teal-300 transition-colors duration-300"
                  >
                    <Github className="mr-2" />
                    View on GitHub
                  </a>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

