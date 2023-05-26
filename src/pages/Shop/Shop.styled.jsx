import { Container, SectionStyled } from "components/common/common";
import styled from "styled-components";

export const ShopSection = styled(SectionStyled)``;

export const ShopContainer = styled(Container)`
  padding: 10px 0;
  height: 620px;
  background-color: ${(p) => p.theme.colors.gray};
  display: grid;
  grid-template-columns: 0.3fr 1fr;
`;

export const ShopsHolder = styled.div`
  margin-left: 15px;
  border-radius: 5px;
  padding-top: 15px;
  background-color: ${(p) => p.theme.colors.white};
`;

export const ShopList = styled.ul``;

export const ShopItem = styled.li``;

export const ShopText = styled.p`
  padding: 6px 0 6px 30px;
  text-align: start;
  font-size: ${(p) => p.theme.fonts.m};
  font-weight: 700;
  &.active {
    background-image: linear-gradient(
      150deg,
      ${(p) => p.theme.colors.accent},
      #ffffff 75%
    );
  }
`;

export const GoodsHolder = styled(ShopsHolder)`
  margin-right: 15px;
  padding-left: 15px;
  padding-right: 15px;
  overflow-y: scroll;
`;

export const GoodsList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8px;
`;
