import React from 'react';
import '../styles/projects.css';

const Projects = () => {
  return (
    <section id='projects' className='project-container'>
          <h2>My <span>Projects...</span></h2>
        <div className="project-card">
            <div className="project-box">
                <img src="#" alt="Project" />
                  <div className="project-btn">
                      <button>Demo</button>
                      <button>GitHub</button>
                  </div>
            </div>
            <div className="project-box">
                <img src="#" alt="Project" />
                  <div className="project-btn">
                      <button>Demo</button>
                      <button>GitHub</button>
                  </div>
            </div>
            <div className="project-box">
                <img src="#" alt="Project" />
                  <div className="project-btn">
                      <button>Demo</button>
                      <button>GitHub</button>
                  </div>
            </div>
            <div className="project-box">
                <img src="#" alt="Project" />
                  <div className="project-btn">
                      <button>Demo</button>
                      <button>GitHub</button>
                  </div>
            </div>
        </div>
    </section>
  )
}

export default Projects