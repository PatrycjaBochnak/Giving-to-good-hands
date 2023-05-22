import React from "react";
import OneColumn from "../../molecules/oneColumn/oneColumn";

function HomeThreeColumns() {
  return (
    <div className="home-three-columns">
      Home 3 columns
      <OneColumn
        counter="10"
        title="Bags gived back"
        text="Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat."
      />
      <OneColumn
        counter="5"
        title="Organizations supported"
        text="Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat."
      />
      <OneColumn
        counter="7"
        title="Organized collections"
        text="Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat."
      />
    </div>
  );
}

export default HomeThreeColumns;
