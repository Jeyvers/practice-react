import React, { useState } from 'react';
import TodoList from './TodoList';

const TodoForm = ({ addTodo, setInputValue, inputValue }) => {
  return (
    <div>
      <form className='todo-form' onSubmit={addTodo}>
        <input
          type='text'
          placeholder='Create a new todo'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          autoFocus
        />
      </form>
    </div>
  );
};

export default TodoForm;
