import React from "react";

export default function HomeCard({ product, setMoney, money }) {
  return (
    <div key={product.id} className="mt-10">
      <div className="bg-white p-4 pt-10 py-10 border border-black shadow-lg w-96 h-[188px]">
        <div className="flex justify-between items-center">
          <div className="text-lg font-bold">{product.title}</div>
          <div className="text-lg font-bold">{product.price} TL</div>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-sm">Product Price</div>
        </div>
        <button
          onClick={() => {
            if (money >= product.price) {
              setMoney(money - product.price);
            }
          }}
          className=" border border-black px-4 py-2  w-full mt-4 hover:border-2"
        >
          Buy
        </button>
      </div>
    </div>
  );
}
