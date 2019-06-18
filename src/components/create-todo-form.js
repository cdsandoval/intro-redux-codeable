import React from "react";
import { useCreateTodo } from "../action-hooks";

function CreateTodoForm() {
  const [message, setMessage] = React.useState("");
  const createTodo = useCreateTodo();

  function handleChange(event) {
    setMessage(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    createTodo(message);
    setMessage("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={message} onChange={handleChange} />
    </form>
  );
}

export default CreateTodoForm;
