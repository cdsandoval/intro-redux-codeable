import React from "react";

import { useMarkAsCompleted } from "../action-hooks";

function Todo({ id, dueDate, completed, message }) {
  const markAsCompleted = useMarkAsCompleted();

  function handleClick() {
    markAsCompleted(id);
  }

  return (
    <>
      <h3>{message}</h3>
      <time>{new Date(dueDate).toLocaleString()}</time>
      {!completed && <button onClick={handleClick}>Complete</button>}
    </>
  );
}

export default Todo;
