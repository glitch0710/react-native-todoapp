import {
  ADD_TODO,
  COMPLETE_TODO,
  DELETE_TODO,
} from "../constants/todoConstants";

export const addTodo = (data) => {
  return {
    type: ADD_TODO,
    payload: data,
  };
};

export const completeTodo = (data) => {
  return {
    type: COMPLETE_TODO,
    payload: data,
  };
};

export const deleteTodo = (data) => {
  return {
    type: DELETE_TODO,
    payload: data,
  };
};
