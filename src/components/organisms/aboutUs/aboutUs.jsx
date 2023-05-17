import React from "react";
import AboutUsImg from "../../atoms/aboutUsImg/aboutUsImg";
import AboutUsText from "../../atoms/aboutUsText/aboutUsText";

const AboutUsBar = () => (
  <div id="about" className="about-us-bar">
    <AboutUsText
      aboutUsTitle="About Us"
      aboutUsTextingText="Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip."
    />
    <AboutUsImg />
  </div>
);

export default AboutUsBar;
