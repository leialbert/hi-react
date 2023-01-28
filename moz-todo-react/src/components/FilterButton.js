import React from "react";
function FilterButton(props) {
  return (
    <div className="filters btn-group stack-exception">
      <button
        type="button"
        className="btn toggle-btn"
        aria-pressed={props.isPressed}
        onClick={() => props.setFilter(props.name)}
      >
        <span className="visually-hidden">Show </span>
        <span>{props.name}</span>
        <span className="visually-hidden"> tasks</span>
      </button>
    </div>
  );
}
export default FilterButton;
