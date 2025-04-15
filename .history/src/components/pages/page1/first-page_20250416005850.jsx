import React from "react";
import ComputerGuy from "../../../assets/images/computerguy.png";

const FirstPage = ({ number }) => {
  return (
    <div className="h-full bg-gray-300 flex flex-col items-center justify-between mx-auto px-6 py-4">
      {/* Main Content */}
      <div className="flex-1 w-full flex flex-col items-center justify-evenly">
        {/* Image Section */}
        <div className="w-full max-w-md h-[60%]">
          <img
            src={ComputerGuy}
            alt="Developer Illustration"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Text Content */}
        <div className="mt-6 text-center space-y-4 max-w-xl">
          <p className="text-base">Hello</p>
          <h1 className="text-4xl font-extrabold">I'm Melkizedeki</h1>
          <p className="text-lg font-semibold">Fullstack Developer</p>
          <p className="text-sm text-gray-700">
            Self-employed engineer with one year of experience.
          </p>
          <p className="text-sm text-gray-700">
            I’m confident in all kinds of development.
          </p>

          {/* Button */}
          <button className="mt-4 bg-custom-green text-white text-xl font-bold py-2 px-6 rounded-lg shadow-md hover:opacity-90 transition">
            Welcome
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full text-right font-bold mt-4 text-sm text-gray-800">
        Page: {number}
      </div>
    </div>
  );
};

export default FirstPage;
