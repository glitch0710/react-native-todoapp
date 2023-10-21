import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { PaperProvider } from "react-native-paper";
import Home from "./src/screens/Home";
import { useState } from "react";

const dummyTodo = [
  { task: "HTML I", done: true },
  { task: "CSS", done: true },
  { task: "Responsive design", done: true },
  { task: "Git", done: true },
  { task: "JavaScript I", done: true },
  { task: "JavaScript II", done: false },
];

export default function App() {
  const [todos, setTodos] = useState(dummyTodo);

  const showTodoDataHandler = (enteredTodoData) => {
    setTodos((prevTodo) => {
      return [enteredTodoData, ...prevTodo];
    });

    console.debug(todos)
  };

  return (
    <PaperProvider>
      <ScrollView style={styles.container}>
        <View style={styles.box}>
          <Home todos={todos} onShowTodoData={showTodoDataHandler} />
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
