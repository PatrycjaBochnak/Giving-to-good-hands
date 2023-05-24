import React from "react";
import DecorationAsset from "../../atoms/decoration/decoration";
import WhoWeHelpButtons from "../../molecules/whoWeHelpButtons/whoWeHelpButtons";
import WhoWeHelpList from "../../molecules/whoWeHelpList/whoWeHelpList";

const WhoWeHelp = ({ whoWeHelpTitle }) => (
  <div id="help" className="who-we-help">
    <h3 className="who-we-help-title">{whoWeHelpTitle} </h3>
    <DecorationAsset />
    <WhoWeHelpButtons />
    <WhoWeHelpList />
  </div>
);

export default WhoWeHelp;
