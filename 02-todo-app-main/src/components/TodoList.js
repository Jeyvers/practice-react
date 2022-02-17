import React, { useState } from 'react';
import Todo from './Todo';
import { DragDropContext } from 'react-beautiful-dnd';
import { Droppable } from 'react-beautiful-dnd';

const TodoList = ({
  id,
  todos,
  setTodos,
  deleteTodo,
  completeTodo,
  filteredTodos,
  setStatus,
  status,
  innerRef,
  placeholder,
}) => {
  const btns = document.querySelectorAll('.toggleBtn');
  btns.forEach((btn) => {
    btn.addEventListener('click', () => {
      setStatus(btn.value);
    });
    if (status === btn.value) {
      btn.classList.add('active-status');
    } else {
      btn.classList.remove('active-status');
    }
  });

  return (
    <>
      <div className='todo-list' id={id} ref={innerRef}>
        <div className='todos'>
          {filteredTodos.map((todo, index) => {
            return (
              <Todo
                key={todo.id}
                {...todo}
                deleteTodo={deleteTodo}
                completeTodo={completeTodo}
                index={index}
              ></Todo>
            );
          })}
          {placeholder}
        </div>

        <div className='todo-list-footer'>
          <p> {todos.length} items left </p>

          <button
            className='clear-completed-btn'
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
