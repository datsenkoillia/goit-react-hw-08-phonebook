import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';
import { useSelector } from 'react-redux';
import { selectContacts, selectIsLoading } from 'redux/contacts/contactsSlice';
import { StyledTypography } from './ContactsPage.styled';

const ContactsPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(selectContacts);

  return (
    <>
      <StyledTypography variant="h3" align="center">
        Phonebook
      </StyledTypography>
      <ContactForm />
      <StyledTypography variant="h4" align="center">
        {!isLoading ? 'Contacts' : 'Loading...'}
      </StyledTypography>
      {contacts.length > 0 ? (
        <Filter />
      ) : (
        <StyledTypography variant="h5" align="center">
          There are no contacts in your Phonebook yet. Please add a contact.
        </StyledTypography>
      )}
       <ContactList />
    </>
  );
};

export default ContactsPage;
