"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { Mail, MapPin, Phone } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "@/components/ui/Icons";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#121212] border border-[#222222] rounded-2xl p-8 md:p-12 relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#E3B140]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#FFFFFF] mb-4">
                Let&apos;s Build Something
              </h2>
              <p className="text-[#D1D5DB] text-lg mb-8 max-w-md">
                I&apos;m open to Software Engineer, Backend Developer and Full Stack opportunities. Feel free to reach out.
              </p>
              
              <div className="space-y-6">
                <a 
                  href={`mailto:${profile.contact.email}`} 
                  className="flex items-center text-[#D1D5DB] hover:text-[#E3B140] transition-colors group"
                >
                  <div className="w-12 h-12 bg-[#000000] border border-[#262626] rounded-lg flex items-center justify-center mr-4 group-hover:border-[#E3B140]/60 transition-colors">
                    <Mail className="w-5 h-5 text-[#E3B140]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#FFFFFF] font-medium">Email</p>
                    <p className="font-mono text-[#A1A1AA] group-hover:text-[#E3B140] transition-colors">{profile.contact.email}</p>
                  </div>
                </a>
                
                <a 
                  href={`tel:${profile.contact.phone}`} 
                  className="flex items-center text-[#D1D5DB] hover:text-[#E3B140] transition-colors group"
                >
                  <div className="w-12 h-12 bg-[#000000] border border-[#262626] rounded-lg flex items-center justify-center mr-4 group-hover:border-[#E3B140]/60 transition-colors">
                    <Phone className="w-5 h-5 text-[#E3B140]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#FFFFFF] font-medium">Phone</p>
                    <p className="font-mono text-[#A1A1AA] group-hover:text-[#E3B140] transition-colors">{profile.contact.phone}</p>
                  </div>
                </a>
                
                <div className="flex items-center text-[#D1D5DB] cursor-default">
                  <div className="w-12 h-12 bg-[#000000] border border-[#262626] rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="w-5 h-5 text-[#E3B140]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#FFFFFF] font-medium">Location</p>
                    <p className="text-[#A1A1AA]">India</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col justify-center"
            >
              <div className="bg-[#000000] border border-[#262626] rounded-xl p-8 flex flex-col h-full justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#FFFFFF] mb-2">Connect online</h3>
                  <p className="text-[#D1D5DB] mb-8">Find more of my work, professional history, and repositories.</p>
                </div>
                
                <div className="space-y-4">
                  <a 
                    href={profile.contact.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-between w-full p-4 bg-[#121212] border border-[#222222] rounded-lg hover:border-[#E3B140] group transition-all"
                  >
                    <div className="flex items-center">
                      <Linkedin className="w-6 h-6 text-[#E3B140] mr-3" />
                      <span className="font-medium text-[#FFFFFF] group-hover:text-[#E3B140] transition-colors">LinkedIn Profile</span>
                    </div>
                    <span className="text-[#A1A1AA] group-hover:text-[#E3B140] transition-colors">&rarr;</span>
                  </a>
                  
                  <a 
                    href={profile.contact.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-between w-full p-4 bg-[#121212] border border-[#222222] rounded-lg hover:border-[#E3B140] group transition-all"
                  >
                    <div className="flex items-center">
                      <Github className="w-6 h-6 text-[#FFFFFF] group-hover:text-[#E3B140] mr-3 transition-colors" />
                      <span className="font-medium text-[#FFFFFF] group-hover:text-[#E3B140] transition-colors">GitHub Repositories</span>
                    </div>
                    <span className="text-[#A1A1AA] group-hover:text-[#E3B140] transition-colors">&rarr;</span>
                  </a>
                </div>
                
                <a 
                  href={`mailto:${profile.contact.email}`}
                  className="mt-8 w-full py-4 bg-[#E3B140] hover:bg-[#d4a234] text-black font-semibold rounded-lg text-center transition-colors shadow-[0_0_15px_rgba(227,177,64,0.25)]"
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
