import React from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { selectUser } from 'redux/auth/authSlice';

const UserMenu = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUser);
  // console.log(userData);

  const handleLogOut = () => dispatch(logOut())
  // const handleLogOut = () => { toast.success('Welcome'); console.log('toast');};

  return (
    <div>
      <p>{userData.name}</p>
      <p>{userData.email}</p>
      <button onClick={handleLogOut}>Logout</button>
    </div>
  );
};

export default UserMenu;
