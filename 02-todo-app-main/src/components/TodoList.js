import React, { useState } from 'react';
import Todo from './Todo';
const TodoList = ({ todos }) => {
  return (
    <div className='todo-list'>
      {todos.map((todo) => {
        return <Todo key={todo.id} {...todo} />;
      })}
    </div>
  );
};

export default TodoList;
