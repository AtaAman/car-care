import React from "react";

const Cards = ({ icon, title, title1, title2 }) => {
  return (
    <div className="text-center h-[250px] w-[300px] p-10 space-y-4 bg-slate-300 border-2 border-secondary hover:text-black hover:bg-slate-500 transition duration-300 ease-in-out rounded-md cursor-pointer">
      {icon}
      <h1 className=" text-primary text-3xl font-bold">{title}</h1>
      <p className=" text-sm">
        {title1}
        <br />
        {title2}
      </p>
    </div>
  );
};

export default Cards;
