import FoodCard from "components/common/FoodCard/FoodCard";
import Form from "components/common/Form/Form";
import { Iframe } from "components/common/MapIframe/MapIframe.styled";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getOrders } from "redux/selectors";
import {
  CartContainer,
  CartFormHolder,
  CartFormTitle,
  CartItemsHolder,
  CartList,
  CartPlaceHolder,
  CartSection,
} from "./ShoppingCart.styled";

const link =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d68357.38099190762!2d30.402604759918923!3d50.45327444985601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce5b56cfb583%3A0x461d55d803fa9821!2z0JrQvtC80ZbRgtC10YLQuCDQktC10YDRhdC-0LLQvdC-0Zcg0KDQsNC00Lgg0KPQutGA0LDRl9C90Lg!5e0!3m2!1suk!2sua!4v1685205068868!5m2!1suk!2sua";

export default function ShoppingCart() {
  const [location, setLocation] = useState(link);

  const orders = useSelector(getOrders);

  const clickHandler = (locationLink) => {
    setLocation(locationLink);
  };

  return (
    <CartSection>
      <CartContainer>
        <CartFormHolder>
          <Iframe src={location} />
          <CartFormTitle>Please enter your info</CartFormTitle>
          <Form />
        </CartFormHolder>
        <CartItemsHolder>
          {orders.length > 0 ? (
            <CartList>
              {orders.map(
                ({ _id, name, description, price, img, location }) => (
                  <FoodCard
                    key={_id}
                    id={_id}
                    name={name}
                    description={description}
                    price={price}
                    img={img}
                    location={location}
                    clickHandler={clickHandler}
                  />
                )
              )}
            </CartList>
          ) : (
            <CartPlaceHolder></CartPlaceHolder>
          )}
        </CartItemsHolder>
      </CartContainer>
    </CartSection>
  );
}
