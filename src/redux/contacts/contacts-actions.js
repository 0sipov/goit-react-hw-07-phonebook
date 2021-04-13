import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';
// import {
//   CREATE_CONTACT,
//   REMOVE_CONTACT,
//   FILTER_UPDATE,
// } from './contacts-action-types';

//VANILLA REDUX

// export const createContact = contact => ({
//   type: CREATE_CONTACT,
//   payload: {
//     name: contact.name,
//     number: contact.number,
//     id: uuidv4(),
//   },
// });

// export const removeContact = contactId => ({
//   type: REMOVE_CONTACT,
//   payload: contactId,
// });

// export const filterUpdate = contactName => ({
//   type: FILTER_UPDATE,
//   payload: contactName,
// });

//TOOLKIT

export const createContact = createAction(
  'contacts/createContact',
  contact => ({
    payload: {
      name: contact.name,
      number: contact.number,
      id: uuidv4(),
    },
  }),
);

export const removeContact = createAction('contacts/removeContact');

export const filterUpdate = createAction('contacts/updateFilter');
