import { TextField } from '@mui/material';
import { InputLabel, InputField } from './styled';
import { useSelector, useDispatch } from 'react-redux';
import { filtered, selectFilter } from 'redux/contacts/contactsSlice';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const changeFilter = event => {
    dispatch(filtered(event.target.value));
  };

  return (
    // <InputLabel>
    //   Find contacts by name
    <TextField
      type="text"
      value={filter}
      onChange={changeFilter}
      label="Find contacts by name"
      size="small"
    />
    // </InputLabel>
  );
};
