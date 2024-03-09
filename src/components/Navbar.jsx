import '../styles/Navbar.css';
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [timestamp, setTimestamp] = useState('');

  useEffect(() => {
    function updateTime() {
      var currentTime = new Date();

      var hours = currentTime.getHours();
      var minutes = currentTime.getMinutes();
      if (minutes < 10) {
        minutes = '0' + minutes;
      }
      var t_str = hours + ':' + minutes + ' ';

      setTimestamp(
        document.getElementById('timestamp').innerHTML= (currentTime.getDate() +
          '/' +
          (currentTime.getMonth() + 1) + // Note: Months are zero-indexed, so add 1
          '/' +
          currentTime.getFullYear() +
          ' | ' +
          t_str)
      );
    }

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []); // Empty dependency array means the effect runs once after the initial render

  return (
    <div className="header">
        <div className="left-element" >Left</div>
        <div className="center-element" id="timestamp" >{timestamp}</div>
        <div className="right-element">Right</div>
    </div>
  );
};

export default Navbar;