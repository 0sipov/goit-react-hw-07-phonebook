import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { createContact, removeContact, filterUpdate } from './contacts-actions';
// import {
//   CREATE_CONTACT,
//   REMOVE_CONTACT,
//   FILTER_UPDATE,
// } from './contacts-action-types';

const itemsReducer = createReducer([], {
  [createContact]: (state, { payload }) => [...state, payload],
  [removeContact]: (state, { payload }) => state.filter(e => e.id !== payload),
});

const filterReducer = createReducer('', {
  [filterUpdate]: (_, { payload }) => payload,
});

//VANILLA REDUX

// const itemsReducer = (state = [], { type, payload }) => {
//   switch (type) {
//     case CREATE_CONTACT:
//       return [
//         ...state,
//         { name: payload.name, id: payload.id, number: payload.number },
//       ];
//     case REMOVE_CONTACT:
//       const newContacts = state.filter(e => {
//         return e.id !== payload;
//       });
//       return newContacts;
//     default:
//       return state;
//   }
// };

// const filterReducer = (state = '', { type, payload }) => {
//   switch (type) {
//     case FILTER_UPDATE:
//       return payload;
//     default:
//       return state;
//   }
// };

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
