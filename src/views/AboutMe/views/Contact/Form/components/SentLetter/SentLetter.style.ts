import { Button } from 'components';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.85);
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.h2`
  margin: 0;
`;

const CloseButton = styled.img`
  width: 15px;
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 0;
  align-self: flex-end;
  cursor: pointer;
`;

const ExploreButton = styled(Button)`
  width: 95%;
`;

const Text = styled.p`
  text-align: justify;
  padding: 0 20px;
`;

const Toast = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 550px;
  height: 330px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 15px;
  font-size: ${({ theme }) => theme.fonts.size.xl};
  color: ${({ theme }) => theme.colors.black};
  padding: 5px 20px;
  margin-top: 150px;
`;

export { Wrapper, Toast, Header, Text, CloseButton, ExploreButton };
