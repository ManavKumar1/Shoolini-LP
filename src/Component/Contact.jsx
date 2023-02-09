import React from "react";

function contact() {
  return (
    <div className="querry flex container">
      <div className="querry-container">
        <h2>Any Querry Contact </h2>
        <span className="contact-email">
          {" "}
          <a href="mailto:vcvikaschouhan133@gmail.com">E-mail</a>
        </span>
        <span className="contact-no">
          <a href="tel:+91-7357303139">Call </a>
        </span>
      </div>
    </div>
  );
}

export default contact;
