import { Container, SectionStyled } from "components/common/common";
import styled from "styled-components";
import HomeImg from "images/Pitsa.jpg";

export const PlaceholderSection = styled(SectionStyled)``;

export const PlaceholderContainer = styled(Container)`
  padding: 0;
  height: 620px;
  background-image: url(${HomeImg});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PlaceholderTitle = styled.h1`
  font-size: ${(p) => p.theme.fonts.xl};
  font-weight: 700;
  line-height: 1.3;
  color: ${(p) => p.theme.colors.white};
`;
