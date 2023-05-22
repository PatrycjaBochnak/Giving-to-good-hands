import React from "react";
import WhoWeHelpButton from "../../atoms/whoWeHelpButton/whoWeHelpButton";

const WhoWeHelpButtons = () => 
<form className="who-we-help-buttons-list">
    <WhoWeHelpButton value='foundation' titleButton='Foundations' />
    <WhoWeHelpButton value='localCollections' titleButton='Local Collections' />
    <WhoWeHelpButton value='non-governmentalOrganizations' titleButton='Non-governmental Organizations' />
</form>