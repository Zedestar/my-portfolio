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
          skill={"C++"}
          bgColor={"bg-rose-400"}
          textColor={"text-rose-400"}
          level={"94%"}
        />
        <CompetenceDegree
          skill={"Java"}
          bgColor={"bg-teal-400"}
          textColor={"text-teal-400"}
          level={"70%"}
        />
        <CompetenceDegree
          skill={"Django"}
          bgColor={"bg-green-400"}
          textColor={"text-green-400"}
          level={"70%"}
        />
        <CompetenceDegree
          skill={"Machine Learning"}
          bgColor={"bg-orange-400"}
          textColor={"text-orange-400"}
          level={"70%"}
        />
        <CompetenceDegree
          skill={"React"}
          bgColor={"bg-purple-400"}
          textColor={"text-purple-400"}
          level={"65%"}
        />
        <CompetenceDegree
          skill={"Flutter"}
          bgColor={"bg-black"}
          textColor={"text-black"}
          level={"90%"}
        />
      </div>
    </div>
  );
}

export default SecondPage;
