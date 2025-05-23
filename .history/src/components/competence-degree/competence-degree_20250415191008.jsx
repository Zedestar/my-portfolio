import React from "react";

function CompetenceDegree({ skill, level, color }) {
  return (
    <div className="my-4">
      <div className="text-3xl font-bold">{skill}</div>
      <div className="rounded-full bg-gray-400">
        <div className="rounded-full `${color}`  w-[90%]">
          <p className="`${color}`">hey everyday</p>
        </div>
      </div>
    </div>
  );
}

export default CompetenceDegree;
