import React, { Component } from 'react';
import styles from './ContactList.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  removeContact,
  fetchContacts,
} from '../../redux/contacts/contacts-operations';
import contactsSelectors from '../../redux/contacts/contacts-selectors';

class ContactList extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    const { filtredContacts, onRemoveContact, isLoading } = this.props;
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
        {isLoading && <h2>Loading...</h2>}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: contactsSelectors.getLoading(state),
  filtredContacts: contactsSelectors.getFiltredContacts(state),
});

const mapDispatchToProps = dispatch => {
  return {
    onRemoveContact: contactId => {
      return dispatch(removeContact(contactId));
    },
    fetchContacts: () => {
      return dispatch(fetchContacts());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

ContactList.propTypes = {
  onRemoveContact: PropTypes.func,
  filtredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      number: PropTypes.string,
      id: PropTypes.number,
    }),
  ),
};
