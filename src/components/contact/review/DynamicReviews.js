import React from "react";
import { connect } from "react-redux";
const DynamicReviews = (props) => {
  return (
    <>
      <div className="item">
        <h3>{props.Name}</h3>
        <p>{props.Review}</p>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    Name: state.form.review.values.Name,
    Review: state.form.review.values.Review,
  };
};

export default connect(mapStateToProps)(DynamicReviews);
