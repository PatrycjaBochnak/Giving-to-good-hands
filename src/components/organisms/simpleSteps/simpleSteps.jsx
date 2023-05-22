import React from "react";
import SimpleStepsTitle from '../../atoms/simpleStepsTitle';
import Decoration from "../../atoms/decoration/decoration";
import SimpleStepsBar from '../../molecules/simpleSteps';
import ButtonsRightPartContext from '../../atoms/buttonsRightPartContext';

const SimpleSteps = () => 
<div id='simple' className="simple-steps">
    <SimpleStepsTitle text='Just 4 simple steps' />
    <Decoration />
    <SimpleStepsBar />
    <ButtonsRightPartContext />
</div>

export default SimpleSteps