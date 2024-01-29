import React from 'react';
import profile from '../assets/itachi.jpg';
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import '../styles/about.css';


const About = () => {
  return (
     <section id='about' className='about-container'>
          <div className="about-content">
              <h2 className='about-content__title'>About <span className='about-content__title--title'>Me...</span></h2>
              <h3 className='about-content__name'>senthamizhselvan</h3>
              <p className='about-content__desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos incidunt officia aliquam? Laborum alias ad ab laudantium temporibus aspernatur. Atque provident quisquam maiores aliquid eveniet.</p>
          </div>
          <div className="about-img-card">
             <div className='about-img'>
                 <img src={profile} alt="Profile" className='home-profile'/>
            </div>
            <div className='about-img'>
               <div className="tech-icon">
                  <span className='tech-icon__icon tech-icon__icon--node'><FaNode /></span>
               </div>
               <div className="tech-icon">
                  <span className='tech-icon__icon tech-icon__icon--express'><SiExpress /></span>
               </div>
               <div className="tech-icon">
                  <span className='tech-icon__icon tech-icon__icon--mongodb'><BiLogoMongodb /></span>
               </div>
            </div>
        </div>
     </section>
  )
}

export default About