import React from "react";

const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h2 className="text-2xl font-semibold text-center text-gray-800">
          Login
        </h2>
        <form className="mt-4 space-y-4">
          <div className="flex flex-col space-y-1">
            <label
              htmlFor="username"
              className="text-sm font-medium text-gray-800"
            >
              Username
            </label>
            <input
              type="username"
              id="username"
              className="w-full px-4 py-2 bg-transparent text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label
              htmlFor="fullName"
              className="text-sm font-medium text-gray-800"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              className="w-full px-4 py-2 text-gray-800 bg-transparent border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          <div className="flex flex-col space-y-1">
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-800"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 text-gray-800 bg-transparent border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-800"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 text-gray-800 bg-transparent border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          <div className="flex flex-col space-y-1">
            <label
              htmlFor="gender"
              className="text-sm font-medium text-gray-800"
            >
              Gender
            </label>
            <select className="w-full px-4 py-2 text-gray-800 bg-transparent border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300">
              <option value="male" className="text-gray-800">
                Male
              </option>
              <option value="female" className="text-gray-800">
                Female
              </option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
