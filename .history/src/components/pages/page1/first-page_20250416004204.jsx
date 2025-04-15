import React from "react";
import ComputerGuy from "../../../assets/images/computerguy.png";

const FirstPage = ({ number }) => {
  return (
    <div className="h-full bg-gray-300 flex flex-col items-center justify-around mx-auto">
      <div className="flex-1 h-[96%]">
        <div className="h-[60%]">
          <img src={ComputerGuy} alt="" />
        </div>
        <div className="flex-1 my-4">
          <p className=" font-bold">Hello</p>
          <p className="text-3xl font-bold">I'm Melkizedeki</p>
          <p className="text-md font-semibold">Fullstack developer</p>
          <p>
            Self employeed eployed engineer with one year of experience <br />
            Am so confidence all kinds of development
          </p>
        </div>
      </div>
      <div className="w-full h-[4%]  px-4 font-bold flex items-baseline justify-end">
        Page:{number}
      </div>
    </div>
  );
};

export default FirstPage;
