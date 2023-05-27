import React from "react";
import {
  CartContainer,
  CartFormHolder,
  CartFormTitle,
  CartItemsHolder,
  CartList,
} from "./ShoppingCart.styled";
import Form from "components/common/Form/Form";
import goodsList from "assets/data/goodsList";
import FoodCard from "components/common/FoodCard/FoodCard";
import { Iframe } from "components/common/MapIframe/MapIframe.styled";

const link =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18641.81144410652!2d30.49197570833961!3d50.438684174234275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4d936e00c698d%3A0x60c0571f6628eefb!2zTWNEb25hbGTigJlz!5e0!3m2!1suk!2sua!4v1685174867662!5m2!1suk!2sua";
export default function ShoppingCart() {
  return (
    <CartContainer>
      <CartFormHolder>
        <Iframe src={link} />
        <CartFormTitle>Please enter your info</CartFormTitle>
        <Form />
      </CartFormHolder>
      <CartItemsHolder>
        <CartList>
          {goodsList.map(({ id, name, description, price, img }) => (
            <FoodCard
              key={id}
              id={id}
              name={name}
              description={description}
              price={price}
              img={img}
            />
          ))}
        </CartList>
      </CartItemsHolder>
    </CartContainer>
  );
}
