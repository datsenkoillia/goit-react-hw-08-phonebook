import styled from 'styled-components';

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  padding: 5px;
  padding-left: 10px;
  margin: 2px;

  border: 1px solid #1976d2;
  border-radius: 5px;

  &:nth-child(even) {
    background-color: rgb(216, 216, 216);
  }
`;
