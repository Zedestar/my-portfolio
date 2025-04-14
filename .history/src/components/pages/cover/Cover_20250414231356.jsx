import React from "react";

const Cover = ({ coverImage }) => {
  const CoverImageStyle = {
    backgroundImage: `url(${coverImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    // minHeight: "100vh",
    width: "100%",
  };
  return <div style={CoverImageStyle}>This is cover page</div>;
};

export default Cover;
