"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { Badge } from "./ui/Badge";
import FloatingPhysicsGrid from "./ui/FloatingPhysicsGrid";
import TechSolarSystem from "./TechSolarSystem";
import { Mail, ArrowRight, Download } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "@/components/ui/Icons";

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const coreTech = ["Java", "Spring Boot", "React.js", "Next.js", "Node.js", "PostgreSQL", "Microservices"];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#000000]">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Subtle Ambient Engineering Grid */}
        <div className="absolute inset-0 ambient-grid pointer-events-none opacity-60" />
        
        {/* Interactive Floating Physics Dots */}
        <FloatingPhysicsGrid />

        {/* Dynamic Cursor Spotlight Glow (Warm Golden Yellow) */}
        {mousePos.x > 0 && (
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-300"
            style={{
              backgroundImage: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(227, 177, 64, 0.08) 0%, transparent 22%)`,
            }}
          />
        )}

        {/* Soft Ambient Glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#E3B140]/5 rounded-full blur-[128px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#E3B140]/5 rounded-full blur-[128px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        
        {/* Left Column: Content */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-[#E3B140] font-mono mb-4 flex items-center text-sm tracking-wide">
              <span className="w-8 h-[1px] bg-[#E3B140] mr-4"></span>
              Hello, welcome
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#FFFFFF] tracking-tight mb-2">
              I&apos;m {profile.name}
            </h1>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#A1A1AA] mb-6">
              {profile.headline}
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-[#D1D5DB] max-w-xl mb-8 leading-relaxed"
          >
            {profile.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-2 mb-10"
          >
            {coreTech.map((tech, index) => (
              <Badge key={index} variant="primary">{tech}</Badge>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <a 
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-semibold rounded-md text-black bg-[#E3B140] hover:bg-[#d4a234] transition-colors shadow-[0_0_20px_rgba(227,177,64,0.25)] group"
            >
              contact me
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border border-[#262626] text-base font-medium rounded-md text-[#FFFFFF] bg-[#121212] hover:bg-[#1A1A1A] hover:border-[#E3B140] hover:text-[#E3B140] transition-colors group"
            >
              <Download className="mr-2 w-4 h-4" />
              Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center space-x-6"
          >
            <a href={profile.contact.github} target="_blank" rel="noopener noreferrer" className="text-[#A1A1AA] hover:text-[#E3B140] transition-colors">
              <span className="sr-only">GitHub</span>
              <Github className="w-6 h-6" />
            </a>
            <a href={profile.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#A1A1AA] hover:text-[#E3B140] transition-colors">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="w-6 h-6" />
            </a>
            <a href={`mailto:${profile.contact.email}`} className="text-[#A1A1AA] hover:text-[#E3B140] transition-colors">
              <span className="sr-only">Email</span>
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>
        </div>

        {/* Right Column: Orbiting Tech Solar System */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full flex items-center justify-center relative py-6"
        >
          <TechSolarSystem />
        </motion.div>

      </div>
    </section>
  );
}
