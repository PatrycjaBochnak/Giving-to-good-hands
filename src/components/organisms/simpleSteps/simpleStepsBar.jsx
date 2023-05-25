import React from "react";
import SimpleStepsTitle from '../../atoms/simpleStepsTitle/simpleStepsTitle'
import DecorationAsset from "../../atoms/decoration/decoration";
import SimpleSteps from '../../molecules/simpleSteps/simpleSteps';
import ButtonsRightPartContext from '../../atoms/buttonsRightPartContext/buttonsRightPartContext';

const SimpleStepsBar = () => 
<div id='simple' className="simple-steps">
    <SimpleStepsTitle text='Just 4 simple steps' />
    <DecorationAsset />
    <SimpleSteps />
    <ButtonsRightPartContext />
</div>

export default SimpleStepsBar