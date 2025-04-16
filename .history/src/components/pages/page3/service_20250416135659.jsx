import React from "react";
import { AiFillLayout } from "react-icons/ai";
import PageNumber from "../../footer/footer";

function ServicePage({ number }) {
  return (
    <div className="w-full h-full flex flex-col justify-between">
      <div className="flex-1">
        <div className="h-full w-full flex flex-col bg-orange-400 gap-4">
          <div className="mt-5 space-y-2 flex flex-col items-center justify-center font-semibold">
            <h1 className="text-4xl font-extrabold border-b-3 ">Service</h1>
            <p>We bring your ideas to life online.</p>
            <p>Crafting modern websites and powerful mobile apps.</p>
            <p>All with stunning, intuitive user-first design.</p>
          </div>
          <div className="m-6 bg-amber-800 p-6">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {[...Array(4)].map((_, index) => (
      <div
        key={index}
        className="bg-custom-green p-6 rounded-lg shadow-lg text-white flex flex-col items-start space-y-2"
      >
        <AiFillLayout className="text-5xl" />
        <p className="text-xl font-bold">Web Development</p>
        <p>Responsive, user-friendly websites</p>
      </div>
    ))}
  </div>
</div>

          </div>
        </div>
      </div>
      <PageNumber number={number} />
    </div>
  );
}

export default ServicePage;
