import PropTypes from 'prop-types';
import { ContactItem, StyledTypography } from './ContactElement.styled';
import { Button} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export const ContactElement = ({ id, name, number, deleteContact }) => {
  return (
    <ContactItem key={id}>
      <StyledTypography>
        <b>{name}: </b>
        {number}
      </StyledTypography>
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
