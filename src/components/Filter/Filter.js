import React from 'react';
import styles from './Filter.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filterUpdate } from '../../redux/contacts/contacts-actions';

const Filter = props => {
  const { filterUpdate, state } = props;
  return (
    <label>
      Find contacts by name
      <input
        className={styles.input}
        name="filter"
        type="text"
        value={state.filter}
        onChange={e => filterUpdate(e.target.value)}
      />
    </label>
  );
};

Filter.propTypes = {
  onChangeFilter: PropTypes.func,
};

const mapStateToProps = state => ({ state });

const mapDispatchToProps = dispatch => {
  return { filterUpdate: contactName => dispatch(filterUpdate(contactName)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
