import React from "react";

import { useFilter, useSortBy } from "../selectors";
import { useChangeFilter, useChangeSortBy } from "../action-hooks";

function Filters() {
  const filter = useFilter();
  const sortBy = useSortBy();

  const changeFilter = useChangeFilter();
  const changeSortBy = useChangeSortBy();

  function handleFilterChange(event) {
    changeFilter(event.target.value);
  }

  function handleSortByChange(event) {
    changeSortBy(event.target.value);
  }

  return (
    <>
      <select onChange={handleFilterChange} value={filter}>
        <option value="NONE">Unfiltered</option>
        <option value="ONLY_COMPLETED">Completed</option>
        <option value="ONLY_PENDING">Pending</option>
      </select>
      <select onChange={handleSortByChange} value={sortBy}>
        <option value="DUE_DATE_DESC">Due date desc</option>
        <option value="DUE_DATE_ASC">Due date asc</option>
      </select>
    </>
  );
}

export default Filters;
