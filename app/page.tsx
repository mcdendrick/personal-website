"use client";
import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Download, Code, GraduationCap, Globe, Medal, Heart, Menu, X, Phone } from 'lucide-react';
import Image from 'next/image';

const ProjectDescription: React.FC<{ text: string }> = ({ text }) => {
  if (text.includes('Gladden Design')) {
    return (
      <>
        A digital adaptation of{' '}
        <a 
          href="https://gladdendesign.com/products/paper-apps-golf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-300 hover:text-blue-400 underline"
        >
          Gladden Design&apos;s Paper Apps™ GOLF
        </a>{' '}
        notebook game, reimagined as an interactive web application. Built with modern web development practices and clean architecture principles. Original concept by{' '}
        <a 
          href="https://gladdendesign.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-300 hover:text-blue-400 underline"
        >
          Gladden Design
        </a>.
      </>
    );
  }
  return <>{text}</>;
};

const PersonalWebsite: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const skills = {
      "Languages": ["Python", "JavaScript", "TypeScript", "Java", "Ruby", "C++"],
      "Frontend": ["React", "Next.js", "Tailwind CSS", "Shadcn/ui", "Bootstrap", "Recharts"],
      "Backend": ["Node.js", "Ruby on Rails", "MongoDB", "PostgreSQL", "OpenAI API", "Docker"],
    }
    
    const projects = [
      {
        title: "Customer Sentiment Analysis Dashboard",
        description: "Built a real-time sentiment analysis platform using Next.js 14 and OpenAI's GPT models. Features include dynamic data visualization, automatic feedback categorization, and historical trend analysis.",
        technologies: ["Next.js", "TypeScript", "OpenAI API", "Tailwind CSS", "Shadcn/ui", "Recharts"],
        liveLink: "https://sentiment-analyzer-ochre.vercel.app/",
        githubLink: "https://github.com/mcdendrick/sentiment-analyzer",
        image: "/sentiment-dashboard.png"
      },
      {
        title: "Writing Excellence - Tutoring Platform",
        description: "A professional tutoring platform with secure payment processing. Built with Next.js 14 and integrated with Stripe API for handling multiple tutoring packages. Features include responsive design, secure payment processing, and smooth animations.",
        technologies: ["Next.js 14", "TypeScript", "Stripe API", "Tailwind CSS", "Framer Motion"],
        liveLink: "https://tutor-website-inky.vercel.app/",
        githubLink: "https://github.com/mcdendrick/tutor-website",
        image: "/tutor-vert.png"
      },
      {
        title: "Professional eCommerce Mockup",
        description: "A work in progress of a professional mockup for a client. Built for a Hawaiian company that focuses on the tourism and hospitality industry.",
        technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
        liveLink: "https://aloha-pencil-website.vercel.app",
        githubLink: "https://github.com/mcdendrick/aloha-pencil-website",
        image: "/mockup-page.png"
      },
      {
        title: "Paper Golf Game",
        description: "A digital adaptation of <a href='https://gladdendesign.com/products/paper-apps-golf' target='_blank' rel='noopener noreferrer'>Gladden Design's Paper Apps™ GOLF</a> notebook game, reimagined as an interactive web application. Built with modern web development practices and clean architecture principles. Original concept by <a href='https://gladdendesign.com' target='_blank' rel='noopener noreferrer'>Gladden Design</a>.",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React Hooks", "ESLint", "PostCSS"],
        liveLink: "https://paper-golf-game-nine.vercel.app",
        githubLink: "https://github.com/mcdendrick/paper-golf-game",
        image: "/paper-golf-game.png"
      },
      {
        title: "Ruby on Rails Twitter Post",
        description: "A project that solely focused on the backend and database. Built with Ruby on Rails and PostgreSQL, this project allows users to post and edit tweets, in a test-driven environment.",
        technologies: ["Ruby on Rails", "MongoDB", "Docker"],
        liveLink: "Demo coming soon",
        githubLink: "https://github.com/mcdendrick/ruby-post-project",
        image: "/ruby-github-image.png"
      }
    ]

    const achievements = [
      {
        icon: <Globe className="w-8 h-8" />,
        title: "Honorary Ambassador",
        description: "Selected by Mayor as 1 of 6 Honorary Ambassadors to build relations with the Australian government"
      },
      {
        icon: <Medal className="w-8 h-8" />,
        title: "Academic Excellence",
        description: "3.96 GPA in Computer Science, top 10% of CIS students"
      },
      {
        icon: <Heart className="w-8 h-8" />,
        title: "2024 Cancer Survivor",
        description: "Glad to live life every single day"
      }
    ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Gradient background */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          background: 'linear-gradient(45deg, #1a365d 0%, #2563eb 50%, #93c5fd 100%)',
          opacity: 0.95
        }}
      />
      {/* Cursor light effect -- now more visible */}
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition-transform duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.15), transparent 40%)`
        }}
      />
   
      <div className ="relative z-10">
      {/* Navigation */}
      <nav className="bg-custom-secondary backdrop-blur-sm shadow-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold">Taylor McKendrick</h1>
            
            {/* Hamburger menu button - only visible on mobile */}
            <button 
              className="md:hidden p-2"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X size={24} /> // X icon when menu is open
              ) : (
                <Menu size={24} /> // Hamburger icon when menu is closed
              )}
            </button>

            {/* Desktop menu */}
            <div className="hidden md:flex space-x-6">
              <a href="#achievements" className="opacity-80 hover:opacity-100 transition-opacity">Achievements</a>
              <a href="#skills" className="opacity-80 hover:opacity-100 transition-opacity">Skills</a>
              <a href="#projects" className="opacity-80 hover:opacity-100 transition-opacity">Projects</a>
              <a href="#education" className="opacity-80 hover:opacity-100 transition-opacity">Education</a>
            </div>
          </div>

          {/* Mobile menu */}
          <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} pt-4`}>
            <div className="flex flex-col space-y-4">
              <a 
                href="#achievements" 
                className="opacity-80 hover:opacity-100 transition-opacity"
                onClick={() => setIsMenuOpen(false)}
              >
                Achievements
              </a>
              <a 
                href="#skills" 
                className="opacity-80 hover:opacity-100 transition-opacity"
                onClick={() => setIsMenuOpen(false)}
              >
                Skills
              </a>
              <a 
                href="#projects" 
                className="opacity-80 hover:opacity-100 transition-opacity"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </a>
              <a 
                href="#education" 
                className="opacity-80 hover:opacity-100 transition-opacity"
                onClick={() => setIsMenuOpen(false)}
              >
                Education
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-custom-secondary backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 py-24">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Hello, I&apos;m Taylor McKendrick</h1>
            <p className="text-2xl opacity-90 mb-8">Full Stack Developer | Cancer Survivor | Problem Solver</p>
            <p className="text-xl opacity-80 mb-8 max-w-2xl mx-auto">
                Multilingual developer fluent in English, Dutch, and Flemish, with a track record of academic excellence.
              </p>
            <div className="flex justify-center space-x-6">
            <a 
                  href="/taylor-mckendrick-resume.pdf" 
                  className="flex items-center gap-2 px-6 py-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all"
                  download
                >
                  <Download size={24} /> Download Resume
                  </a>
                  <a href="mailto:taylor.mckendrick@gmail.com" className="p-2 opacity-80 hover:opacity-100 transition-opacity">
                <Mail size={24} /> 
              </a>
              <a href="https://linkedin.com/in/taylor-mckendrick" className="p-2 opacity-80 hover:opacity-100 transition-opacity">
                <Linkedin size={24} />
              </a>
              <a href="https://github.com/mcdendrick" className="p-2 opacity-80 hover:opacity-100 transition-opacity">
                <Github size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Key Achievements Section */}
      <section id="achievements" className="py-20">
                <div className="max-w-6xl mx-auto px-4">
                  <h2 className="text-3xl font-bold mb-12">Key Achievements</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="bg-custom-secondary backdrop-blur-sm rounded-lg p-6 text-center hover:transform hover:scale-105 transition-all">
                        <div className="flex justify-center mb-4">
                          {achievement.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-3">{achievement.title}</h3>
                        <p className="opacity-80">{achievement.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Skills Section */}
              <section id="skills" className="py-20">
                <div className="max-w-6xl mx-auto px-4">
                  <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
                    <Code size={28} />
                    Technical Skills
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Object.entries(skills).map(([category, skillList]) => (
                      <div key={category} className="bg-custom-secondary backdrop-blur-sm rounded-lg p-6">
                        <h3 className="text-xl font-bold mb-4">{category}</h3>
                        <div className="flex flex-wrap gap-2">
                          {skillList.map(skill => (
                            <span key={skill} className="px-3 py-1 bg-white/10 rounded-full text-sm">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Projects Section */}
              <section id="projects" className="py-20">
                <div className="max-w-6xl mx-auto px-4">
                  <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
                  <div className="space-y-12">
                    {projects.map((project, index) => (
                      <div 
                        key={index}
                        className="bg-custom-secondary backdrop-blur-sm rounded-lg overflow-hidden hover:transform hover:scale-[1.02] transition-all"
                      >
                      <div className="md:grid md:grid-cols-2 gap-8">
                        {/* Project Image */}
                        <div className="relative h-64 md:h-full">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-scale-down"
                            priority={index === 0} // Prioritize the first project image
                            />
                        </div>
                  
                      {/* Project Details */}
                      <div className="p-8">
                      <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                      <p className="text-lg opacity-80 mb-6">
                        <ProjectDescription text={project.description} />
                      </p>
                    
                      {/* Technologies Used */}
                      <div className="mb-6">
                        <h4 className="text-sm uppercase tracking-wider opacity-70 mb-2">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-3 py-1 bg-white/10 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Project Links */}
                    <div className="flex gap-4">
                      {project.liveLink && (
                        project.liveLink.startsWith('http') ? (
                          <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all"
                          >
                            <Globe size={20} />
                            Live Demo
                          </a>
                        ) : (
                          <span className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg">
                            <Globe size={20} />
                            {project.liveLink}
                          </span>
                        )
                      )}
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all"
                        >
                          <Github size={20} />
                          View Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

        {/* Education Section */}
        <section id="education" className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
              <GraduationCap size={28} />
              Education
            </h2>
            <div className="bg-custom-secondary backdrop-blur-sm rounded-lg p-8 hover:transform hover:scale-[1.02] transition-all">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl font-bold">Brigham Young University–Hawaii</h3>
                  <p className="text-lg opacity-80">B.S. Computer Science</p>
                </div>
                <div className="text-right">
                  <span className="text-sm opacity-70">June 2024</span>
                  <p className="font-bold">GPA: 3.96</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold mb-2">Achievements</h4>
                  <ul className="space-y-2 opacity-80">
                    <li>• Upsilon Pi Epsilon Honors Society (top 10% of CIS students)</li>
                    <li>• Phi Kappa Phi (top 10% GPA of students)</li>
                    <li>• 4-year Dean&apos;s List and Merit Scholarship recipient</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Additional Studies</h4>
                  <ul className="space-y-2 opacity-80">
                    <li>• Minor in Economics</li>
                    <li>• Minor in Film</li>
                    <li>• Studied at one of the most diverse universities (75+ cultures)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

            {/* Footer */}
            <footer className="bg-custom-secondary backdrop-blur-sm border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Contact</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Mail size={16} />
                    <a href="mailto:taylor.mckendrick@gmail.com" className="opacity-80 hover:opacity-100 transition-opacity">
                      taylor.mckendrick@gmail.com
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Globe size={16} />
                    <span className="opacity-80">Salt Lake City, Utah</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Phone size={16} />
                    <a href="tel:+16266650251" className="opacity-80 hover:opacity-100 transition-opacity">
                      (626) 665-0251
                    </a>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#achievements" className="opacity-80 hover:opacity-100 transition-opacity">
                      Achievements
                    </a>
                  </li>
                  <li>
                    <a href="#skills" className="opacity-80 hover:opacity-100 transition-opacity">
                      Skills
                    </a>
                  </li>
                  <li>
                    <a href="#projects" className="opacity-80 hover:opacity-100 transition-opacity">
                      Projects
                    </a>
                  </li>
                  <li>
                    <a href="#education" className="opacity-80 hover:opacity-100 transition-opacity">
                      Education
                    </a>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">Connect</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://linkedin.com/in/taylor-mckendrick" 
                    className="p-2 opacity-80 hover:opacity-100 transition-opacity"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a 
                    href="https://github.com/mcdendrick" 
                    className="p-2 opacity-80 hover:opacity-100 transition-opacity"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={24} />
                  </a>
                  <a 
                    href="mailto:taylor.mckendrick@gmail.com" 
                    className="p-2 opacity-80 hover:opacity-100 transition-opacity"
                  >
                    <Mail size={24} />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="border-t border-white/10 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="opacity-80 mb-4 md:mb-0">
                  © 2025 Taylor McKendrick. All rights reserved.
                </p>
                <div className="flex items-center space-x-4">
                  <button 
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all"
                  >
                    Back to Top
                  </button>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default PersonalWebsite;