import React from "react";
import ComputerGuy from "../../../assets/images/computerguy.png";

const FirstPage = ({ number }) => {
  return (
    <div className="h-full bg-gray-300 flex flex-col items-center justify-around mx-auto">
      <div className="flex-1 h-[96%]">
        <div className="flex flex-col items-center justify-around text-xl">
          <div className="h-[60%]">
            <img src={ComputerGuy} alt="" />
          </div>
          <div className="flex-1 my-4 space-y-6">
            <p className="text-md">Hello</p>
            <p className="text-4xl font-extrabold">I'm Melkizedeki</p>
            <p className="text-md font-semibold">Fullstack developer</p>
            <p>Self employeed eployed engineer with one year of experience </p>
            <p> Am so confidence all kinds of development</p>
            <button className="font-bold text-xl bg-custome-green">
              Welcome
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-[4%]  px-4 font-bold flex items-baseline justify-end">
        Page:{number}
      </div>
    </div>
  );
};

export default FirstPage;
