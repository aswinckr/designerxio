import React from "react";
import Meta from "./Meta";
import Header from "./Header";

const Page = (props) => {
  return (
    <div>
      <Meta />
      <Header />
      {props.children}
    </div>
  );
};

export default Page;
