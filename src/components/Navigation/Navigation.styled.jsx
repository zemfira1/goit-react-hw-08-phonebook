import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { theme } from 'styles';

export const Container = styled.section`
  width: 1100px;
  margin-inline: auto;
`;
export const Header = styled.header`
  padding: ${theme.spacing(5)};
  border-bottom: 1px solid ${theme.colors.black};
  box-shadow: ${theme.shadows.headerBorder};
`;

export const Main = styled.main`
  padding: ${theme.spacing(5)};
  height: 100vh;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
`;

export const NavLinkEl = styled(NavLink)`
  text-decoration: none;
  font-size: ${theme.fontSizes.xxxl};
  font-weight: ${theme.fontWeight.normal};
  margin-right: ${theme.spacing(12)};
  transition: font-weight, 200ms;

  &.active {
    font-weight: ${theme.fontWeight.bold};
  }
`;

export const RegLogArea = styled.div`
  display: flex;
  gap: ${theme.spacing(5)};
`;
