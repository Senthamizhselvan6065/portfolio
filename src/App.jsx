import React from 'react';
import './App.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Skills from './components/Skills';


const App = () => {
  return (
    <div>
       <Navbar />
       <div className="container">
            <Home />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
       </div>
    </div>
  )
}

export default App