import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import AppBar from './AppBar';
import InputValue from './InputValue';
import AddButton from './AddButton';
import TodoList from './TodoList';

// not complete code just practice...


const initialData = [
  {
    id: 1,
    task: "task1",
    status: false
  },
  {
    id: 2,
    task: "task2",
    status: false
  },
  {
    id: 3,
    task: "task3",
    status: true
  },
]


export default function App() {
  const [todoList, setTodoList] = useState(initialData);
  return (
    <View style={styles.container}>
      <AppBar />
      <InputValue />
      <AddButton />
      <TodoList setTodoList={setTodoList}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});
