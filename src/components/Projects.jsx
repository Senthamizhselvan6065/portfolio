import React from 'react';
import '../styles/projects.css';
import { projectdetails } from '../ProjectCard/projectdetails';

const Projects = () => {
  return (
    <section id='projects' className='project-container'>
          <h2 className='project-container__title'>My <span className='project-container__title--title'>Projects...</span></h2>

        <div className="project-content">
            {projectdetails.map((item, idx) => (
               <div key={idx} className='project-card'>
                   <img className='project-card__img' src={item.projectImg} alt={item.projectAlt} />
                   <h3 className='project-card__title'>{item.title}</h3>
                   <div className="project-card-btn">
                       <button className='project-card-btn__btn project-card-btn__demo'>{item.projectBtn[0]}</button>
                       <button className='project-card-btn__btn project-card-btn__github'>{item.projectBtn[1]}</button>
                   </div>
               </div>
            ))}
        </div>
    </section>
  )
}

export default Projects