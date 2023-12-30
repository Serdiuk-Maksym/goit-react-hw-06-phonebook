import React, { useState } from 'react';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

export const ContactForm = ({ onSubmitHandler }) => {
  const [formData, setFormData] = useState({ name: '', number: '' });

  const inputChangeValue = evt => {
    const { name, value } = evt.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    const { name, number } = formData;
    const lowercaseName = name.toLowerCase();

    if (onSubmitHandler) {
      onSubmitHandler({ name: lowercaseName, number });
      setFormData({ name: '', number: '' });
    }
  };

  const { name, number } = formData;

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label htmlFor="inputName">Name</label>
      <input
        className={css.input}
        type="text"
        name="name"
        value={name}
        id="inputName"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={inputChangeValue}
      />
      <label htmlFor="inputNumber">Number</label>
      <input
        className={css.input}
        type="tel"
        name="number"
        value={number}
        id="inputNumber"
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={inputChangeValue}
      />
      <button className={css.btn} type="submit">
        Add contact
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  onSubmitHandler: PropTypes.func,
};
