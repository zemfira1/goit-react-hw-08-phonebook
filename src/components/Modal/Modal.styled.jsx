import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ModalArea = styled.div`
  background-color: white;
  padding: 30px;
  border: 1px solid black;
  border-radius: 5px;
`;
