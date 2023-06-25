import { LoginForm } from 'components/LoginForm/LoginForm';
import { StyledTypography } from './LoginPage.styled';

const LoginPage = () => {
  return (
    <>
      <StyledTypography variant="h4" align="center">
        Please enter data for Login:
      </StyledTypography>

      <LoginForm />
    </>
  );
};

export default LoginPage;
