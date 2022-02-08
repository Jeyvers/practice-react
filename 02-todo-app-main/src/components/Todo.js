import React from 'react';
import { FaCheckCircle, FaTimes } from 'react-icons/fa';
import { BsCircle } from 'react-icons/bs';

const Todo = ({ id, text }) => {
  return (
    <div className='todo'>
      <span className='icon'>
        {isCompleted ? <FaCheckCircle /> : <BsCircle />
      </span>
      <span className='input-text'>{text}</span>
      <button className='delete-btn'>
        <FaTimes />
      </button>
    </div>
  );
};

export default Todo;
