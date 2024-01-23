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
              <h2>About <span>Me...</span></h2>
              <h3>senthamizhselvan</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos incidunt officia aliquam? Laborum alias ad ab laudantium temporibus aspernatur. Atque provident quisquam maiores aliquid eveniet.</p>
          </div>
          <div className="about-img">
             <div>
                 <img src={profile} alt="Profile" className='home-profile'/>
            </div>
            <div>
               <div className="tech-icon">
                  <span className='node'><FaNode /></span>
               </div>
               <div className="tech-icon">
                  <span className='express'><SiExpress /></span>
               </div>
               <div className="tech-icon">
                  <span className='mongodb'><BiLogoMongodb /></span>
               </div>
            </div>
        </div>
     </section>
  )
}

export default About