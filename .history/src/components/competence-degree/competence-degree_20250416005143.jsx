import React from "react";

function CompetenceDegree({ skill, level }) {
  return (
    <div className="my-8">
      <div className="flex items-center justify-between">
        <p className="text-3xl font-bold">{skill}</p>

        <p className="font-semibold, text-xl mx-4">{level}</p>
      </div>
      <div className={`rounded-full bg-gray-300`}>
        <div className={`rounded-full custom-green  w-[${level}]`}>
          <p className="custom-green">h</p>
        </div>
      </div>
    </div>
  );
}

export default CompetenceDegree;
