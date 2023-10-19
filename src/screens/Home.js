import { View, Text } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import TodoList from '../components/TodoList'

const Home = (props) => {
  return (
    <View>
      <Header />
      <TodoList todos={props.todos} />
    </View>
  )
}

export default Home