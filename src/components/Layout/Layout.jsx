import React from 'react';
import { Outlet } from 'react-router-dom';
// import { StyledNavLink } from './Layout.styled';
// import Navigation from 'components/Navigation/Navigation';
import { AppBar } from 'components/AppBar/AppBar';

const Layout = () => {
  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 16px', outline: '1px solid tomato' }}>
      <header>
        <AppBar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;

