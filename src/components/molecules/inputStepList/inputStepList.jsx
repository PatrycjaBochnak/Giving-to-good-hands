import React, { useContext } from "react";
import DatabaseContext from "../../context/giveThingsBackDatabaseContext";
import InputListForm from "../../atoms/inputListForm/inputListForm";
import ButtonCount from "../../atoms/buttonCount/buttonCount";

const InputStepList = () => {
  const {
    inputName,
    listFormStepHandle,
    arrowRotate,
    arrowValueList,
    hiddenListFormStepHandle,
  } = useContext(DatabaseContext);
  return (
    <div className="row-end">
      <label className="input-name-input-name-list">
        {" "}
        Liczba 60l worków:{" "}
        <InputListForm
          inputName={inputName}
          listFormStepHandle={listFormStepHandle}
          arrowRotate={arrowRotate}
        />
      </label>
      {!arrowRotate && (
        <div className="input-name-list-value">
          {arrowValueList.map((el) => {
            return (
              <ButtonCount
                key={el}
                el={el}
                hiddenListFormStepHandle={hiddenListFormStepHandle}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default InputStepList;
