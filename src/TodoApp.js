import React, { useState } from 'react';
import TodoList from './TodoList';

export default function TodoApp(props) {
  const [todos, setTodos] = useState([]);

  return (
    <div className="todoList">
      <TodoList todos={todos} />
    </div>
  );
}
