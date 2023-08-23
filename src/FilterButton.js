import React from 'react';
import './index.css';

function FilterButton(props) {


  return (
   
 
    <button 
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
