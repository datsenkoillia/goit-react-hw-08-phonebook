import { Outlet } from 'react-router-dom';
import { StyledAppBar } from 'components/AppBar';
import { Container, PagesContainer, Wrap } from './Layout.styled';

const Layout = () => {
  return (
    <Wrap>
      <Container>
        <StyledAppBar />
        <PagesContainer>
          <Outlet />
        </PagesContainer>
      </Container>
    </Wrap>
  );
};

export default Layout;
