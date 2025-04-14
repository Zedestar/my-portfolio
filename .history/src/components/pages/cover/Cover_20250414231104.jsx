import React from "react";

const Cover = ({ coverImage }) => {
  const CoverImageStyle = {
    backgroundImage: `url(${coverImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  return <div>This is cover page</div>;
};

export default Cover;
