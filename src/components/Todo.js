import { View } from "react-native";
import React from "react";
import { Card, Text, Button } from "react-native-paper";

const Todo = (props) => {

  const handleChangeStatus = (id) => {
    const todoDataUpdated = {
      id: id,
      task: props.task,
      done: true,
    };

    props.onUpdateTodo(todoDataUpdated);
  };

  return (
    <View>
      <Card style={{ marginBottom: 15 }}>
        <Card.Content>
          <Text variant="titleLarge">{props.task}</Text>
          <Text variant="bodyMedium">{props.status ? 'STATUS: DONE': 'STATUS: NOT DONE'}</Text>
        </Card.Content>
        <Card.Actions>
          <Button
            buttonColor={props.status ? "orange": "green"}
            textColor="white"
            onPress={() => handleChangeStatus(props.taskId)}
          >
            {props.status ? "Undo": "Mark as Done"}
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

export default Todo;
