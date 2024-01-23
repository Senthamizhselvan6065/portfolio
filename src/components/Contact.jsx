import React from 'react';
import '../styles/contact.css';
import { MdAttachEmail } from "react-icons/md";
import { FaGithubAlt } from "react-icons/fa6";


const Contact = () => {
  return (
    <section id='contact' className='contact-container'>
             <h2>Contact <span>Me...</span></h2>
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
                 <span><MdAttachEmail /></span>
                 <h3>senthamizhselvan6095<span>@gmail.com</span></h3>
             </div>
             <div className="icon-box">
                <span><FaGithubAlt /></span>
                <h3>http://github/senthamizhselvan6065</h3>
             </div>
         </div>
        </div>
    </section>
  )
}

export default Contact