"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { Mail, MapPin, Phone } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "@/components/ui/Icons";

export default function Contact() {
  return (
    <section id="contact" className="py-14 sm:py-16 bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#121212] border border-[#222222] rounded-2xl p-6 sm:p-8 md:p-9 relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#E3B140]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 relative z-10 items-center">
            {/* Left Column: Direct Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-[#FFFFFF] mb-2.5">
                Let&apos;s Build Something
              </h2>
              <p className="text-[#A1A1AA] text-sm sm:text-base mb-6 max-w-md leading-relaxed">
                I&apos;m open to Software Engineer, Backend Developer and Full Stack opportunities. Feel free to reach out.
              </p>
              
              <div className="space-y-4">
                <a 
                  href={`mailto:${profile.contact.email}`} 
                  className="flex items-center text-[#D1D5DB] hover:text-[#E3B140] transition-colors group"
                >
                  <div className="w-10 h-10 bg-[#000000] border border-[#262626] rounded-lg flex items-center justify-center mr-3.5 group-hover:border-[#E3B140]/60 transition-colors shrink-0">
                    <Mail className="w-4 h-4 text-[#E3B140]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#8E8E93] font-medium uppercase tracking-wider">Email</p>
                    <p className="font-mono text-xs sm:text-sm text-[#E2E8F0] group-hover:text-[#E3B140] transition-colors">{profile.contact.email}</p>
                  </div>
                </a>
                
                <a 
                  href={`tel:${profile.contact.phone}`} 
                  className="flex items-center text-[#D1D5DB] hover:text-[#E3B140] transition-colors group"
                >
                  <div className="w-10 h-10 bg-[#000000] border border-[#262626] rounded-lg flex items-center justify-center mr-3.5 group-hover:border-[#E3B140]/60 transition-colors shrink-0">
                    <Phone className="w-4 h-4 text-[#E3B140]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#8E8E93] font-medium uppercase tracking-wider">Phone</p>
                    <p className="font-mono text-xs sm:text-sm text-[#E2E8F0] group-hover:text-[#E3B140] transition-colors">{profile.contact.phone}</p>
                  </div>
                </a>
                
                <div className="flex items-center text-[#D1D5DB] cursor-default">
                  <div className="w-10 h-10 bg-[#000000] border border-[#262626] rounded-lg flex items-center justify-center mr-3.5 shrink-0">
                    <MapPin className="w-4 h-4 text-[#E3B140]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#8E8E93] font-medium uppercase tracking-wider">Location</p>
                    <p className="text-xs sm:text-sm text-[#E2E8F0]">India</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Right Column: Connect Online Box */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex flex-col justify-center"
            >
              <div className="bg-[#000000] border border-[#262626] rounded-xl p-5 sm:p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#FFFFFF] mb-1">Connect online</h3>
                  <p className="text-xs sm:text-sm text-[#8E8E93] mb-4">Find more of my work, professional history, and repositories.</p>
                </div>
                
                <div className="space-y-2.5">
                  <a 
                    href={profile.contact.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-between w-full p-3 sm:p-3.5 bg-[#121212] border border-[#222222] rounded-lg hover:border-[#E3B140] group transition-all text-xs sm:text-sm"
                  >
                    <div className="flex items-center">
                      <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-[#E3B140] mr-2.5" />
                      <span className="font-medium text-[#FFFFFF] group-hover:text-[#E3B140] transition-colors">LinkedIn Profile</span>
                    </div>
                    <span className="text-[#8E8E93] group-hover:text-[#E3B140] transition-colors">&rarr;</span>
                  </a>
                  
                  <a 
                    href={profile.contact.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-between w-full p-3 sm:p-3.5 bg-[#121212] border border-[#222222] rounded-lg hover:border-[#E3B140] group transition-all text-xs sm:text-sm"
                  >
                    <div className="flex items-center">
                      <Github className="w-4 h-4 sm:w-5 sm:h-5 text-[#FFFFFF] group-hover:text-[#E3B140] mr-2.5 transition-colors" />
                      <span className="font-medium text-[#FFFFFF] group-hover:text-[#E3B140] transition-colors">GitHub Repositories</span>
                    </div>
                    <span className="text-[#8E8E93] group-hover:text-[#E3B140] transition-colors">&rarr;</span>
                  </a>
                </div>
                
                <a 
                  href={`mailto:${profile.contact.email}`}
                  className="mt-4 sm:mt-5 w-full py-2.5 sm:py-3 bg-[#E3B140] hover:bg-[#d4a234] text-black font-semibold text-xs sm:text-sm rounded-lg text-center transition-colors shadow-[0_0_15px_rgba(227,177,64,0.25)] block"
                >
                  Send an Email
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
