// Code Keypad Component Here
import React from 'react';

function onChangeHandler() {
  console.log('Entering password...');
}
function Keypad() {
  return (
    <div>
      <input type="password" onChange={onChangeHandler} />
    </div>
  )
}

export default Keypad;