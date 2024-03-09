// HomeColumnRight.js
import React from 'react';
import { useEffect, useState } from 'react';
import MainRouteButtons from './MainRouteButtons';
import ScrollingText from './ScrollingText';
import  "../styles/HomeColumnCenterCss.css"
const $ = require('jquery');

const HomeColumnCenter = () => {
  const [animationPaused, setAnimationPaused] = useState(false);

  useEffect(() => {


    const handleMouseEnter = () => {
      if (!animationPaused) {
        const scrollTextElement = document.getElementById('scroll-text');
        if (scrollTextElement) {
          scrollTextElement.style.animationPlayState = 'paused';
          setAnimationPaused(true);
        }
      }
    };

    const handleMouseLeave = () => {
      if (animationPaused) {
        const scrollTextElement = document.getElementById('scroll-text');
        if (scrollTextElement) {
          scrollTextElement.style.animationPlayState = 'running';
          setAnimationPaused(false);
        }
      }
    };

    const scrollTextElement = document.getElementById('scroll-text');
    const testPopupElement = document.getElementById('test-popup');

    if (scrollTextElement && testPopupElement) {
      const scrollingText = scrollTextElement.textContent;
      testPopupElement.textContent = scrollingText;
    }

    const myDiv = document.getElementById("scroll-container");


  }, [animationPaused]);

  return (
    
      <div className="home-column2">
        <div className="container"> 
          <div className="home-scrolling-text" id="scroll-container">
            <ScrollingText />
          </div>

          {/* Two buttons */}
          <div className="button-container">
            <button className="button">יש לי בקשה</button>
            <button className="button">יש לי תקלה</button>
          </div>
        </div>

      </div>

  );
};

export default HomeColumnCenter;
