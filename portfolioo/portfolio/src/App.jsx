import React, { useState } from "react";
import {
  FaHome,
  FaCode,
  FaGraduationCap,
  FaProjectDiagram,
  FaCertificate,
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import "./certificates.css"
import "./Skills.css"
import "./Education.css"
import "./App.css";
import "./Projects.css"
import "./contact.css"
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaDatabase, FaGitAlt } from 'react-icons/fa';
import { DiMongodb } from 'react-icons/di';
function App() {
  const [activeSection, setActiveSection] = useState("portfolio");
  const [selectedProject, setSelectedProject] = useState(null);

  const handleNavClick = (section) => {
    setActiveSection(section);
  };
  const handleProjectClick = (index) => {
    setSelectedProject(index === selectedProject ? null : index);
  };
  const handleShowPortfolioClick = () => {
    handleNavClick("portfolio");
  };
  const projects = [
    {
      title: 'Personal Portfolio Website',
      image: 'portfolio.webp', 
      skills: ['React.js', 'CSS3', 'JavaScript', 'Tailwind CSS'],
      description: 'A responsive and interactive personal portfolio website showcasing my skills, projects, and resume.',
      details: 'Built using React.js and Tailwind CSS, this portfolio website is fully responsive and features smooth animations and interactivity. It serves as a dynamic platform to showcase my skills and previous works.',
    },
    {
      title: 'E-commerce Web App',
      image: 'ecommerce.jpeg', 
      skills: ['Node.js', 'Express.js', 'MongoDB', 'HTML5', 'CSS3'],
      description: 'An e-commerce website with product listings, a shopping cart, and a secure checkout process.',
      details: 'Developed an e-commerce web app using Node.js and MongoDB to handle product listings and user authentication. The app features a shopping cart, secure checkout, and order management.',
    },
    {
      title: 'AI Chatbot',
      image: 'chatbot.jpeg', 
      skills: ['Python', 'TensorFlow', 'Flask', 'HTML5', 'CSS3'],
      description: 'An AI-powered chatbot that provides personalized recommendations and responds to user queries.',
      details: 'Created an AI chatbot using Python and TensorFlow, integrated into a Flask web app. It analyzes user inputs and provides recommendations based on historical data.',
    },
  ];
  const renderPortfolioView = () => (
    <div className="portfolio">
      <header className="portfolio-header">
        <h1>S. SYAM PRASAD MUKHARJEE BABU</h1>
        <img className="profile-image" src="/download.jpeg" alt="Profile" />
        <button
          className="bt back-btn"
          onClick={() => handleNavClick("home")}
        >
          Back
        </button>
      </header>
      <div className="about-me">
        <p>
          I am a developer with experience in building modern web and mobile
          applications. I specialize in JavaScript frameworks like React and
          have a strong foundation in backend technologies.
        </p>
        <p>
          My goal is to deliver impactful software that enhances user
          experiences and solves real-world challenges efficiently.
        </p>
      </div>
    </div>
  );

  const renderInitialView = () => (
    <div className="main-content">
      <div className="profile-container">
        <img className="profile-image" src="/download.jpeg" alt="Profile" />
        <div className="name">
          <h3>S. SYAM PRASAD MUKHARJEE BABU</h3>
        </div>
      </div>

      <div className="about-me">
        <p>
          I am a passionate developer with a keen interest in building web
          applications and creating user-friendly interfaces. My journey in
          programming started with curiosity and has evolved into a deep
          fascination for solving real-world problems through code.
        </p>
        <p>
          With expertise in modern technologies like React, JavaScript, and
          Node.js, I thrive in creating scalable and efficient solutions. I am a
          lifelong learner, constantly upgrading my skills and embracing new
          challenges.
        </p>
      </div>

      <div className="buttons">
        <button
          className="btn show-portfolio-btn"
          onClick={handleShowPortfolioClick}
        >
          Show Portfolio
        </button>
        <button
          className="btn resume-btn"
          onClick={() => (window.location.href = "/syam_resume.pdf")}
        >
          My Resume
        </button>
      </div>

      <div className="social-links">
        <a href="https://github.com/Machame1" target="_blank" rel="noopener noreferrer">
          <FaGithub className="social-icon" />
        </a>
        <a
          href="https://www.instagram.com/s.syam.07/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="social-icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/s-syam-babu-43b937298/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="social-icon" />
        </a>
        <a href="mailto:sankuridany7@gmail.com">
          <FaEnvelope className="social-icon" />
        </a>
      </div>
    </div>
  );

  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return renderInitialView(); 
      case "portfolio":
        return renderPortfolioView();
      case "skills":
        return (
          <div className="skills-section">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-grid">
        <div className="skill-category">
          <h3 className="category-title">Frontend</h3>
          <ul>
            <li className="skill-item">
              <FaReact className="skill-icon" />
              <p><strong>React.js:</strong> A powerful library for building dynamic and responsive user interfaces. Leverage its component-based architecture to create efficient web applications.</p>
            </li>
            <li className="skill-item">
              <FaHtml5 className="skill-icon" />
              <p><strong>HTML5:</strong> The foundation of web development, offering semantic elements and multimedia support to structure web content.</p>
            </li>
            <li className="skill-item">
              <FaCss3Alt className="skill-icon" />
              <p><strong>CSS3:</strong> Used for designing and laying out web pages, CSS3 allows for advanced styling and animations.</p>
            </li>
            <li className="skill-item">
              <FaJs className="skill-icon" />
              <p><strong>JavaScript:</strong> The language of the web, enabling interactivity, dynamic content, and complex functionalities in web applications.</p>
            </li>
            <li className="skill-item">
              <FaGitAlt className="skill-icon" />
              <p><strong>Git:</strong> A version control system that helps track changes in your code and collaborate with others seamlessly.</p>
            </li>
          </ul>
        </div>
        <div className="skill-category">
          <h3 className="category-title">Backend</h3>
          <ul>
            <li className="skill-item">
              <FaNodeJs className="skill-icon" />
              <p><strong>Node.js:</strong> A runtime environment that allows JavaScript to be used for server-side scripting, enabling fast, scalable backend development.</p>
            </li>
            <li className="skill-item">
              <FaDatabase className="skill-icon" />
              <p><strong>SQL:</strong> A powerful language for managing and querying relational databases, essential for backend operations.</p>
            </li>
            <li className="skill-item">
              <DiMongodb className="skill-icon" />
              <p><strong>MongoDB:</strong> A NoSQL database that allows for flexible data storage and querying, ideal for handling large amounts of unstructured data.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );

      case "education":
        return (
          <div className="education-section">
      <h2 className="education-title">Education</h2>
      <div className="education-timeline">
        <div className="education-item">
          <h3 className="education-degree">Schooling</h3>
          <p className="education-description">
            Completed schooling from ABC School with a focus on Science and Mathematics. Achieved a strong academic foundation with an overall grade of 90% in the 10th grade.
          </p>
        </div>
        <div className="education-item">
          <h3 className="education-degree">Intermediate</h3>
          <p className="education-description">
            Pursued the Science stream at XYZ College with specialization in Computer Science and Mathematics. Scored 85% in the 12th grade, preparing for higher studies in technology.
          </p>
        </div>
        <div className="education-item">
          <h3 className="education-degree">Bachelor of Technology - Computer Science</h3>
          <p className="education-description">
            Currently pursuing BTech in Computer Science at ABC University, focusing on areas such as AI, Machine Learning, and Data Structures. Expected graduation in 2026.
          </p>
        </div>
      </div>
    </div>
  );
      case "projects":
        return (
          <div className="projects-section">
          <h2 className="projects-title">Projects</h2>
          <div className="projects-list">
            {projects.map((project, index) => (
              <div
                key={index}
                className="project-item"
                onClick={() => handleProjectClick(index)}
              >
                <img
                  className="project-image"
                  src={project.image}
                  alt={project.title}
                  style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '10px' }}
                />
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                {selectedProject === index && (
                  <div className="project-details">
                    <p><strong>Skills used:</strong> {project.skills.join(', ')}</p>
                    <p><strong>About:</strong> {project.details}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      );
      case "certificates":
        return (
          <div className="certificates-section">
            <h2>Certificates</h2>
        
            <div className="certificate-item">
              <h3>Certified Full Stack Developer</h3>
              <p><strong>Issued by:</strong> code Tech Academy</p>
              <p><strong>Date:</strong> January 2024</p>
              <p>
                I completed a comprehensive Full Stack Development course, which covered both front-end and back-end technologies including HTML, CSS, JavaScript, React, Node.js, and Express. The course included hands-on projects like building full-stack web applications, RESTful APIs, and deploying apps on cloud platforms. 
              </p>
            </div>
        
            <div className="certificate-item">
              <h3>Machine Learning Specialization</h3>
              <p><strong>Issued by:</strong> Coursera (Stanford University)</p>
              <p><strong>Date:</strong> June 2024</p>
              <p>
                This specialization covered machine learning concepts, including supervised learning, unsupervised learning, and deep learning. I worked on projects like creating predictive models, building neural networks, and applying machine learning algorithms using Python and libraries such as TensorFlow and Scikit-learn.
              </p>
            </div>
        
            <div className="certificate-item">
              <h3>Certified Data Analyst</h3>
              <p><strong>Issued by:</strong> DataCamp</p>
              <p><strong>Date:</strong> November 2024</p>
              <p>
                In this certification program, I learned the fundamentals of data analysis, including data wrangling, exploratory data analysis, and data visualization techniques using tools such as Excel, SQL, and Python. I also worked with real-world datasets to generate actionable insights and present data in a clear, understandable format.
              </p>
            </div>
        
            <div className="certificate-item">
              <h3>Google Analytics Certification</h3>
              <p><strong>Issued by:</strong> Google Analytics Academy</p>
              <p><strong>Date:</strong> September 2024</p>
              <p>
                This certification validated my skills in using Google Analytics to track website performance, analyze data, and optimize marketing strategies. The course covered topics such as setting up Google Analytics, understanding user behavior, and creating custom reports to measure KPIs effectively.
              </p>
            </div>
        
            <div className="certificate-item">
              <h3>Agile Project Management Certification</h3>
              <p><strong>Issued by:</strong> Scrum Alliance</p>
              <p><strong>Date:</strong> March 2024</p>
              <p>
                This certification helped me understand the principles of Agile and Scrum methodologies, with a focus on project management. The course included practical applications of Agile practices, such as sprint planning, retrospectives, and product backlog grooming. It also covered how to work with cross-functional teams to deliver projects efficiently.
              </p>
            </div>
          </div>
        );
        
      case "contact":
        return (
          <div className="contact-section">
  <h2>Contact Me</h2>
  <form className="contact-form">
    <input type="text" placeholder="Your Name" required />
    <input type="email" placeholder="Your Email" required />
    <textarea placeholder="Your Message" required></textarea>
    <button type="submit">Send</button>
  </form>
</div>

        );
      default:
        return (
          <div>
            <h2>Welcome</h2>
          </div>
        );
    }
  };

  const shouldShowNavbar =
    activeSection !== "home";

  return (
    <div className="App">
      {shouldShowNavbar && (
        <nav className="navbar">
          <button
            onClick={() => handleNavClick("home")}
            className={activeSection === "home" ? "active" : ""}
          >
            <FaHome /> Home
          </button>
          <button
            onClick={() => handleNavClick("skills")}
            className={activeSection === "skills" ? "active" : ""}
          >
            <FaCode /> Skills
          </button>
          <button
            onClick={() => handleNavClick("education")}
            className={activeSection === "education" ? "active" : ""}
          >
            <FaGraduationCap /> Education
          </button>
          <button
            onClick={() => handleNavClick("projects")}
            className={activeSection === "projects" ? "active" : ""}
          >
            <FaProjectDiagram /> Projects
          </button>
          <button
            onClick={() => handleNavClick("certificates")}
            className={activeSection === "certificates" ? "active" : ""}
          >
            <FaCertificate /> Certificates
          </button>
          <button
            onClick={() => handleNavClick("contact")}
            className={activeSection === "contact" ? "active" : ""}
          >
            <FaEnvelope /> Contact
          </button>
        </nav>
      )}
      <main className="main-content">{renderSection()}</main>
    </div>
  );
}

export default App;
