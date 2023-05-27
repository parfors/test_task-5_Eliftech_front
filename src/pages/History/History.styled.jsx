import { SectionStyled } from "components/common/common";
import { CartContainer } from "pages/ShoppingCart/ShoppingCart.styled";
import styled from "styled-components";

export const HistorySection = styled(SectionStyled)``;

export const HistoryContainer = styled(CartContainer)`
  padding: 20px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 15px;
  overflow: scroll;
  & li {
    list-style: none;
  }
`;
