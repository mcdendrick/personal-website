import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const PersonalWebsite: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Rest of the component remains exactly the same */}
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-gray-800">Taylor McKendrick</h1>
            <div className="space-x-4">
              <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
              <a href="#experience" className="text-gray-600 hover:text-gray-900">Experience</a>
              <a href="#education" className="text-gray-600 hover:text-gray-900">Education</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Hello, I'm Taylor McKendrick</h1>
            <p className="text-xl text-gray-600 mb-8">Full Stack Developer | Cancer Survivor | Problem Solver</p>
            <div className="flex justify-center space-x-4">
              <a href="https://linkedin.com/in/taylor-mckendrick" className="p-2 text-gray-600 hover:text-blue-600">
                <Linkedin size={24} />
              </a>
              <a href="https://github.com/mcdendrick" className="p-2 text-gray-600 hover:text-gray-900">
                <Github size={24} />
              </a>
              <a href="mailto:taylor.mckendrick@gmail.com" className="p-2 text-gray-600 hover:text-red-600">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">About Me</h2>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-600 mb-4">
              I'm a full stack developer with experience in Python, JavaScript, Java, Ruby on Rails, and C++. 
              As a recent graduate from BYU-Hawaii with a 3.97 GPA in Computer Science, I bring a strong 
              foundation in both technical and soft skills.
            </p>
            <p className="text-gray-600">
              I'm fluent in English, Dutch, and Flemish, and have experience working in diverse, 
              international environments. As a 2024 cancer survivor, I've learned the importance of 
              resilience and maintaining a positive outlook while tackling challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Experience</h2>
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900">Lead Reading and Writing Tutor</h3>
              <p className="text-gray-600">BYU-Hawaii Reading Writing Lab | 2022-2024</p>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Published 2 interdisciplinary research articles</li>
                <li>• Led team of 15+ writing tutors</li>
                <li>• Organized 6 workshops with 35+ student attendance</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900">Teaching Assistant</h3>
              <p className="text-gray-600">BYU-Hawaii Economics Department | 2022-2023</p>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Taught review sessions to 40+ students</li>
                <li>• Created and graded assessments</li>
                <li>• Provided one-on-one mentoring</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Education</h2>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-bold text-gray-900">Brigham Young University–Hawaii</h3>
            <p className="text-gray-600">B.S. Computer Science | GPA: 3.97</p>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>• Minors in Economics and Film</li>
              <li>• Upsilon Pi Epsilon Honors Society Member</li>
              <li>• Phi Kappa Phi Member</li>
              <li>• 4-year Dean's List recipient</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <p className="text-center text-gray-600">
            © 2025 Taylor McKendrick. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PersonalWebsite;