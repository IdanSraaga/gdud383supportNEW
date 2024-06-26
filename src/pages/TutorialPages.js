// src/TutorialsPage.js
import React from 'react';
import '../styles/TutorialsPage.css';
import '../styles/TutorialBox.css';
import TutorialBox from '../components/TutorialBox';
import Nav from '../components/Nav';


const TutorialsPage = () => {

  return (
    <div className='body'>
      <Nav />
      <h1 style={{textAlign:"center",fontSize:'60px',marginBottom:'5vh',fontFamily:'SuezOne'}}>מדריכים ונהלים</h1>
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