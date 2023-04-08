import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList(props) {
  const taskList = props.todos.map(todo => (
    <TodoItem
      id={props.id}
      title={props.title}
      isCompleted={props.isCompleted}
    />
  ));

  return <div className="taskList">{taskList}</div>;
}
