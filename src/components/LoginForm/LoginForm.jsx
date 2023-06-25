import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import { Form } from './LoginForm.styled';
import { Button, TextField } from '@mui/material';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
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
        Login
      </Button>
    </Form>
  );
};
