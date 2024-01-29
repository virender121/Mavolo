import React from 'react';
import './BlogSection.css'; // Make sure to create a CSS file for styling

function BlogSection() {
  return (
    <div className="blog-section">
      <div className="blog-card">
        <div className=' card1'><h4>Images</h4></div>
        <div className="blog-content">
          <h3>Blog Title 1</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      
      <div className="blog-card">
        <img src="image2.jpg" alt="Blog Image 2" />
        <div className="blog-content">
          <h3>Blog Title 2</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      
      <div className="blog-card">
        
        <div className="blog-content">
          <h3>Blog Title 3</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
  );
}

export default BlogSection;
