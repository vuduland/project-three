/** @format */

import React, { Fragment, useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ContactItem from './ContactItem';

import ContactContext from '../../context/contact/contactContext';

const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts, getContacts, loading } = contactContext;

  useEffect(() => {
    getContacts();
    // eslint-disable-next-line
  }, []);

  // if there are no contacts, returns a message

  if (contacts !== null && contacts.length === 0 && !loading) {
    return <h4>Please add a contact</h4>;
  }

  return (
    <Fragment>
      <TransitionGroup>
        <CSSTransition key={contact._id} timeout={500} classNames='item'>
          <ContactItem contact={contact} />
        </CSSTransition>
        : contacts.map(contact => (
        <CSSTransition key={contact._id} timeout={500} classNames='item'>
          <ContactItem contact={contact} />
        </CSSTransition>
        ))
      </TransitionGroup>
    </Fragment>
  );
};

export default Contacts;
