export const setFilterValue = (dispatch, setFilterAction) => value => {
  dispatch(setFilterAction(value));
};

export const handleFormSubmit =
  (dispatch, addContactAction, contacts, nanoid) => data => {
    const searchResult = contacts.find(contact => contact.name === data.name);
    if (!searchResult) {
      dispatch(addContactAction({ id: nanoid(), ...data }));
    } else {
      alert(`${data.name} is already in contacts`);
    }
  };

export const handleDeleteItem =
  (dispatch, deleteContactAction) => contactId => {
    dispatch(deleteContactAction(contactId));
  };
