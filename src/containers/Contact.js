import React, { Component } from "react";
import ContactComponent from "../components/contact/ContactComponent";
import OldReviews from "../components/contact/review/OldReviews";
import ReviewComponent from "../components/contact/review/ReviewComponent";
export default class Contact extends Component {
  componentDidMount() {
    document.title = "Contact Page";
  }
  render() {
    return (
      <>
        <div className="contactContainer">
          <ContactComponent />
          <div className="reviews">
            <OldReviews />
            <ReviewComponent />
          </div>
        </div>
      </>
    );
  }
}
