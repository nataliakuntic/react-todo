import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList(props) {
  const taskList = props.TodoItem.map(task => TodoItem);

  return <div className="taskList">{taskList}</div>;
}
