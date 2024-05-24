import React from "react";

export default function HomeCard({
  product,
  money,
  setBasket,
  basket,
  totalPrice,
}) {
  const basketItem = basket.find((item) => item.id === product.id);
  const addBasket = () => {
    const checkBasket = basket.find((item) => item.id === product.id);
    if (checkBasket) {
      checkBasket.amount += 1;
      setBasket([
        ...basket.filter((item) => item.id !== product.id),
        checkBasket,
      ]);
    } else {
      setBasket([
        ...basket,
        {
          id: product.id,
          title: product.title,
          price: product.price,
          amount: 1,
        },
      ]);
    }
  };
  const removeBasket = () => {
    const checkBasket = basket.find((item) => item.id === product.id);
    checkBasket.amount -= 1;
    if (checkBasket.amount === 0) {
      setBasket([...basket.filter((item) => item.id !== product.id)]);
    } else {
      setBasket([
        ...basket.filter((item) => item.id !== product.id),
        checkBasket,
      ]);
    }
  };
  return (
    <div key={product.id} className="mt-10">
      <div className="bg-white p-4 pt-10 py-10 border border-black shadow-lg w-96 h-[188px]">
        <div className="flex justify-between items-center">
          <div className="text-lg font-bold">{product.title}</div>
          <div className="text-lg font-bold">{product.price} TL</div>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-sm">
            Adet {(basketItem && basketItem.amount) || 0}
          </div>
        </div>
        <div className=" flex items-center justify-between h-12  mt-7">
          <button
            onClick={removeBasket}
            className=" border box-border w-36  border-black px-4 py-2    mt-4 hover:border-2 disabled:border"
            disabled={!basketItem}
          >
            Çıkar
          </button>
          <button
            onClick={addBasket}
            className=" border box-border border-black px-4 py-2 w-36    mt-4 hover:border-2 disabled:border "
            disabled={totalPrice + product.price > money}
          >
            Ekle
          </button>
        </div>
      </div>
    </div>
  );
}
