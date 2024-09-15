import styled from 'styled-components';

const Img = styled.img<{ $isInView: boolean }>`
  display: block;
  max-width: 350px;
  width: auto;
  height: auto;
  opacity: ${({ $isInView }) => ($isInView ? 1 : 0)};
  transition: ${({ theme }) => theme.animations.transitions.cubicBezierFadeIn};

  --mask: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 1) 0,
      rgba(0, 0, 0, 1) 70%,
      rgba(0, 0, 0, 0) 95%,
      rgba(0, 0, 0, 0) 0
    )
    100% 50% / 100% 100% repeat-x;

  -webkit-mask: var(--mask);
  mask: var(--mask);
`;

export { Img };
