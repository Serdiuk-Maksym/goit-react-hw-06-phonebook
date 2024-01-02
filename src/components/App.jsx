import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { setFilter, addContact, deleteContact } from '../store/contactSlice';
import * as ReduxFunctions from '../store/reduxFunctions';
import { AppSection, TitleOne } from './APP.styled';

export const App = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const inputChangeValue = ReduxFunctions.setFilterValue(dispatch, setFilter);
  const formSubmitSearchHandler = ReduxFunctions.handleFormSubmit(
    dispatch,
    addContact,
    contacts,
    nanoid
  );
  const deleteItem = ReduxFunctions.handleDeleteItem(dispatch, deleteContact);

  return (
    <AppSection>
      <TitleOne>PhoneBook</TitleOne>
      <ContactForm onSubmitHandler={formSubmitSearchHandler} />
      <h2>Contacts</h2>
      <Filter filter={filter} onChange={inputChangeValue} />
      <ContactList
        contacts={contacts}
        filter={filter}
        onDeleteItem={deleteItem}
      />
    </AppSection>
  );
};
