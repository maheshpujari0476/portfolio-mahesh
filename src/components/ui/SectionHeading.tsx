"use client";

import { motion } from "framer-motion";

export const SectionHeading = ({ title, subtitle }: { title: string; subtitle?: string }) => {
  return (
    <div className="mb-12">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold text-[#FFFFFF] flex items-center"
      >
        <span className="w-8 h-1 bg-[#E3B140] mr-4 rounded-full inline-block"></span>
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 text-[#A1A1AA] text-lg max-w-2xl"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};
