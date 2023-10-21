import { Text, View, Image } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-paper";

export default function Header(props) {
  const [text, setText] = useState("");

  const addTodoHandler = () => {
    const todoData = {
      task: text,
    };

    props.onSaveTodoData(todoData);
    setText("");
  };

  return (
    <View style={{ alignItems: "center" }}>
      <Image
        source={require("../../assets/todo.png")}
        style={{ width: 100, height: 100, marginBottom: 20 }}
      />
      <Text>Type in new todo and hit enter</Text>
      <TextInput
        onSubmitEditing={addTodoHandler}
        label="Todo"
        value={text}
        onChangeText={(text) => setText(text)}
        mode="outlined"
        style={{ width: 350 }}
      />
    </View>
  );
}
