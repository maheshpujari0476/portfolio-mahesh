"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { experiences } from "@/data/experience";
import { SectionHeading } from "./ui/SectionHeading";
import { Badge } from "./ui/Badge";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#000000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Professional Experience" 
          subtitle="My track record in building and maintaining production systems."
        />
        
        <div className="relative border-l border-[#222222] ml-3 md:ml-6 mt-12 space-y-16">
          {experiences.map((exp, index) => (
            <ExperienceCard key={exp.id} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ exp, index }: { exp: (typeof experiences)[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const showHighlights = exp.highlights.slice(0, 4);
  const hiddenHighlights = exp.highlights.slice(4);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 md:pl-12"
    >
      {/* Timeline Node */}
      <div className={`absolute left-0 top-0 w-6 h-6 -translate-x-[12.5px] rounded-full border-4 border-[#000000] ${exp.isPrimary ? 'bg-[#E3B140]' : 'bg-[#222222]'}`}></div>

      <div className="bg-[#121212] border border-[#222222] rounded-xl p-6 md:p-8 hover:border-[#E3B140]/40 transition-colors shadow-lg">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
          <div>
            <h3 className="text-2xl font-bold text-[#FFFFFF]">{exp.role}</h3>
            <p className="text-lg font-medium text-[#E3B140] mt-1">{exp.company}</p>
          </div>
          <div className="mt-2 md:mt-0 text-[#D1D5DB] font-mono text-sm bg-[#000000] px-3 py-1 rounded-full border border-[#262626] inline-block">
            {exp.period}
          </div>
        </div>

        <p className="text-[#D1D5DB] mb-6 text-lg">{exp.description}</p>

        {/* Bullet Points */}
        <div className="space-y-4">
          <ul className="space-y-3">
            {showHighlights.map((highlight: string, i: number) => (
              <li key={i} className="flex items-start text-[#D1D5DB]">
                <span className="text-[#E3B140] mr-3 mt-1.5 leading-none">▹</span>
                <span className="leading-relaxed">{highlight}</span>
              </li>
            ))}
          </ul>

          {hiddenHighlights.length > 0 && (
            <>
              {expanded && (
                <motion.ul
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-3 pt-3 overflow-hidden"
                >
                  {hiddenHighlights.map((highlight: string, i: number) => (
                    <li key={i} className="flex items-start text-[#D1D5DB]">
                      <span className="text-[#E3B140] mr-3 mt-1.5 leading-none">▹</span>
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </motion.ul>
              )}
              <button
                onClick={() => setExpanded(!expanded)}
                className="text-[#E3B140] hover:text-[#f3c868] text-sm font-medium flex items-center mt-4 transition-colors focus:outline-none"
              >
                {expanded ? (
                  <>View less <ChevronUp className="w-4 h-4 ml-1" /></>
                ) : (
                  <>View more <ChevronDown className="w-4 h-4 ml-1" /></>
                )}
              </button>
            </>
          )}
        </div>

        {/* Project Highlight Box (BAMS ERP) */}
        {exp.projectHighlight && (
          <div className="mt-10 bg-[#000000] border border-[#262626] rounded-lg p-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-[#E3B140]"></div>
            
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h4 className="text-[#FFFFFF] font-bold text-xl">{exp.projectHighlight.title}</h4>
                <p className="text-[#A1A1AA] text-sm font-mono mt-1">{exp.projectHighlight.subtitle}</p>
              </div>
            </div>

            <p className="text-[#D1D5DB] mb-4">{exp.projectHighlight.description}</p>
            
            <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-2">
              {exp.projectHighlight.features.map((feature: string, i: number) => (
                <div key={i} className="flex items-center text-sm text-[#D1D5DB]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E3B140] mr-2"></span>
                  {feature}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {exp.projectHighlight.technologies.map((tech: string, i: number) => (
                <Badge key={i} variant="secondary">{tech}</Badge>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
