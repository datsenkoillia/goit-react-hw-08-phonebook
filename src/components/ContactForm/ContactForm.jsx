import { useState } from 'react';
import {  Form } from './ContactForm.styled';

import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, selectIsLoading } from 'redux/contacts/contactsSlice';
import { addContact } from 'redux/contacts/contactsOperations';
import { TextField} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { LoadingButton } from '@mui/lab';

export function ContactForm() {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handlePhoneChange = event => {
    setPhone(event.target.value);
  };

  const resetForm = () => {
    setName('');
    setPhone('');
  };

  const createContact = (name, phone) => {
    const newContact = {
      name,
      number: phone,
    };

    const isExistContact = contacts.some(contact => contact.name === name);

    if (isExistContact) {
      alert(`${name} is already in contacts`);
    } else {
      resetForm();
      dispatch(addContact(newContact));
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    createContact(name, phone);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <TextField
        label="Name"
        variant="outlined"
        type="text"
        name="name"
        value={name}
        onChange={handleNameChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        size="small"
        margin="normal"
        fullWidth
      />
      <TextField
        label="Phone"
        variant="outlined"
        type="tel"
        name="number"
        value={phone}
        onChange={handlePhoneChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        size="small"
        margin="normal"
        fullWidth
      />
      <LoadingButton
        type="submit"
        loading={isLoading}
        loadingPosition="end"
        endIcon={<AddIcon />}
        variant="contained"
        sx={{
          marginTop: 2,
        }}
      >
        Add contact
      </LoadingButton>
    </Form>
  );
}
