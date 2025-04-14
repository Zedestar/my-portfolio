import React from "react";

const Cover = ({ coverImage }) => {
  const CoverImageStyle = {
    backgroundImage: `url(${coverImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    minHeight: "100%",
    width: "100%",
  };
  return (
    <div style={CoverImageStyle} className="h-full">
      This is cover page
    </div>
  );
};

export default Cover;
