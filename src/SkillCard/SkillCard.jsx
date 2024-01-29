import React from 'react';
import '../SkillCard/skillcard.css';
import { skill } from './skills';

const SkillCard = () => {
  return (
    <div className='skills-card'>
            {skill?.map((value, idx) => (
                <div key={idx} className="skills-content">
                    <div className="skill-box">
                        <h3 className='skill-box__title'>{value.title}</h3>
                    </div>
                    {value.skills?.map((value, idx) => (
                       <React.Fragment key={idx}>
                          <div className="skills-info-content">
                              <p className="skills-info-content__name">{value.name}</p>
                              <p className="skills-info-content__per">{value.per}</p>
                          </div>
                          <div className="skill-progress-bg">
                              <div className="skill-progress" style={{width: value.per}}></div>
                          </div>
                       </React.Fragment>
                    ))}
                </div>
            ))}
    </div>
  )
}

export default SkillCard