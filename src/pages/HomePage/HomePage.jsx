import { Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSlice';
import { selectUser } from 'redux/auth/authSlice';
import { selectIsLoading } from 'redux/contacts/contactsSlice';

const HomePage = () => {
  const userData = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  

  return (
    <>
      <Typography
        variant="h3"
        align="center"
        sx={{ color: '#1976d2', padding: '100px' }}
      >
        Welcome to Phonebook App!
      </Typography>
      <Typography variant="h4" align="center" sx={{ color: '#1976d2' }}>
        {!isLoggedIn
          ? 'Please Login to access your account, or Sign Up for new.'
          : `Hello, ${userData.name}!`}
      </Typography>
    </>
  );
};

export default HomePage;
