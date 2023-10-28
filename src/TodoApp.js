import { nanoid } from "nanoid";
import React, { useState } from "react";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import FilterButton from "./FilterButton";
import "./index.css";

const FILTER_MAP = {
  all: () => true,
  pending: (todo) => !todo.isCompleted,
  completed: (todo) => todo.isCompleted,
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  const addTodo = (title) => {
    const newTodo = { id: `todo-${nanoid()}`, title, isCompleted: false };
    setTodos([...todos, newTodo]);
  };

  function editTodoTitle(id, newTitle) {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, title: newTitle };
        // { ...todo } is a spread operator that 1) creates a new object
        // 2) copies all the properties from the todo object.
        // Then, the title property is overwritten with the new title value.
        // (it has all the properties copied from the original todo, but has a new title)
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  function toggleTodoCompleted(id) {
    const updatedTodos = todos.map((todo) => {
      if (id === todo.id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  function deleteTodo(id) {
    const remainingTodos = todos.filter((todo) => id !== todo.id);
    setTodos(remainingTodos);
  }

  const filterList = FILTER_NAMES.map((title) => (
    <FilterButton
      key={title}
      name={title}
      isActive={title === filter}
      setFilter={setFilter}
    />
  ));

  return (
    <div className="todo-list">
      <AddTodo addTodo={addTodo} />
      <div className="filter-buttons">{filterList}</div>
      <TodoList
        todos={todos.filter(FILTER_MAP[filter])}
        toggleTodoCompleted={toggleTodoCompleted}
        deleteTodo={deleteTodo}
        editTodoTitle={editTodoTitle}
      />
    </div>
  );
}
