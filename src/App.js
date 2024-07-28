import React, { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTodo = (text) => {
    const newTodo = { text, isDone: false };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isDone = !newTodos[index].isDone;
    setTodos(newTodos);
  };

  const editTodo = (index, newText) => {
    const newTodos = [...todos];
    newTodos[index].text = newText;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'done') return todo.isDone;
    if (filter === 'notyet') return !todo.isDone;
    return true;
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo List</h1>
        <div className="filters">
          <button onClick={() => setFilter('all')}>ALL</button>
          <button onClick={() => setFilter('done')}>DONE</button>
          <button onClick={() => setFilter('notyet')}>NOT YET</button>
        </div>
        <TodoForm addTodo={addTodo} />
        <TodoList
          todos={filteredTodos}
          toggleTodo={toggleTodo}
          editTodo={editTodo}
          removeTodo={removeTodo}
        />
      </header>
    </div>
  );
}

export default App;
