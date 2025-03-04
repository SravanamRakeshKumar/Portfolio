import React, { useEffect, useRef, useState } from 'react';
import { Github, Linkedin, Mail, User, Briefcase, Code, FileText, Send, ChevronLeft, ChevronRight, Phone, Instagram, Apple as WhatsApp, GraduationCap } from 'lucide-react';
import Typed from 'typed.js';
import hero from './assets/my_images/WhatsApp Image 2025-02-15 at 12.29.00_46493c97.jpg';
import project1 from './assets/projects/Screenshot 2025-03-04 105530.png';
import project2 from './assets/projects/Screenshot 2025-03-04 105858.png';
import project3 from './assets/projects/Screenshot 2025-03-04 110227.png';
import Certificate1 from './assets/certificates/WRIGHTTECHSOFTWARESOLUTIONS_OfferLetter.jpg';
import Certificate2 from './assets/certificates/PANTECH.AI_Certificate.jpg';
import Certificate3 from './assets/certificates/QUIZARO_Certificate.jpg';
import Resume from './assets/Rakesh_Resume.pdf';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  liveDemo: string;
  github: string;
  technologies: string[];
}

interface Skill {
  name: string;
  level: number;
  image: string;
}

interface Education {
  level: string;
  percentage: number;
  institution: string;
  location: string;
  image: string;
}

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  image: string;
  certificate: string;
}

