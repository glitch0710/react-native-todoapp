import { View, Text } from "react-native";
import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
  const updateTodo = (enteredUpdateTodo) => {
    const todoData = {
      ...enteredUpdateTodo,
    }

    props.onUpdateTodo(todoData)
  };
  return (
    <View style={{ marginTop: 15 }}>
      {props.todos.map((todo, index) => (
        <Todo
          key={index}
          taskId={todo.id}
          task={todo.task}
          status={todo.done}
          onUpdateTodo={updateTodo}
        />
      ))}
    </View>
  );
};

export default TodoList;
