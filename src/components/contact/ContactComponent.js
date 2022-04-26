import React from "react";

const ContactComponent = () => {
  return (
    <>
      <div className="contact">
        <h2>Thanks for visiting our website</h2>
        <div className="info">
          <p>
            <span style={{ fontWeight: "bold" }}>Mobile Number: </span>
            <a href="tel:+918777736424">1234567890</a>
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Email Us: </span>
            <a href="mailto:dibya2000ranjan@gmail.com">abcd@abcd0987.com</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default ContactComponent;
