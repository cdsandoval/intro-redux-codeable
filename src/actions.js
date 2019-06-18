// src/actions.js
const WEEK_IN_MILLISECONDS = 7 * 24 * 60 * 60 * 1000;

function reset() {
  return { type: "RESET" };
}

function markAsCompleted(id) {
  return { type: "MARK_AS_COMPLETED", payload: { id } };
}

function createTodo(message) {
  const id = Date.now();
  const dueDate = new Date(id + WEEK_IN_MILLISECONDS);
  return {
    type: "CREATE_TODO",
    payload: {
      id,
      message,
      dueDate,
      completed: false
    }
  };
}

function changeFilter(filter) {
  if (
    filter !== "NONE" &&
    filter !== "ONLY_COMPLETED" &&
    filter !== "ONLY_PENDING"
  ) {
    throw new Error(
      `The filter ${filter} is not a valid filter name. Use \`NONE\`, \`ONLY_COMPLETED\` or \`ONLY_PENDING\``
    );
  }
  return { type: "CHANGE_FILTER", payload: { filter } };
}

function changeSortBy(sortBy) {
  if (sortBy !== "DUE_DATE_ASC" && sortBy !== "DUE_DATE_DESC") {
    throw new Error(
      `Sorting by ${sortBy} is not a valid. Use \`DUE_DATE_ASC\` or \`DUE_DATE_DESC\``
    );
  }

  return { type: "CHANGE_SORT_BY", payload: { sortBy } };
}

export { reset, createTodo, markAsCompleted, changeFilter, changeSortBy };
