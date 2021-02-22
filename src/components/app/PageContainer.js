import React from "react"
import Nav from "../common/Nav"

function PageContainer({ children }) {
  return (
    <div className="box-border grid grid-cols-3">
      <Nav />
      {children}
    </div>
  );
};

export default PageContainer;
