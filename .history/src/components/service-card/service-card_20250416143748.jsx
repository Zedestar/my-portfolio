import React from "react";

function ServiceCard({ index, service }) {
  return (
    <div
      key={index}
      className={`p-6 rounded-lg h-72 space-y-4 shadow-lg text-white transition-all duration-300 hover:shadow-2xl ${service.backgroundColor}`}
    >
      <div>{service.icon}</div>
      <p className="text-2xl font-bold">{service.service}</p>
      <p className="text-sm">{service.description}</p>
    </div>
  );
}

export default ServiceCard;
