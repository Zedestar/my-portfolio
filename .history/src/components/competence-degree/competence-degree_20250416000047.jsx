import React from "react";

function CompetenceDegree({ skill, level, bgColor, textColor }) {
  return (
    <div className="my-4">
      <div className="text-3xl font-bold">{skill}</div>
      <div className={`rounded-full bg-gray-300`}>
        <div className={`rounded-full ${bgColor}  w-[${level}]`}>
          <p className={`${textColor}`}></p>
        </div>
      </div>
    </div>
  );
}

export default CompetenceDegree;
