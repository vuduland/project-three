/** @format */

import React from 'react';
import ContactForm from '../contactForm/ContactForm';
import Contacts from '../contacts/Contacts';

export const About = () => {
  return (
    <div className='aboutpage'>
      <ContactForm />
      <Contacts />
    </div>
  );
};

export default About;
