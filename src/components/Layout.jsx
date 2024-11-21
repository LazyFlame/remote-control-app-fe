import React from "react";
import Header from "./Header";
import Footer from "./Footer";

let headName = "Remote Control App";
let footName = "Copyright © FinalBeat All Rights Reserved.";

const Layout = (props) => {
  return (
    <div>
      <Header name={headName} />
      <div className="contents-style">{props.contentsName}</div>
      <Footer name={footName} />
    </div>
  );
};

export default Layout;
