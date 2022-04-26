import React from "react";
import { Link } from "react-router-dom";

const PersonDetails = (props) => {
  return (
    <>
      <div className="mainContainer">
        <div className="personContainer">
          <img src={props.Img} alt="Image" />
          <ul>
            <li>
              <span style={{ fontWeight: "bold" }}>Name :</span>{" "}
              {props.Name || "****"}
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>Location :</span>{" "}
              {props.Location || "****"}
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>No Of Followers :</span>{" "}
              {props.Followers || "****"}
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>No of following :</span>{" "}
              {props.Following || "****"}
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>Profile :</span>{" "}
              <Link to={props.Profile || "****"}>Click Here</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default PersonDetails;
