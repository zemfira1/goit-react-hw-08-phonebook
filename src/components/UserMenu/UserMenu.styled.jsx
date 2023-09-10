import styled from '@emotion/styled';
import { theme } from 'styles';

export const UserCont = styled.div`
  display: flex;
  gap: ${theme.spacing(10)};
  align-items: baseline;
  font-size: ${theme.fontSizes.xl};
`;

export const LogoutBtn = styled.button`
  display: block;
  height: ${theme.spacing(7)};
  width: ${theme.spacing(25)};
  font-size: ${theme.fontSizes.small};

  border: 1px solid ${theme.colors.greenDark};
  border-radius: ${theme.spacing(1)};
  box-shadow: ${theme.shadows.small};
  transition: ${theme.animation.boxShadow};

  &:hover,
  :focus {
    box-shadow: ${theme.shadows.inHover};
  }
`;
