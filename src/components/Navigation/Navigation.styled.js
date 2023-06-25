import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 400;
  padding: 15px 0 15px;
 
  &:hover,
  &:focus {
    text-decoration: underline;
  }

  &.active {
    color: #1976d2;
  }
`;

export const StyledNavContainer = styled.nav`
  display: flex;
  gap: 30px;
  align-items: baseline;
`;
