import React from 'react';
import './index.css';

function FilterButton(props) {
  const buttonClassName = props.index === 0 ? 'first-button' : '';
  const additionalClass = props.name === 'all' ? 'button-with-margin' : '';

  return (
   
    <button 
      className={`${buttonClassName} ${additionalClass}`}
      type="button"
      aria-pressed={props.isActive}
      onClick={() => props.setFilter(props.name)}
    >
      <span>Show </span>
      <span>{props.name}</span>
      <span> tasks</span>
    </button>
    
  );
}

export default FilterButton;
