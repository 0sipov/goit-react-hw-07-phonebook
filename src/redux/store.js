import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsReducer from './contacts/contacts-reducer';
import logger from 'redux-logger';
// import { createStore, applyMiddleware, combineReducers } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// const rootReducer = combineReducers({ contacts: contactsReducer });
// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const contactsPersistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['items'],
};

const store = configureStore({
  reducer: { contacts: persistReducer(contactsPersistConfig, contactsReducer) },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

export default { store, persistor };
