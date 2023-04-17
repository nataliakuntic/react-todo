import React from 'react';

export default function TodoItem(todo) {
  return (
    <div className="checkbox">
      <input
        id={todo.id}
        type="checkbox"
        checked={todo.isCompleted}
        onChange={() => todo.toggleTodoCompleted(todo.id)}
      />
      <label className="todo-label" htmlFor={todo.id}>
        {todo.title}
      </label>
    </div>
  );
}
