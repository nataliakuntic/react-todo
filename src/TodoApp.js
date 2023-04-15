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

  return (
    <div className="todo-list">
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
}
