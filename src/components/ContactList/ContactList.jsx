import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from 'components/Contact/Contact';

export function ContactList({ contacts, filter, onDeleteItem }) {
  const calculateFilteredContacts = (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = calculateFilteredContacts(contacts, filter);

  return visibleContacts.map(contact => (
    <Contact
      key={contact.id}
      contact={contact}
      onDeleteItem={() => onDeleteItem(contact.id)}
    />
  ));
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object.isRequired),
  filter: PropTypes.string,
  onDeleteItem: PropTypes.func,
};

export default ContactList;
