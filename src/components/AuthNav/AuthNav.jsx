// import { NavLink } from 'react-router-dom';
import { StyledNavLink } from './AuthNav.styled';
// import css from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <div>
      <StyledNavLink to="/register">Sign Up</StyledNavLink>
      <StyledNavLink to="/login">Login</StyledNavLink>
    </div>
  );
};
