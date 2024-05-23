import React from "react";

export default function HomeHeader({ money }) {
  return (
    <div className="w-full sticky top-0 h-20 border-b-2  backdrop-blur-sm border-black text-center flex justify-center items-center uppercase text-xl font-bold">
      Hesabınızda <span className="text-4xl mx-3 tracking-wider">{money}</span>  TL bulunuyor
    </div>
  );
}
