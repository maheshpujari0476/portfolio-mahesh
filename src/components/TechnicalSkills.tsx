"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";
import { SectionHeading } from "./ui/SectionHeading";

export default function TechnicalSkills() {
  return (
    <section id="skills" className="py-24 bg-[#000000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Technical Skills" 
          subtitle="Technologies and tools I use to build production systems."
        />

        <div className="mt-12 space-y-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-bold text-[#FFFFFF] mb-4 flex items-center">
                <span className="w-4 h-[1px] bg-[#E3B140] mr-3"></span>
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="px-4 py-2 bg-[#121212] border border-[#222222] rounded-lg text-[#D1D5DB] font-medium hover:text-[#E3B140] hover:border-[#E3B140]/50 hover:bg-[#18181B] transition-all cursor-default"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
