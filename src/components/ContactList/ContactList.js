import React from 'react';
import styles from './ContactList.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeContact } from '../../redux/contacts/contacts-actions';

const ContactList = props => {
  const { filtredContacts, onRemoveContact } = props;
  return (
    <ul className={styles.contacts}>
      {filtredContacts.map(elem => {
        return (
          <li className={styles.contact} key={elem.id}>
            <p>
              {elem.name}: {elem.number}
            </p>
            <button
              className={styles.removeButton}
              type="button"
              onClick={() => {
                onRemoveContact(elem.id);
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  onRemoveContact: PropTypes.func,
  filtredContacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};

const filterContacts = (filter, contacts) => {
  const normalizedFilter = filter.toLowerCase();
  const filtredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
  return filtredContacts;
};

const mapStateToProps = state => ({
  filtredContacts: filterContacts(state.contacts.filter, state.contacts.items),
});

const mapDispatchToProps = dispatch => {
  return { onRemoveContact: contactId => dispatch(removeContact(contactId)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
