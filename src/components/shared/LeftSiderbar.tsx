import React from "react";
import { Link } from "react-router-dom";

const LeftSiderbar = () => {
  return (
    <nav className="leftsidebar">
      <div className="flex flex-col gap-11">
        <Link to="/" className="flex gap-3 items-center">
          <h1 className="text-2xl font-bold">StockX</h1>
        </Link>

        <Link to={`/profile`}>
        </Link>
      </div>
    </nav>
  );
};

export default LeftSiderbar;
