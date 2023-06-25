import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 400;

  &:hover,
  &:focus {
    text-decoration: underline;
  }

  &.active {
    color: '#1976d2';
  }
  /* &.active {
    color: 'green';
  } */
`;

export const StyledNavContainer = styled.nav`
  /* padding: 5px; */
  display: flex;
  gap: 20px;
  align-items: baseline;
`;
