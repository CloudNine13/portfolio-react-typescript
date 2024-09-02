import styled from 'styled-components';

const Tech = styled.div`
    background-color: ${({ theme }) => theme.colors.extraLightGray};
    padding: 3px 5px;
    border-radius: 10px;
    font-size: ${({ theme }) => theme.fonts.size.regular};
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

export { Tech };
