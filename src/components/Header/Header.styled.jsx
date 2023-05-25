import styled from "styled-components";
import { Container } from "../common/common";
import { ReactComponent as Logo } from "images/Logo.svg";
import { NavLink } from "react-router-dom";

export const HeaderStyled = styled.header``;

export const HeaderContainer = styled(Container)`
  padding: 16px 30px;
  background-color: ${(p) => p.theme.colors.header};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderNav = styled.nav``;

export const HeaderLink = styled(NavLink)`
  position: relative;
  color: ${(p) => p.theme.colors.white};
  font-size: ${(p) => p.theme.fonts.m};
  font-weight: 700;
  line-height: 1.4;
  :not(:last-child) {
    margin-right: 28px;
  }
  &:hover {
    color: ${(p) => p.theme.colors.accent};
  }

  &.active {
    color: ${(p) => p.theme.colors.accent};
  }
  &.active::before {
    content: "";
    display: block;
    position: absolute;
    top: 25px;
    left: -5%;
    width: 110%;
    height: 2px;
    background-color: ${(p) => p.theme.colors.accent};
  }
`;

export const LogoHolder = styled(NavLink)`
  display: flex;
`;

export const HeaderLogo = styled(Logo)`
  align-self: baseline;
  fill: ${(p) => p.theme.colors.white};
  cursor: pointer;
  :hover {
    transform: scale(1.1);
    transition: transform 300ms ${(p) => p.theme.trFunction};
    fill: ${(p) => p.theme.colors.accent};
  }
`;
