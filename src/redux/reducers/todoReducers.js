import {
  ADD_TODO,
  COMPLETE_TODO,
  DELETE_TODO,
} from "../constants/todoConstants";

const initialState = {
  todos: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case COMPLETE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id !== action.payload.id) {
            return todo;
          }

          return {
            ...todo,
            done: !todo.done,
          };
        }),
      };

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id !== action.payload.id) {
            return todo;
          }

          return {
            ...todo,
            delete: !todo.delete,
          };
        }),
      };

    default:
      return state;
  }
};
