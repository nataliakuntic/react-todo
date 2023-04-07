import React from 'react';

export default function TodoItem(props) {
  return (
    <div className="checkbox">
      <input
        id={props.id}
        type="checkbox"
        checked={props.isCompleted}
        onChange={() => props.toggleTaskCompleted(props.id)}
      />
      <label className="todo-label" htmlFor={props.id}>
        {props.title}
      </label>
    </div>
  );
}
