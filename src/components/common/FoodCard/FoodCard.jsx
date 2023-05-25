import React from "react";
import {
  CardButton,
  CardDescription,
  CardId,
  CardImg,
  CardImgWrap,
  CardInfoWrap,
  CardItem,
  CardName,
  CardPrice,
  DescriptionWrap,
} from "./FoodCard.styled";
import BurgerImg from "images/burger.jpg";

export default function FoodCard() {
  return (
    <CardItem>
      <CardId>ID:{}</CardId>
      <CardInfoWrap>
        <CardImgWrap>
          <CardImg src={BurgerImg} />
        </CardImgWrap>
        <DescriptionWrap>
          <CardDescription>
            <CardName>Name{}</CardName>
            Lo rffffffffffrffffffffff rffffffffffrffffffffff .. frffffffffff
            rffffffffffrffffffffff ffffffffffrffffffffff
          </CardDescription>
        </DescriptionWrap>
      </CardInfoWrap>
      <CardPrice>$599</CardPrice>
      <CardButton type="button">Add to Cart</CardButton>
    </CardItem>
  );
}
