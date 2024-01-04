import React from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ filter, onChange }) => {
  const handleChange = event => {
    onChange(event.target.value);
  };

  return (
    <div className={css.filter}>
      <label className={css.label}>
        Find contact by Name
        <input
          className={css.input}
          type="text"
          name="filter"
          value={filter}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
