import React, { Component } from "react";
import { Link } from "react-router-dom";

export class NavList extends Component {
  render() {
    return (
      <>
        <nav>
          <ul style={{ fontSize: "0.95rem" }}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/people">People</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </>
    );
  }
}

export default NavList;
