import React from "react";
import {
  CartContainer,
  CartFormHolder,
  CartFormTitle,
  CartItemsHolder,
  CartList,
} from "./ShoppingCart.styled";
import Form from "components/common/Form/Form";
import goodsList from "assets/fonts/data/goodsList";
import FoodCard from "components/common/FoodCard/FoodCard";

export default function ShoppingCart() {
  return (
    <CartContainer>
      <CartFormHolder>
        <CartFormTitle>Please enter your info</CartFormTitle>
        <Form />
      </CartFormHolder>
      <CartItemsHolder>
        <CartList>
          {goodsList.map(({ id, name, description, price }) => (
            <FoodCard
              id={id}
              name={name}
              description={description}
              price={price}
            />
          ))}
        </CartList>
      </CartItemsHolder>
    </CartContainer>
  );
}
