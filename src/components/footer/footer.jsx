import React from "react";

function PageNumber({ number }) {
  return (
    <div className="w-full h-[4%]  px-4 font-bold flex items-baseline justify-end">
      Page:{number}
    </div>
  );
}

export default PageNumber;
