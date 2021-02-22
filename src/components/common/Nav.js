import React from "react"
import { Link } from "react-router-dom"

function Nav() {
  return (
    <nav className="col-span-1 text-center flex flex-col items-center">
      <div className="w-4/5 m-4 border-2 p-2">
        <Link to="/">Home</Link>
      </div>
      <div className="w-4/5 m-4 border-2 p-2">
        <Link to="/orders">Orders</Link>
      </div>
      {/* <ul className="flex items-center"> */}
      {/*   <li> */}
      {/*     <Link to="/">Home</Link> */}
      {/*   </li> */}
      {/*   <li> */}
      {/*     <Link to="/orders">Orders</Link> */}
      {/*   </li> */}
      {/* </ul> */}
    </nav>
  );
};

export default Nav;
