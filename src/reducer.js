const initialState = {
  todos: {},
  filter: "NONE",
  sortBy: "DUE_DATE_DESC"
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "CREATE_TODO": {
      return {
        ...state,
        todos: {
          ...state.todos,
          [action.payload.id]: action.payload
        }
      };
    }
    case "MARK_AS_COMPLETED": {
      return {
        ...state,
        todos: {
          ...state.todos,
          [action.payload.id]: {
            ...state.todos[action.payload.id],
            completed: true
          }
        }
      };
    }
    case "CHANGE_FILTER": {
      return {
        ...state,
        filter: action.payload.filter
      };
    }
    case "CHANGE_SORT_BY": {
      return {
        ...state,
        sortBy: action.payload.sortBy
      };
    }
    case "RESET": {
      return initialState;
    }
    default: {
      return state;
    }
  }
}

export default reducer;
