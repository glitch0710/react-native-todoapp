import { View } from "react-native";
import { React, useEffect } from "react";
import Todo from "./Todo";
import { Text } from "react-native-paper";
import store from "../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { getTodos } from "../redux/actions/todoActions";

const TodoList = () => {
  const { todos } = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const fetchTodos = () => dispatch(getTodos());

  useEffect(() => {
    fetchTodos();
  }, []);

  console.debug(todos);

  const doneCount = todos.filter(
    (todo) => todo.done === true && todo.delete === false
  ).length;
  const notDoneCount = todos.filter((todo) => todo.done === false).length;

  return (
    <View style={{ marginTop: 15 }}>
      <View style={{ marginBottom: 20 }}>
        <Text
          variant="headlineSmall"
          style={{ marginBottom: 20, color: "green", fontWeight: "bold" }}
        >
          TODOS
        </Text>
        {notDoneCount <= 0 && (
          <View style={{ alignItems: "center" }}>
            <Text variant="titleMedium">No new todos</Text>
          </View>
        )}
        {todos.map((todo, index) => {
          if (!todo.done) {
            return (
              <Todo
                key={index}
                taskId={todo.id}
                task={todo.task}
                status={todo.done}
                delete={todo.delete}
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
          <View style={{ alignItems: "center" }}>
            <Text variant="titleMedium" style={{ marginBottom: 20 }}>
              No done todos
            </Text>
          </View>
        )}
        {todos.map((todo, index) => {
          if (todo.done && todo.delete === false) {
            return (
              <Todo
                key={index}
                taskId={todo.id}
                task={todo.task}
                status={todo.done}
                delete={todo.delete}
              />
            );
          }
        })}
      </View>
    </View>
  );
};

export default TodoList;
