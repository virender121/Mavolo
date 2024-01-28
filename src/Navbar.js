import React from 'react';
import './Navbar.css';  
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='Nav'>
      <img
        src="data:image/png;base64,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"
        alt="Logo" 
        style={{ width: "100px", height: "80px" }}
      />
      <h1>Mavolo</h1>
      <h2><Link to='/'>Home</Link></h2>
      <h2><Link to='/aboutus'>About Us</Link></h2>
      <h2><Link to='/service'>Services</Link></h2>
      <h2><Link to='/product'>Products</Link></h2>
      <h2><Link to='/corevalues'>Core Values</Link></h2>
      <h2><Link to='/contactus'>Contact</Link></h2>
      <h2><Link to='/blogs'>Blogs</Link></h2>
    </div>
  );
}

export default Navbar;
