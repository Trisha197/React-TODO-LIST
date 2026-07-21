import { useState } from 'react';
import './App.css';
import { useRef } from 'react';
import { useEffect } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = () => {
    if (inputValue.trim() === '') return;

    const newTodo = {
      id: Date.now(),
      text: inputValue.trim(),
    };

    setTodos([...todos, newTodo]);
    setInputValue('');
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAddTodo();
    }
  };

  return (
    <>
      <h1>MY TODO LIST</h1>
      <div className="Bigbox">
        <div className="Taskbox">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Enter a task..." />
          <button onClick={handleAddTodo}>Add</button>
        </div>

        <div>
          {todos.map((todo) => (
            <div key={todo.id}>
              <span>{todo.text}</span>
              <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;

