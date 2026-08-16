import React, { useState } from 'react';
import Header from './components/Header.jsx';
import ToDoList from './components/ToDoList.jsx';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState('');

  const addTodo = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    const newTodo = {
      id: Date.now(),
      text: inputText,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setInputText('');
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  return (
    <div className="app-container">
      <Header />
      <form onSubmit={addTodo} className="add-todo-form">
        <input
          type="text"
          placeholder="Add a new task..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
      <ToDoList
        todos={todos}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />
    </div>
  );
}

export default App;