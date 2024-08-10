import React, { useRef } from 'react';

interface NewTodoProps {
  onAddTodo: (todoText: string) => void;
}

const NewTodo: React.FC<NewTodoProps> = (props) => {
  // we initial a useRef hook here
  const textInputRef = useRef<HTMLInputElement>(null);

  const clearInput = () => {
    textInputRef.current!.value = '';
  };

  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    console.log(enteredText);
    // we get the props from App component
    props.onAddTodo(enteredText);

    // clear the input text once submitted
    clearInput();
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div>
        <label htmlFor='todo-text'>Todo Text</label>
        <input
          type='text'
          id='todo-text'
          ref={textInputRef}
          aria-rowspan={5}
          aria-colspan={5}
        />
      </div>
      <button type='submit'>ADD TODO</button>
    </form>
  );
};

export default NewTodo;
