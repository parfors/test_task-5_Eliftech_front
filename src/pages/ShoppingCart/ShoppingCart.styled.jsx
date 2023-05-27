import {
  GoodsHolder,
  GoodsList,
  ShopContainer,
  ShopsHolder,
} from "pages/Shop/Shop.styled";
import styled from "styled-components";

export const CartContainer = styled(ShopContainer)`
  grid-template-columns: 1fr 1fr;
`;

export const CartFormHolder = styled(ShopsHolder)`
  /* padding-top: 24px; */
`;

export const CartFormTitle = styled.h3`
  margin-top: 5px;
  margin-bottom: 10px;
`;

export const CartItemsHolder = styled(GoodsHolder)``;

export const CartList = styled(GoodsList)`
  grid-template-columns: 1fr;
`;
