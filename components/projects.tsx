"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, ExternalLink } from 'lucide-react';
import { useTheme } from "@/lib/theme-context";
import Image from "next/image";
// import Video from "next-video"; //Removed as we are using the native <video> tag

const projects = [
  {
    title: "Emotion-Based Recommender",
    description: "It’s short, intuitive, and reflects the emotion-based recommendation concept.",
    image: "/images/project-emotion.webp",
    techStack: ["Python", "TensorFlow", "OpenCV", "Flask"],
    githubUrl: "https://github.com/rashika1319/EmotionBasedRecommendationSystem.git",
    liveUrl: "https://moodify-app.vercel.app/",
  },
  {
    title: "Credit Card Fraud Detection",
    description: "Machine learning model to detect fraudulent credit card transactions with high accuracy.",
    image: "/images/project-fraud.png",
    techStack: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
    githubUrl: "https://github.com/rashika1319/Credit_Card_Fraud_Detection.git",
    liveUrl: "https://www.kaggle.com/dalpozz/creditcardfraud",
  },
  {
    title: "Netflix Clone",
    description: "A responsive web application mimicking the Netflix interface with dynamic content loading.",
    image: "/images/project-netflix.png",
    techStack: ["React", "Firebase", "CSS", "TMDb API"],
    githubUrl: "https://github.com/rashika1319/Netflix-Homepage.git",
    liveUrl: "https://bankole2000.github.io/netflix/",
  },
  {
    title: "Dynamic To-Do List",
    description: "Interactive to-do list application with task prioritization and due dates.",
    image: "/images/project-todo.jpg",
    techStack: ["JavaScript", "HTML", "CSS", "Local Storage"],
    githubUrl: "https://github.com/rashika1319/Dynamic-To-Do-List.git",
    liveUrl: "https://apps.apple.com/us/app/todolist-task-manager/id1454122524?ls=1",
  },
  {
    title: "Scientific Calculator",
    description: "Feature-rich calculator web app with advanced mathematical functions.",
    image: "/images/project-calculator.webp",
    techStack: ["JavaScript", "HTML", "CSS", "Math.js"],
    githubUrl: "https://github.com/rashika1319/Calculator.git",
    liveUrl: "https://calculatorvikas.netlify.app/",
  },
];

export function Projects() {
  const { currentTheme } = useTheme();

  return (
    <section id="projects" className="relative py-20">
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
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden group backdrop-blur-md bg-white/10 border-none flex flex-col">
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle style={{ color: currentTheme.primary }}>{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="mb-4" style={{ color: currentTheme.secondary }}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4 mt-auto">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 rounded-full text-xs bg-transparent"
                        style={{
                          color: currentTheme.primary,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2 sm:gap-4 flex-wrap">
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
  );
}

