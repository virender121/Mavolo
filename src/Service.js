import React from 'react';
import './Service.css'; // Correct the import statement

function Service() {
  return (
    <div className="service-section">
      <h1>Services</h1>
      <div className="service-container">
        <div className="service-item">
          <img
            src="https://okcredit-blog-images-prod.storage.googleapis.com/2021/04/manufacturingbusiness3.jpg"
            alt="Service Image 1"
          />
          <h1>ODM</h1>
          <h3>Original Design Manufacture</h3>
        </div>

        <div className="service-item">
          <img
            src="https://1.bp.blogspot.com/-x6KLVc-Kz_Q/YAbzKMhOaPI/AAAAAAAAPiI/bs7lFR9qeAYJK67goAkYzUgONblC1qKmgCLcBGAsYHQ/s1600/production.jpg"
            alt="Service Image 2"
          />
          <h1>OEM</h1>
          <h3>Original Equipment Manufacture</h3>
        </div>
      </div>
    </div>
  );
}

export default Service;
