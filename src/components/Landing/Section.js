import React from "react";

const Section = () => {
  return (
    <div
      className="flex justify-between text-white px-4 mx-4 pt-11 mt-11 "
    >
      <div className="">
        <div className="flex space-x-2 items-center">
          <div className="w-8 h-20 bg-gray-900"></div>
          <div>
            <h1 className="text-2xl font-extrabold">
              THE <br />
              STUDIO
            </h1>
            <p className="text-sm tracking-widest">Your Tagline</p>
          </div>
        </div>

        <div className="mt-10 pt-10">
          <h3 className="text-5xl font-bold">Login</h3>
          <p className="pt-2 tracking-wide text-white">
            Welcome back, please login into your account
          </p>
        </div>

        <div className="mt-4 pt-4">
          <div className="w-12 h-3 bg-gray-900"></div>
          <div className="flex flex-col space-y-4 mt-3">
            <input
              type="email"
              placeholder="email address"
              className="p-3 outline-0 border-9 placeholder:tracking-wider"
            />

            <input
              type="password"
              placeholder="enter password"
              className="p-3 outline-0 border-9 placeholder:tracking-wider"
            />
          </div>

          <div className="mt-3 flex justify-between items-center font-medium">
            <div className="flex items-center space-x-1">
              <input type="checkbox" />
              <span className="text-sm">Remember Me</span>
            </div>

            <a href="#" className="text-sm">
              Forgot password
            </a>
          </div>

          <div className="mt-4 pt-4 space-x-12">
            <button className="p-4 w-2/5 bg-slate-900 text-white tracking-widest text-sm focus:bg-slate-800 hover:bg-slate-700">
              LOGIN
            </button>
            <button className="border-4 border-white p-3 w-2/5 text-sm tracking-widest">
              SIGN UP
            </button>
          </div>
        </div>

        <div className="flex flex-wrap py-10 mt-10 space-x-6 text-lg tracking-wide">
            <h3 className="cursor-pointer shadow-lg p-2">Or Login with</h3>
            <h3 className="cursor-pointer shadow-lg p-2">Facebook</h3>
            <h3 className="cursor-pointer shadow-lg p-2">Google</h3>
            <h3 className="cursor-pointer shadow-lg p-2">LinkedIn</h3>
        </div>
      </div>
    </div>
  );
};

export default Section;
