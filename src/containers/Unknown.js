import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import img from "../assets/images/error.png";
const Unknown = () => {
  useEffect(() => {
    document.title = "Not Found";
  }, []);
  return (
    <>
      <div className="unknownContainer">
        <img src={img} alt="404 Not Found" />
        <h1>
          404 not found. Sorry, you try to access a page which is not under our
          domain.
        </h1>
        <p>Go back to Home page</p>

        <Link to="/">
          <button type="button" className="btn">
            Home Page
          </button>
        </Link>
      </div>
    </>
  );
};

export default Unknown;
