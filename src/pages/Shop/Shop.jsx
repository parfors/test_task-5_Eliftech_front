import React, { useState } from "react";
import {
  GoodsHolder,
  GoodsList,
  ShopContainer,
  ShopItem,
  ShopList,
  ShopSection,
  ShopText,
  ShopsHolder,
} from "./Shop.styled";
import shopList from "assets/fonts/data/shopList";
import FoodCard from "components/common/FoodCard/FoodCard";

export default function Shop() {
  const [selectedShop, setSelectedShop] = useState(0);
  return (
    <>
      <ShopSection>
        <ShopContainer>
          <ShopsHolder>
            <ShopList>
              {shopList.map(({ id, name }) => (
                <ShopItem key={id}>
                  <ShopText
                    className={selectedShop === id ? "active" : null}
                    onClick={(e) => {
                      setSelectedShop(id);
                    }}
                  >
                    {name}
                  </ShopText>
                </ShopItem>
              ))}
            </ShopList>
          </ShopsHolder>
          <GoodsHolder>
            <GoodsList>
              <FoodCard />
              <FoodCard />
            </GoodsList>
          </GoodsHolder>
        </ShopContainer>
      </ShopSection>
    </>
  );
}
