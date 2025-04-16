import React from "react";
import PageNumber from "../../footer/footer";
import { AiFillLayout } from "react-icons/ai";
import { MdSecurity } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";
import { FaPaintBrush } from "react-icons/fa";

function ServicePage({ number }) {
  const ourService = [
    {
      icon: <AiFillLayout className="text-4xl" />,
      service: "Web Development",
      description:
        "We build responsive, fast, and modern websites tailored to your needs.",
      backgroundColor: "bg-blue-500",
    },
    {
      icon: <FaMobileAlt className="text-4xl" />,
      service: "Mobile App Development",
      description:
        "Cross-platform mobile apps with smooth performance and great user experience.",
      backgroundColor: "bg-green-500",
    },
    {
      icon: <MdSecurity className="text-4xl" />,
      service: "Security",
      description:
        "Robust security solutions to protect your digital assets and data.",
      backgroundColor: "bg-red-500",
    },
    {
      icon: <FaPaintBrush className="text-4xl" />,
      service: "UX/UI Design",
      description:
        "User-centered design with stunning interfaces and seamless experiences.",
      backgroundColor: "bg-purple-500",
    },
  ];
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
              <div
                key={index}
                className={`p-6 rounded-lg h-72 space-y-4 shadow-lg text-white transition-all duration-300 hover:shadow-2xl ${service.backgroundColor}`}
              >
                <div>{service.icon}</div>
                <p className="text-2xl font-bold">{service.service}</p>
                <p className="text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <PageNumber number={number} />
    </div>
  );
}

export default ServicePage;
