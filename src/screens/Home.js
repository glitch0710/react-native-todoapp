import { View, Text } from "react-native";
import React from "react";
import Header from "../components/Header";
import TodoList from "../components/TodoList";

const Home = (props) => {
  const saveDataTodo = (enteredTodoData) => {
    const todoData = {
      ...enteredTodoData,
      id: Math.floor(Math.random() * (9999 - 1000 + 1) + 1000).toString(),
    };

    props.onShowTodoData(todoData);
  };

  return (
    <View>
      <Header onSaveTodoData={saveDataTodo} />
      <TodoList todos={props.todos} />
    </View>
  );
};

export default Home;
