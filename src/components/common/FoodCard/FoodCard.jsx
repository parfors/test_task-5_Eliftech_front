import BurgerImg from "images/burger.jpg";
import { ReactComponent as DelSvg } from "images/delete.svg";
import {
  CardButton,
  CardDeleteBtn,
  CardDescription,
  CardId,
  CardImg,
  CardImgWrap,
  CardInfoWrap,
  CardInput,
  CardItem,
  CardName,
  CardPrice,
  DescriptionWrap,
  InputWrap,
} from "./FoodCard.styled";

export default function FoodCard({ id, name, description, price, shop }) {
  return (
    <CardItem>
      <CardId>ID:{id}</CardId>
      <CardInfoWrap>
        <CardImgWrap>
          <CardImg src={BurgerImg} />
        </CardImgWrap>
        <DescriptionWrap>
          <CardName>{name}</CardName>
          <CardDescription>{description}</CardDescription>
        </DescriptionWrap>
      </CardInfoWrap>
      <CardPrice>{price} $</CardPrice>
      {shop ? (
        <CardButton type="button">Add to Cart</CardButton>
      ) : (
        <InputWrap>
          <CardInput type="number" min="1" max="20" />
          <CardDeleteBtn>
            <DelSvg styles={{ width: "40px" }} />{" "}
          </CardDeleteBtn>
        </InputWrap>
      )}
    </CardItem>
  );
}
