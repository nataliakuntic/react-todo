import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList(props) {
  const taskList = props.todos.map((todo) => (
    <TodoItem
      key={todo.id}
      todo={todo}
      toggleTodoCompleted={props.toggleTodoCompleted}
      deleteTodo={props.deleteTodo}
      editTodoTitle={props.editTodoTitle}
    />
  ));
  return <div className="task-list">{taskList}</div>;
}
