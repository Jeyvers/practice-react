import React, { useEffect } from 'react';
import { FaCheckCircle, FaTimes } from 'react-icons/fa';
import { BsCircle } from 'react-icons/bs';

const Todo = ({ id, text, isComplete, deleteTodo, completeTodo }) => {
  return (
    <div className='todo'>
      <span
        className={isComplete ? 'icon completed-todo' : 'icon'}
        onClick={() => completeTodo(id)}
      >
        {isComplete ? <FaCheckCircle /> : <BsCircle />}
      </span>
      <span className='input-text'>{text}</span>
      <button className='delete-btn' onClick={() => deleteTodo(id)}>
        <FaTimes />
      </button>
    </div>
  );
};

export default Todo;
