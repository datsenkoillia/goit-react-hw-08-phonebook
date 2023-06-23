import { createSlice } from '@reduxjs/toolkit';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import { register, logIn, logOut, refreshUser } from './authOperations';
// import { useSelector } from 'react-redux';

const handleFulfilledRegister = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
};

const handleFulfilledLogin = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
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
      .addCase(logIn.fulfilled, handleFulfilledLogin)
      .addCase(logOut.fulfilled, handleFulfilledLogOut)
      .addCase(refreshUser.fulfilled, handleFulfilledRefresh)
      .addCase(refreshUser.pending, handlePendingRefresh)
      .addCase(refreshUser.rejected, handleRejectedRefresh);
  },
});

// const persistConfigAuth = {
//   key: 'auth',
//   storage,
//   whitelist: ['token'],
// };

// export const persistedAuthReducer = persistReducer(
//   persistConfigAuth,
//   authSlice.reducer
// );

export const authReducer = authSlice.reducer;

// export const authReducer = authSlice.reducer;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUser = state => state.auth.user;
export const selectIsRefreshing = state => state.auth.isRefreshing;


// export const useAuth = () => {
//   const isLoggedIn = useSelector(selectIsLoggedIn);
//   const isRefreshing = useSelector(selectIsRefreshing);
//   const user = useSelector(selectUser);

//   return {
//     isLoggedIn,
//     isRefreshing,
//     user,
//   };
// };