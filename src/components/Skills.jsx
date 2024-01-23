import React from "react";
import "../styles/skills.css";

const Skills = () => {

  return (
    <section id="skills" className="skills-container">
      <h2>
        My <span>Skills...</span>
      </h2>
      <div>
        <div className="skills">
          <div className="skill">
            <div className="skill-name">HTML</div>
            <div className="skill-bar">
              <div
                className="skill-per"
                per="40%"
                style={{ width: "40%" }}
              ></div>
            </div>
          </div>
          <div className="skill">
            <div className="skill-name">CSS</div>
            <div className="skill-bar">
              <div
                className="skill-per"
                per="50%"
                style={{ width: "50%" }}
              ></div>
            </div>
          </div>
          <div className="skill">
            <div className="skill-name">JavaScript</div>
            <div className="skill-bar">
              <div
                className="skill-per"
                per="40%"
                style={{ width: "40%" }}
              ></div>
            </div>
          </div>
          <div className="skill">
            <div className="skill-name">React.js</div>
            <div className="skill-bar">
              <div
                className="skill-per"
                per="50%"
                style={{ width: "50%" }}
              ></div>
            </div>
          </div>
        </div>
        <div className="skills">
          <div className="skill">
            <div className="skill-name">Node</div>
            <div className="skill-bar">
              <div
                className="skill-per"
                per="45%"
                style={{ width: "45%" }}
              ></div>
            </div>
          </div>
          <div className="skill">
            <div className="skill-name">Express</div>
            <div className="skill-bar">
              <div
                className="skill-per"
                per="45%"
                style={{ width: "45%" }}
              ></div>
            </div>
          </div>
          <div className="skill">
            <div className="skill-name">MongoDB</div>
            <div className="skill-bar">
              <div
                className="skill-per"
                per="50%"
                style={{ width: "50%" }}
              ></div>
            </div>
          </div>
          <div className="skill">
            <div className="skill-name">GitHub</div>
            <div className="skill-bar">
              <div
                className="skill-per"
                per="60%"
                style={{ width: "60%" }}
              ></div>
            </div>
          </div>
        </div>
        <div className="skills">
        <div className="skill">
            <div className="skill-name">Tailwind Css</div>
            <div className="skill-bar">
              <div
                className="skill-per"
                per="40%"
                style={{ width: "40%" }}
              ></div>
            </div>
          </div>
          <div className="skill">
            <div className="skill-name">HTML</div>
            <div className="skill-bar">
              <div
                className="skill-per"
                per="40%"
                style={{ width: "40%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
