import React from "react";
import HomeThreeColumns from "../../components/organisms/homeThreeColumns/homeThreeColumns";
import SimpleStepsBar from '../../components/organisms/simpleStepsBar/simpleStepsBar'
import Contact from "../../components/organisms/contact/contact";
import AboutUs from "../../components/organisms/aboutUs/aboutUs";
import Header from "../../components/organisms/header/header";
import WhoWeHelp from "../../components/organisms/whoWeHelp/whoWeHelp";

function HomeHeader() {
  return (
    <div className="home">
      <Header />
      <HomeThreeColumns />
      <SimpleStepsBar />
      <AboutUs />
      <WhoWeHelp />
      <Contact />
    </div>
  );
}

export default HomeHeader;
