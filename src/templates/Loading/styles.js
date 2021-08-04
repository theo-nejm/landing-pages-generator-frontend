import styled, { keyframes } from 'styled-components';

const rotate = () => keyframes`
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
    border-left: 0.5rem solid #dc143c;
    border-top: 0.5rem solid #dc143c;
  }

  25% {
    transform: translate(-50%, -50%) rotate(90deg);
    border-left: 0.5rem solid #FE365E;
    border-top: 0.5rem solid #FE365E;
  }

  50% {
    transform: translate(-50%, -50%) rotate(180deg);
    border-left: 0.5rem solid #FFD9D9;
    border-top: 0.5rem solid #FFD9D9;
  }

  75% {
    transform: translate(-50%, -50%) rotate(270deg);
    border-left: 0.5rem solid #FE365E;
    border-top: 0.5rem solid #FE365E;
  }

  100% {
    transform: translate(-50%, -50%) rotate(360deg);
    border-left: 0.5rem solid #dc143c;
    border-top: 0.5rem solid #dc143c;
  }
`;

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background: #0a1128;
  z-index: 10;

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    border: 0.5rem solid transparent;
    border-radius: 50%;
  }

  &:after {
    content: '';
    width: 6rem;
    height: 6rem;
    border-left: 0.5rem solid #dc143c;
    border-top: 0.5rem solid #dc143c;
    animation: ${rotate()} 2s linear infinite;
  }

  &:before {
    content: '';
    width: 20px;
    height: 20px;
    border-left: 0.5rem solid #dc143c;
    border-top: 0.5rem solid #dc143c;
    animation: ${rotate()} 1s linear infinite reverse;
  }
`;
