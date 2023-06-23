import { ContactElement } from 'components/ContactElement';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  deleteContact,
  fetchContacts,
} from 'redux/contacts/contactsOperations';
import {
  selectContacts,
  selectFilter,
  selectIsLoading,
} from 'redux/contacts/contactsSlice';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const delContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const filteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };

  const contactList = filteredContacts();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      <ul>
        {contactList.map(({ id, name, number }) => (
          <ContactElement
            key={id}
            id={id}
            name={name}
            number={number}
            deleteContact={delContact}
          />
        ))}
      </ul>
    </>
  );
};
