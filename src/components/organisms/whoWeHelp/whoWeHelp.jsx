import React from "react";
import WhoWeHelpButton from "../../atoms/weWeHelpButton/whoWeHelpButton";
import WhoWeHelpListItem from "../../atoms/weWeHelpListItem/whoWeHelpListItem";

const WhoWeHelp = ({ whoWeHelpTitle }) => 
<div id="help" className="who-we-help">
    <h3 className="who-we-help-title">{ whoWeHelpTitle } </h3>
    <WhoWeHelpButton />
    <WhoWeHelpListItem />
</div>

export default WhoWeHelp;