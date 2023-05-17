import React from "react";
import HomeThreeColumns from "../../components/organisms/homeThreeColumns/homeThreeColumns";
import SimpleSteps from "../../components/organisms/simpleSteps/simpleSteps";
import Foundations from "../../components/organisms/foundations/foundations";
import Contact from "../../components/organisms/contact/contact";
import Footer from "../../components/organisms/footer/footer";
import AboutUs from "../../components/organisms/aboutUs/aboutUs";
import Start from "../../components/organisms/start/start";
import NavBar from "../../components/organisms/navbar/navbar";

function HomeHeader() {
  return (
    <div className="home">
      <NavBar />
      <Start />
      <HomeThreeColumns />
      <SimpleSteps />
      <AboutUs />
      <Foundations />
      <Contact />
      <Footer />
    </div>
  );
}

export default HomeHeader;
