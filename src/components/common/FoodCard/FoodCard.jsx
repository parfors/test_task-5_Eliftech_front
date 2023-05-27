import { ReactComponent as DelSvg } from "images/delete.svg";
import { useDispatch } from "react-redux";
import {
  addProduct,
  deleteProduct,
  updateItemQuantity,
} from "redux/orders/ordersSlice";
import {
  ButtonsWrap,
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

export default function FoodCard({
  id,
  name,
  description,
  price,
  shop,
  img,
  order,
  clickHandler,
  location,
  setSelectedMagazine,
  disabled,
  history,
}) {
  const dispatch = useDispatch();

  const buttons = (
    <ButtonsWrap>
      {shop ? (
        <CardButton
          onClick={() => {
            setSelectedMagazine(order.shop);
            dispatch(addProduct(order));
          }}
          className={disabled ? "disClass" : ""}
          disabled={disabled}
          type="button"
        >
          Add to Cart
        </CardButton>
      ) : (
        <InputWrap>
          <CardInput
            onChange={(e) => {
              const quantity = e.target.value;
              dispatch(updateItemQuantity({ id, quantity }));
            }}
            type="number"
            min="1"
            max="20"
          />
          <CardDeleteBtn onClick={() => dispatch(deleteProduct(id))}>
            <DelSvg styles={{ width: "40px" }} />{" "}
          </CardDeleteBtn>
        </InputWrap>
      )}
    </ButtonsWrap>
  );

  return (
    <CardItem
      onClick={() => {
        if (!shop) {
          clickHandler(location);
        }
      }}
    >
      <CardId>ID:{id}</CardId>
      <CardInfoWrap>
        <CardImgWrap>
          <CardImg src={img} />
        </CardImgWrap>
        <DescriptionWrap>
          <CardName>{name}</CardName>
          <CardDescription>{description}</CardDescription>
        </DescriptionWrap>
      </CardInfoWrap>
      <CardPrice>{price} $</CardPrice>
      {!history && buttons}
    </CardItem>
  );
}
