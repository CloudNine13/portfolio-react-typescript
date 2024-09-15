import styled from 'styled-components';

const Wrapper = styled.div`
  height: 90px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  font-size: ${({ theme }) => theme.fonts.size.xl};
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid #a09ca6;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(2px);
  }
`;

const SkillQuality = styled.img`
  margin: 5px 2.5px;
  user-select: none;
`;

const QualityContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
`;

export { Wrapper, SkillQuality, QualityContainer };
