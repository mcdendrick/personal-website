"use client";
import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const PersonalWebsite: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);



  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Cursor light effect */}
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition-transform duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.1), transparent 40%)`
        }}
      />
   

      {/* Rest of the component remains exactly the same */}
      {/* Navigation */}
      <nav className="bg-custom-secondary backdrop-blur-sm shadow-lg z-40 relative">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold">Taylor McKendrick</h1>
            <div className="space-x-4">
              <a href="#about" className="opacity-80 hover:opacity-100 transition-opacity">About</a>
              <a href="#experience" className="opacity-80 hover:opacity-100 transition-opacity">Experience</a>
              <a href="#education" className="opacity-80 hover:opacity-100 transition-opacity">Education</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-custom-secondary backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold">Hello, I&apos;m Taylor McKendrick</h1>
            <p className="text-xl opacity-80 mb-8">Full Stack Developer | Cancer Survivor | Problem Solver</p>
            <div className="flex justify-center space-x-4">
              <a href="https://linkedin.com/in/taylor-mckendrick" className="p-2 opacity-80 hover:opacity-100 transition-opacity">
                <Linkedin size={24} />
              </a>
              <a href="https://github.com/mcdendrick" className="p-2 opacity-80 hover:opacity-100 transition-opacity">
                <Github size={24} />
              </a>
              <a href="mailto:taylor.mckendrick@gmail.com" className="p-2 opacity-80 hover:opacity-100 transition-opacity">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <div className="bg-custom-secondary backdrop-blur-sm rounded-lg p-6">
            <p className="opacity-80 mb-4">
              I&apos;m a full stack developer with experience in Python, JavaScript, Java, Ruby on Rails, and C++. 
              As a recent graduate from BYU-Hawaii with a 3.97 GPA in Computer Science, I bring a strong 
              foundation in both technical and soft skills.
            </p>
            <p className="opacity-80">
              I&apos;m fluent in English, Dutch, and Flemish, and have experience working in diverse, 
              international environments. As a 2024 cancer survivor, I&apos;ve learned the importance of 
              resilience and maintaining a positive outlook while tackling challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Experience</h2>
          <div className="space-y-6">
            <div className="bg-custom-secondary backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-bold">Lead Reading and Writing Tutor</h3>
              <p className="opacity-80">BYU-Hawaii Reading Writing Lab | 2022-2024</p>
              <ul className="mt-4 space-y-2 opacity-80">
                <li>• Published 2 interdisciplinary research articles</li>
                <li>• Led team of 15+ writing tutors</li>
                <li>• Organized 6 workshops with 35+ student attendance</li>
              </ul>
            </div>
            <div className="bg-custom-secondary backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-bold">Teaching Assistant</h3>
              <p className="opacity-80">BYU-Hawaii Economics Department | 2022-2023</p>
              <ul className="mt-4 space-y-2 opacity-80">
                <li>• Taught review sessions to 40+ students</li>
                <li>• Created and graded assessments</li>
                <li>• Provided one-on-one mentoring</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Education</h2>
          <div className="bg-custom-secondary backdrop-blur-sm rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold">Brigham Young University–Hawaii</h3>
            <p className="opacity-80">B.S. Computer Science | GPA: 3.97</p>
            <ul className="mt-4 space-y-2 opacity-80">
              <li>• Minors in Economics and Film</li>
              <li>• Upsilon Pi Epsilon Honors Society Member</li>
              <li>• Phi Kappa Phi Member</li>
              <li>• 4-year Dean&apos;s List recipient</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-custom-secondary backdrop-blur-sm border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <p className="text-center opacity-80">
            © 2025 Taylor McKendrick. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PersonalWebsite;