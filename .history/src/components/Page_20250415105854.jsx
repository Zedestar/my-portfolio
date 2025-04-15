import React, { forwardRef } from "react";

const Page = forwardRef((props, ref) => {
  return (
    <div className="demoPage h-full bg-teal-200 flex flex-col" ref={ref}>
      {/* <h1>{props.title}</h1> */}
      <div className="flex-1 h-full">{props.children}</div>
      <p className="w-full text-end">Page number: {props.number}</p>
    </div>
  );
});

export default Page;
