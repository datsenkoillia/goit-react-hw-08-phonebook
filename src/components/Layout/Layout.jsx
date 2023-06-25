import React from 'react';
import { Outlet } from 'react-router-dom';
// import { StyledNavLink } from './Layout.styled';
// import Navigation from 'components/Navigation/Navigation';
import { StyledAppBar } from 'components/AppBar/AppBar';
import { PagesContainer } from './Layout.styled';

const Layout = () => {
  return (
    <div
      style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: '0 16px',
        outline: '1px solid tomato',
      }}
    >
      <StyledAppBar />

      <PagesContainer>
        <Outlet />
      </PagesContainer>
    </div>
  );
};

export default Layout;

