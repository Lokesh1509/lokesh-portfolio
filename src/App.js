import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Element, Link as ScrollLink } from "react-scroll";
import "./index.css";

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedInternship, setSelectedInternship] = useState(null);
  const [showAbout, setShowAbout] = useState(false); // ✅ This is what was missing


  const projects = [
    {
      title: "Image Forgery Detection",
      summary: "Classifies images as real or forged using CNN.",
      description:
        "Built with Meso4 CNN to detect forged images. Tkinter GUI and real-time image upload with prediction.",
      image: `${process.env.PUBLIC_URL}/assets/project1.png`,
    },
    {
      title: "Network Intrusion Detection",
      summary: "Detects malicious traffic with deep learning.",
      description:
        "CNN + LSTM + XGBoost on CIC-IDS 2017 dataset with Flask UI to detect intrusion in unbalanced network data.",
      image: `${process.env.PUBLIC_URL}/assets/project2.png`,
    },
  ];

  const internships = [
    {
      title: "Cyber Security Intern",
      org: "Fortinet Security (AICTE)",
      logo: `${process.env.PUBLIC_URL}/assets/Fortinet-logo.png`,
      duration: "July 202X – Sept 202X",
      summary: "Worked on SIEM tools, pen testing & firewalls.",
      description:
        "Worked on SIEM tools, Penetration Testing, Firewall Configuration and built automation use-cases that improved response time by 40%.",
    },
  ];

  const certifications = [
    "Ethical Hacking Essentials – EC-Council",
    "Cyber Security Essentials – Cisco Networking Academy",
    "DotNet Full Stack – Wipro TalentNext",
    "SQL Injection Training – EC-Council",
    "Intro to Cyber Security – Infosys Springboard",
  ];

  const skills = [
    { name: "Python", icon: "🐍" },
    { name: "Java", icon: "☕" },
    { name: "C", icon: "📘" },
    { name: "React", icon: "⚛️" },
    { name: "TensorFlow", icon: "🧠" },
    { name: "Git", icon: "🔧" },
    { name: "HTML", icon: "🌐" },
    { name: "CSS", icon: "🎨" },
    { name: "Flask", icon: "🔥" },
    { name: "MySQL", icon: "🗄️" },
    { name: "Linux", icon: "🐧" },
    { name: "Docker", icon: "🐳" },
  ];

  return (
    <div className="bg-white text-black font-sans scroll-smooth">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-black text-white shadow-md">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
         <img
  src={`${process.env.PUBLIC_URL}/assets/ls-logo.png`}
  alt="LS Logo"
  className="fixed top-4 left-4 h-12 w-12 rounded-full object-cover border-2 border-white shadow-md z-50"
/>



          <ul className="flex gap-6 text-sm">
            {["about-section", "projects", "internships", "skills", "certifications", "contact"].map((section) => (
              <li
                key={section}
                className="cursor-pointer capitalize hover:text-blue-500 relative group"
              >
                <ScrollLink to={section} smooth duration={500} offset={-80}>
                  {section.replace("-section", "")}
                </ScrollLink>
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Hero Section with Background */}
     <section
  id="about-section"
  className="h-screen flex items-center px-10 bg-cover bg-center"
  style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/hero-login.png'})` }}
>
  <div className="flex flex-col items-start gap-4 text-white mt-24 ml-10">
    <img
      src="/assets/profile.png"
      alt="Lokesh"
      className="w-52 h-52 rounded-full border-4 border-blue-500 object-cover"
    />
    <h1 className="text-4xl font-bold font-[Poppins]">Polagoni Lokesh</h1>
    <p className="text-lg text-gray-200 font-[Open Sans]">
      Cyber Security & Deep Learning Enthusiast
    </p>
    <button
      className="mt-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md"
      onClick={() => setShowAbout(true)}
    >
      View About Me
    </button>
  </div>
</section>




      {/* About Me Modal */}
      <AnimatePresence>
        {showAbout && (
          <motion.div
            className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg p-6 max-w-3xl w-full relative"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
            >
              <button
                onClick={() => setShowAbout(false)}
                className="absolute top-2 right-4 text-gray-500 hover:text-red-500"
              >
                ✖
              </button>
              <h2 className="text-2xl font-bold text-blue-600 mb-4">About Me</h2>
              <p className="text-gray-800 text-sm leading-relaxed">
                Hi, I’m Polagoni Lokesh, a passionate and driven Computer Science Engineer with a specialization in
                Cybersecurity. I love solving real-world problems through code, securing systems, and building efficient
                web applications.
                <br /><br />
                Throughout my academic journey and hands-on internships, I’ve gained expertise in Python, Java, and C,
                developed full-stack applications using Flask, HTML/CSS, MySQL, and built intelligent systems using
                machine learning and deep learning. My recent projects include an Image Forgery Detection System using
                CNN (Meso4) and a Network Intrusion Detection System that leverages LSTM and CNN models.
                <br /><br />
                Apart from software development, I have also explored security domains—conducting vulnerability
                assessments, threat analysis, and implementing firewall policies during my internship at Fortinet (AICTE).
                I’m constantly learning, adapting, and aiming to contribute to innovative teams that value growth,
                security, and performance.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Projects */}
      <Element name="projects" className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-10">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-4">
                <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-md" />
                <h3 className="text-xl font-bold mt-4">{project.title}</h3>
                <p className="text-gray-600">{project.summary}</p>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  View Project
                </button>
              </div>
            ))}
          </div>
        </div>
      </Element>

      {/* Internships */}
      <Element name="internships" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-10">Internships</h2>
          <div className="grid md:grid-cols-1 gap-6">
            {internships.map((internship, index) => (
              <div key={index} className="bg-gray-100 shadow-md rounded-lg p-4">
                <img src={internship.logo} alt={internship.org} className="w-32 h-auto mb-4" />
                <h3 className="text-xl font-bold">{internship.title}</h3>
                <p className="text-gray-700 italic">{internship.org}</p>
                <p className="text-gray-600">{internship.summary}</p>
                <button
                  onClick={() => setSelectedInternship(internship)}
                  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  View Internship
                </button>
              </div>
            ))}
          </div>
        </div>
      </Element>

      {/* Skills */}
      <Element name="skills" className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-10">Skills</h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="text-2xl">{skill.icon} <p className="text-sm">{skill.name}</p></div>
            ))}
          </div>
        </div>
      </Element>

      {/* Certifications */}
      <Element name="certifications" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-10">Certifications</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, idx) => (
              <li key={idx} className="bg-gray-100 p-4 rounded shadow-sm">{cert}</li>
            ))}
          </ul>
        </div>
      </Element>

      {/* Modals */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="bg-white p-6 rounded shadow-lg max-w-lg w-full">
              <h2 className="text-2xl font-bold mb-2">{selectedProject.title}</h2>
              <p className="text-gray-700 mb-4">{selectedProject.description}</p>
              <button
                onClick={() => setSelectedProject(null)}
                className="mt-4 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800"
              >
                Close
              </button>
            </div>
          </motion.div>
        )}

        {selectedInternship && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="bg-white p-6 rounded shadow-lg max-w-lg w-full">
              <h2 className="text-2xl font-bold mb-2">{selectedInternship.title}</h2>
              <p className="text-gray-700 mb-4">{selectedInternship.description}</p>
              <button
                onClick={() => setSelectedInternship(null)}
                className="mt-4 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800"
              >
                Close
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact */}
      <footer id="contact" className="py-10 text-center border-t border-gray-300 bg-black text-white">
        <div>
          <h3 className="text-lg">
            📧 polagonilokesh739@gmail.com | 📱 +91 7396177644 | 🔗 <a href="https://www.linkedin.com/in/polagoni-lokesh-749061248/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </h3>
          <p className="text-gray-400 text-sm mt-2">© 2025 Polagoni Lokesh</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
