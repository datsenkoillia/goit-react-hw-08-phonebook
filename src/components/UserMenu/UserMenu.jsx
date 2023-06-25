import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { selectUser } from 'redux/auth/authSlice';
import { StyledUserMenuContainer } from './UserMenu.styled';
import { Button, Typography } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';


const UserMenu = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUser);

  const handleLogOut = () => dispatch(logOut());

  return (
    <StyledUserMenuContainer>
      <Typography>{userData.email}</Typography>
      <Button
        onClick={handleLogOut}
        variant="contained"
        endIcon={<LogoutIcon />}
      >
        Logout
      </Button>
    </StyledUserMenuContainer>
  );
};

export default UserMenu;
