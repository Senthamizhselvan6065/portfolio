import React from 'react';
import '../styles/footer.css';


const Footer = () => {

    const year = new Date();
    const getYear = year.getFullYear();

  return (
      <footer>
          <h4>Copyright <span className='year'>@ {getYear}</span></h4>
          <h3>Desgined by <span className='name'>senthamizhselvan</span></h3>
      </footer>
  )
}

export default Footer