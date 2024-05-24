import HomeHeader from "components/HomeHeader";
import { useEffect, useState } from "react";
import products from "products.json";
import HomeCard from "components/HomeCard";
export default function Home() {
  const [money, setMoney] = useState(1000);
  const [basket, setBasket] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    setTotalPrice(
      basket.reduce((acc, item) => {
        return acc + item.amount * item.price;
      }, 0)
    );
  }, [basket]);

  return (
    <div>
      <HomeHeader money={money} totalPrice={totalPrice} basket={basket} setBasket={setBasket} />
      <div className="flex flex-wrap justify-center gap-x-10 my-5">
        {products.map((product) => (
          <HomeCard
            product={product}
            setMoney={setMoney}
            basket={basket}
            money={money}
            setBasket={setBasket}
            totalPrice={totalPrice}
          />
        ))}
      </div>
    </div>
  );
}
