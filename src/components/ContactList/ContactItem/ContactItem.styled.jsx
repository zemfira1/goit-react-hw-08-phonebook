import styled from '@emotion/styled';
import { theme } from 'styles';

export const ContactTr = styled.tr`
  font-size: ${theme.fontSizes.large};
  align-items: baseline;
`;

export const ContactTd1 = styled.td`
  height: ${theme.spacing(10)};
  width: ${theme.spacing(10)};
`;

export const ContactTd2 = styled.td`
  height: ${theme.spacing(10)};
  width: ${theme.spacing(55)};
`;

export const ContactTd3 = styled.td`
  height: ${theme.spacing(10)};
  width: ${theme.spacing(63)};
  display: flex;
  gap: ${theme.spacing(7)};
`;

export const ButtonEl = styled.button`
  width: ${theme.spacing(25)};
  height: ${theme.spacing(7)};
  font-size: ${theme.fontSizes.small};
  border: 1px solid ${theme.colors.greenDark};
  border-radius: ${theme.spacing(1)};
  background-color: inherit;
  box-shadow: ${theme.shadows.small};
  transition: box-shadow 150ms linear;

  &:hover,
  :focus {
    box-shadow: ${theme.shadows.inHover};
  }
`;
