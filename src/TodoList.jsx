import React, { useState } from 'react';

function TodoList({ todos, toggleTodo, editTodo, removeTodo }) {
  const [editingIndex, setEditingIndex] = useState(null);
  const [newText, setNewText] = useState('');

  const handleEdit = (index, text) => {
    setEditingIndex(index);
    setNewText(text);
  };

  const handleSave = (index) => {
    editTodo(index, newText);
    setEditingIndex(null);
    setNewText('');
  };

  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index} className={todo.isDone ? 'done' : ''}>
          {editingIndex === index ? (
            <>
              <input
                type="text"
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
              />
              <button onClick={() => handleSave(index)}>Save</button>
            </>
          ) : (
            <>
              {todo.text}
              <div className="buttons">
                <button onClick={() => toggleTodo(index)}>{todo.isDone ? 'Undo' : 'Done'}</button>
                <button onClick={() => handleEdit(index, todo.text)}>Edit</button>
                <button onClick={() => removeTodo(index)}>Delete</button>
              </div>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
