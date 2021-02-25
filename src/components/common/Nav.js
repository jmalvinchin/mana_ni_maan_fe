import React from "react"
import { Link, useHistory } from "react-router-dom"
import { clearCookies } from "../../utils/Token"


function Nav() {
  let history = useHistory()

  function logout() {
    clearCookies();
    history.push("/");
  }

  return (
    <nav className="col-span-1 text-center flex flex-col items-center">
      <div className="w-4/5 border-2 p-2">
        <Link to="/">Home</Link>
      </div>
      <div className="w-4/5 mt-4 border-2 p-2">
        <Link to="/orders">Orders</Link>
      </div>
      <div className="w-4/5 mt-4 border-2 p-2">
        <button onClick={logout}>Logout</button>
      </div>
    </nav>
  );
};

export default Nav;
