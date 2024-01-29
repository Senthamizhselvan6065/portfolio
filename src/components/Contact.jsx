import React from 'react';
import '../styles/contact.css';
import { MdAttachEmail } from "react-icons/md";
import { FaGithubAlt } from "react-icons/fa6";


const Contact = () => {
  return (
    <section id='contact' className='contact-container'>
             <h2 className='contact-container__title'>Contact <span className='contact-container__title--title'>Me...</span></h2>
        <div className="contact-flex">
            <div className="contact-card">
                 <form>
                     <input type="text" placeholder='Name...'/>
                     <input type="text" placeholder='Email...'/>
                     <input type="text" placeholder='Subject...'/>
                     <textarea placeholder='Type your message...'></textarea>
                     <button>Send...</button>
                 </form>
            </div>
           <div className="contact-content">
             <div className="icon-box">
                 <span className='icon-box__icon--icon'><MdAttachEmail /></span>
                 <h3 className='icon-box__title'>senthamizhselvan6095<span className='icon-box__title--title'>@gmail.com</span></h3>
             </div>
             <div className="icon-box">
                <span style={{cursor: "pointer"}} onClick={()=>window.open("https://github.com/Senthamizhselvan6065")} className='icon-box__icon--icon'><FaGithubAlt /></span>
                <h3 style={{cursor: "pointer"}} onClick={()=>window.open("https://github.com/Senthamizhselvan6065")} className='icon-box__title'>http://github/senthamizhselvan6065</h3>
             </div>
           </div>
        </div>
    </section>
  )
}

export default Contact