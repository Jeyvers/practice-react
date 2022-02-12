import React, { useEffect } from 'react';
import { FaCheckCircle, FaTimes } from 'react-icons/fa';
import { BsCircle, BsCheck } from 'react-icons/bs';

const Todo = ({ id, text, isComplete, deleteTodo, completeTodo }) => {
  return (
    <div className='todo-container'>
      <div className='todo'>
        <div className='todo-info'>
          <span className='icon' onClick={() => completeTodo(id)}>
            {isComplete ? (
              <BsCheck className='icon-tick' />
            ) : (
              <BsCircle className='icon-circle' />
            )}
          </span>
          <span
            className={isComplete ? 'input-text completed-todo' : 'input-text'}
          >
            {text}
          </span>
        </div>
        <button className='delete-btn' onClick={() => deleteTodo(id)}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Todo;
