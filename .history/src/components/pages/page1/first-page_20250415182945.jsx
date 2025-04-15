import React from "react";
import ComputerGuy from "../../../assets/images/computerguy.png";

const FirstPage = () => {
  return (
    <div className="flex flex-col items-center justify-center mx-auto">
      <div>
        <img src={ComputerGuy} alt="" />
      </div>
      <div>
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
