import React from 'react';
import './AboutUs.css'; // Assuming you have a CSS file for styling

function AboutUs() {
  return (
    <div className='about-section'>
      <h1>About Us</h1>
      <div className='card-container'>
       
        <div className='card'>
          <h2>Our Story</h2>
          <p>We saw a discomfort inthe gadget chargingspace, where everydevice has....</p>
          <button>Read more</button>
        </div>

        
        <div className='card'>
          <h2>Our Vision</h2>
          <p>We believe charging andinternet are fundamentalto human needs inpresent situation....</p>
          <button>Read more</button>
        </div>

        
        <div className='card'>
          <h2>Our Mission</h2>
          <p>We are on a mission toinstall these integratedsolutions on every working station....</p>
          <button>Read more</button>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
