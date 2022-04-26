import React from "react";
import { Field, reduxForm } from "redux-form";
import { useState } from "react";
import DynamicReviews from "./DynamicReviews";

const ReviewComponent = (props) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <>
      {isShow && <DynamicReviews />}
      <form
        className="formItem"
        onSubmit={props.handleSubmit((data) => {
          //   console.log(data);
          setIsShow(true);
        })}
      >
        <div>
          <Field
            type="text"
            name="Name"
            component="input"
            placeholder="Enter Your Name"
          />
        </div>
        <div>
          <Field
            name="Review"
            component="textarea"
            placeholder="You can give your honest opnion"
          />
        </div>
        <button
          className="btn"
          type="submit"
          //   disabled={formValues.Name === "" || formValues.Review === ""}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default reduxForm({
  form: "review",
})(ReviewComponent);
