import React from 'react';
import { FaCircle, FaCheckCircle } from 'react-icons/fa';

const Todo = ({ id, text }) => {
  return (
    <div className='todo'>
      <span className='icon'>
        <FaCircle />
      </span>
      <span className='input-text'>{text}</span>
      <button className='delete-btn'>< </button>
    </div>
  );
};

export default Todo;
