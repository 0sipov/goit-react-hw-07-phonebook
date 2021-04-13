import React, { Component } from 'react';
import styles from './ContactForm.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createContact } from '../../redux/contacts/contacts-actions';

class ContactForm extends Component {
  state = {
    contact: { name: '', number: '' },
  };

  static propTypes = {
    onCreateContact: PropTypes.func,
  };

  handleChange = e => {
    this.setState(preState => {
      return {
        contact: { ...preState.contact, [e.target.name]: e.target.value },
      };
    });
  };

  isContainName = name => {
    name = name.toLowerCase();
    return this.props.state.contacts.items.find(
      e => e.name.toLowerCase() === name,
    );
  };

  clearContactInput = () =>
    this.setState({ contact: { name: '', number: '' } });

  handleSubmit = e => {
    const { onCreateContact } = this.props;
    const { contact } = this.state;
    e.preventDefault();
    this.isContainName(contact.name)
      ? alert(`Contact ${contact.name} already exists.`)
      : onCreateContact(contact);
    this.clearContactInput();
  };

  render() {
    const { contact } = this.state;
    const { handleChange } = this;
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            className={styles.input}
            name="name"
            type="text"
            value={contact.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Number
          <input
            className={styles.input}
            name="number"
            type="text"
            value={contact.number}
            onChange={handleChange}
          />
        </label>
        <button className={styles.addButton} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => ({ state });

const mapDispatchToProps = dispatch => {
  return { onCreateContact: contact => dispatch(createContact(contact)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
