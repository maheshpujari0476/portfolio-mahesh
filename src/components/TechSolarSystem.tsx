"use client";

import React from "react";
import {
  ReactIcon,
  JavaScriptIcon,
  MongoDBIcon,
  NextJsIcon,
  JavaIcon,
  SpringBootIcon,
  GitIcon,
  DockerIcon,
  NodeJsIcon,
  MySQLIcon,
} from "./ui/TechIcons";

interface PlanetProps {
  icon: React.ReactNode;
  label: string;
}

function PlanetCard({ icon, label }: PlanetProps) {
  return (
    <div className="group relative flex flex-col items-center justify-center px-2.5 py-1.5 rounded-lg bg-[#0F111A]/90 backdrop-blur-md border border-[#23273A] hover:border-[#E3B140]/70 hover:shadow-[0_0_15px_rgba(227,177,64,0.25)] transition-all duration-300 select-none shadow-md shadow-black/80 hover:scale-110 min-w-[50px]">
      <div className="flex items-center justify-center w-4 h-4 sm:w-[18px] sm:h-[18px] mb-0.5 transition-transform group-hover:scale-110">
        {icon}
      </div>
      <span className="text-[9px] sm:text-[10px] font-medium text-[#E2E8F0] tracking-tight whitespace-nowrap">
        {label}
      </span>
    </div>
  );
}

export default function TechSolarSystem() {
  return (
    <div className="relative w-full max-w-[340px] min-[420px]:max-w-[400px] sm:max-w-[480px] lg:max-w-[540px] aspect-square mx-auto flex items-center justify-center select-none pause-orbit">
      {/* Responsive scaling wrapper to guarantee flawless mobile fit */}
      <div className="relative w-[540px] h-[540px] shrink-0 scale-[0.6] min-[420px]:scale-[0.7] sm:scale-[0.84] lg:scale-100 origin-center flex items-center justify-center transition-transform duration-300">
        {/* Background Ambient Violet Glow for the Galaxy */}
        <div className="absolute w-[320px] h-[320px] rounded-full bg-violet-600/10 blur-[90px] pointer-events-none" />
        <div className="absolute w-[180px] h-[180px] rounded-full bg-[#E3B140]/5 blur-[60px] pointer-events-none" />

      {/* ============================================================ */}
      {/* CENTER SUN CORE (< / > DEV) */}
      {/* ============================================================ */}
      <div className="relative z-30 flex flex-col items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#141224] border border-[#3E3468] shadow-[0_0_30px_rgba(139,92,246,0.35)] transition-transform duration-500 hover:scale-105">
        <span className="text-violet-400 font-mono font-bold text-base sm:text-lg tracking-wider">
          &lt;/&gt;
        </span>
        <span className="text-[8px] sm:text-[9px] font-mono font-semibold tracking-wider text-violet-300/80 uppercase">
          ENGINEER
        </span>
      </div>

      {/* ============================================================ */}
      {/* ORBIT 1: INNER (Diameter: 170px) -> React */}
      {/* ============================================================ */}
      <div className="absolute w-[170px] h-[170px] rounded-full border border-white/10 pointer-events-none" />
      <div className="absolute w-[170px] h-[170px] rounded-full animate-orbit-1">
        {/* React at Top (0°) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="animate-counter-1">
            <PlanetCard icon={<ReactIcon className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />} label="React" />
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* ORBIT 2: MID-INNER (Diameter: 280px) -> JavaScript, MongoDB */}
      {/* ============================================================ */}
      <div className="absolute w-[280px] h-[280px] rounded-full border border-white/10 pointer-events-none" />
      <div className="absolute w-[280px] h-[280px] rounded-full animate-orbit-2">
        {/* JavaScript (Left: 270°) */}
        <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2">
          <div className="animate-counter-2">
            <PlanetCard icon={<JavaScriptIcon className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />} label="JavaScript" />
          </div>
        </div>
        {/* MongoDB (Right: 90°) */}
        <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2">
          <div className="animate-counter-2">
            <PlanetCard icon={<MongoDBIcon className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />} label="MongoDB" />
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* ORBIT 3: MID-OUTER (Diameter: 400px) -> Next.js, Java, Spring Boot */}
      {/* ============================================================ */}
      <div className="absolute w-[400px] h-[400px] rounded-full border border-white/10 pointer-events-none" />
      <div className="absolute w-[400px] h-[400px] rounded-full animate-orbit-3">
        {/* Next.js (Top: 0°) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="animate-counter-3">
            <PlanetCard icon={<NextJsIcon className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />} label="Next.js" />
          </div>
        </div>
        {/* Java (Bottom-Right: 120°) -> top: 75%, left: 93.3% */}
        <div className="absolute top-[75%] left-[93.3%] -translate-x-1/2 -translate-y-1/2">
          <div className="animate-counter-3">
            <PlanetCard icon={<JavaIcon className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />} label="Java" />
          </div>
        </div>
        {/* Spring Boot (Bottom-Left: 240°) -> top: 75%, left: 6.7% */}
        <div className="absolute top-[75%] left-[6.7%] -translate-x-1/2 -translate-y-1/2">
          <div className="animate-counter-3">
            <PlanetCard icon={<SpringBootIcon className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />} label="Spring Boot" />
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* ORBIT 4: OUTER (Diameter: 520px) -> Git, MySQL, Docker, Node.js */}
      {/* ============================================================ */}
      <div className="absolute w-[520px] h-[520px] rounded-full border border-white/10 pointer-events-none" />
      <div className="absolute w-[520px] h-[520px] rounded-full animate-orbit-4">
        {/* Git (Top: 0°) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="animate-counter-4">
            <PlanetCard icon={<GitIcon className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />} label="Git" />
          </div>
        </div>
        {/* MySQL (Right: 90°) */}
        <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2">
          <div className="animate-counter-4">
            <PlanetCard icon={<MySQLIcon className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />} label="MySQL" />
          </div>
        </div>
        {/* Docker (Bottom: 180°) */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
          <div className="animate-counter-4">
            <PlanetCard icon={<DockerIcon className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />} label="Docker" />
          </div>
        </div>
        {/* Node.js (Left: 270°) */}
        <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2">
          <div className="animate-counter-4">
            <PlanetCard icon={<NodeJsIcon className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />} label="Node.js" />
          </div>
        </div>
      </div>
    </div>
  </div>
);
}
