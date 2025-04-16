import React from "react";
import PageNumber from "../../footer/footer";

function ServicePage({ number }) {
  return (
    <div className="w-full h-full flex flex-col justify-between">
      <div>
        <div>
          <h1 className="text-5xl font-bold">Service</h1>
          <p></p>
        </div>
        <div></div>
      </div>
      <PageNumber number={number} />
    </div>
  );
}

export default ServicePage;
