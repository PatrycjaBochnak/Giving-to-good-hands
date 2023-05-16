import React from "react";
import HomeHeader from "../../components/organisms/homeHeader/homeHeader";
import HomeThreeColumns from "../../components/organisms/homeThreeColumns/homeThreeColumns";

function Home() {
  return (
    <div className="home">
      <HomeHeader />
      <HomeThreeColumns />
    </div>
  );
}

export default Home;
