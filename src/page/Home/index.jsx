import HomeHeader from "components/HomeHeader";
import { useState } from "react";
import products from "products.json";
import HomeCard from "components/HomeCard";
export default function Home() {
  const [money, setMoney] = useState(1000);
  return (
    <div>
      <HomeHeader money={money} />
      <div className="flex flex-wrap justify-center gap-x-10 my-5">
        {products.map((product) => (
          <HomeCard product={product} setMoney={setMoney} money={money} />
        ))}
      </div>
    </div>
  );
}
