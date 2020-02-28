/** @format */

import React, { useReducer } from 'react'; // to have access to state and also dispatch, to dispatch to our reducer
import axios from 'axios';
// import uuid from 'uuid'; // to work with hard coded dummy data, foorrrrrr nowwwwww
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  GET_CONTACTS,
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_CONTACTS,
  CLEAR_FILTER,
  CONTACT_ERROR,
} from '../types';

const ContactState = props => {
  // const initialState = {
  //   contacts: [
  //     // can access in Contacts component
  //     {
  //       id: 1,
  //       name: 'Jill Johnson',
  //       email: 'jill@gmail.com',
  //       phone: '111-111-1111',
  //       type: 'personal',
  //     },
  //     {
  //       id: 2,
  //       name: 'Rico Quintanilla',
  //       email: 'jaycoquin@gmail.com',
  //       phone: '111-111-2222',
  //       type: 'personal',
  //     },
  //     {
  //       id: 3,
  //       name: 'Delia Bouhan',
  //       email: 'did.good.work@gmail.com',
  //       phone: '111-111-3333',
  //       type: 'professional',
  //     },
  //   ],
  //   current: null,
  //   filtered: null, // will be an array of filtered contacts that match the input
  // };

  const initialState = {
    contacts: null,
    current: null,
    filtered: null, // will be an array of filtered contacts that match the input
    error: null,
  };

  // state allows access to anything in our state; dispatch allows us to dispatch objects to the reducer
  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Get Contacts
  const getContacts = async () => {
    try {
      const res = await axios.get('/api/contacts');

      dispatch({
        type: GET_CONTACTS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: CONTACT_ERROR,
        payload: err.response.msg,
      });
    }
  };

  // Add Contact
  const addContact = contact => {
    contact.id = uuid.v4();
    dispatch({ type: ADD_CONTACT, payload: contact }); // dispatch to our reducer
  };

  // Delete Contact
  const deleteContact = id => {
    dispatch({ type: DELETE_CONTACT, payload: id }); // dispatch to our reducer
  };

  // Set Current Contact
  const setCurrent = contact => {
    dispatch({ type: SET_CURRENT, payload: contact }); // dispatch to our reducer
  };

  // Clear Current Contact
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT }); // dispatch to our reducer
  };

  // Update Contact
  const updateContact = contact => {
    dispatch({ type: UPDATE_CONTACT, payload: contact }); // dispatch to our reducer
  };

  // Filter Contacts
  const filterContacts = text => {
    dispatch({ type: FILTER_CONTACTS, payload: text }); // dispatch to our reducer
  };

  // Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER }); // dispatch to our reducer
  };

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        addContact, // whenever we need to access anything from a component through our context we need to add/call it here. if we reload it's just added to memory, not DB
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
        filterContacts,
        clearFilter,
      }}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
