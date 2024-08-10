// import react
import React, { useState, useEffect } from 'react';

// importing react components

import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import { Todo } from './todo.models';

// The main react component rendering to root

const App: React.FC = () => {
  //   const todos: TodoModel[] = [{ id: 't1', text: 'Finish the course' }];

  // we will swap to using useState to manage the state
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  const todoAddHandler = (text: string) => {
    // changes the state here by calling the useState function but we pass in the current todos if any
    setTodos((prevTodos) => {
      // this function ensures that we are working with the latest state
      return [...prevTodos, { id: Math.random().toString(), text: text }];
    });

    console.log(todos);
  };

  const todoDeleteHandler = (id: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  return (
    <div className='App'>
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
    </div>
  );
};

export default App;
