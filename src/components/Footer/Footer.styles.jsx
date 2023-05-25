import { Container } from "components/common/common";
import styled from "styled-components";

export const FooterStyled = styled.footer`
  margin: 0 auto;
`;

export const FooterContainer = styled(Container)`
  padding: 5px 0;
  background-color: ${(p) => p.theme.colors.header};
`;

export const FooterText = styled.p`
  color: ${(p) => p.theme.colors.white};
  text-align: center;
  font-size: ${(p) => p.theme.fonts.s};
  margin-bottom: 0px;
  @media screen and (min-width: 768px) {
    font-size: ${(p) => p.theme.fonts.m};
  }
`;

export const FooterList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FooterItem = styled.li`
  &:not(:last-child) {
    margin-right: 25px;
  }
  svg {
    width: 20px;
    height: 20px;
    fill: ${(p) => p.theme.colors.white};
    @media screen and (min-width: 320px) {
      width: 30px;
      height: 30px;
    }
    &:hover {
      fill: ${(p) => p.theme.colors.accent};
    }
  }
`;

export const SocialLink = styled.a``;
