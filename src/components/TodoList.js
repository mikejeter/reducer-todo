import React, { useState, useReducer } from "react";
import { initialState, reducer } from "../reducers/todoReducer";

const TodoList = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [newTodoItem, setNewTodoItem] = useState("");

  console.log("this is state", state);

  const handleChanges = event => {
    setNewTodoItem(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
  };

  return (
    <div>
      <div>
        {state.todos.map(todo => (
          <p
            key={todo.id}
            className={`item${todo.completed ? " completed" : ""}`}
            onClick={() =>
              dispatch({ type: "TOGGLE_TODO_ITEM", payload: todo.id })
            }
          >
            {todo.item}
          </p>
          
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="todo"
          placeholder="Add Todo"
          className="input"
          onChange={handleChanges}
        />
        <button
          type="submit"
          onClick={() =>
            dispatch({ type: "ADD_TODO_ITEM", payload: newTodoItem })
          }
        >
          Add new item
        </button>
        <button onClick={() => dispatch({ type: "REMOVE_TODO_ITEM" })}>
          Clear Completed Items
        </button>
      </form>
    </div>
  );
};

export default TodoList;