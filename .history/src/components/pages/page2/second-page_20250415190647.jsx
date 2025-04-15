import React from "react";
import CompetenceDegree from "../../competence-degree/competence-degree";

function SecondPage() {
  return (
    <div className="w-full h-full">
      <div className="mt-6">
        <h1 className="text-4xl font-bold text-center">Level of competence</h1>
      </div>
      <div className="w-[80%] mx-auto">
        <CompetenceDegree skill />
        <CompetenceDegree />
        <CompetenceDegree />
      </div>
    </div>
  );
}

export default SecondPage;
