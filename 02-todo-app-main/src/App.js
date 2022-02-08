import React, { useState } from 'react';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, { id: new Date().getTime(), text: inputValue }]);
    console.log(...todos, inputValue);
    setInputValue('');
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
        <TodoList todos={todos} />
      </div>
    </section>
  );
};

export default App;
