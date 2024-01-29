import React, { useState } from 'react';
import '../styles/nav.css';
import { GiAbstract021 } from "react-icons/gi";
import { GiAtomicSlashes } from "react-icons/gi";


const Navbar = () => {

    const links = [
        {name: "Home", link: "#home", class: "navigation__menu-item--link"},
        {name: "About Me", link: "#about", class: "navigation__menu-item--link"},
        {name: "Skills", link: "#skills", class: "navigation__menu-item--link"},
        {name: "Projects", link: "#projects", class: "navigation__menu-item--link"},
        {name: "Contact Me", link: "#contact", class: "navigation__menu-item--link"},
    ]

    const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className='nav-container'>
       <div className="logo">
           <h3 className='logo__title'>senthamizh<span className='logo__title--title'>selvan</span></h3>
       </div>
       <ul className={openMenu ? 'navigation active' : 'navigation'} onClick={()=> setOpenMenu(false)}>
         {
            links?.map((item, idx) => (
               <li key={idx}><a className={item.class} href={item.link}>{item.name}</a></li>
            ))
         }
           <p className="navigation__hire-btn--link">Hire Me</p>
       </ul>
       <div className="menu-btn" onClick={()=>setOpenMenu(!openMenu)}>
            {openMenu ? <GiAtomicSlashes /> : <GiAbstract021 />}
       </div>
    </nav>
  )
}

export default Navbar