import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './authOperations';
import { toast } from 'react-hot-toast';

const handleFulfilledRegister = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
  toast.success(`Welcome, ${state.user.name}`);
};

const handleRejectedRegister = () => {
  toast.error('Error Register');
};

const handleRejectedLogIn = () => {
  toast.error('Error Login. Wrong email or password, or user does not exist');
};

const handleFulfilledLogIn = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
  toast.success(`Welcome, ${state.user.name}`);
};

const handleFulfilledLogOut = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
};

const handleFulfilledRefresh = (state, { payload }) => {
  state.user = payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

const handlePendingRefresh = state => {
  state.isRefreshing = true;
};

const handleRejectedRefresh = state => {
  state.isRefreshing = false;
};

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, handleFulfilledRegister)
      .addCase(register.rejected, handleRejectedRegister)
      .addCase(logIn.fulfilled, handleFulfilledLogIn)
      .addCase(logIn.rejected, handleRejectedLogIn)
      .addCase(logOut.fulfilled, handleFulfilledLogOut)
      .addCase(refreshUser.fulfilled, handleFulfilledRefresh)
      .addCase(refreshUser.pending, handlePendingRefresh)
      .addCase(refreshUser.rejected, handleRejectedRefresh);
  },
});


export const authReducer = authSlice.reducer;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUser = state => state.auth.user;
export const selectIsRefreshing = state => state.auth.isRefreshing;

