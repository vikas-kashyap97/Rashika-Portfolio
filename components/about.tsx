"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/lib/theme-context";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function About() {
  const { currentTheme } = useTheme();

  return (
    <section id="about" className="relative py-20">
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
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
              <div>
                <h3 className="text-2xl font-semibold" style={{ color: currentTheme.secondary }}>
                  Name
                </h3>
                <p className="text-xl" style={{ color: currentTheme.primary }}>
                  Rashika Kumari
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold" style={{ color: currentTheme.secondary }}>
                  Email
                </h3>
                <p className="text-xl" style={{ color: currentTheme.primary }}>
                  rashika1319@gmail.com
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold" style={{ color: currentTheme.secondary }}>
                  Education
                </h3>
                <p className="text-xl" style={{ color: currentTheme.primary }}>
                  B.Tech (I.T.)
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold" style={{ color: currentTheme.secondary }}>
                  Address
                </h3>
                <p className="text-xl" style={{ color: currentTheme.primary }}>
                  Prayagraj, Uttar Pradesh
                </p>
              </div>
            </div>

            <p
              className="text-lg sm:text-xl md:text-2xl leading-relaxed mt-4 sm:mt-6"
              style={{ color: currentTheme.secondary }}
            >
              Hi, I'm a final-year B.Tech student specializing
              in Information Technology from Prayagraj, Uttar Pradesh, India.
              I'm passionate about software development and have a keen
              interest in web technologies and machine learning.
            </p>
            <p
              className="text-lg sm:text-xl md:text-2xl leading-relaxed mt-4 sm:mt-6"
              style={{ color: currentTheme.secondary }}
            >
              With a strong foundation in programming and problem-solving, I
              strive to create innovative solutions that make a positive
              impact. I'm always eager to learn new technologies and take on
              challenging projects.
            </p>
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button
                className="text-lg px-8 py-6 rounded-full"
                style={{
                  backgroundColor: currentTheme.primary,
                  color: "black",
                }}
              >
                Download Resume
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            className="w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[29rem] lg:h-[29rem] group">
              <Image
                src="/images/Rashika 2.jpeg"
                alt="Rashika Kumari"
                width={464}
                height={464}
                className="rounded-full object-cover border-4 w-full h-full"
                style={{ borderColor: currentTheme.primary }}
              />
              <div
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: `${currentTheme.primary}40` }}
              ></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

