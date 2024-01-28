// GetInTouch.js

import React from 'react';
import './GetInTouch.css';

const GetInTouch = () => {
  return (
    <div className="get-in-touch-box">
      <h2>Get in Touch</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Your Name" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Your Email" required />
        </div>

        <div className="form-group">
          <label htmlFor="contact">Contact No:</label>
          <input type="tel" id="contact" name="contact" placeholder="Your Contact No" />
        </div>

        <div className="form-group">
          <label htmlFor="products">Products:</label>
          <select id="products" name="products">
            <option value="product1">Product 1</option>
            <option value="product2">Product 2</option>
            <option value="product3">Product 3</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="query">Your Query:</label>
          <textarea id="query" name="query" rows="4" placeholder="Please enter your query"></textarea>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default GetInTouch;
