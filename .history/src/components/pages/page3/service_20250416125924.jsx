import React from "react";
import PageNumber from "../../footer/footer";

function ServicePage({ number }) {
  return (
    <div className="w-full h-full">
      <div></div>
      <PageNumber number={number} />
    </div>
  );
}

export default ServicePage;
