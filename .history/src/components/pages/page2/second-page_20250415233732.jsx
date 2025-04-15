import React from "react";
import CompetenceDegree from "../../competence-degree/competence-degree";

function SecondPage() {
  return (
    <div className="w-full h-full">
      <div className="mt-6">
        <h1 className="text-4xl font-bold text-center">Level of competence</h1>
      </div>
      <div className="w-[80%] mx-auto">
        <CompetenceDegree
          skill={"Python"}
          bgColor={"bg-yellow-400"}
          textColor={"text-yellow-400"}
          level={"90%"}
        />
        <CompetenceDegree
          skill={"Python"}
          bgColor={"bg-yellow-400"}
          textColor={"text-yellow-400"}
          level={"90%"}
        />
        <CompetenceDegree
          skill={"C++"}
          bgColor={"bg-rose-400"}
          textColor={"text-rose-400"}
          level={"60%"}
        />
        <CompetenceDegree
          skill={"Java"}
          bgColor={"bg-teal-400"}
          textColor={"text-teal-400"}
          level={"70%"}
        />
      </div>
    </div>
  );
}

export default SecondPage;
