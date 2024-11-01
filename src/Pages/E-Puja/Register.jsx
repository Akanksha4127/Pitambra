import React from 'react'

function Register() {
  return (
    <div className="h-screen flex flex-col items-center  border">
      <h1 className="text-center  text-3xl text-amber-600  underline font-bold  mt-10">
        Register
      </h1>
      <form action="" className='border mt-10 shadow-lg rounded-lg'>
        <div className="Email w-96 m-5">
          <label className="block mb-2 text-lg font-semibold w-fit text-orange-400   font-Philosopher">
            Name
          </label>
          <input
            type="Name"
            className="border-b-2 border-2 rounded-lg shadow-2xl px-4 py-3 border-yellow-200 w-full outline-none "
            placeholder="joe@example"
            name="name"
            required
          />
        </div>
        <div className="Email w-97 m-5">
          <label className="block mb-2 text-lg font-semibold w-fit text-orange-400   font-Philosopher">
            Email
          </label>
          <input
            type="email"
            className="border-b-2 border-2 rounded-lg shadow-2xl px-4 py-3 border-yellow-200 w-full outline-none "
            placeholder="joe@example.com"
            name="email"
            required
          />
        </div>
        <div className="Email w-96 m-5">
          <label className="block mb-2 text-lg font-semibold w-fit text-orange-400   font-Philosopher">
            Password
          </label>
          <input
            type="Password"
            className="border-b-2 border-2 rounded-lg shadow-2xl px-4 py-3 border-yellow-200 w-full outline-none "
            placeholder="joe@123"
            name="password"
            required
          />
        </div>
        <div className="Email w-96 m-5">
          <label className="block mb-2 text-lg font-semibold w-fit text-orange-400   font-Philosopher">
            Confirm Password
          </label>
          <input
            type="Password"
            className="border-b-2 border-2 rounded-lg shadow-2xl px-4 py-3 border-yellow-200 w-full outline-none "
            placeholder="joe@123"
            name="confirm password"
            required
          />
        </div>
      </form>
    </div>
  );
}

export default Register
