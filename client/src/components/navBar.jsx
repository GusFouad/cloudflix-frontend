import React from "react";
import { Link, NavLink } from "react-router-dom";
const NavBar = ({ user }) => {
  return (
    <nav>
      <div className="container">
        <div className="nav-wrapper">
          <Link to="#" className="brand-logo">
            CloudFlix
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <NavLink to="#">Search</NavLink>
            </li>
            <li>
              <NavLink to="#">My List</NavLink>
            </li>
            <li>
              <NavLink to="#">Log Out</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
