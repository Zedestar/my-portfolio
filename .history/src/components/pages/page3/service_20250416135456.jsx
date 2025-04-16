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
          <div className="m-6 bg-amber-800 flex">
            <div className="custom-green p-4 bg-custom-green rounded-lg w-[40%] h-auto space-y-2 shadow-lg text-white">
              <AiFillLayout className="text-6xl" />
              <p className="text-2xl font-bold">Web development</p>
              <p>Responsive website user friendly</p>
            </div>
            <div className="custom-green p-4 bg-custom-green rounded-lg w-[40%] h-auto space-y-2 shadow-lg text-white">
              <AiFillLayout className="text-6xl" />
              <p className="text-2xl font-bold">Web development</p>
              <p>Responsive website user friendly</p>
            </div>
            <div className="custom-green p-4 bg-custom-green rounded-lg w-[40%] h-auto space-y-2 shadow-lg text-white">
              <AiFillLayout className="text-6xl" />
              <p className="text-2xl font-bold">Web development</p>
              <p>Responsive website user friendly</p>
            </div>
            <div className="custom-green p-4 bg-custom-green rounded-lg w-[40%] h-auto space-y-2 shadow-lg text-white">
              <AiFillLayout className="text-6xl" />
              <p className="text-2xl font-bold">Web development</p>
              <p>Responsive website user friendly</p>
            </div>
          </div>
        </div>
      </div>
      <PageNumber number={number} />
    </div>
  );
}

export default ServicePage;
