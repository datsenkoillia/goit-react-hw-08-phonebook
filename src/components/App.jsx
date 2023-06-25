import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import LoginPage from 'pages/LoginPage/LoginPage';
import ContactsPage from 'pages/ContactsPage/ContactsPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshing } from 'redux/auth/authSlice';
import { useEffect } from 'react';
import { logOut, refreshUser } from 'redux/auth/authOperations';
import HomePage from 'pages/HomePage/HomePage';
import { PrivateRoute, RestrictedRoute } from './Routes/Routes';
import { Toaster } from 'react-hot-toast';

export function App() {
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(refreshUser())
  //     .unwrap()
  //     .catch(() => dispatch(logOut()));
  // }, [dispatch]);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
        </Route>
      </Routes>
    </>
  );
}
