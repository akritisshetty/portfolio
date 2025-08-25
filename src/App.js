import React from 'react';
import './App.css';

// Import Components
import SplashCursor from './components/SplashCursor/SplashCursor';
import CircularText from './components/CircularText/CircularText';
import ShinyText from './components/ShinyText/ShinyText';
import ProfileCard from './components/ProfileCard/ProfileCard';
import CaptainsLog from './components/CaptainsLog/CaptainsLog';

// YOUR TECH STACK - Update this array with your skills
const skills = [
  'C', 'Java', 'Python', 'HTML', 'CSS', 'JS', 'Bootstrap',
  'SQL', 'Linux', 'Git/Github', 'Rest APIs', 'Postman',
  'VSCode', 'Excel', 'Figma'
];

// YOUR PROJECTS - Add your projects here
const projectsData = [
    {
    title: "XZone Website Design",
    description: "A modern website UI designed in Figma as a practice project, focusing on layout and color theory.",
    image: "/website.png", // Optionally, use a Figma thumbnail or custom image
    link: "https://www.figma.com/design/oIJclLJEZv7nDBIk1jr0QT/XZone---Figma-Practice?node-id=0-1&t=GRKPg8JAfGhOIX7C-1",
    type: "figma"
  },
  {
    title: "Smart Watch Mobile App",
    description: "A mobile app UI for smart watches, designed in Figma with a focus on usability and minimalism.",
    image: "/app.png",
    link: "https://www.figma.com/design/d6VHq317dcKxUXM2Dm3aFn/Smart-Watch-Mobile-App?node-id=0-1&t=edYuIUNLDaIjNLdy-1",
    type: "figma"
  }
];

function App() {
  return (
    <div className="App">
      <SplashCursor />

      <header className="portfolio-header">
        <CircularText text="Akriti S Shetty • " />
      </header>
      
      <main>
        <section id="home" className="section full-height">
          <ShinyText text="Akriti S Shetty" />
          <p className="intro-subtitle">
            UI/UX Development, Data Analysis, Data Science, AI Enthusiast
          </p>
        </section>

        <section id="about" className="section">
          <div className="about-container">
            <ProfileCard
              name="Akriti S Shetty"
              title="B.E. Computer Science and Business System"
              imageUrl="/profile.jpg" // IMPORTANT: Add a 'profile.jpg' to your /public folder
              linkedin="http://www.linkedin.com/in/akritisshetty"
              github="https://github.com/akritisshetty"
            />
            <div className="about-details">
              <h3>About Me</h3>
              <p>
                Hi, I’m Akriti — a curious mind with a keyboard in one hand and a vision in the other. As a student of 5th semester Computer Science and Business Systems, I blend the logic of code with the art of communication to craft meaningful digital experiences. Whether it's building apps and websites, leading my college’s open-source community as the Community Lead, or diving into AI and new programming languages, I bring heart, creativity, and clarity to everything I do.
              </p>
              <p>
                I believe in learning by doing — and doing with purpose. My journey so far has been a vibrant mix of tech projects, social impact initiatives, and leadership experiences. From designing smart systems to delivering interactive sessions for peers, I’m passionate about using technology to simplify, amplify, and inspire.
              </p>
              <p>
                Let’s just say — if there’s a problem to solve, a team to lead, or a story to tell, I’m probably already sketching out a plan (and yes, color-coded tabs are likely involved).
              </p>
            </div>
          </div>
        </section>
        
        <section id="skills" className="section">
           <h3>My Tech Stack</h3>
           <p>The skills and tools I use to bring ideas to life.</p>
           <div className="skills-container">
              {skills.map(skill => (
                <div key={skill} className="skill-tag">
                    {skill}
                </div>
              ))}
            </div>
        </section>

        <section id="projects" className="section">
          <CaptainsLog title="My Figma Designs" />
          <p>A selection of projects that showcase my skills and passion.</p>
          <div className="project-grid">
          {projectsData.map((project, index) => (
            <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-content">
            <h4>{project.title}</h4>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
          {project.type === "figma" ? "View in Figma" : "View on GitHub"}
        </a>
      </div>
    </div>
  ))}
</div>
        </section>

        <section id="contact" className="section">
           <h3>Get In Touch</h3>
           <p>I'm always open to new opportunities and collaborations.</p>
           <a href="mailto:akritishetty.in@gmail.com" className="contact-button">Contact Me</a>
        </section>
      </main>
    </div>
  );
}

export default App;