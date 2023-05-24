import React from "react";
import SimpleStepsColumn from "../../atoms/simpleStepsColumn/simpleStepsColumn";

import Icon1 from "../../../assets/Icon1.png"
import Icon2 from "../../../assets/Icon2.png"
import Icon3 from "../../../assets/Icon3.png"
import Icon4 from "../../../assets/Icon4.png"

const SimpleSteps = () => 
<div className="simple-steps">
    <SimpleStepsColumn source={Icon1} />
    <SimpleStepsColumn source={Icon2} />
    <SimpleStepsColumn source={Icon3} />
    <SimpleStepsColumn source={Icon4} />
</div>

export default SimpleSteps