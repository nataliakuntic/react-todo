import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList(props) {
  const taskList = props.todos.map(todo => (
    <TodoItem todo={todo} toggleTodoCompleted={props.toggleTodoCompleted} />
  ));

  return <div className="task-list">{taskList}</div>;
}
