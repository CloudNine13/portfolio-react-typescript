import styled, { css } from 'styled-components';

const InputCommon = css`
  font-size: ${({ theme }) => theme.fonts.size.large};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  padding: 5px 10px;
  border-radius: 10px;
  margin-bottom: 30px;

  &:placeholder-shown {
    font-style: italic;
  }
`;

const StyledInput = styled.input`
  height: 30px;
  ${InputCommon}
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-size: ${({ theme }) => theme.fonts.size.large};
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TextArea = styled.textarea`
  height: 180px;
  min-height: 90px;
  max-height: 180px;
  resize: vertical;
  ${InputCommon}
`;

export { StyledInput, TextArea, Label, TopContainer };
