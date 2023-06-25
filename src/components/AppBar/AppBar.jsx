import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { selectIsLoggedIn } from 'redux/auth/authSlice';
import { useSelector } from 'react-redux';
import { AppBarContainer } from './AppBar.styled';

export const StyledAppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <AppBarContainer>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </AppBarContainer>
  );
};
