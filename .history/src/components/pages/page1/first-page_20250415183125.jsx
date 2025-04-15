import React from "react";
import ComputerGuy from "../../../assets/images/computerguy.png";

const FirstPage = () => {
  return (
    <div className="flex flex-col items-center justify-around mx-auto">
      <div className="h-[60%]">
        <img src={ComputerGuy} alt="" />
      </div>
      <div className="flex-1">
        <p>Hello</p>
        <p>I'm Melkizedeki</p>
        <p>Fullstack developer</p>
        <p>
          Self employeed eployed engineer with one year of experience <br />
          Am so confidence all kinds of development
        </p>
      </div>
    </div>
  );
};

export default FirstPage;
