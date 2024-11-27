/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import { useState } from 'react';
import Todoform from './components/TodoForm';
import Todolist from './components/TodoList';
import {
  SafeAreaView,
  StyleSheet,
  Pressable,
  View,
  Text,
  ScrollView,
  TextInput,
  Button
} from 'react-native';


function App() {
  const [tasks, setTasks] = useState([]);
  const addTask = (taskText) => {
    setTasks([...tasks, taskText]);
  };
  return (
    <SafeAreaView>
      <Todolist tasks = {tasks}/>
      <Todoform addTask = {addTask}/>
    </SafeAreaView>
  );
}


export default App;
