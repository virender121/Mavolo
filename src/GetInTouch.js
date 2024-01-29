import React, { useState } from 'react';
import './GetInTouch.css'; // Make sure to import your CSS file

function YourComponent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    companyName: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const checkValidations = () => {
    const { name, email } = formData;

    let letters = /^[a-zA-Z\s]*$/;
    let newErrors = {};

    if (name.trim() === '') {
      newErrors.name = 'Please fill out this field!';
    } else if (!letters.test(name)) {
      newErrors.name = 'Please enter only characters!';
    } else {
      newErrors.name = '';
    }

    if (email.trim() === '') {
      newErrors.email = 'Please fill out this field!';
    } else if (!letters.test(email)) {
      newErrors.email = 'Please enter only characters!';
    } else {
      newErrors.email = '';
    }

    setErrors(newErrors);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      companyName: '',
      message: '',
    });
    setErrors({
      name: '',
      email: '',
    });
  };

  return (
    <div className="contain">
      <div className="wrapper">
        <div className="form">
          <h4>GET IN TOUCH</h4>
          <h2 className="form-headline">Send us a message</h2>
          <form id="submit-form" action="">
            <p>
              <input
                id="name"
                className="form-input"
                type="text"
                placeholder="Your Name*"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
              <small className="name-error">{errors.name}</small>
            </p>
            <p>
              <input
                id="email"
                className="form-input"
                type="email"
                placeholder="Your Email*"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              <small className="name-error">{errors.email}</small>
            </p>
            <p className="full-width">
              <input
                id="company-name"
                className="form-input"
                type="text"
                placeholder="Company Name*"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                required
              />
              <small></small>
            </p>
            <p className="full-width">
              <textarea
                id="message"
                minLength="20"
                cols="30"
                rows="7"
                placeholder="Your Message*"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
              <small></small>
            </p>
            <p className="full-width">
              <input type="checkbox" id="checkbox" name="checkbox" checked />
              Yes, I would like to receive communications by call / email about Company's services.
            </p>
            <p className="full-width">
              <input type="submit" className="submit-btn" value="Submit" onClick={checkValidations} />
              <button className="reset-btn" onClick={resetForm}>
                Reset
              </button>
            </p>
          </form>
        </div>

        <div className="contacts contact-wrapper">
          <img src ='data:image/jpeg;base64,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' alt='images' />
 </div>
      </div>
    </div>
  );
}

export default YourComponent;
