import "./Skills.css";

function Skills() {
  const skills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "React", level: 75 },
    { name: "Sql", level: 75 },
    { name: "bootstrap", level: 75 },

  ];

  return (
    <section id="skills" className="skills-section">
      <h2>My Skills</h2>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <h3>{skill.name}</h3>

            <div className="skill-bar">
              <div
                className="skill-level"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>

            <span>{skill.level}%</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;