import React from "react";
import LoginCard from "components/LoginCard";
import LoginCardHeader from "components/LoginCardHeader";

export default function LoginPage() {
  return (
    <>
      <div className=" h-screen w-screen flex justify-center items-center bg-gray-200">
        <div className="flex flex-col gap-y-10 items-center">
          <LoginCardHeader />
          <LoginCard />
        </div>
      </div>
    </>
  );
}
