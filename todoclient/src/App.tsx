import React from 'react';
import './App.css';
import ListTodos from './components/ListTodos';
import InputTodo from './components/InputTodo';

function App() {
  return (
    <div className="container">
      <InputTodo/>
      <ListTodos/>
    </div>
  );
}

export default App;
