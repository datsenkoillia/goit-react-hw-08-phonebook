import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { selectIsLoggedIn } from 'redux/auth/authSlice';
import { useSelector } from 'react-redux';


export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      {/* <header className={css.header}> */}
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
      {/* </header> */}
    </>
  );
};
