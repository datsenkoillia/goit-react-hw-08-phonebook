import PropTypes from 'prop-types';
import { ContactItem } from './ContactElement.styled';
import { Button, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export const ContactElement = ({ id, name, number, deleteContact }) => {
  return (
    <ContactItem key={id}>
      <Typography sx={{ maxWidth: '400px' }}>
        <b>{name}: </b>
        {number}
      </Typography>
      <span>
        <Button
          type="button"
          variant="contained"
          onClick={() => deleteContact(id)}
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
      </span>
    </ContactItem>
  );
};

ContactElement.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
