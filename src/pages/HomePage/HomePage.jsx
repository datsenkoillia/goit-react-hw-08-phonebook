import { Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSlice';
import { selectUser } from 'redux/auth/authSlice';
import { StyledLink } from './HomePage.styled';

const HomePage = () => {
  const userData = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const pleaseLogin = (
    <>
      Please
      <b>
        <StyledLink to="login"> Login </StyledLink>
      </b>
      to access your account, or
      <b>
        <StyledLink to="register"> Sign Up </StyledLink>
      </b>
      for new.
    </>
  );

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
        {!isLoggedIn ? pleaseLogin : `Hello, ${userData.name}!`}
      </Typography>
    </>
  );
};

export default HomePage;
