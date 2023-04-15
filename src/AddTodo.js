import React, { useState } from 'react';

export default function AddTodo(props) {
  const [title, setTitle] = useState(''); //initial state

  function handleChange(e) {
    setTitle(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.addTodo(title);
    setTitle('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label-todo">
          What needs to be done?
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="new-todo-input"
        name="text"
        autoComplete="off"
        value={title}
        onChange={handleChange}
      />
      <button type="submit" className="btn-submit">
        Add
      </button>
    </form>
  );
}
