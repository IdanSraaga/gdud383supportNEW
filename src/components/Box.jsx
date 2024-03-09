// Box.js
import React from 'react';
import '../styles/Box.css';
const Box = ({ imageSrc, title }) => {
  return (
    <div className="box">
      <div className="card-img">
        <img src={imageSrc} alt={title} />
      </div>
      <div className="desc">
        <h6 className="primary-text">{title}</h6>
      </div>
    </div>
  );
};

export default Box;