import React from "react";
import { useFilteredAndSortedTodos } from "../selectors";
import Todo from "./todo";

function TodoList() {
  const todos = useFilteredAndSortedTodos();

  return (
    <section>
      {todos.map(todo => (
        <article key={todo.dueDate.toString()}>
          <Todo {...todo} />
        </article>
      ))}
    </section>
  );
}

export default TodoList;
