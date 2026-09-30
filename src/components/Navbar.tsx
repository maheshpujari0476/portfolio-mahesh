"use client";

import Link from 'next/link';
import { Mail, Menu, X } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from '@/components/ui/Icons';
import { useState, useEffect } from 'react';
import { profile } from '@/data/profile';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#000000]/85 backdrop-blur-md border-b border-[#222222]' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Name */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-xl font-bold tracking-tight text-[#E3B140] transition-colors">
              SDE<span className="text-[#E3B140]"></span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-[#D1D5DB] hover:text-[#E3B140] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <a href={profile.contact.github} target="_blank" rel="noopener noreferrer" className="text-[#A1A1AA] hover:text-[#E3B140] transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href={profile.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#A1A1AA] hover:text-[#E3B140] transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href={`mailto:${profile.contact.email}`} className="text-[#A1A1AA] hover:text-[#E3B140] transition-colors">
              <Mail className="w-5 h-5" />
            </a>
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="ml-4 px-4 py-2 text-sm font-medium rounded-md text-[#FFFFFF] bg-[#141414] hover:bg-[#1E1E1E] border border-[#2A2A2A] hover:border-[#E3B140] hover:text-[#E3B140] transition-all"
            >
              Resume
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#A1A1AA] hover:text-[#E3B140] focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A0A0A] border-b border-[#222222]">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-[#D1D5DB] hover:text-[#E3B140] hover:bg-[#141414]"
              >
                {link.name}
              </Link>
            ))}
            <div className="flex space-x-4 px-3 py-4 border-t border-[#222222] mt-4">
              <a href={profile.contact.github} target="_blank" rel="noopener noreferrer" className="text-[#A1A1AA] hover:text-[#E3B140]">
                <Github className="w-5 h-5" />
              </a>
              <a href={profile.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#A1A1AA] hover:text-[#E3B140]">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="ml-auto text-sm text-[#E3B140] font-medium hover:underline">
                Download Resume &rarr;
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
