import styled from '@emotion/styled';
import { theme } from 'styles';

export const FormEl = styled.form`
  width: ${theme.spacing(88)};
  padding: ${theme.spacing(5)};
  padding-top: 0;
  display: flex;
  gap: ${theme.spacing(7)};
  align-items: last baseline;
  margin-bottom: ${theme.spacing(6)};
`;

export const Label = styled.label`
  display: block;
  font-size: ${theme.fontSizes.medium};
`;

export const Input = styled.input`
  margin-top: ${theme.spacing(2)};
  height: ${theme.spacing(7)};
  width: ${theme.spacing(55)};
`;

export const Button = styled.button`
  min-width: ${theme.spacing(38)};
  height: ${theme.spacing(9)};
`;
