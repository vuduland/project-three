/** @format */

import React, { Fragment, useContext } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ContactItem from './ContactItem';
import ContactContext from '../../context/contact/contactContext';

const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts, filtered } = contactContext;

  if (contacts.length === 0) {
    // if there are no contacts, returns a message
    return <h4>Please add a contact.</h4>;
  }

  // Embedded in Home.js
  return (
    // checking if filtered is empty, if it is not, it shows what is in filtered, if not, it shows nothing.
    <Fragment>
      <TransitionGroup>
        {filtered !== null
          ? filtered.map(contact => (
              // key must be on the direct/top/primary element
              // classNames is plural for some reason
              <CSSTransition key={contact.id} timeout={1000} classNames='item'>
                <ContactItem contact={contact} />
              </CSSTransition>
            ))
          : contacts.map(contact => (
              <CSSTransition key={contact.id} timeout={1000} classNames='item'>
                <ContactItem contact={contact} />
              </CSSTransition>
            ))}
      </TransitionGroup>
    </Fragment>
  );
};

export default Contacts;
