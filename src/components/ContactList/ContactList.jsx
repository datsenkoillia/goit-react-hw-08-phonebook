import { ContactElement } from 'components/ContactElement';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  deleteContact,
  fetchContacts,
} from 'redux/contacts/contactsOperations';
import { selectContacts, selectFilter } from 'redux/contacts/contactsSlice';

import { List } from '@mui/material';
import { StyledTypography } from './ContactsList.styled';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
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
  const isNoMatches = contacts.length > 0 && contactList.length === 0;

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {contactList.length > 0 && (
        <List>
          {contactList.map(({ id, name, number }) => (
            <ContactElement
              key={id}
              id={id}
              name={name}
              number={number}
              deleteContact={delContact}
            />
          ))}
        </List>
      )}
      {isNoMatches && (
        <StyledTypography variant="h5" align="center">
          No matches
        </StyledTypography>
      )}
    </>
  );
};
