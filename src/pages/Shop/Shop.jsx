import React, { useEffect, useState } from "react";
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
import shopList from "assets/data/shopList";
import FoodCard from "components/common/FoodCard/FoodCard";
import { getAllProducts } from "api/api";

export default function Shop() {
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const goods = await getAllProducts();
        setGoodsList(Array.isArray(goods) ? goods : []);
        setRenderFood(Array.isArray(goods) ? goods : []);
      } catch (error) {
        console.log("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);
  const [goodsList, setGoodsList] = useState([]);
  const [selectedShop, setSelectedShop] = useState(0);
  const [renderFood, setRenderFood] = useState([]);

  let filteredFood = [];

  const filterFood = (name) => {
    filteredFood = goodsList;

    if (name === "All") {
    } else {
      filteredFood = goodsList.filter((item) => {
        return item.shop === name;
      });
    }
    setRenderFood(filteredFood);
  };

  return (
    <>
      <ShopSection>
        <ShopContainer>
          <ShopsHolder>
            <ShopList>
              {shopList.map(({ id, name }) => (
                <ShopItem onClick={() => filterFood(name)} key={id}>
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
              {renderFood.map(({ _id, name, description, price, img }) => (
                <FoodCard
                  key={_id}
                  id={_id}
                  name={name}
                  description={description}
                  price={price}
                  shop={true}
                  img={img}
                />
              ))}
            </GoodsList>
          </GoodsHolder>
        </ShopContainer>
      </ShopSection>
    </>
  );
}
