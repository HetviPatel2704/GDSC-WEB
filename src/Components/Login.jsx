import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col item-center justify-center h-screen ">
     <div className="flex flex-col justify-center shadow-2xl w-[350px] h-[370px] items-center p-7 bg-neutral-300 rounded-2xl whith-500">
        <h1 className="text-4xl font-bold p-4 my-2">Login</h1>
        <p className="mt-2">Enter your details Below</p>
        <input type="email" className="mt-5 py-2 px-4 border-gray-500 rounded-1xl" placeholder="Email"></input>
        <input type="password" className="mt-5 py-2 px-4 border-gray-500 rounded-1xl"  placeholder="Password"></input>
        <form action="./Register">
        <button className="mt-4 bg-red-400 bottom-1 border-black rounded-2xl w-fit p-2 font-semibold py-3" >Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;