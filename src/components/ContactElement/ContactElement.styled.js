import styled from 'styled-components';

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  /* max-width: 400px; */
  /* margin-bottom: 10px; */
  padding: 5px;
  padding-left: 10px;
  margin: 2px;

  border: 1px solid #1976d2;
  border-radius: 5px;

  &:nth-child(even) {
    background-color: rgb(216, 216, 216);
    /* outline: 2px solid #1976d2; */
  }
`;

export const ContactButton = styled.button`
  display: inline;
  font-weight: 600;
  height: 24px;
  border-radius: 4px;
  padding: 0 15px;
  margin-left: 15px;
  transition: 300ms;
  border: none;
  background-color: rgb(173, 173, 173);
  cursor: pointer;

  &:hover,
  &:focus {
    color: red;
    background-color: #000;
  }
`;
