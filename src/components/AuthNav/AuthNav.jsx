import { StyledNavContainer, StyledNavLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <StyledNavContainer>
      <StyledNavLink to="/register">Sign Up</StyledNavLink>
      <StyledNavLink to="/login">Login</StyledNavLink>
    </StyledNavContainer>
  );
};
