import React, { useState } from "react";
import {
  GoodsHolder,
  ShopContainer,
  ShopItem,
  ShopList,
  ShopSection,
  ShopText,
  ShopsHolder,
} from "./Shop.styled";
import shopList from "assets/fonts/data/shopList";

export default function Shop() {
  const [selectedShop, setSelectedShop] = useState(0);
  return (
    <>
      <ShopSection>
        <ShopContainer>
          <ShopsHolder>
            <ShopList>
              {shopList.map(({ id, name }) => (
                <ShopItem
                  key={id}
                  onClick={(e) => {
                    setSelectedShop(id);
                  }}
                >
                  <ShopText className={selectedShop === id ? "active" : null}>
                    {name}
                  </ShopText>
                </ShopItem>
              ))}
            </ShopList>
          </ShopsHolder>
          <GoodsHolder>Goods</GoodsHolder>
        </ShopContainer>
      </ShopSection>
    </>
  );
}
