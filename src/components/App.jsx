import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { AppSection, TitleOne } from './APP.styled';

export const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const inputChangeValue = evt => {
    const { value } = evt.target;
    setFilter(value);
  };

  const formSubmitHandler = data => {
    setContacts(prevContacts => [{ id: nanoid(), ...data }, ...prevContacts]);
  };

  const calculateFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const formSubmitSearchHandler = data => {
    const searchResult = contacts.find(contact => contact.name === data.name);
    if (!searchResult) {
      formSubmitHandler(data);
      return true;
    } else {
      alert(`${data.name} is already in contacts`);
      return false;
    }
  };

  const deleteItem = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(item => item.id !== contactId)
    );
  };

  const visibleContacts = calculateFilteredContacts();

  return (
    <AppSection>
      <TitleOne>PhoneBook</TitleOne>
      <ContactForm onSubmitHandler={formSubmitSearchHandler} />
      <h2>Contacts</h2>
      <Filter filter={filter} onChange={inputChangeValue} />
      <ContactList list={visibleContacts} onDeleteItem={deleteItem} />
    </AppSection>
  );
};
