import React from "react";
import { FaShoppingBasket } from "react-icons/fa";
import { IoIosRemoveCircleOutline } from "react-icons/io";

export default function HomeHeader({ money, totalPrice, basket, setBasket }) {
  const removeBasket = (id) => {
    const checkBasket = basket.find((item) => item.id === id);
    checkBasket.amount -= 1;
    if (checkBasket.amount === 0) {
      setBasket([...basket.filter((item) => item.id !== id)]);
    } else {
      setBasket([...basket.filter((item) => item.id !== id), checkBasket]);
    }
  };
  return (
    <>
      {totalPrice > 0 && money - totalPrice !== 0 && (
        <div className="flex items-center justify-center gap-x-5  border-b-2 border-black ">
          <div className="sticky top-0 w-2/3  h-20 backdrop-blur-sm  text-center flex justify-center items-center uppercase text-xl font-bold">
            Hesabınızda{" "}
            <span className="text-4xl mx-3 tracking-wider">
              {money - totalPrice}
            </span>{" "}
            TL Kaldı
          </div>
          <div className=" relative group ">
            <FaShoppingBasket className="w-6 h-6" />
            <span className=" bg-black text-white h-4 w-4 flex text-xs rounded-full absolute top-4 left-4 items-center justify-center text-center ">
              {basket.length}
            </span>
            <div className=" opacity-0 group-hover:opacity-100   duration-300  absolute top-4 left-3 bg-black px-6 py-3 rounded-md">
              <div
                className={`text-white text-xs text-nowrap ${
                  basket.length > 5 ? "h-48" : ""
                }   overflow-auto no-scrollbar`}
              >
                <h3 className="text-center mb-3 text-xl sticky top-0 backdrop-blur-sm ">
                  Sepetim
                </h3>
                {basket.map((item) => (
                  <div className="mt-2  ">
                    <div
                      key={item.id}
                      className=" grid grid-cols-custom w-[160px] items-center justify-center mt-3 mb-2 border-b-2 border-white last:border-none"
                    >
                      <div className="text-left">{item.title}</div>
                      <div className="text-right">{item.amount} Adet</div>
                      <div className=" text-right ">
                        {item.price * item.amount} TL
                      </div>
                      <div
                        onClick={() => removeBasket(item.id)}
                        className="flex justify-end cursor-pointer select-none"
                      >
                        <IoIosRemoveCircleOutline className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                ))}
                <div className="flex gap-x-3 mt-3 mb-3 items-center">
                  <button
                    onClick={() => setBasket([])}
                    className="border px-1 py-0.5"
                  >
                    Sepeti boşalt
                  </button>
                  <div className="">Toplam {totalPrice} TL</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {totalPrice === 0 && (
        <div className="flex items-center justify-center gap-x-5  border-b-2 border-black ">
          <div className="sticky top-0 w-2/3  h-20 backdrop-blur-sm  text-center flex justify-center items-center uppercase text-xl font-bold">
            Hesabınızda{" "}
            <span className="text-4xl mx-3 tracking-wider">{money}</span> TL Var
          </div>
          <div className=" relative group  ">
            <FaShoppingBasket className="w-6 h-6" />
            <span className=" bg-black text-white h-4 w-4 flex text-xs rounded-full absolute top-4 left-4 items-center justify-center text-center ">
              {basket.length}
            </span>
            <div className=" opacity-0 group-hover:opacity-100  duration-300  absolute top-4 left-3 bg-black px-6 py-3 rounded-md">
              {basket.length === 0 && (
                <div className="text-white text-xs text-nowrap">
                  Sepetiniz boştur
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      {money - totalPrice === 0 && (
        <div className="flex items-center justify-center gap-x-5  border-b-2 border-black ">
          <div className="sticky top-0 w-2/3  h-20 backdrop-blur-sm  text-center flex justify-center items-center uppercase text-xl font-bold">
            Hesabınızdaki tüm parayı harcadınız
          </div>
          <div className=" relative group ">
            <FaShoppingBasket className="w-6 h-6" />
            <span className=" bg-black text-white h-4 w-4 flex text-xs rounded-full absolute top-4 left-4 items-center justify-center text-center ">
              {basket.length}
            </span>
            <div className=" opacity-0 group-hover:opacity-100   duration-300  absolute top-4 left-3 bg-black px-6 py-3 rounded-md">
              <div
                className={`text-white text-xs text-nowrap ${
                  basket.length > 5 ? "h-48" : ""
                }   overflow-auto no-scrollbar`}
              >
                <h3 className="text-center mb-3 text-xl sticky top-0 backdrop-blur-sm ">
                  Sepetim
                </h3>
                {basket.map((item) => (
                  <div className="mt-2  ">
                    <div
                      key={item.id}
                      className=" grid grid-cols-4 w-[160px] items-center justify-center mb-2 border-b-2 border-white last:border-none"
                    >
                      <div className="text-left">{item.title}</div>
                      <div className="text-center">{item.amount} Adet</div>
                      <div className=" text-right">
                        {item.price * item.amount} TL
                      </div>
                      <div>
                        {" "}
                        <IoIosRemoveCircleOutline />
                      </div>
                    </div>
                  </div>
                ))}
                <div className="flex">
                  <button>Sepeti boşalt</button>
                  <div className="">Toplam {totalPrice} TL</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div>Toplam tutar: {totalPrice} TL</div>
    </>
  );
}
