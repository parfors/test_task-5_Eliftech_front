import styled from "styled-components";
import { ReactComponent as DelSvg } from "images/delete.svg";

export const CardItem = styled.li`
  background-color: #f9d95b26;
  border-radius: 8px;
  padding: 5px 10px 10px 10px;
`;

export const CardId = styled.p`
  text-align: start;
  margin-left: 20px;
  margin-bottom: 6px;
  font-weight: 700;
  font-size: ${(p) => p.theme.fonts.m};
  color: ${(p) => p.theme.colors.accent};
`;

export const CardInfoWrap = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 0.6fr 1fr;
  margin-bottom: 8px;
  &::after {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 1px;
    top: 106%;
    background-color: gray;
  }
  &::before {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 1px;
    top: -6%;
    background-color: gray;
  }
`;

export const DescriptionWrap = styled.div`
  padding-left: 8px;
`;

export const CardImgWrap = styled.div``;

export const CardImg = styled.img``;

export const CardName = styled.p`
  margin-bottom: 4px;
  text-align: start;
  font-weight: 700;
  font-size: ${(p) => p.theme.fonts.l};
`;

export const CardDescription = styled.p`
  font-size: ${(p) => p.theme.fonts.s};
  text-align: start;
`;

export const CardPrice = styled.p`
  text-align: start;
  font-weight: 700;
  font-size: ${(p) => p.theme.fonts.m};
  margin-bottom: 4px;
`;

export const CardButton = styled.button`
  padding: 3px 10px;
  background-color: ${(p) => p.theme.colors.accent};
  border-radius: 4px;
  margin: 0;
  font-size: ${(p) => p.theme.fonts.m};

  &:hover {
    background-color: ${(p) => p.theme.colors.header};
  }
`;

export const InputWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const CardInput = styled.input``;

export const CardDeleteBtn = styled.button`
  margin-left: 25px;
  display: inline-block;
  display: flex;
  align-items: center;
  svg {
    height: 20px;
    width: auto;
    align-self: baseline;
  }
`;

export const CardSvg = styled(DelSvg);
