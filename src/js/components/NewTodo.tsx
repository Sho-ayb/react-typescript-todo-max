import React, { useRef } from 'react';

interface NewTodoProps {
  onAddTodo: (todoText: string) => void;
}

const NewTodo: React.FC<NewTodoProps> = (props) => {
  // we initial a useRef hook here
  const textInputRef = useRef<HTMLTextAreaElement>(null);

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
    <form
      id='form-control'
      className='form__control'
      onSubmit={onSubmitHandler}
    >
      <div className='form__control-input'>
        <label htmlFor='todo-text'>Todo Text</label>
        <textarea
          id='todo-text'
          className='form__control-input-textarea'
          ref={textInputRef}
          rows={5}
        ></textarea>
      </div>
      <button type='submit'>ADD TODO</button>
    </form>
  );
};

export default NewTodo;
