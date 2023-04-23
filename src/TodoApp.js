import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import FilterButton from './FilterButton';

const FILTER_MAP = {
  all: () => true,
  pending: todo => !todo.isCompleted,
  completed: todo => todo.isCompleted,
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

export default function TodoApp(props) {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

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

  const filterList = FILTER_NAMES.map(title => (
    <FilterButton
      key={title}
      name={title}
      isPressed={title === filter}
      setFilter={setFilter}
    />
  ));

  return (
    <div className="todo-list">
      <AddTodo addTodo={addTodo} />
      {filterList}
      <TodoList
        todos={todos}
        toggleTodoCompleted={toggleTodoCompleted}
        filter={FILTER_MAP[filter]}
      />
    </div>
  );
}
