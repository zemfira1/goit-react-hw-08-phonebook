import styled from '@emotion/styled';
import { theme } from 'styles';

export const CloseIcon = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const TitleEl = styled.h2`
  font-weight: ${theme.fontWeight.medium};
`;

export const FormEl = styled.form`
  width: ${theme.spacing(88)};
  padding: ${theme.spacing(5)};
  padding-left: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: ${theme.spacing(7)};
  margin-bottom: ${theme.spacing(6)};
`;

export const Label = styled.label`
  display: block;
  font-size: ${theme.fontSizes.medium};
`;

export const Input = styled.input`
  margin-top: ${theme.spacing(2)};
  height: ${theme.spacing(7)};
  width: ${theme.spacing(60)};
`;

export const Button = styled.button`
  width: ${theme.spacing(44)};
  height: ${theme.spacing(9)};
`;
