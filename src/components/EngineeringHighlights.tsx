"use client";

import { motion } from "framer-motion";
import { engineeringHighlights } from "@/data/highlights";
import { SectionHeading } from "./ui/SectionHeading";
import { Badge } from "./ui/Badge";
import * as Icons from "lucide-react";

export default function EngineeringHighlights() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <section className="py-16 sm:py-20 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Engineering Highlights" 
          subtitle="Complex systems and features I have architected and built in production environments."
        />

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mt-10"
        >
          {engineeringHighlights.map((highlight) => {
            const IconComponent = (Icons as unknown as Record<string, React.ComponentType<{ className?: string; strokeWidth?: number }>>)[highlight.icon] || Icons.Code;

            return (
              <motion.div 
                key={highlight.id}
                variants={itemVariants}
                className="bg-[#121212] border border-[#222222] rounded-xl p-5 hover:border-[#E3B140]/60 hover:shadow-[0_0_15px_rgba(227,177,64,0.12)] transition-all flex items-start gap-4 group"
              >
                {/* Compact Left Icon */}
                <div className="shrink-0 w-11 h-11 bg-[#18181B] border border-[#262626] rounded-lg flex items-center justify-center group-hover:scale-105 group-hover:border-[#E3B140]/50 transition-all mt-0.5">
                  <IconComponent className="w-5 h-5 text-[#E3B140]" strokeWidth={1.5} />
                </div>
                
                {/* Right Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg font-bold text-[#FFFFFF] group-hover:text-[#E3B140] transition-colors mb-1.5">
                    {highlight.title}
                  </h3>
                  
                  <p className="text-[#A1A1AA] text-sm leading-relaxed mb-3">
                    {highlight.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1.5">
                    {highlight.technologies.map((tech, i) => (
                      <Badge key={i} variant="outline" className="text-[11px] py-0.5 px-2 bg-[#000000]/60 border-[#2A2A2A]">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
