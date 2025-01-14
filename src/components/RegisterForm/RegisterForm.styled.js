import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { ErrorMessage } from 'formik';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background: var(--welcomeBgColor);
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Wrapper = styled.div`
  background: var(--welcome-background-color);
  border-radius: 8px;
  padding: 40px;

  @media screen and (max-width: 768px) {
    padding: 24px;
  }
`;

export const Navigate = styled.div`
  display: flex;
`;

export const RegisterLink = styled(Link)`
  margin-right: 14px;

  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -0.02em;
  color: var(--welcome-hover-text-color);
`;

export const LoginLink = styled(Link)`
  left: 160px;
  top: 40px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -0.02em;
  color: rgba(255, 255, 255, 0.3);

  &:hover,
  &:focus {
    color: #bedbb0;
  }
`;

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  gap: 14px;

  input {
    width: 287px;
    height: 49px;
    left: 40px;
    top: 107px;

    color: var(--welcome-hover-text-color);
    background: #1f1f1f;
    opacity: 0.4;
    border: 1px solid #bedbb0;
    padding-left: 18px;
    box-shadow: 0px 4px 16px rgba(22, 22, 22, 0.08);
    border-radius: 8px;

    outline: none;

    @media screen and (min-width: 768px) {
      width: 326px;
    }
  }
`;
export const PasswordInput = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const PasswordView = styled.span`
  position: absolute;
  right: 18px;
  top: 19px;
  cursor: pointer;
`;

export const PasswordIcon = styled.img`
  width: 16.5px;
  height: 16px;
  top: 50%;
  right: 4px;
`;

export const Svg = styled.svg`
  width: 16.5px;
  height: 16px;
  top: 50%;
  right: 4px;
`;

export const RegisterBtn = styled.button`
  width: 100%;
  height: 49px;
  margin-top: 24px;

  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.02em;

  text-align: center;

  background: #bedbb0;
  border: none;
  border-radius: 8px;
  color: var(--welcome-title-color);
  cursor: pointer;

  &:hover,
  &:focus,
  &:active {
    background: #a1cf89;
  }

  &:active {
    transform: scale(0.95);
  }

  @media screen and (max-width: 768px) {
    width: 287px;
  }
`;

export const ErrorText = styled(ErrorMessage)`
  font-size: 14px;
  color: #bedbb070;
`;
