import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <style jsx>{`
        div {
          background-color: blue;
          padding: 10px 0 10px 0;
          margin-right: 0px;
        }
        button {
          padding: 15px;
          background-color: lightgreen;
          color: black;
          font-weight: bold;
          margin-left: 15px;
          border: 2px solid forestgreen;
        }
        button:hover {
          transform: scale(1.05);
          cursor: pointer;
        }
      `}</style>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/store">
        <button>Store</button>
      </Link>
    </div>
  );
}

export default Navbar;
