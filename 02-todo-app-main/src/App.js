import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { DragDropContext } from 'react-beautiful-dnd';
import { Droppable } from 'react-beautiful-dnd';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [lightMode, setLightMode] = useState(false);

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [status, todos]);

  const addTodo = (e) => {
    e.preventDefault();

    if (!inputValue || /^\s*$/.test(inputValue)) {
      return;
    }
    const newTodos = [
      ...todos,
      {
        id: new Date().getTime().toString(),
        text: inputValue,
        isComplete: false,
      },
    ];
    setTodos(newTodos);
    setInputValue('');
  };

  const completeTodo = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter((todo) => todo.isComplete === true));
        break;
      case 'active':
        setFilteredTodos(todos.filter((todo) => todo.isComplete === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(
        localStorage.getItem('todos', JSON.stringify('todos'))
      );
      setTodos(todoLocal);
    }
  };

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    console.log(destination, source, draggableId);
    // To reorder elements positions
    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const items = Array.from(todos);
    const [reorderedItem] = items.splice(source.index, 1);
    items.splice(destination.index, 0, reorderedItem);
    setTodos(items);
  };

  return (
    <section className='body'>
      <div className='container'>
        <Header setLightMode={setLightMode} lightMode={lightMode} />
        <TodoForm
          inputValue={inputValue}
          setTodos={setTodos}
          addTodo={addTodo}
          setInputValue={setInputValue}
        />
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId='todo-list'>
            {(provided) => (
              <TodoList
                todos={todos}
                filteredTodos={filteredTodos}
                deleteTodo={deleteTodo}
                completeTodo={completeTodo}
                setStatus={setStatus}
                setTodos={setTodos}
                status={status}
                {...provided.droppableProps}
                innerRef={provided.innerRef}
                id='todo-list'
                placeholder={provided.placeholder}
              ></TodoList>
            )}
          </Droppable>
        </DragDropContext>
        <div className='todo-footer'>
          <p>Drag and drop to reorder list</p>
        </div>
      </div>
    </section>
  );
};

export default App;
// drag&drop, saveTodos
