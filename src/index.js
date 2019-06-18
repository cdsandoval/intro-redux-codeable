import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import store from "./store";

import CreateTodoForm from "./components/create-todo-form";
import TodoList from "./components/todo-list";
import Filters from "./components/filters";

function App() {
  return (
    <>
      <Filters />
      <CreateTodoForm />
      <TodoList />
    </>
  );
}

const $root = document.getElementById("root");
render(
  <Provider store={store}>
    <App />
  </Provider>,
  $root
);
