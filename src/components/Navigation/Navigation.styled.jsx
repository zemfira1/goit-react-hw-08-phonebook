import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  padding: 20px;
  border-bottom: 2px solid #000;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.8),
    0px 1px 10px 0px rgba(0, 0, 0, 0.8);
`;

export const Main = styled.main`
  padding: 20px;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
`;

export const NavLinkEl = styled(NavLink)`
  font-size: 28px;
  color: inherit;
  transition: color, 200ms;

  &.active {
    color: #04b22a;
  }
`;
export const RegLog = styled.div`
  display: flex;
  gap: 20px;
`;
