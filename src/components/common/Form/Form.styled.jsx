// import { HomeBtn2, TeamTextM } from "components/sections";
import { ErrorMessage, Field, Form } from "formik";
import styled from "styled-components";
import { ReactComponent as ErrorSvg } from "images/warning.svg";

export const ContactForm = styled(Form)`
  padding: 0 8px;
`;

export const InputWrap = styled.div`
  position: relative;
`;

export const ContactInput = styled(Field)`
  display: block;
  height: 56px;
  width: 100%;
  border-radius: 5px;
  outline: none;
  border: none;
  margin-bottom: 22px;
  padding-left: 8px;
  background-color: ${(p) => p.theme.colors.gray};
  &:focus ~ span {
    transform: translateY(-40px);
    transition: transform 200ms ${(p) => p.theme.trFunction};
  }
`;

export const PlaceholderText = styled.span`
  pointer-events: none;
  font-weight: 400;
  font-size: ${(p) => p.theme.fonts.m};
  line-height: 1.44;
  color: #808080;
  position: absolute;
  top: 16px;
  left: 8px;
  &.active {
    transform: translateY(-40px);
    transition: transform 200ms ${(p) => p.theme.trFunction};
  }
`;

export const ErrorText = styled.p`
  display: flex;
  width: 100%;
  font-size: 14px;
  align-items: center;
  align-self: center;
  position: absolute;
  color: red;
  top: 100%;
  left: 60%;
  transform: translateX(-25%);
`;

export const FormBtn = styled.button`
  width: 120px;
  height: 40px;
  background-color: ${(p) => p.theme.colors.accent};
  border-radius: 4px;

  &:hover {
    background-color: ${(p) => p.theme.colors.header};
    color: ${(p) => p.theme.colors.white};
  }
`;
export const ErrorSvgStyled = styled(ErrorSvg)`
  align-self: center;
  margin-right: 5px;
`;

export const LoginFormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={(message) => (
        <ErrorText>
          <ErrorSvgStyled />
          {message}
        </ErrorText>
      )}
    />
  );
};
