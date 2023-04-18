import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

export default function TodoApp(props) {
  const [todos, setTodos] = useState([]);

  const addTodo = title => {
    const newTodo = { id: `todo-${nanoid()}`, title, isCompleted: false };
    setTodos([...todos, newTodo]);
  };

  function toggleTodoCompleted(id) {
    const updatedTodos = todos.map(todo => {
      if (id === todo.id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  return (
    <div className="todo-list">
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} toggleTodoCompleted={toggleTodoCompleted} />
    </div>
  );
}
