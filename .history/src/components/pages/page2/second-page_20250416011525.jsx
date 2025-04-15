import React from "react";
import CompetenceDegree from "../../competence-degree/competence-degree";
import PageNumber from "../../footer/footer";

function SecondPage({ number }) {
  return (
    <div className="w-full h-full flex flex-col justify-between">
      <div>
        <div className="mt-6">
          <h1 className="text-5xl font-bold text-center">
            Level of competence
          </h1>
        </div>

        <div className="w-[80%] mx-auto">
          <CompetenceDegree
            skill={"Python"}
            bgColor={"bg-yellow-400"}
            textColor={"text-yellow-400"}
            level={"80%"}
          />
          <CompetenceDegree
            skill={"C++"}
            bgColor={"bg-rose-400"}
            textColor={"text-rose-400"}
            level={"82%"}
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
            bgColor={"bg-indigo-400"}
            textColor={"text-indigo-400"}
            level={"50%"}
          />
        </div>
      </div>
      <PageNumber number={number} />
    </div>
  );
}

export default SecondPage;
