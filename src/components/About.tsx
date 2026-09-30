"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { SectionHeading } from "./ui/SectionHeading";

export default function About() {
  const stats = [
    { label: "Production ERP", value: "Real-world scale" },
    { label: "Core Backend", value: "Java / Spring Boot" },
    { label: "Architecture", value: "Microservices & APIs" },
    { label: "Security Focus", value: "RBAC & Authentication" }
  ];

  return (
    <section id="about" className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="About Me" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="prose prose-invert max-w-none text-[#D1D5DB] text-lg leading-relaxed whitespace-pre-line">
              {profile.about}
            </div>
          </motion.div>

          {/* Quick Stats / Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="p-6 bg-[#121212] border border-[#222222] rounded-xl hover:border-[#E3B140]/60 transition-colors"
              >
                <div className="text-sm font-mono text-[#E3B140] mb-2">{stat.label}</div>
                <div className="text-xl font-semibold text-[#FFFFFF]">{stat.value}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
