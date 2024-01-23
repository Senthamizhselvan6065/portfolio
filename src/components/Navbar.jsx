import React, { useState } from 'react';
import '../styles/nav.css';
import { GiAbstract021 } from "react-icons/gi";
import { GiAtomicSlashes } from "react-icons/gi";
import {Link} from 'react-scroll';

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav>
       <div className="logo">
           <h3>senthamizh<span>selvan</span></h3>
       </div>
       <ul className={openMenu ? 'navigation active' : 'navigation'} onClick={()=> setOpenMenu(false)}>
          <li><a className='menu-item' href="#home">Home</a></li>
          <li><a className='menu-item' href="#about">About Me</a></li>
          <li><a className='menu-item' href="#skills">Skills</a></li>
          <li><a className='menu-item' href="#projects">Projects</a></li>
          <li><a className='menu-item' href="#contact">Contact Me</a></li>
          <button>Hire Me</button>
       </ul>
       <div className="menu-btn" onClick={()=>setOpenMenu(!openMenu)}>
            {openMenu ? <GiAtomicSlashes /> : <GiAbstract021 />}
       </div>
    </nav>
  )
}

export default Navbar