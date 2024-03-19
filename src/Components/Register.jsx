import React from 'react'

const Register = () => {
  return (
    <div className="flex flex-col item-center justify-center h-screen ">
    <div className="flex flex-col justify-center shadow-2xl items-center border-4 p-7 bg-neutral-300 rounded-2xl whith-500">
      <h1 className="text-2xl font-bold mt-4">Register</h1>
      <p className="mt-5">Enter your details Below</p>
      <input 
      type="email" 
      className="mt-4 border-b-2 p-2 border-gray-500 outline-none focus:border-blue-500 rounded-1xl" 
      placeholder="Name" />

      <input 
      type="email" 
      className="mt-4 border-b-2 p-2 border-gray-500 outline-none focus:border-blue-500 rounded-1xl" 
      placeholder="Email or Phone Number" />

      <input 
      type="password" 
      className="mt-4 border-b-2 p-2 border-gray-500 outline-none focus:border-blue-500 rounded-1xl"  
      placeholder="Password"/>

      <button 
      className="mt-4  bg-red-400 bottom-1 hover:bg-green-800 border-black rounded-2xl p-2 font-semibold py-3" >
       Create Account</button>
    <p className='mt-4'>Already have an Account? Login</p>
    </div>
  </div>
  )
}

export default Register
