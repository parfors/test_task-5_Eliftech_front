import styled from "styled-components";

export const CardItem = styled.li`
  background-color: #f9d95b26;
  border-radius: 8px;
  padding: 10px 10px 15px 10px;
`;

export const CardId = styled.p`
  text-align: start;
  margin-left: 20px;
  margin-bottom: 15px;
  font-weight: 700;
  font-size: ${(p) => p.theme.fonts.l};
  color: ${(p) => p.theme.colors.accent};
`;

export const CardInfoWrap = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 0.6fr 1fr;
  margin-bottom: 20px;
  &::after {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 1px;
    top: 110%;
    background-color: gray;
  }
  &::before {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 1px;
    top: -10%;
    background-color: gray;
  }
`;

export const DescriptionWrap = styled.div`
  padding: 0 6px;
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
  padding-left: 10px;
  font-size: ${(p) => p.theme.fonts.m};
  text-align: start;
`;

export const CardPrice = styled.p`
  text-align: start;
  font-weight: 700;
  font-size: ${(p) => p.theme.fonts.l};
  margin-bottom: 10px;
`;

export const CardButton = styled.button`
  padding: 5px 10px;
  background-color: ${(p) => p.theme.colors.accent};
  border-radius: 4px;
  margin: 0;

  &:hover {
    background-color: ${(p) => p.theme.colors.header};
  }
`;
