import { TextField } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { filtered, selectFilter } from 'redux/contacts/contactsSlice';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const changeFilter = event => {
    dispatch(filtered(event.target.value));
  };

  return (
    <TextField
      type="text"
      value={filter}
      onChange={changeFilter}
      label="Find contacts by name"
      size="small"
    />
  );
};
