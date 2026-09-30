import { profile } from "@/data/profile";
import { Mail } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "@/components/ui/Icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#222222] bg-[#000000] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
        <h2 className="text-xl font-bold text-[#E3B140] mb-2">{profile.name}.</h2>
        <p className="text-[#D1D5DB] mb-1">{profile.role}</p>
        <p className="text-[#A1A1AA] text-sm mb-6 max-w-md">Java | Spring Boot | Full Stack Development</p>
        
        <div className="flex space-x-6 mb-8">
          <a href={profile.contact.github} target="_blank" rel="noopener noreferrer" className="text-[#A1A1AA] hover:text-[#E3B140] transition-colors">
            <span className="sr-only">GitHub</span>
            <Github className="w-5 h-5" />
          </a>
          <a href={profile.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#A1A1AA] hover:text-[#E3B140] transition-colors">
            <span className="sr-only">LinkedIn</span>
            <Linkedin className="w-5 h-5" />
          </a>
          <a href={`mailto:${profile.contact.email}`} className="text-[#A1A1AA] hover:text-[#E3B140] transition-colors">
            <span className="sr-only">Email</span>
            <Mail className="w-5 h-5" />
          </a>
        </div>
        
        <p className="text-[#71717A] text-sm">
          &copy; {year} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
