import React, { useState, useEffect } from 'react';

import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);
  useEffect(() => {
    filterHandler();
  }, [status, todos]);

  const addTodo = (e) => {
    e.preventDefault();
    if (!inputValue || /^\s*$/.test(inputValue)) {
      return;
    }
    const newTodos = [
      ...todos,
      { id: new Date().getTime(), text: inputValue, isComplete: false },
    ];
    setTodos(newTodos);
    setInputValue('');
  };

  const completeTodo = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Functions
  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter((todo) => todo.isComplete === true));
        break;
      case 'active':
        setFilteredTodos(todos.filter((todo) => todo.isComplete === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  return (
    <section className='body'>
      <div className='container'>
        <Header />
        <TodoForm
          inputValue={inputValue}
          setTodos={setTodos}
          addTodo={addTodo}
          setInputValue={setInputValue}
        />
        <TodoList
          todos={todos}
          filteredTodos={filteredTodos}
          deleteTodo={deleteTodo}
          completeTodo={completeTodo}
          setStatus={setStatus}
          setTodos={setTodos}
        />
        <div className='todo-footer'>
          <p>Drag and drop to reorder list</p>
        </div>
      </div>
    </section>
  );
};

export default App;
