import React from "react";

function CompetenceDegree({ skill, level, bgColor, textColor }) {
  return (
    <div className="my-8">
      <div className="flex items-center">
        <p className="text-3xl font-bold">{skill}</p>

        <p className="font-semibold, text-xl mx-4">{level}</p>
      </div>
      <div className={`rounded-full bg-gray-300`}>
        <div className={`rounded-full ${bgColor}  w-[${level}]`}>
          <p className={`${textColor}`}>h</p>
        </div>
      </div>
    </div>
  );
}

export default CompetenceDegree;
