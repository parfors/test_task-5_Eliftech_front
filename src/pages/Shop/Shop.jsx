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
import { useSelector } from "react-redux";
import { getOrders } from "redux/selectors";

export default function Shop() {
  const userOrders = useSelector(getOrders);

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

  useEffect(() => {
    if (userOrders[0]?.shop) {
      setSelectedMagazine(userOrders[0].shop);
    }
  }, [userOrders]);

  const [goodsList, setGoodsList] = useState([]);
  const [selectedShop, setSelectedShop] = useState("");
  const [renderFood, setRenderFood] = useState([]);
  const [selectedMagazine, setSelectedMagazine] = useState("");

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
              {renderFood.map((order) => (
                <FoodCard
                  key={order._id}
                  id={order._id}
                  name={order.name}
                  description={order.description}
                  price={order.price}
                  shop={true}
                  img={order.img}
                  item={order.item}
                  order={order}
                  setSelectedMagazine={setSelectedMagazine}
                  disabled={
                    selectedMagazine !== "" && selectedMagazine !== order.shop
                  }
                />
              ))}
            </GoodsList>
          </GoodsHolder>
        </ShopContainer>
      </ShopSection>
    </>
  );
}
