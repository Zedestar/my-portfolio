import React, { forwardRef } from "react";

const Page = forwardRef((props, ref) => {
  return (
    <div className="demoPage bg-white flex flex-col" ref={ref}>
      <h1>{props.title}</h1>
      <div className="flex-1">{props.children}</div>
      <p>Page number: {props.number}</p>
    </div>
  );
});

export default Page;
