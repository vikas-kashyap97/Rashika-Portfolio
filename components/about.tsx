"use client"

import { motion } from "framer-motion"
import { useTheme } from "@/lib/theme-context";
import Image from "next/image"

export function About() {

const { currentTheme } = useTheme();
  return (
    <section id="about" className="py-20 bg-purple-900/30 backdrop-blur-lg">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-12" style={{ color: currentTheme.primary }}>About Me</h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xl md:text-2xl leading-relaxed" style={{ color: currentTheme.primary }}>
              Hi, I'm Rashika Kumari, a final-year B.Tech student specializing in Information Technology from Prayagraj, Uttar Pradesh, India. I'm passionate about software development and have a keen interest in web technologies and machine learning.
            </p>
            <p className="text-xl md:text-2xl leading-relaxed mt-4" style={{ color: currentTheme.primary }}>
              With a strong foundation in programming and problem-solving, I strive to create innovative solutions that make a positive impact. I'm always eager to learn new technologies and take on challenging projects.
            </p>
          </motion.div>
          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-[20rem] h-[21rem] group">
              <Image
                src="public\rashika-photo-2.jpeg"
                alt="Rashika Kumari"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

