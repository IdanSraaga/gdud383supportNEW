// src/TutorialsPage.js
import React from 'react';
import { useEffect } from 'react';
import Nav from '../components/CenteredNav';
import '../styles/navcss.css'
import MultiFilters from '../components/MultiFilter';


const TutorialPage = () => {
    /* This will run one time after the component mounts
    useEffect(() => {
        // callback function to call when event triggers
        const onPageLoad = () => {
            console.log('page loaded');
        };

        // Check if the page has already loaded
        if (document.readyState === 'complete') {
        onPageLoad();
        } else {
        window.addEventListener('load', onPageLoad, false);
        // Remove the event listener when component unmounts
        return () => window.removeEventListener('load', onPageLoad);
        }
    }, []);*/
  return (
    <div>
      <div className="nav-div">
          <Nav/>
          
      </div>
      <p style={{
          fontSize: '60px',
          fontFamily: "SuezOneLight",
          textAlign: "center",
          fontWeight: 400,
          position: 'relative', // Position the <p> tag relative to its normal position
          zIndex: 2, // Ensure the <p> tag appears above other elements
          marginTop: '-50px' // Adjust the margin to move it upwards
        }}> 
        נהלים ומדריכים
      </p>
      <MultiFilters/>
    </div>
  );
};
export default TutorialPage