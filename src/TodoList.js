import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList(props) {
  const taskList = props.todos
    .filter(props.filter)
    .map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        toggleTodoCompleted={props.toggleTodoCompleted}
        deleteTodo={props.deleteTodo}
        updateTodoTitle={props.updateTodoTitle}
      />
    ));
  return <div className="task-list">{taskList}</div>;
}
