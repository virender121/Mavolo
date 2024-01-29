import React from 'react';
import './CoreValues.css'; // Create a corresponding CSS file

function CoreValues() {
  return (
    <>
     <h1>Core Values</h1>
    <div className="core-values-container">
       
      <div className="core-value-card">
        <div className="headings">
        <h2>Innovation</h2></div>
        <p style={{marginTop:'50px'}}>We believe charging and internet are fundamental to human needs in present situation....</p>
      </div>
      <div className="core-value-card">
      <div className="headings">
        <h2>Excellence</h2></div>
        <p style={{marginTop:'50px'}}>We believe charging and internet are fundamental to human needs in present situation....</p>
      </div>
      <div className="core-value-card">
      <div className="headings"> 
        <h2>Reliability</h2></div>
        <p style={{marginTop:'50px'}}>We believe charging and internet are fundamental to human needs in present situation....</p>
      </div>
    </div>
    </>
  );
}

export default CoreValues;
