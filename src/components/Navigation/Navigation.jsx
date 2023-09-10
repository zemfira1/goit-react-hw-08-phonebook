import { Outlet } from 'react-router-dom';
import {
  Container,
  Header,
  Main,
  Nav,
  NavLinkEl,
  RegLogArea,
} from './Navigation.styled';
import { Loader } from 'components/Loader';
import { Suspense } from 'react';
import UserMenu from 'components/UserMenu';
import { useAuth } from 'hooks';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Header>
        <Container>
          <Nav>
            {isLoggedIn && <NavLinkEl to="/contacts">Contacts</NavLinkEl>}
            <RegLogArea>
              {isLoggedIn ? (
                <UserMenu />
              ) : (
                <div>
                  <NavLinkEl to="/register">Register</NavLinkEl>
                  <NavLinkEl to="/login">Login</NavLinkEl>
                </div>
              )}
            </RegLogArea>
          </Nav>
        </Container>
      </Header>
      <Main>
        <Container>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Container>
      </Main>
    </>
  );
};
