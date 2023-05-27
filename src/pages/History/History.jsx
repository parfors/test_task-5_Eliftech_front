import { getHistory } from "api/api";
import { HistoryContainer, HistorySection } from "./History.styled";
import { useEffect, useState } from "react";
import FoodCard from "components/common/FoodCard/FoodCard";

export default function History() {
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const goods = await getHistory();
        setAllOrders(Array.isArray(goods) ? goods : []);
      } catch (error) {
        console.log("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const [allOrders, setAllOrders] = useState([]);

  const renderOrders = allOrders.reduce((acc, item) => {
    return [...acc, ...item.order];
  }, []);

  return (
    <>
      <HistorySection>
        <HistoryContainer>
          {renderOrders.map(
            ({ _id, name, description, price, img, location }, index) => (
              <FoodCard
                key={index}
                id={_id}
                name={name}
                description={description}
                price={price}
                img={img}
                location={location}
                history={true}
              />
            )
          )}
        </HistoryContainer>
      </HistorySection>
    </>
  );
}