function App() {
  const sections = useRef<(HTMLElement | null)[]>([]);
  const [activeSection, setActiveSection] = useState('home');
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [animatedSkills, setAnimatedSkills] = useState<Set<string>>(new Set());
  const [animatedEducation, setAnimatedEducation] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [viewCount, setViewCount] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const typedRef = useRef<Typed | null>(null);
  const el = useRef(null);

  

  const education = [
    {
      level: "10th",
      percentage: 97,
      institution: "ZPHS school",
      location: "In Angaluru",
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=1600"
    },
    {
      level: "Intermediate",
      percentage: 87,
      institution: "Sri Chithanya College",
      location: "In Gudivada",
      image: "https://content.jdmagicbox.com/comp/gudivada/h1/9999p8674.8674.130520160238.d4h1/catalogue/sri-vidya-junior-and-degree-college-gudivada-ho-gudivada-colleges-oey5dkj-250.jpg"
    },
    {
      level: "B.Tech",
      percentage: 72,
      institution: "Sri Vasavi college",
      location: "In Nadamuru",
      image: "https://www.joonsquare.com/usermanage/image/business/sri-vasavi-institute-of-engineering-and-technology-krishna-15266/sri-vasavi-institute-of-engineering-and-technology-krishna-sri-vasavi-institute-of-engineering-and-technology-1.jpg"
    }
  ];



  function EducationSection() {
    return (
      <section id="education" className="py-20 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold flex items-center justify-center gap-2">
              🎓 Education Details
            </h2>
            <p className="text-gray-600 mt-2">My academic journey and achievements</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {education.map((edu) => (
              <EducationCard key={edu.level} edu={edu} />
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  function EducationCard({ edu }) {
    const [hovered, setHovered] = useState(false);
  
    return (
      <div
        className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="flex flex-col items-center">
          <h3 className="text-2xl font-bold text-indigo-600 mb-4">{edu.level}</h3>
  
          {/* Flip Card Wrapper */}
          <div className="relative w-48 h-48 mb-4 perspective">
            <div
              className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
                hovered ? "rotate-y-180" : ""
              }`}
            >
              {/* Front Side - Image */}
              <div
                className={`absolute inset-0 backface-hidden transition-all duration-700 ${
                  hovered ? "opacity-0" : "opacity-100"
                }`}
              >
                <img
                  src={edu.image}
                  alt={edu.institution}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
  
              {/* Back Side - Animated Circle */}
              <div
                className={`absolute inset-0 flex items-center justify-center bg-white rounded-lg backface-hidden transition-all duration-700 ${
                  hovered ? "rotate-y-180 opacity-100" : "opacity-0"
                }`}
              >
                <svg className="w-40 h-40 transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" stroke="gray" strokeWidth="8" fill="none" />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="blue"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray="251.2"
                    strokeDashoffset={hovered ? (251.2 * (1 - edu.percentage / 100)).toFixed(1) : 251.2}
                    strokeLinecap="round"
                    className="transition-all duration-1000 ease-in-out"
                  />
                </svg>
                <span className="absolute text-2xl font-bold text-indigo-600">{edu.percentage}%</span>
              </div>
            </div>
          </div>
  
          <div className="text-center">
            <p className="font-semibold text-gray-800">{edu.institution}</p>
            <p className="text-gray-600">{edu.location}</p>
          </div>
        </div>
      </div>
    );
  }


  const skills: Skill[] = [
    { 
      name: 'Html', 
      level: 90,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScHE8CZT4pYNZr813K87DrswQawc3DGPU95uhwuAbQvxhS4nfpkWy5251cjSiOoLq22Sc&usqp=CAU'
    },
    { 
      name: 'Css', 
      level: 85,
      image: 'data:image/png;base64,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'
    },
    { 
      name: 'Javascript', 
      level: 80,
      image: 'data:image/png;base64,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'
    },
    { 
      name: 'Python', 
      level: 90,
      image: 'https://images.unsplash.com/photo-1649180556628-9ba704115795?auto=format&fit=crop&q=80&w=1600'
    },
    { 
      name: 'SQL', 
      level: 70,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY96BPkBqp2Z_gQdUVHpNh38YPdgP28F00yg&s'
    },
    { 
      name: 'React.js', 
      level: 50,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVMLS9rvcqwIHG_iGUUQ3CG6tQNUdaBbEzJw&s'
    },
    { 
      name: 'Node.js', 
      level: 40,
      image: 'https://www.svgrepo.com/download/303360/nodejs-logo.svg'
    },
    { 
      name: 'Express.js', 
      level: 60,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStpzzD4YiSWcN-zBdaKvNjIzCTmy1rlUdkXgsoOIlWsz8t2M7RuczqQWiya7p5kyloMaU&usqp=CAU'
    },
    { 
      name: 'MongoDb', 
      level: 40,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-1MlgWLW6r7jSVCIDp86TH5m3QGMO699uGDXPn6_J_990zjhqyAKkoKj7GY85SrWBeRo&usqp=CAU'
    }
  ];

  const experiences: Experience[] = [
    {
      title: 'Web Development Intern',
      company: 'Wright Tech Software Solutions Pvt. Ltd.',
      period: '2025 - Present',
      description: 'As a Web Development Intern at Wright Tech Software Solutions, I am working on designing and developing web applications, improving UI/UX, and optimizing performance. I collaborate with the team to implement features, debug issues, and learn best practices in full-stack development.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
      certificate:Certificate1
    },
    {
      title: 'Full Stack Web Development Intern',
      company: 'Pantech.ai',
      period: '2024-(March 30 - June 30)',
      description: 'As a Full Stack Web Development Intern at Pantech.ai, I worked on building dynamic web applications, handling both front-end and back-end development. I gained experience in modern frameworks, database management, and deployment while collaborating on real-world projects.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
      certificate:Certificate2
    },
    {
      title: 'Web Development Intern',
      company: 'Quizaro',
      period: '2023-(Aug 30 - Oct 30)',
      description: 'As a Web Development Intern at Quizaro, I worked on designing and developing interactive web applications. I enhanced my skills in front-end and back-end technologies, improving website functionality and user experience while collaborating on real-time projects.',
      image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800',
      certificate:Certificate3
    }
  ];

  const projects = [
    {
      id: 1,
      title: 'Online Delivery Platform',
      description: 'This application enables users to browse and order attars effortlessly through a seamless, user-friendly interface.',
      image:project1,
      liveDemo: 'https://ab-attars-d.vercel.app/',
      github: 'https://github.com/SravanamRakeshKumar/AB-ATTARS',
      technologies:[{name:'react',image:'data:image/jpeg;base64,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'},{name:'javascript',image:'data:image/png;base64,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'},{name:'html',image:'data:image/png;base64,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'},{name:'css',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-TLdbAqtzJd2i6o0TLdIxnQUzhKNKb58koA&s'}]
    },
    {
      id: 2,
      title: 'Online Quize Application',
      description: 'This quiz platform offers an interactive and engaging way to test knowledge, enhance learning, and achieve academic goals efficiently.',
      image: project2,
      liveDemo: 'https://quiz-applicatuon-pa3b.vercel.app/',
      github: 'https://github.com/SravanamRakeshKumar/Quiz_Applicatuon',
      technologies:[{name:'react',image:'data:image/jpeg;base64,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'},{name:'javascript',image:'data:image/png;base64,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'},{name:'html',image:'data:image/png;base64,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'},{name:'css',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-TLdbAqtzJd2i6o0TLdIxnQUzhKNKb58koA&s'}]
    },
    {
      id: 3,
      title: 'Training Institute Website',
      description: 'This platform provides industry-relevant courses, hands-on training, and expert guidance to enhance your tech skills and career growth.',
      image:project3,
      liveDemo: 'https://wright-tech.vercel.app/',
      github: 'https://github.com/SravanamRakeshKumar/Wright_Tech',
      technologies:[{name:'react',image:'data:image/png;base64,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'},{name:'javascript',image:'data:image/jpeg;base64,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'},{name:'html',image:'data:image/png;base64,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'},{name:'css',image:'data:image/png;base64,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'}]
    }
  ];

  useEffect(() => {
    if (el.current) {
      typedRef.current = new Typed(el.current, {
        strings: [
          'Front-end Developer',
          'Back-end Developer',
          'Full Stack Developer'
        ],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true
      });
    }



    const storedCount = localStorage.getItem('portfolioViews');
    const currentCount = storedCount ? parseInt(storedCount) + 1 : -1;
    localStorage.setItem('portfolioViews', currentCount.toString());
    setViewCount(currentCount);


    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            setActiveSection(entry.target.id);

            if (entry.target.id === 'skills') {
              const skillElements = entry.target.getElementsByClassName('skill-progress');
              Array.from(skillElements).forEach((element) => {
                const skillName = element.getAttribute('data-skill');
                if (skillName) {
                  setAnimatedSkills(prev => new Set([...prev, skillName]));
                }
              });
            }

            if (entry.target.id === 'education') {
              setAnimatedEducation(true);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      observer.disconnect();
      if (typedRef.current) {
        typedRef.current.destroy();
      }
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const CircularProgress = ({ percentage, image }: { percentage: number; image: string }) => {
    const radius = 60;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
      <div className="relative">
        <div 
          className="absolute inset-0 rounded-full overflow-hidden"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.7) saturate(1.2) hue-rotate(200deg)'
          }}
        />
        <svg className="education-circle w-40 h-40 relative z-10">
          <circle
            className="text-gray-200 opacity-30"
            strokeWidth="12"
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx="80"
            cy="80"
          />
          <circle
            className="education-progress text-blue-500"
            strokeWidth="12"
            strokeDasharray={circumference}
            strokeDashoffset={animatedEducation ? strokeDashoffset : circumference}
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx="80"
            cy="80"
          />
          <text
            x="50%"
            y="50%"
            dy=".3em"
            textAnchor="middle"
            className="text-2xl font-bold text-white"
          >
            {percentage}%
          </text>
        </svg>
      </div>
    );
  };

  return (
    <div className="bg-gray-50">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <span className="text-2xl font-bold text-indigo-600 hover:text-indigo-700 transition-colors cursor-pointer"
                  onClick={() => scrollToSection('home')}>
              Portfolio
            </span>

            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'education', 'skills', 'projects', 'experience', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`text-gray-700 hover:text-indigo-600 capitalize transition-colors relative ${
                    activeSection === item ? 'text-indigo-600' : ''
                  }`}
                >
                  {item}
                  {activeSection === item && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 transform origin-left transition-transform"></span>
                  )}
                </button>
              ))}
            </div>

            <button
              className={`md:hidden flex flex-col justify-center items-center w-10 h-10 relative focus:outline-none ${isMenuOpen ? 'hamburger-active' : ''}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <span className="hamburger-line" aria-hidden="true"></span>
              <span className="hamburger-line my-1" aria-hidden="true"></span>
              <span className="hamburger-line" aria-hidden="true"></span>
            </button>
          </div>

          <div className={`mobile-menu md:hidden ${isMenuOpen ? 'visible' : 'hidden'}`}>
            <div className="py-4 px-4 space-y-2">
              {['home', 'about', 'education', 'skills', 'projects', 'experience', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`block w-full text-left px-4 py-3 rounded-lg capitalize transition-all ${
                    activeSection === item
                      ? 'bg-indigo-50 text-indigo-600'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section
        id="home"
        ref={(el) => (sections.current[0] = el)}
        className="min-h-screen flex items-center justify-center opacity-0 -mt-35 sm:mt mt-10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left animate-slide-in-left">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
                Hi, I'm Rakesh
              </h1>
              <div className="text-3xl md:text-4xl text-indigo-600 font-bold mb-4">
                <span>I'm a </span><span ref={el}></span>
              </div>
              <div className="space-y-4 mb-8">
                <p className="text-lg text-gray-500">Specializing in modern web technologies</p>
                <p className="text-sm text-gray-400">Portfolio Views: {viewCount}</p>
              </div>
              <div className="flex space-x-4">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Contact Me
                </button>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="border-2 border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-50 transition-colors"
                >
                  View Work
                </button>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <img
                src={hero}
                alt="Profile"
                className="rounded-full w-full max-w-md mx-auto shadow-2xl border-4 border-white hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        ref={(el) => (sections.current[1] = el)}
        className="py-20 bg-white opacity-0"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800"
                alt="Working"
                className="rounded-lg shadow-lg hover:shadow-xl transition-shadow transform hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
            <div className="animate-slide-in-right space-y-6">
              <p className="text-gray-600">
I am a dedicated and detail-oriented Full Stack Web Developer with strong skills in front-end and back-end technologies. Passionate about building efficient, scalable, and user-friendly web applications, I have a keen eye for problem-solving and continuous learning. I thrive in collaborative environments and adapt quickly to new technologies to deliver high-quality solutions.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2 hover:text-indigo-600 transition-colors cursor-pointer p-2 rounded-lg hover:bg-indigo-50">
                  <User className="text-indigo-600" />
                  <span>Rakesh Kumar</span>
                </div>
                {/* <div className="flex items-center space-x-2 hover:text-indigo-600 transition-colors cursor-pointer p-2 rounded-lg hover:bg-indigo-50">
                  <Mail className="text-indigo-600" />
                  <span>sravanamrmar.com</span>
                </div> */}
                <div className="flex items-center space-x-2 hover:text-indigo-600 transition-colors cursor-pointer p-2 rounded-lg hover:bg-indigo-50">
                  <Briefcase className="text-indigo-600" />
                  <span>Full Stack Web Developer</span>
                </div>
                <div className="flex items-center space-x-2 hover:text-indigo-600 transition-colors cursor-pointer p-2 rounded-lg hover:bg-indigo-50">
                  <Code className="text-indigo-600" />
                  <span>5 Years Experience</span>
                </div>
              </div>
              <a
                href={Resume}
                download
                target="_blank"
                className="inline-flex items-center space-x-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                <FileText size={20} />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <EducationSection/>


      <section
  id="skills"
  ref={(el) => (sections.current[3] = el)}
  className="py-20 bg-white opacity-0"
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
    <div className="grid md:grid-cols-2 gap-8">
      {skills.map((skill) => (
        <div 
          key={skill.name} 
          className="relative bg-white p-8 rounded-lg shadow-md overflow-hidden flex items-center justify-center"
          onMouseEnter={() => setHoveredSkill(skill.name)}
          onMouseLeave={() => setHoveredSkill(null)}
        >
          {hoveredSkill === skill.name && (
            <div 
              className="absolute w-24 h-24 rounded-full bg-white shadow-lg flex items-center justify-center z-20 transition-transform duration-300"
              style={{ top: "0px", left: "50%", transform: "translateX(-50%)" }}
            >
              <img src={skill.image} alt={skill.name} className="w-full h-full object-cover rounded-full" />
            </div>
          )}
          <div className="relative z-10 w-full">
            <div className="flex justify-between mb-2">
              <span className="font-semibold">{skill.name}</span>
              <span className="text-indigo-600">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="skill-progress bg-indigo-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
                style={{
                  width: animatedSkills.has(skill.name) ? `${skill.level}%` : '0%'
                }}
                data-skill={skill.name}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      <section
  id="projects"
  ref={(el) => (sections.current[4] = el)}
  className="py-20 bg-white opacity-0"
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <div key={project.id} className="bg-white rounded-lg shadow-xl overflow-hidden group">
          <div className="relative h-64">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-full transition-transform duration-500 "
            />
            <div className="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-white text-center p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                <p className="text-lg mb-4">{project.description}</p>
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <img key={tech} src={tech.image} alt={tech.name} className="h-12 w-70 object-contain" />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-4">{project.title}</h3>
            <div className="flex space-x-4">
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors text-center"
              >
                Live Demo
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 border-2 border-indigo-600 text-indigo-600 py-2 px-4 rounded-md hover:bg-indigo-50 transition-colors text-center"
              >
                View Code
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      <section
        id="experience"
        ref={(el) => (sections.current[5] = el)}
        className="py-20 bg-white opacity-0"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="group bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-[1.02] transition-all duration-300 animate-slide-in-right"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="md:flex">
                  <div className="md:w-1/3 relative overflow-hidden">
                    <img
                      src={exp.image}
                      alt={exp.company}
                      className="w-full h-48 md:h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <img
                        src={exp.certificate}
                        alt="Certificate"
                        className="max-w-[90%] max-h-[90%] rounded-lg shadow-xl transform scale-90 group-hover:scale-100 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  <div className="p-6 md:w-2/3">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold">{exp.title}</h3>
                        <p className="text-indigo-600">{exp.company}</p>
                      </div>
                      <span className="text-gray-500">{exp.period}</span>
                    </div>
                    <div className="p-3 flex flex-col items-start justify-between sm:h-[150px]">
                      <p className="text-gray-600">{exp.description}</p>
                      <div className='w-full flex justify-center'>
                        <a
                          href={exp.certificate}
                          download
                          target="_blank"
                          className="mt-5 inline-flex items-center space-x-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
                        >
                           <FileText size={20} />
                           <span>Download Certificate</span>
                       </a>
                     </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        id="contact"
        ref={(el) => (sections.current[6] = el)}
        className="py-20 bg-gray-50 opacity-0"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <a href="mailto:sravanamrakeshkumar3@gmail.com" className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <Mail className="text-indigo-600" size={24} />
                  <span>sravanamrakeshkumar3@gmail.com</span>
                </a>
                <a href="tel:+919989582364" className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <Phone className="text-indigo-600" size={24} />
                  <span>+919989582364</span>
                </a>
                <a href="https://www.linkedin.com/in/sravanam-rakesh-kumar-418ab7283?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <Linkedin className="text-indigo-600" size={24} />
                  <span>LinkedIn Profile</span>
                </a>
                <a href="https://wa.me/9989582364" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <WhatsApp className="text-indigo-600" size={24} />
                  <span>WhatsApp</span>
                </a>
                <a href="https://github.com/SravanamRakeshKumar" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <Github className="text-indigo-600" size={24} />
                  <span>Github</span>
                </a>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg animate-scale">
              <form className="space-y-6">
                <div className="transform hover:scale-[1.02] transition-transform">
                  <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    placeholder="Your Name"
                  />
                </div>
                <div className="transform hover:scale-[1.02] transition-transform">
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    placeholder="your@email.com"
                  />
                </div>
                <div className="transform hover:scale-[1.02] transition-transform">
                  <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transform hover:scale-[1.02] transition-all flex items-center justify-center group"
                >
                  Send Message
                  <Send size={18} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Rakesh Kumar</h3>
              <p className="text-gray-400">Full Stack Developer specializing in modern web technologies.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a href="https://github.com/SravanamRakeshKumar" className="text-gray-400 hover:text-white transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/sravanam-rakesh-kumar-418ab7283?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="mailto:sravanamrakeshkumar3@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                  <Mail size={24} />
                </a>
                <a href="https://wa.me/9989582364" className="text-gray-400 hover:text-white transition-colors">
                  <WhatsApp size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2025 Rakesh. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;