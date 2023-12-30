import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { setFilter, addContact, deleteContact } from '../store/contactSlice';
import { AppSection, TitleOne } from './APP.styled';

export const App = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const inputChangeValue = evt => {
    const { value } = evt.target;
    dispatch(setFilter(value));
  };

  // const formSubmitHandler = data => {
  //   dispatch(addContact({ id: nanoid(), ...data }));
  // };

  const calculateFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const formSubmitSearchHandler = data => {
    const searchResult = contacts.find(contact => contact.name === data.name);
    if (!searchResult) {
      dispatch(addContact({ id: nanoid(), ...data }));
    } else {
      alert(`${data.name} is already in contacts`);
    }
  };

  const deleteItem = contactId => {
    dispatch(deleteContact(contactId));
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
