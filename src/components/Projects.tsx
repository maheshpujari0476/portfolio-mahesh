"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { SectionHeading } from "./ui/SectionHeading";
import { Badge } from "./ui/Badge";
import { ArrowRight } from "lucide-react";
import { GithubIcon as Github } from "@/components/ui/Icons";

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-20 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Selected Projects" 
          subtitle="Independent development work showcasing full-stack capabilities."
        />

        <div className="mt-8 sm:mt-10 grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-[#121212] border border-[#222222] rounded-xl overflow-hidden hover:border-[#E3B140]/50 transition-colors group flex flex-col h-full"
            >
              <div className="p-5 sm:p-6 flex flex-col h-full relative">
                {/* Decorative Number */}
                <div className="absolute top-4 right-5 text-4xl font-bold text-[#222222]/80 font-mono z-0 pointer-events-none select-none">
                  {String(index + 1).padStart(2, '0')}
                </div>
                
                <div className="relative z-10 flex-grow">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#FFFFFF] mb-2.5 group-hover:text-[#E3B140] transition-colors">
                    {project.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-1.5 mb-3.5">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="primary">{tech}</Badge>
                    ))}
                  </div>
                  
                  <p className="text-[#D1D5DB] mb-4 text-sm sm:text-base leading-relaxed">
                    {project.description}
                  </p>
                  
                  <ul className="space-y-1.5 mb-5">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-xs sm:text-sm text-[#A1A1AA]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E3B140] mr-2.5 mt-1.5 shrink-0"></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="relative z-10 mt-auto pt-4 border-t border-[#222222] flex items-center justify-between">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs sm:text-sm text-[#A1A1AA] hover:text-[#E3B140] transition-colors"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    <span>View Repository</span>
                  </a>
                  
                  <a 
                    href={project.githubUrl}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-[#18181B] border border-[#262626] flex items-center justify-center group-hover:bg-[#E3B140] group-hover:border-[#E3B140] transition-all"
                  >
                    <ArrowRight className="w-4 h-4 text-[#A1A1AA] group-hover:text-black" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
