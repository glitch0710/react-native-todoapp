import { View, Text } from "react-native";
import React from "react";
import Header from "../components/Header";
import TodoList from "../components/TodoList";

const Home = (props) => {
  const saveDataTodo = (enteredTodoData) => {
    const todoData = {
      ...enteredTodoData,
      done: false,
      delete: false,
      id: Math.floor(Math.random() * (9999 - 1000 + 1) + 1000).toString(),
    };

    props.onShowTodoData(todoData);
  };
  
  const receiveDeleteTodo = (selectedTodoData) => {
    const todoData = {
      ...selectedTodoData,
    }

    props.onDeleteTodo(todoData)
  }

  const receiveUpdateTodo = (enteredUpdateTodo) => {
    const todoData = {
      ...enteredUpdateTodo,
    }

    props.onUpdateTodo(todoData)
  }

  return (
    <View>
      <Header onSaveTodoData={saveDataTodo} />
      <TodoList todos={props.todos} onUpdateTodo={receiveUpdateTodo} onDeleteTodo={receiveDeleteTodo} />
    </View>
  );
};

export default Home;
