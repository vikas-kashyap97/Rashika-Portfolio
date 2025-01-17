"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useTheme } from "@/lib/theme-context";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LinkedinIcon as LinkedIn, GitlabIcon as GitHub, Mail, ArrowUp } from 'lucide-react';
import { useState, useEffect } from "react";

export function Contact() {
  const { currentTheme } = useTheme();
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  
  useEffect(() => {
    // Dynamically load the SMTP.js script
    const script = document.createElement("script");
    script.src = "https://smtpjs.com/v3/smtp.js";
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script); // Clean up the script when component unmounts
    };
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const sendMessage = (event: React.FormEvent) => {
    event.preventDefault();

    const name = document.getElementById("name") as HTMLInputElement;
    const email = document.getElementById("email") as HTMLInputElement;
    const number = document.getElementById("number") as HTMLInputElement;
    const message = document.getElementById("message") as HTMLTextAreaElement;

    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    // Make sure the script is loaded and Email is defined
    if (typeof Email !== "undefined") {
      Email.send({
        Host: "smtp.mailendo.com",
        Username: "finallproject2025@gmail.com",
        Password: "Project@2025", 
        To: 'finallproject2025@gmail.com', 
        From: email.value,
        Subject: "New Contact Form Enquiry",
        Body: `
          Name: ${name.value} <br>
          Email: ${email.value} <br>
          Phone/Whatsapp: ${number.value} <br>
          Message: ${message.value}
        `,
      })
      .then((message) => {
        setLoading(false);
        setSuccessMessage("Message sent successfully!");
      })
      .catch((error) => {
        setLoading(false);
        setErrorMessage("Failed to send the message. Please try again.");
      });
    } else {
      setLoading(false);
      setErrorMessage("SMTP.js is not loaded correctly.");
    }
  };

  return (
    <section id="contact" className="relative py-20">
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
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="max-w-md sm:max-w-lg md:max-w-2xl mx-auto backdrop-blur-md bg-white/10 border-none">
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
              <form className="space-y-4 sm:space-y-6" onSubmit={sendMessage}>
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-lg font-medium"
                    style={{ color: currentTheme.primary }}
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="w-full bg-white/20 border-none text-white placeholder-white/50"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-lg font-medium"
                    style={{ color: currentTheme.primary }}
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your email"
                    className="w-full bg-white/20 border-none text-white placeholder-white/50"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="number"
                    className="text-lg font-medium"
                    style={{ color: currentTheme.primary }}
                  >
                    Phone Number
                  </label>
                  <Input
                    id="number"
                    type="tel"
                    placeholder="Contact/Whatsapp Number"
                    className="w-full bg-white/20 border-none text-white placeholder-white/50"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-lg font-medium"
                    style={{ color: currentTheme.primary }}
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message"
                    className="w-full bg-white/20 border-none text-white placeholder-white/50"
                    rows={4}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full text-lg sm:text-xl font-bold py-4 sm:py-6"
                  style={{
                    backgroundColor: currentTheme.primary,
                    color: 'white',
                  }}
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>

              {successMessage && (
                <div className="mt-4 text-center text-green-500"
                style={{ color: currentTheme.primary }}>
                  {successMessage}
                </div>
              )}

              {errorMessage && (
                <div className="mt-4 text-center text-red-500"
                style={{ color: currentTheme.primary }}>
                  {errorMessage}
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>

        {/* Social Media and Scroll to Top */}
        <div className="mt-12 flex flex-col items-center space-y-6">
          <div className="flex justify-center space-x-4 sm:space-x-6">
            <motion.a
              href="https://www.linkedin.com/in/rashika-kumari-b00270288"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              style={{ color: currentTheme.primary }}
            >
              <LinkedIn size={32} />
            </motion.a>
            <motion.a
              href="https://github.com/rashika1319"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              style={{ color: currentTheme.primary }}
            >
              <GitHub size={32} />
            </motion.a>
            <motion.a
              href="mailto:rashika1319@gmail.com"
              whileHover={{ scale: 1.1 }}
              style={{ color: currentTheme.primary }}
            >
              <Mail size={32} />
            </motion.a>
          </div>
          <p className="text-center max-w-2xl text-lg" style={{ color: currentTheme.secondary }}>
            Let's join forces and create something extraordinary!
          </p>
          <Button
            onClick={scrollToTop}
            className="px-6 py-4 sm:px-8 sm:py-6 text-base sm:text-lg rounded-full"
            style={{
              backgroundColor: currentTheme.primary,
              color: 'black',
            }}
          >
            <ArrowUp size={20} />
            Move to Top
          </Button>
        </div>
      </div>
    </section>
  );
}

