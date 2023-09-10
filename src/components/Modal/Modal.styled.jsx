import styled from '@emotion/styled';
import { theme } from 'styles';
import modalBg from '../../images/modalBg.png';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: ${theme.colors.modalWrapper};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ModalArea = styled.div`
  padding: ${theme.spacing(7)};
  border: 1px solid ${theme.colors.greyDark};
  border-radius: ${theme.spacing(1)};
  box-shadow: ${theme.shadows.small};
  background-color: azure;
  background-image: url(${modalBg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
