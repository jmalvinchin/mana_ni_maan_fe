import React from "react"
import Nav from "../common/Nav"

function PageContainer({ children }) {
  return (
    <div className="box-border grid grid-cols-3 m-10">
      <Nav />
      <div className="col-start-2 col-end-3">
        {children}
      </div>
    </div>
  );
};

export default PageContainer;
