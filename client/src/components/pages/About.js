/** @format */

import React from 'react';
import PinForm from '../pinForm/PinForm';
import Pins from '../pins/Pins';

export const About = () => {
  return (
    <div className='aboutpage'>
      <PinForm />
      <Pins />
    </div>
  );
};

export default About;
