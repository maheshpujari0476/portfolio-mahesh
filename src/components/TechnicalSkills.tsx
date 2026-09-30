"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";
import { SectionHeading } from "./ui/SectionHeading";

export default function TechnicalSkills() {
  return (
    <section id="skills" className="py-14 sm:py-16 bg-[#000000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Technical Skills" 
          subtitle="Technologies and tools I use to build production systems."
        />

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="bg-[#0D0D0D] border border-[#1F1F1F] rounded-xl p-4 sm:p-5 hover:border-[#2A2A2A] transition-colors"
            >
              <h3 className="text-sm sm:text-base font-bold text-[#FFFFFF] mb-3 flex items-center">
                <span className="w-3.5 h-[2px] bg-[#E3B140] mr-2.5 rounded-full"></span>
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 bg-[#141414] border border-[#242424] rounded-md text-xs sm:text-[13px] text-[#D1D5DB] font-medium hover:text-[#E3B140] hover:border-[#E3B140]/40 hover:bg-[#1A1A1A] transition-all cursor-default select-none"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
