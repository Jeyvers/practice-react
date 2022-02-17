import React, { useEffect } from 'react';
import { FaCheckCircle, FaTimes } from 'react-icons/fa';
import { BsCircle, BsCheck } from 'react-icons/bs';
import { Draggable } from 'react-beautiful-dnd';

const Todo = ({ index, id, text, isComplete, deleteTodo, completeTodo }) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          className='todo-container'
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          id={id}
        >
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
                className={
                  isComplete ? 'input-text completed-todo' : 'input-text'
                }
              >
                {text}
              </span>
            </div>
            <button className='delete-btn' onClick={() => deleteTodo(id)}>
              <FaTimes />
            </button>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Todo;
