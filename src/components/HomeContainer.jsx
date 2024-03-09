// HomeContainer.js
import React from 'react';
import HomeColumnRight from './HomeColumnRight';
import HomeColumnCenter from './HomeColumnCenter';
import HomeColumnLeft from './HomeColumnLeft';

const HomeContainer = () => {
  return (
    <div className="home-container">
      <HomeColumnLeft />
      <HomeColumnCenter />
      <HomeColumnRight />
    </div>
  );
};

export default HomeContainer;