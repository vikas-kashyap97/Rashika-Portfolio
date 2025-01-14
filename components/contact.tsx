"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useTheme } from "@/lib/theme-context";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  LinkedinIcon as LinkedIn,
  GitlabIcon as GitHub,
  Mail,
} from "lucide-react";

export function Contact() {
  const { currentTheme } = useTheme();
  return (
    <section id="contact" className="py-20 bg-purple-900/50 backdrop-blur-lg">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="max-w-2xl mx-auto bg-transparant border-teal-500/30">
            <CardHeader>
              <CardTitle
                className="text-5xl font-bold text-center"
                style={{ color: currentTheme.primary }}
              >
                Get in Touch
              </CardTitle>
              <CardDescription
                className="text-center text-xl"
                style={{ color: currentTheme.secondary }}
              >
                I'd love to hear from you. Send me a message!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className=""
                    style={{ color: currentTheme.primary }}
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="bg-transparant text-white placeholder-teal-300"
                    style={{ borderColor: currentTheme.primary }}
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className=""
                    style={{ color: currentTheme.primary }}
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your email"
                    className="bg-transparant text-white placeholder-teal-300"
                    style={{ borderColor: currentTheme.primary }}
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className=""
                    style={{ color: currentTheme.primary }}
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message"
                    className="bg-transparant text-white placeholder-teal-300"
                    style={{ borderColor: currentTheme.primary, }}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full"
                  style={{
                    backgroundColor: currentTheme.primary,
                    color: "white",
                  }}
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
        <div className="mt-12 flex justify-center space-x-6">
          <motion.a
            href="https://www.linkedin.com/in/rashika-kumari"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            style={{ color: currentTheme.primary, }}
          >
            <LinkedIn size={32} />
          </motion.a>
          <motion.a
            href="https://github.com/rashika-kumari"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            style={{ color: currentTheme.primary, }}
          >
            <GitHub size={32} />
          </motion.a>
          <motion.a
            href="mailto:rashika1319@gmail.com"
            whileHover={{ scale: 1.1 }}
            style={{ color: currentTheme.primary, }}
          >
            <Mail size={32} />
          </motion.a>
        </div>
      </div>
    </section>
  );
}

