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

  return (
    <PaperProvider>
      <View style={styles.box}>
        <ScrollView>
          <Home todos={todos} />
          <StatusBar style="auto" />
        </ScrollView>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
  },
});
