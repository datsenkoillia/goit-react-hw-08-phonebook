import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';
import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/contacts/contactsSlice';

const ContactsPage = () => {
   const isLoading = useSelector(selectIsLoading);
  return (
    <>
      <Typography variant="h3" align="center" sx={{ color: '#1976d2' }}>
        Phonebook
      </Typography>
      <ContactForm />
      <Typography variant="h4" align="center" sx={{ color: '#1976d2' }}>
        {!isLoading ? 'Contacts' : 'Loading...'}
      </Typography>
      <Filter />
      <ContactList />
    </>
  );
};

export default ContactsPage;
