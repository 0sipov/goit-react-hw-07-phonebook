import React from 'react';
import styles from './Filter.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filterUpdate } from '../../redux/contacts/contacts-actions';
import contactsSelectors from '../../redux/contacts/contacts-selectors';

const Filter = props => {
  const { filterUpdate, filter } = props;
  return (
    <label>
      Find contacts by name
      <input
        className={styles.input}
        name="filter"
        type="text"
        value={filter}
        onChange={e => filterUpdate(e.target.value)}
      />
    </label>
  );
};

const mapStateToProps = state => ({
  filter: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = dispatch => {
  return { filterUpdate: contactName => dispatch(filterUpdate(contactName)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.propTypes = {
  onChangeFilter: PropTypes.func,
};
