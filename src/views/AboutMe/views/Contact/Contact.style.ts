import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 105vh;
  padding-bottom: 40px;
  background: radial-gradient(circle, rgba(112, 109, 117, 1) 25%, rgba(61, 60, 60, 1) 75%);
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 700px;
  margin: 130px 0;
  padding: 25px 0;
  background-color: ${({ theme }) => theme.colors.lightGray};
  border: 2px solid ${({ theme }) => theme.colors.darkGray};
  border-radius: 30px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.24), 0 2px 3px rgba(0, 0, 0, 0.48);
`;

const Header = styled.h1`
  font-size: 50px;
`;

export { Wrapper, FormContainer, Header };
