import React from 'react';
import { ImageLogo } from './styled-homepage';
const logo = require('../../img/logo.png');

const Homepage = () => {
  return (
    <div>
      <ImageLogo src={logo} />
    </div>
  );
};

export default Homepage;
