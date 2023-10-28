import React, { useState } from "react";

export default function TodoItem({
  todo,
  toggleTodoCompleted,
  deleteTodo,
  editTodoTitle,
}) {
  const [isEditing, setIsEditing] = useState(false); //if todo item is in the edit mode or not
  const [newTitle, setNewTitle] = useState(todo.title); //keeping track of the new title user is editing

  // toggles onDoubleClick as it's used in viewTemplate
  function startTitleEdit() {
    setIsEditing(true);
  }

  // event listener to the input field if "Enter" is pressed (in editingTemplate).
  // When "Enter" is pressed, we call updateTodoTitle with the new title and set the editing mode back to "false"
  function finishTitleEdit(e) {
    if (e.key === "Enter") {
      editTodoTitle(todo.id, newTitle);
      setIsEditing(false);
    }
  }

  function abortTitleEdit(e) {
    setNewTitle(todo.title);
    setIsEditing(false);
  }

  function handleTitleChange(e) {
    setNewTitle(e.target.value);
  }

  const editingTemplate = (
    <input
      type="text"
      className="edit-input"
      value={newTitle}
      onChange={handleTitleChange}
      onKeyDown={finishTitleEdit}
      onBlur={abortTitleEdit}
      style={{ width: "calc(100% - 1em)" }}
    />
  );

  const viewTemplate = (
    <div className="checkbox">
      <div className="checkbox-input">
        <input
          id={todo.id}
          type="checkbox"
          checked={todo.isCompleted}
          onChange={() => toggleTodoCompleted(todo.id)}
        />
        <label htmlFor={todo.id} className="checkbox-label"></label>
      </div>
      <label
        className="todo-label"
        htmlFor={todo.id}
        onDoubleClick={startTitleEdit}
      >
        {todo.title}
      </label>
      <button
        type="button"
        className="btn-danger"
        onClick={() => deleteTodo(todo.id)}
      >
        Delete
      </button>
    </div>
  );

  return (
    <div className="todo-item">
      {isEditing ? editingTemplate : viewTemplate}
    </div>
  );
}

/*
If the isEditing state is true, we render the "editingTemplate",
which is an input field with the newTitle state as its value.
Otherwise, we render the "viewTemplate", which is the todo label and delete button.*/
