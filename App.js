import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { PaperProvider } from "react-native-paper";
import Home from "./src/screens/Home";
import { useState } from "react";

const todoList = [];

export default function App() {
  const [todos, setTodos] = useState(todoList);

  const showTodoDataHandler = (enteredTodoData) => {
    setTodos((prevTodo) => {
      return [enteredTodoData, ...prevTodo];
    });
  };

  const deleteTodoHandler = (selectedTodoData) => {
    const newTodoList = todos.map((item) => {
      if (item.id === selectedTodoData.id) {
        const updatedTodo = {
          ...item,
          delete: !item.delete,
        };

        return updatedTodo;
      }
      return item;
    });

    setTodos(newTodoList);
  };

  const updateTodoHandler = (enteredTodoData) => {
    const newTodoList = todos.map((item) => {
      if (item.id === enteredTodoData.id) {
        const updatedTodo = {
          ...item,
          done: !item.done,
        };

        return updatedTodo;
      }
      return item;
    });

    setTodos(newTodoList);
  };

  return (
    <PaperProvider>
      <ScrollView style={styles.container}>
        <View style={styles.box}>
          <Home
            todos={todos}
            onShowTodoData={showTodoDataHandler}
            onUpdateTodo={updateTodoHandler}
            onDeleteTodo={deleteTodoHandler}
          />
          <StatusBar style="auto" />
        </View>
      </ScrollView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 100,
  },
  box: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
  },
});
