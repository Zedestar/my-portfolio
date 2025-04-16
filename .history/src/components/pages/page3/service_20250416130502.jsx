import React from "react";
import PageNumber from "../../footer/footer";

function ServicePage({ number }) {
  return (
    <div className="w-full h-full flex flex-col justify-between">
      <div>
        <div className="space-y-4">
          <h1 className="text-4xl font-extrabold ">Service</h1>
          <p>This are the services I offer</p>
        </div>
        <div></div>
      </div>
      <PageNumber number={number} />
    </div>
  );
}

export default ServicePage;
