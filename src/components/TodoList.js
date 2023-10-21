import { View, Text } from "react-native";
import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
  const updateTodo = (enteredUpdateTodo) => {
    const todoData = {
      ...enteredUpdateTodo,
    };

    props.onUpdateTodo(todoData);
  };

  return (
    <View style={{ marginTop: 15 }}>
      <View style={{ marginBottom: 20 }}>
        <Text style={{ marginBottom: 20 }}>TODOS</Text>
        {props.todos.map((todo, index) => {
          if (!todo.done) {
            return (
              <Todo
                key={index}
                taskId={todo.id}
                task={todo.task}
                status={todo.done}
                onUpdateTodo={updateTodo}
              />
            );
          }
        })}
      </View>
      <View>
        <Text style={{ marginBottom: 20 }}>DONE</Text>
        {props.todos.map((todo, index) => {
          if (todo.done) {
            return (
              <Todo
                key={index}
                taskId={todo.id}
                task={todo.task}
                status={todo.done}
                onUpdateTodo={updateTodo}
              />
            );
          }
        })}
      </View>
    </View>
  );
};

export default TodoList;
