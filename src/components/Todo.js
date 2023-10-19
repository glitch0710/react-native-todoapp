import { View } from "react-native";
import React from "react";
import { Card, Text, Button } from "react-native-paper";

const Todo = (props) => {
  let taskStatus = "STATUS: ";

  if (props.done) {
    taskStatus = taskStatus + "DONE";
  } else {
    taskStatus = taskStatus + "NOT DONE";
  }

  return (
    <View>
      <Card style={{ marginBottom: 15 }}>
        <Card.Content>
          <Text variant="titleLarge">{props.task}</Text>
          <Text variant="bodyMedium">{taskStatus}</Text>
        </Card.Content>
        <Card.Actions>
          <Button buttonColor="green" textColor="white">
            Mark as Done
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

export default Todo;
