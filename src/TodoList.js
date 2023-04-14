import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList(props) {
  const taskList = props.todos.map(todo => (
    <TodoItem id={todo.id} title={todo.title} isCompleted={todo.isCompleted} />
  ));

  return <div className="task-list">{taskList}</div>;
}
