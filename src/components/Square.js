import React, { useState } from 'react'
import classes from "../App.module.css"
export default function Square({ value, onSquareClick }) {
    //const [value, setValue] = useState(null);

//   function handleClick() {
//     setValue('X');
//   }
  return (
    <button
      className={classes.square}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}
