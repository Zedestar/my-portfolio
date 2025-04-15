import React, { forwardRef } from "react";

const Page = forwardRef((props, ref) => {
  return (
    <div
      className="demoPage page-shadow h-full bg-gray-200 flex flex-col"
      ref={ref}
    >
      {/* <h1>{props.title}</h1> */}
      <div className="flex-1 h-full">{props.children}</div>
    </div>
  );
});

export default Page;
