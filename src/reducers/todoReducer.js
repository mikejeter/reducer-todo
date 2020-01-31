export const initialState = {
    todos: [
      {
        item: "My Todo List",
        completed: false,
        id: 1
      }
    ]
  };
  
  export const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_TODO_ITEM":
        const newTodo = {
          item: action.payload,
          completed: false,
          id: Date.now()
        };
        return {
          ...state,
          todos: [...state.todos, newTodo]
        };
      case "TOGGLE_TODO_ITEM":
        return {
          ...state,
          todos: state.todos.map(todo => {
            console.log("Completed Toggle", todo.completed);
            if (todo.id === action.payload) {
              return {
                ...todo,
                completed: !todo.completed
              };
            } else {
              return todo;
            }
          })
        };
      case "REMOVE_TODO_ITEM":
        return {
          ...state,
          todos: state.todos.filter(todo => !todo.completed)
        };
      default:
        return state;
    }
  };