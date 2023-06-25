import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import { Form } from './RegisterForm.styled';
import { Button, TextField } from '@mui/material';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <TextField
        label="Name"
        variant="outlined"
        type="text"
        name="name"
        required
        size="small"
        margin="normal"
        fullWidth
      />
      <TextField
        label="Email"
        variant="outlined"
        type="email"
        name="email"
        required
        size="small"
        margin="normal"
        fullWidth
      />
      <TextField
        label="Password"
        variant="outlined"
        type="password"
        name="password"
        required
        size="small"
        margin="normal"
        fullWidth
      />

      <Button
        type="submit"
        variant="contained"
        sx={{
          marginTop: 2,
        }}
      >
        Register
      </Button>
    </Form>
  );
};
