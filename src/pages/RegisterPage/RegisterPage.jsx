import { RegisterForm } from 'components/RegisterForm';
import { StyledTypography } from './RegisterPage.styled';

const RegisterPage = () => {
  return (
    <>
      <StyledTypography variant="h4" align="center">
        Please enter data for Register:
      </StyledTypography>
      <RegisterForm />
    </>
  );
};

export default RegisterPage;
