import React from "react";

const Navbar = () => {
  return (
    <div className="h-14 bg-white flex justify-between items-center pt-4 pl-8 pr-8">
      <div className="flex justify-between items-center gap-5">
        <img
          className="h-10"
          src="/icons/icons8-task-completed-64.png"
          alt=""
        />
        <h1 className="font-medium text-xl">Chrono Task</h1>
      </div>

      <div className="flex  gap-10 text-md cursor-pointer">
        <h1>Features </h1>
        <h1>Solutions </h1>
        <h1>Resources </h1>
        <h1>Pricing </h1>
      </div>
      <div className="flex gap-4 text-md">
        <button>Sign in</button>
        <button className="bg-[#F8FAFC] border-3 border-[#EEEEEE] p-1 rounded-xl pl-4 pr-4">
          Get demo
        </button>
      </div>
    </div>
  );
};

export default Navbar;
