import React, { useRef } from 'react';

interface NewTodoProps {
  onAddTodo: (todoText: string) => void;
}

interface Validatable {
  value: string | number;
  required: boolean;
  minLength: number;
  maxLength: number;
}

const NewTodo: React.FC<NewTodoProps> = (props) => {
  // we initial a useRef hook here
  const textInputRef = useRef<HTMLTextAreaElement>(null);

  const clearInput = () => {
    textInputRef.current!.value = '';
  };

  const validInput = (validInput: Validatable): Boolean => {
    let isValid = true;

    if (validInput.required) {
      isValid = isValid && validInput.value.toString().trim().length !== 0;
    }

    if (validInput.minLength) {
      isValid =
        isValid &&
        validInput.value.toString().trim().length > validInput.minLength;
    }

    if (validInput.maxLength) {
      isValid =
        isValid &&
        validInput.value.toString().trim().length < validInput.maxLength;
    }

    return isValid;
  };

  const showModal = (message: string) => {
    const modal = document.querySelector('.modal')!;
    const overlay = document.querySelector('.overlay')!;
    const modalPara = document.querySelector('.modal__description')!;
    const closeModal = document.querySelector('.btn-close-modal')!;

    if (message) {
      modal.classList.remove('hidden');
      overlay.classList.remove('hidden');
      modalPara.textContent = message;
    }

    function hideModal() {
      modal.classList.add('hidden');
      overlay.classList.add('hidden');
    }

    //   setup event listener on the close modal btn

    closeModal.addEventListener('click', hideModal);
    overlay.addEventListener('click', hideModal);
  };

  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;

    const todoDesc: Validatable = {
      value: enteredText,
      required: true,
      minLength: 5,
      maxLength: 125,
    };

    try {
      if (!validInput(todoDesc)) {
        throw new Error(
          'Please enter a valid input: No empty spaces, min of 5 chars and max of 125 chars long.'
        );
      }
      // we get the props from App component
      props.onAddTodo(enteredText);

      // clear the input text once submitted
      clearInput();
    } catch (error) {
      if (error instanceof Error) {
        showModal(error.message);
      }
    }
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
