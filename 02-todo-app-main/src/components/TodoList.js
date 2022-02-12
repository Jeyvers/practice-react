import React, { useState } from 'react';
import Todo from './Todo';

const TodoList = ({
  todos,
  setTodos,
  deleteTodo,
  completeTodo,
  filteredTodos,
  setStatus,
}) => {
  const btns = document.querySelectorAll('.toggleBtn');
  btns.forEach((btn) => {
    btn.addEventListener('click', () => setStatus(btn.value));
  });
  return (
    <>
      <div className='todo-list'>
        <div className='todos'>
          {filteredTodos.map((todo) => {
            return (
              <Todo
                key={todo.id}
                {...todo}
                deleteTodo={deleteTodo}
                completeTodo={completeTodo}
              />
            );
          })}
        </div>
        <div className='todo-list-footer'>
          <p> {todos.length} items left </p>

          <button
            onClick={() => {
              const newTodos = todos.filter(
                (todo) => todo.isComplete === false
              );
              setTodos(newTodos);
            }}
          >
            Clear Completed
          </button>
        </div>
      </div>
      <div className='toggleBtns'>
        <button className='toggleBtn' value={'all'}>
          All
        </button>
        <button className='toggleBtn' value={'active'}>
          Active
        </button>
        <button className='toggleBtn' value={'completed'}>
          Completed
        </button>
      </div>
    </>
  );
};

export default TodoList;
