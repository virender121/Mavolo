import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './Client.css';

const clientImages = [
  'https://seeklogo.com/images/B/business-company-logo-C561B48365-seeklogo.com.png',
  'https://cdn.logojoy.com/wp-content/uploads/2018/05/01104625/3104.png',
  'data:image/jpeg;base64,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',
  'https://w7.pngwing.com/pngs/732/34/png-transparent-logo-amazon-com-brand-flipkart-others-text-orange-logo-thumbnail.png',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4BfDEG_E21g0RDwHVwV8Qo3cly4VB7YnR8w&usqp=CAU',
];


function Client() {
  const scrollContainerRef = useRef(null);

  const handleScroll = (scrollOffset) => {
    if (scrollContainerRef.current) {
      const scrollContainer = scrollContainerRef.current;
      scrollContainer.scrollBy({ left: scrollOffset, behavior: 'smooth' });
    }
  };

  return (
    <div className="ScrollView">
      <h1>OUR CLIENTS</h1>
      <div className="Client" ref={scrollContainerRef}>
        {clientImages.map((image, index) => (
          <div className="ClientItem" key={index}>
            <img className="ClientImage" src={image} alt={`Client ${index + 1}`}  style={{height:'200px'}}/>
          </div>
        ))}
      </div>
      <div className="ScrollButtons">
        <button onClick={() => handleScroll(-200)}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <button onClick={() => handleScroll(200)}>
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
}

export default Client;
