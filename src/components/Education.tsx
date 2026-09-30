"use client";

import { motion } from "framer-motion";
import { education, certifications } from "@/data/education";
import { SectionHeading } from "./ui/SectionHeading";
import { GraduationCap, Award } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-24 bg-[#000000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Education & Certifications" 
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Education Column */}
          <div>
            <div className="flex items-center mb-8">
              <GraduationCap className="w-6 h-6 text-[#E3B140] mr-3" />
              <h3 className="text-2xl font-bold text-[#FFFFFF]">Academic Background</h3>
            </div>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-[#121212] border border-[#222222] rounded-xl p-6 hover:border-[#E3B140]/40 transition-colors"
                >
                  <h4 className="text-xl font-bold text-[#FFFFFF]">{edu.degree}</h4>
                  <p className="text-[#E3B140] font-medium mt-1">{edu.institution}</p>
                  
                  <div className="flex justify-between items-center mt-4 pt-4 border-t border-[#262626]">
                    <span className="text-[#D1D5DB] text-sm font-mono">{edu.period}</span>
                    <span className="text-[#FFFFFF] font-semibold bg-[#000000] px-3 py-1 rounded-md text-sm border border-[#262626]">{edu.score}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certification Column */}
          <div>
            <div className="flex items-center mb-8">
              <Award className="w-6 h-6 text-[#E3B140] mr-3" />
              <h3 className="text-2xl font-bold text-[#FFFFFF]">Certifications</h3>
            </div>
            
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-[#121212] border border-[#222222] rounded-xl p-6 flex items-start hover:border-[#E3B140]/40 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#E3B140]/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <Award className="w-5 h-5 text-[#E3B140]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#FFFFFF]">{cert.title}</h4>
                    <p className="text-[#D1D5DB] mt-1">Issued by {cert.issuer}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
