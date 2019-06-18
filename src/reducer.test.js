import reducer from "./reducer";

test("reducer - no initial state", () => {
  const finalState = reducer(undefined, {
    type: "CHANGE_FILTER",
    payload: { filter: "ONLY_PENDING" }
  });
  const expectedState = {
    todos: {},
    filter: "ONLY_PENDING",
    sortBy: "DUE_DATE_DESC"
  };
  expect(finalState).toEqual(expectedState);
});

test("reducer - default", () => {
  const initialState = {
    todos: {
      1: {
        message: "Test Reducer",
        completed: true,
        dueDate: new Date().toJSON()
      }
    },
    filter: "ONLY_COMPLETED",
    sortBy: "DUE_DATE_ASC"
  };
  const finalState = reducer(initialState, { type: "random" });
  expect(finalState).toEqual(initialState);
});

test("reducer - CREATE_TODO", () => {
  const dueDate = new Date().toJSON();
  const newDueDate = new Date().toJSON();
  const initialState = {
    todos: {
      1: {
        id: 1,
        message: "Test Reducer",
        completed: true,
        dueDate
      }
    },
    filter: "NONE",
    sortBy: "DUE_DATE_DESC"
  };
  const action = {
    type: "CREATE_TODO",
    payload: {
      id: 2,
      message: "Complete application",
      completed: false,
      dueDate: newDueDate
    }
  };
  const finalState = reducer(initialState, action);
  const expectedState = {
    todos: {
      1: {
        id: 1,
        message: "Test Reducer",
        completed: true,
        dueDate
      },
      2: {
        id: 2,
        message: "Complete application",
        completed: false,
        dueDate: newDueDate
      }
    },
    filter: "NONE",
    sortBy: "DUE_DATE_DESC"
  };
  expect(finalState).toEqual(expectedState);
});

test("reducer - MARK_AS_COMPLETED", () => {
  const dueDate = new Date().toJSON();
  const initialState = {
    todos: {
      1: {
        id: 1,
        message: "Test new case",
        completed: false,
        dueDate
      }
    },
    filter: "NONE",
    sortBy: "DUE_DATE_DESC"
  };
  const action = { type: "MARK_AS_COMPLETED", payload: { id: 1 } };
  const finalState = reducer(initialState, action);
  const expectedState = {
    todos: {
      1: {
        id: 1,
        message: "Test new case",
        completed: true,
        dueDate
      }
    },
    filter: "NONE",
    sortBy: "DUE_DATE_DESC"
  };
  expect(finalState).toEqual(expectedState);
});

test("reducer - CHANGE_FILTER", () => {
  const dueDate = new Date().toJSON();
  const initialState = {
    todos: {
      1: {
        id: 1,
        message: "Test Reducer",
        completed: true,
        dueDate
      }
    },
    filter: "NONE",
    sortBy: "DUE_DATE_DESC"
  };
  const action = { type: "CHANGE_FILTER", payload: { filter: "ONLY_PENDING" } };
  const finalState = reducer(initialState, action);
  const expectedState = {
    todos: {
      1: {
        id: 1,
        message: "Test Reducer",
        completed: true,
        dueDate
      }
    },
    filter: "ONLY_PENDING",
    sortBy: "DUE_DATE_DESC"
  };
  expect(finalState).toEqual(expectedState);
});

test("reducer - CHANGE_SORT_BY", () => {
  const dueDate = new Date().toJSON();
  const initialState = {
    todos: {
      1: {
        id: 1,
        message: "Test Reducer",
        completed: true,
        dueDate
      }
    },
    filter: "NONE",
    sortBy: "DUE_DATE_ASC"
  };
  const action = {
    type: "CHANGE_SORT_BY",
    payload: { sortBy: "DUE_DATE_DESC" }
  };
  const finalState = reducer(initialState, action);
  const expectedState = {
    todos: {
      1: {
        id: 1,
        message: "Test Reducer",
        completed: true,
        dueDate
      }
    },
    filter: "NONE",
    sortBy: "DUE_DATE_DESC"
  };
  expect(finalState).toEqual(expectedState);
});

test("reducer - RESET", () => {
  const initialState = {
    todos: {
      1: {
        id: 1,
        message: "Test Reducer",
        completed: true,
        dueDate: new Date().toJSON()
      }
    },
    filter: "ONLY_COMPLETED",
    sortBy: "DUE_DATE_ASC"
  };
  const action = { type: "RESET" };
  const finalState = reducer(initialState, action);
  const expectedState = { todos: {}, filter: "NONE", sortBy: "DUE_DATE_DESC" };
  expect(finalState).toEqual(expectedState);
});
