import React from "react";

const Cover = ({ coverImage }) => {
  const CoverImageStyle = {
    backgroundImage: `url(${coverImage})`,
    backgroundSize: "fit",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "100%",
    width: "100%",
  };
  return (
    <div
      style={CoverImageStyle}
      className="h-full flex justify-center items-center"
    >
      This is cover page
    </div>
  );
};

export default Cover;
