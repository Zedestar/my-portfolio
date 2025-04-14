import React, { forwardRef } from "react";

const Page = forwardRef((props, ref) => {
  return (
    <div className="demoPage h-full bg-white flex flex-col" ref={ref}>
      <h1>{props.title}</h1>
      <div className="flex-1 h-full">{props.children}</div>
      <p>Page number: {props.number}</p>
    </div>
  );
});

export default Page;
