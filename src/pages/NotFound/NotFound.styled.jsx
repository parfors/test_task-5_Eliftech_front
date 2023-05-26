import { ReactComponent as NotSvg } from "images/notFound.svg";
import { ShopContainer } from "pages/Shop/Shop.styled";
import styled from "styled-components";

export const NotContainer = styled(ShopContainer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const NotText = styled.h2``;

export const NotFoundSvg = styled(NotSvg)`
  margin-bottom: 30px;
  width: 100px;
  height: auto;
`;
