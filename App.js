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
  const [tasks, setTasks] = useState(['Do laundry', 'Go to gym', 'Walk dog']);
  return (
    <SafeAreaView>
      <Todolist tasks = {tasks}/>
      
    </SafeAreaView>
  );
}


export default App;
