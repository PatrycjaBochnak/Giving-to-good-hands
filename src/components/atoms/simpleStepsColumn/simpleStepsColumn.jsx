import React from "react";

const SimpleStepsColumn = ({ source, simpleStepsColumnTitle, simpleStepsColumnText }) => 
<div className="simple-steps-column">
<img className="simple-steps-column-img" src={source} /> 
<h4 className="simple-steps-column-title">{simpleStepsColumnTitle}</h4>
<hrb />
<p className="simple-steps-column-text">{simpleStepsColumnText}</p>
</div>

export default SimpleStepsColumn