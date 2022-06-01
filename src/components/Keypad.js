// Code Keypad Component Here
import React from 'react';

function onChangeHandler() {
  console.log('Entering password...');
}
function Keypad() {
  return <input type="password" onChange={onChangeHandler} />
}

export default Keypad;