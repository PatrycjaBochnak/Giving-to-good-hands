import React, { useContext } from "react";
import ReactPaginate from "react-paginate";
import WhoWeHelpListItem from "../../atoms/whoWeHelpListItem/whoWeHelpListItem";
import MainPageDatabaseProvider from "../../context/mainPageDatabaseContext/mainPageDatabaseContext";

const WhoWeHelpListArray = () => {
  const { database, arrayPaginate, pagesVisited, itemsPerPages, changePage } =
    useContext(MainPageDatabaseProvider);

  if (!database) {
    return <p>loading...</p>;
  }
  let displayItems = null;

  if (database) {
    displayItems = database
      .slice(pagesVisited, pagesVisited + itemsPerPages)
      .map((el) => (
        <WhoWeHelpListItem
          key={el.id}
          name={el.organizationName}
          organizationGoal={el.GoalAndMission}
          items={el.stuff}
        />
      ));
  }
  return (
    <ul className="who-we-help-list-array">
      {displayItems}
      <ReactPaginate
        className="divPag"
        previousLabel={"Prev"}
        nextLabel={"Next"}
        pageCount={2}
        onPageChange={changePage}
        containerClassName={"paginationBtn"}
        previousLinkClassName={"prevBtn"}
        nextLinkClassName={"nextBtn"}
        activeLinkClassName={"activeBtn"}
        pageLinkClassName={"pagesBtn"}
      />
    </ul>
  );
};
export default WhoWeHelpListArray;
