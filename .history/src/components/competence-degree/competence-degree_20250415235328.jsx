import React from "react";

function CompetenceDegree({ skill, bgColor, textColor }) {
  return (
    <div className="my-4">
      <div className="text-3xl font-bold">{skill}</div>
      <div className={`rounded-full bg-gray-300`}>
        <div className={`rounded-full ${bgColor}  w-[]`}>
          <p className={`${textColor}`}>hey everyday</p>
        </div>
      </div>
    </div>
  );
}

export default CompetenceDegree;
