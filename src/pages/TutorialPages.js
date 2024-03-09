// src/TutorialsPage.js
import React from 'react';
import '../styles/TutorialsPage.css';
import '../styles/TutorialBox.css';
import TutorialBox from '../components/TutorialBox';



const TutorialsPage = () => {

  return (
    <div className='body'>

      <h1 style={{textAlign:"center",fontSize:'80px',marginTop:'10vh',fontFamily:'SuezOne'}}>מדריכים ונהלים</h1>
      <div className="container-wrapper">
        <div className="categorycontainers">
          <TutorialBox />
          <TutorialBox />
          <TutorialBox />
          <TutorialBox />
          <TutorialBox />
          <TutorialBox />
        </div>
      </div>
    </div>
  );
};
export default TutorialsPage;