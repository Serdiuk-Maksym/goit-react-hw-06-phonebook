import React from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ filter, onChange }) => {
  return (
    <div className={css.filter}>
      <label className={css.label}>
        Find contact by Name
        <input
          className={css.input}
          type="text"
          name="filter"
          value={filter}
          onChange={onChange}
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
