import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function LoginCard() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <div>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2 w-80 h-80">
          <div className="mb-4">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              id="username"
              type="text"
              placeholder="Username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
              id="password"
              type="password"
              placeholder="******************"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <p className="text-red text-xs italic">Please choose a password.</p>
          </div>
          {password?.length > 0 && username?.length > 0 && (
            <div className="flex items-center justify-end">
              <Link
                className="bg-blue hover:bg-blue-dark  font-bold py-2 px-4 rounded border border-black"
                type="button"
                to={"/home"}
              >
                Sign In
              </Link>
            </div>
          )}
        </div>
        <p className="text-center text-grey text-xs">
          ©2021 Acme Corp. All rights reserved.
        </p>
      </div>
    </>
  );
}
