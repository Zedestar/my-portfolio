import React from "react";
import PageNumber from "../../footer/footer";

function ServicePage({ number }) {
  return (
    <div className="w-full h-full flex flex-col justify-between">
      <div>
        <div className="mt-5 space-y-4 flex flex-col items-center justify-center">
          <h1 className="text-4xl font-extrabold border-b-3 ">Service</h1>
          <p>This are the services I offer</p>
        </div>
        <div></div>
      </div>
      <PageNumber number={number} />
    </div>
  );
}

export default ServicePage;
