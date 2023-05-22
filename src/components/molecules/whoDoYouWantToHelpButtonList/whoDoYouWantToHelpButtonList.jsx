import React, { useContext } from "react";
import DatabaseContext from "../../context/giveThingsBackDatabaseContext";

const WhoDoYouWantToHelpButtonList = () => {
  const {
    whoDoYouWantToHelpArray,
    handleWhoDoYouWantToHelpButtonList,
    backgroundButton,
  } = useContext(DatabaseContext);
  return (
    <ul className="who-do-you-want-to-help-button-list">
      {whoDoYouWantToHelpArray.map((el) => {
        return (
          <li className="who-do-you-want-list-item" key={el}>
            <button
              value={el}
              style={{ backgroundColor: backgroundButton ? "#FAD648" : "" }}
              onClick={(e) => handleWhoDoYouWantToHelpButtonList(e)}
              className="who-do-you-want-button"
            >
              {" "}
              {el}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default WhoDoYouWantToHelpButtonList;
