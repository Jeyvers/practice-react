import React from 'react';
import { BsCircle } from 'react-icons/bs';

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
        <BsCircle className='circle-todo-form' />
      </form>
    </div>
  );
};

export default TodoForm;
