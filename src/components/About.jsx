import "./About.css";

function About() {
  const skills = [
    { name: "Time management", level: 75 },
    { name: "Organizational skill", level: 90 },
    { name: "team player", level: 100 },
    { name: "React", level: 85, category: "Frontend" },
    { name: "HTML", level: 95, category: "Frontend" },
    { name: "CSS", level: 90, category: "Frontend" },
    { name: "JavaScript", level: 80, category: "Frontend" },
    { name: "Node.js", level: 70, category: "Backend" },
    { name: "PHP", level: 60, category: "Backend" },
    { name: "Git", level: 85, category: "Tools" },
    { name: "VS Code", level: 90, category: "Tools" },
    { name: "bootstap", level: 75 },
  ]

  return (
    <section id="about" className="about-section">
      {/* INTRODUCTION */}
      <div className="intro">
        <h2>About Me</h2>
        <p className="bio">
          Hi! I’m <span>Nejanden</span>, a passionate Frontend Developer specializing in React.js and UI design.
          When I’m not coding, I enjoy exploring creative design trends and playing chess.
        </p>
      </div>

      {/* EDUCATION & CERTIFICATION */}
      <div className="education">
        <h3>Education & Certification</h3>
        <ul>
          <li>
            <strong>BSc Computer Science</strong> – Dhanraj Baid Jain College
          </li>
          <li>
            <strong>Java Full Stack Development</strong> – Orranium Tech, Velachery
          </li>
        </ul>
      </div>

      {/* SKILLS */}
      <div className="skills">
        <h3>Professional Skills</h3>

        <div className="skills-container">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <h4>{skill.name}</h4>
              <p className="category">{skill.category}</p>
              <div className="skill-bar">
                <div
                  className="skill-level"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <span className="skill-percent">{skill.level}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;