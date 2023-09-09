import { Outlet } from 'react-router-dom';
import { Header, Main, Nav, NavLinkEl, RegLog } from './Navigation.styled';
import { Loader } from 'components/Loader';
import { Suspense } from 'react';
import UserMenu from 'components/UserMenu';
import { useAuth } from 'hooks';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Header>
        <Nav>
          {isLoggedIn && <NavLinkEl to="/contacts">Contacts</NavLinkEl>}
          <RegLog>
            {isLoggedIn ? (
              <UserMenu />
            ) : (
              <div>
                <NavLinkEl to="/register">Register</NavLinkEl>
                <NavLinkEl to="/login">Login</NavLinkEl>
              </div>
            )}
          </RegLog>
        </Nav>
      </Header>
      <Main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Main>
    </>
  );
};
