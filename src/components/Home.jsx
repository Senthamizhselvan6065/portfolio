import React from 'react';
import '../styles/home.css';
import profile from '../assets/itachi.jpg';
import { FaReact } from "react-icons/fa6";
import { TbBrandJavascript } from "react-icons/tb";
import { FaCss3Alt } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa6";
import { FaGithubAlt } from "react-icons/fa6";


const Home = () => {
  return (
    <section id='home' className='home-container'>
        <div className="home-content">
            <h3>Hi I'am</h3>
            <h2>senthamizh<span>selvan</span></h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe error quia numquam dolores eaque ratione quasi rerum maxime ut provident?</p>
        </div>
        <div className="home-img">
            <div>
               <div className="tech-icon">
                  <span className='react'><FaReact /></span>
               </div>
                 <img src={profile} alt="Profile" className='home-profile'/>
            </div>
            <div>
               <div className="tech-icon">
                  <span className='html'><FaHtml5 /></span>
               </div>
               <div className="tech-icon">
                  <span className='css'><FaCss3Alt /></span>
               </div>
               <div className="tech-icon">
                  <span className='js'><TbBrandJavascript /></span>
               </div>
               <div className="tech-icon">
                  <span className='github'><FaGithubAlt /></span>
               </div>
            </div>
        </div>
    </section>
  )
}

export default Home