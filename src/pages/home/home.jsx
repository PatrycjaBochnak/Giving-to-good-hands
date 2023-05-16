import React from "react";
import HomeHeader from "../../components/organisms/homeHeader/homeHeader";
import HomeThreeColumns from "../../components/organisms/homeThreeColumns/homeThreeColumns";

function Home() {
  return (
    <div className="home">
      <HomeHeader />
      <HomeThreeColumns />
      <SimpleSteps />
      <AboutUs />
      <WhoWeHelp />
      <Contact />
    </div>
  );
}

export default Home;
