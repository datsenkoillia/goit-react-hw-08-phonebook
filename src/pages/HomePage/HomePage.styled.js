import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  color: #1976d2;
  text-decoration: none;
  &:hover,
  &:focus {
    text-decoration: underline;
  }

  &.active {
    color: #1976d2;
  }
`;
