import { View, Text } from "react-native";
import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
  return (
    <View style={{marginTop: 15}}>
      {props.todos.map((todo, index) => (
        <Todo key={index} task={todo.task} status={todo.done} />
      ))}
    </View>
  );
};

export default TodoList;
