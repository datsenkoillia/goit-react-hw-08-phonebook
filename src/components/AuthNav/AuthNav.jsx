// import { NavLink } from 'react-router-dom';
import { StyledNavContainer, StyledNavLink } from './AuthNav.styled';
// import css from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <StyledNavContainer>
      <StyledNavLink to="/register">Sign Up</StyledNavLink>
      <StyledNavLink to="/login">Login</StyledNavLink>
    </StyledNavContainer>
  );
};
