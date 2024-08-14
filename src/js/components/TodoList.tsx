import React from 'react';

interface TodoProps {
  items: { id: string; text: string }[];
  onDeleteTodo: (id: string) => void;
}

const TodoList: React.FC<TodoProps> = (props) => {
  return (
    <div className='todos'>
      <ul className='todos__list'>
        {props.items.map((todo) => (
          <li key={todo.id}>
            <span>{todo.text}</span>
            <button onClick={() => props.onDeleteTodo(todo.id)}>DELETE</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
