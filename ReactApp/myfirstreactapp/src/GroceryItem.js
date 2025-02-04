import React from 'react';

function GroceryItem (props) {
  function handleClick(e) {
    alert(`The ${props.name} has been added to cart`)
  }
  return (
    <button onClick={handleClick}>
      {props.name}
    </button>
  );
}

export default GroceryItem;