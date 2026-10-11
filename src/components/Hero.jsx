import React from "react";

const Hero = () => {
  return (
    <div className="h-150 m-3 rounded-3xl p-10 bg-[#F8FAFC] border-3 border-[#EEEEEE] justify-center items-center flex flex-col gap-10 ">
      <div className="p-3 rounded-2xl shadow-lg shadow-gray-500/50">
        <img src="/icons/icons8-task-completed-64.png" alt="" />
      </div>

      <div className="justify-center items-center flex-col flex text-7xl font-semibold font-stretch-100%">
        <p>Think, plan, and track</p>
        <p className="opacity-50">all in one place</p>
      </div>
      <p>Efficiently manages your task and boost productivity</p>
      <button className="bg-blue-500 shadow-blue-500/50 shadow-lg p-2 pl-6 pr-6 rounded-lg text-white">
        Get free demo
      </button>
    </div>
  );
};

export default Hero;
