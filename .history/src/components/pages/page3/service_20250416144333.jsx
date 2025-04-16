import React from "react";
import PageNumber from "../../footer/footer";
import ServiceCard from "../../service-card/service-card";
import ourService from "../../data/service-data";

function ServicePage({ number }) {
  return (
    <div className="w-full h-full flex flex-col justify-between">
      <div className="flex-1">
        <div className="h-full w-full flex flex-col gap-4">
          <div className="mt-5 space-y-2 flex flex-col items-center justify-center font-semibold">
            <h1 className="text-4xl font-extrabold border-b-3 ">Service</h1>
            <p>We bring your ideas to life online.</p>
            <p>Crafting modern websites and powerful mobile apps.</p>
            <p>All with stunning, intuitive user-first design.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 m-4">
            {ourService.map((service, index) => (
              <ServiceCard service={service} index={index} />
            ))}
          </div>
        </div>
      </div>
      <PageNumber number={number} />
    </div>
  );
}

export default ServicePage;
