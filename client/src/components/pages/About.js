/** @format */

import React from 'react';
import ContactForm from '../contactForm/ContactForm';
import Contacts from '../contacts/Contacts';
import ContactFilter from '../contacts/ContactFilter';

export const About = () => {
  return (
    <div className='aboutpage'>
      <div>
        <ContactForm />
      </div>
      <div>
        <ContactFilter />
        <Contacts />
      </div>
    </div>
  );
};

export default About;
