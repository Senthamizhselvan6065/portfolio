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
            <h3 className='home-content__sub-title'>Hi I'am</h3>
            <h2 className='home-content__title'>senthamizh<span className='home-content__title--title'>selvan</span></h2>
            <p className='home-content__desc'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe error quia numquam dolores eaque ratione quasi rerum maxime ut provident?</p>
        </div>
        <div className="home-img-card">
            <div className='home-img'>
               <div className="tech-icon">
                  <span className='tech-icon__icon tech-icon__icon--react'><FaReact /></span>
               </div>
                 <img src={profile} alt="Profile" className='home-profile'/>
            </div>
            <div className='home-img'>
               <div className="tech-icon">
                  <span className='tech-icon__icon tech-icon__icon--html'><FaHtml5 /></span>
               </div>
               <div className="tech-icon">
                  <span className='tech-icon__icon tech-icon__icon--css'><FaCss3Alt /></span>
               </div>
               <div className="tech-icon">
                  <span className='tech-icon__icon tech-icon__icon--js'><TbBrandJavascript /></span>
               </div>
               <div className="tech-icon">
                  <span onClick={()=>window.open("https://github.com/Senthamizhselvan6065")} className='tech-icon__icon tech-icon__icon--github'><FaGithubAlt /></span>
               </div>
            </div>
        </div>
    </section>
  )
}

export default Home