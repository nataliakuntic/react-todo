import React, { useState } from 'react';

export default function TodoItem(todo) {
  const [newTodo, setNewTodo] = useState([]);
  function toggleTodoCompleted(id) {
    const updatedTodos = newTodo.map(todo => {
      if (id === todo.id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });
    setNewTodo(updatedTodos);
  }

  return (
    <div className="checkbox">
      <input
        id={todo.id}
        type="checkbox"
        isChecked={todo.isCompleted} //it's "isChecked" and not "checked" because it's a React component
        onChange={() => toggleTodoCompleted(todo.id)}
      />
      <label className="todo-label" htmlFor={todo.id}>
        {todo.title}
      </label>
    </div>
  );
}
