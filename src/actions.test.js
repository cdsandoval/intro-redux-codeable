import {
  reset,
  markAsCompleted,
  createTodo,
  changeFilter,
  changeSortBy
} from "./actions";

test("action - reset", () => {
  expect(reset()).toEqual({ type: "RESET" });
});

test("action - markAsCompleted", () => {
  const id = Math.round(Math.random() * 1000);
  expect(markAsCompleted(id)).toEqual({
    type: "MARK_AS_COMPLETED",
    payload: { id }
  });
});

test("action - createTodo", () => {
  const todo = createTodo("Test actions");
  expect(todo).toEqual({
    type: "CREATE_TODO",
    payload: {
      id: expect.any(Number),
      dueDate: expect.any(Date),
      message: "Test actions",
      completed: false
    }
  });
});

test("action - changeFilter", () => {
  expect(changeFilter("NONE")).toEqual({
    type: "CHANGE_FILTER",
    payload: { filter: "NONE" }
  });

  expect(changeFilter("ONLY_COMPLETED")).toEqual({
    type: "CHANGE_FILTER",
    payload: { filter: "ONLY_COMPLETED" }
  });

  expect(changeFilter("ONLY_PENDING")).toEqual({
    type: "CHANGE_FILTER",
    payload: { filter: "ONLY_PENDING" }
  });

  expect(() => changeFilter("RANDOM")).toThrow(
    /The filter RANDOM is not a valid filter name. Use `NONE`, `ONLY_COMPLETED` or `ONLY_PENDING`/
  );
});

test("action - changeSortBy", () => {
  expect(changeSortBy("DUE_DATE_ASC")).toEqual({
    type: "CHANGE_SORT_BY",
    payload: { sortBy: "DUE_DATE_ASC" }
  });

  expect(changeSortBy("DUE_DATE_DESC")).toEqual({
    type: "CHANGE_SORT_BY",
    payload: { sortBy: "DUE_DATE_DESC" }
  });

  expect(() => changeSortBy("RANDOM")).toThrow(
    /Sorting by RANDOM is not a valid. Use `DUE_DATE_ASC` or `DUE_DATE_DESC`/
  );
});
