import React from "react";
import { useSelector, shallowEqual } from "react-redux";

function useTodos() {
  return useSelector(state => Object.values(state.todos), shallowEqual);
}

function useSortBy() {
  return useSelector(state => state.sortBy);
}

function useFilter() {
  return useSelector(state => state.filter);
}

function useSortedTodos(todos) {
  const sortBy = useSortBy();
  return React.useMemo(
    () =>
      todos.sort((a, b) => {
        if (sortBy === "DUE_DATE_DESC") {
          return new Date(b.dueDate).getTime() - new Date(a.dueDate).getTime();
        }
        if (sortBy === "DUE_DATE_ASC") {
          return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
        }
        throw new Error(
          `Sorting by ${sortBy} is not a valid. Use \`DUE_DATE_ASC\` or \`DUE_DATE_DESC\``
        );
      }),
    [sortBy, todos]
  );
}

function useFilterTodos(todos) {
  const filter = useFilter();
  return React.useMemo(
    () =>
      todos.filter(todo => {
        if (filter === "NONE") return true;
        if (filter === "ONLY_COMPLETED") return todo.completed;
        if (filter === "ONLY_PENDING") return !todo.completed;
        throw new Error(
          `The filter ${filter} is not a valid filter name. Use \`NONE\`, \`ONLY_COMPLETED\` or \`ONLY_PENDING\``
        );
      }),
    [filter, todos]
  );
}

function useFilteredAndSortedTodos() {
  return useSortedTodos(useFilterTodos(useTodos()));
}

function useTodo(id) {
  return useSelector(state => {
    if (state.todos.hasOwnProperty(id)) return state.todos[id];
    return null;
  }, shallowEqual);
}

export {
  useTodos,
  useSortBy,
  useFilter,
  useSortedTodos,
  useFilterTodos,
  useFilteredAndSortedTodos,
  useTodo
};
