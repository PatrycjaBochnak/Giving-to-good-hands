import React, { useContext } from "react";
import DatabaseContext from "../../context/giveThingsBackDatabaseContext";
import CityListForm from "../../atoms/cityListForm/cityListForm";

const InputStepListCity = ({ titleCityListForm }) => {
  const { handleCityButton, arrowRotareCity } = useContext(DatabaseContext);
  return (
    <div className="city-row">
      <div
        className="city-list-form"
        onClick={() => {
          handleCityButton();
        }}
      >
        <p className="title-city-list-form">{titleCityListForm}</p>
        {arrowRotareCity !== false ? (
          <div className="arrow" />
        ) : (
          <div className="arrow-rotare" />
        )}
      </div>
      {!arrowRotareCity && <CityListForm />}
    </div>
  );
};

export default InputStepListCity;
