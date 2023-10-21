import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { PaperProvider } from "react-native-paper";
import Home from "./src/screens/Home";
import { useState } from "react";

const dummyTodo = [
  { id: "t1", task: "HTML I", done: false },
  { id: "t2", task: "CSS", done: false },
  { id: "t3", task: "Responsive design", done: false },
  { id: "t4", task: "Git", done: true },
  { id: "t5", task: "JavaScript I", done: true },
  { id: "t6", task: "JavaScript II", done: false },
];

export default function App() {
  const [todos, setTodos] = useState(dummyTodo);

  const showTodoDataHandler = (enteredTodoData) => {
    setTodos((prevTodo) => {
      return [enteredTodoData, ...prevTodo];
    });
  };

  const updateTodoHandler = (enteredTodoData) => {
    const newTodoList = dummyTodo.map((item) => {
      if (item.id === enteredTodoData.id){
        const updatedTodo = {
          ...item,
          done: !item.done,
        }

        return updatedTodo
      }
      return item
    })

    setTodos(newTodoList)
  }

  return (
    <PaperProvider>
      <ScrollView style={styles.container}>
        <View style={styles.box}>
          <Home todos={todos} onShowTodoData={showTodoDataHandler} onUpdateTodo={updateTodoHandler} />
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
