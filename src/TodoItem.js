import React from 'react';

export default function TodoItem(props) {
  const { todo, toggleTodoCompleted, deleteTodo } = props;
  // const todo = props.todo;
  // const toggleTodoCompleted = props.toggleTodoCompleted;
  return (
    <div className="checkbox">
      <input
        id={todo.id}
        type="checkbox"
        checked={todo.isCompleted}
        onChange={() => toggleTodoCompleted(todo.id)}
      />
      <label className="todo-label" htmlFor={todo.id}>
        {todo.title}
      </label>
      <button
        type="button"
        className="btn-danger"
        onClick={() => deleteTodo(todo.id)}
      >
        Delete
      </button>
    </div>
  );
}
