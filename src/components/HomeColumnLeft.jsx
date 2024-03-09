// HomeColumn1.js
import '../styles/HomeColumns.css'
import React from 'react';
import Box from './Box';
import Survey from '../imgs/survey.png'
import Tutorials from '../imgs/tutorials.png'
import { useNavigate } from "react-router-dom";

// import X from '../imgs/X.png'
import '../styles/Box.css'
const HomeColumnLeft = () => {
const navigate = useNavigate();
const handleClick = () => navigate('/tutorial');

  return (
    <div className="home-column3" >
        <div className="home-left-buttons">
        <div onClick={handleClick}><Box imageSrc={Tutorials} title="מדריכים ונהלים" /></div>
        <Box imageSrc={Survey} title="סקר לקוח" />
        <Box imageSrc="chat.png"  />
        {/* Add another Box component for the fourth box if needed */}
        </div>  
    </div>
  );
};

export default HomeColumnLeft;