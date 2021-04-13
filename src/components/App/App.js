import React from 'react';
import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1>Phone book</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;
