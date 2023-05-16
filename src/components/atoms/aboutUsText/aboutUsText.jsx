import React from "react";

const AboutUsText = ({ aboutUsTitle, aboutUsTextingText }) => (
  <div className="about-us-text">
    <h3 className="about-us-text-title">{aboutUsTitle}</h3>
    <p className="about-us-text-inText">{aboutUsTextingText}</p>
    <div className="about-us-text-signature" />
  </div>
);

export default AboutUsText;
