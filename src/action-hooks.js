import React from "react";
import { useDispatch } from "react-redux";

import {
  reset,
  markAsCompleted,
  createTodo,
  changeFilter,
  changeSortBy
} from "./actions";

export function useReset() {
  const dispatch = useDispatch();
  return React.useCallback(() => dispatch(reset()), [dispatch]);
}

export function useMarkAsCompleted() {
  const dispatch = useDispatch();
  return React.useCallback(id => dispatch(markAsCompleted(id)), [dispatch]);
}

export function useCreateTodo() {
  const dispatch = useDispatch();
  return React.useCallback(message => dispatch(createTodo(message)), [
    dispatch
  ]);
}

export function useChangeFilter() {
  const dispatch = useDispatch();
  return React.useCallback(filter => dispatch(changeFilter(filter)), [
    dispatch
  ]);
}

export function useChangeSortBy() {
  const dispatch = useDispatch();
  return React.useCallback(sortBy => dispatch(changeSortBy(sortBy)), [
    dispatch
  ]);
}
