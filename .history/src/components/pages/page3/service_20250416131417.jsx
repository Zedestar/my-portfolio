import React from "react";
import PageNumber from "../../footer/footer";

function ServicePage({ number }) {
  return (
    <div className="w-full h-full flex flex-col justify-between">
      <div>
        <div className="mt-5 space-y-2 flex flex-col items-center justify-center font-semibold">
          <h1 className="text-4xl font-extrabold border-b-3 ">Service</h1>
          <p>We bring your ideas to life online.</p>
          <p>Crafting modern websites and powerful mobile apps.</p>
          <p>All with stunning, intuitive user-first design.</p>
        </div>
        <div></div>
      </div>
      <PageNumber number={number} />
    </div>
  );
}

export default ServicePage;
