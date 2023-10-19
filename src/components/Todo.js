import { View } from "react-native";
import React from "react";
import { Card, Text } from "react-native-paper";

const Todo = (props) => {
  let taskStatus = "STATUS: ";

  if (props.done) {
    taskStatus = taskStatus + "DONE";
  } else {
    taskStatus = taskStatus + "NOT DONE";
  }

  return (
    <View>
      <Card style={{marginBottom: 15}}>
        <Card.Title title={taskStatus} />
        <Card.Content>
          <Text variant="titleLarge">{props.task}</Text>
          <Text variant="bodyMedium">asdasdasd</Text>
        </Card.Content>
      </Card>
    </View>
  );
};

export default Todo;
