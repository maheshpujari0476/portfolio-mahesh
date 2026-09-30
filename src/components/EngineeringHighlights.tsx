"use client";

import { motion } from "framer-motion";
import { engineeringHighlights } from "@/data/highlights";
import { SectionHeading } from "./ui/SectionHeading";
import { Badge } from "./ui/Badge";
import * as Icons from "lucide-react";

export default function EngineeringHighlights() {
  // Container variants for staggered animation
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Engineering Highlights" 
          subtitle="Complex systems and features I have architected and built in production environments."
        />

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
        >
          {engineeringHighlights.map((highlight) => {
            // Dynamically get the icon component from lucide-react
            const IconComponent = (Icons as unknown as Record<string, React.ComponentType<{ className?: string; strokeWidth?: number }>>)[highlight.icon] || Icons.Code;

            return (
              <motion.div 
                key={highlight.id}
                variants={itemVariants}
                className="bg-[#121212] border border-[#222222] rounded-xl p-6 hover:border-[#E3B140]/60 hover:shadow-[0_0_15px_rgba(227,177,64,0.1)] transition-all flex flex-col group h-full"
              >
                <div className="w-12 h-12 bg-[#18181B] border border-[#262626] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-[#E3B140]/40 transition-all">
                  <IconComponent className="w-6 h-6 text-[#E3B140]" strokeWidth={1.5} />
                </div>
                
                <h3 className="text-xl font-bold text-[#FFFFFF] group-hover:text-[#E3B140] transition-colors mb-3">{highlight.title}</h3>
                
                <p className="text-[#D1D5DB] text-sm leading-relaxed mb-6 flex-grow">
                  {highlight.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {highlight.technologies.slice(0, 3).map((tech, i) => (
                    <Badge key={i} variant="outline">{tech}</Badge>
                  ))}
                  {highlight.technologies.length > 3 && (
                    <Badge variant="outline">+{highlight.technologies.length - 3}</Badge>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
