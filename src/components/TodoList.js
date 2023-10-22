import { View } from "react-native";
import React from "react";
import Todo from "./Todo";
import { Text } from "react-native-paper";

const TodoList = (props) => {
  const updateTodo = (enteredUpdateTodo) => {
    const todoData = {
      ...enteredUpdateTodo,
    };

    props.onUpdateTodo(todoData);
  };

  const deleteTodo = (selectedTodoData) => {
    const todoData = {
      ...selectedTodoData,
    };

    props.onDeleteTodo(todoData);
  };

  const doneCount = props.todos.filter((todo) => todo.done === true).length;
  const notDoneCount = props.todos.filter((todo) => todo.done === false).length;
  
  return (
    <View style={{ marginTop: 15 }}>
      <View style={{ marginBottom: 20 }}>
        <Text
          variant="headlineSmall"
          style={{ marginBottom: 20, color: "green", fontWeight: "bold" }}
        >
          TODOS
        </Text>
        {notDoneCount <= 0 && <Text>No new todos</Text>}
        {props.todos.map((todo, index) => {
          if (!todo.done) {
            return (
              <Todo
                key={index}
                taskId={todo.id}
                task={todo.task}
                status={todo.done}
                delete={todo.delete}
                onUpdateTodo={updateTodo}
              />
            );
          }
        })}
      </View>
      <View>
        <Text
          variant="headlineSmall"
          style={{ marginBottom: 20, color: "orange", fontWeight: "bold" }}
        >
          DONE
        </Text>
        {doneCount <= 0 && (
          <Text style={{ marginBottom: 20 }}>No done todos</Text>
        )}
        {props.todos.map((todo, index) => {
          if (todo.done && todo.delete === false) {
            return (
              <Todo
                key={index}
                taskId={todo.id}
                task={todo.task}
                status={todo.done}
                delete={todo.delete}
                onUpdateTodo={updateTodo}
                onDeleteTodo={deleteTodo}
              />
            );
          }
        })}
      </View>
    </View>
  );
};

export default TodoList;
