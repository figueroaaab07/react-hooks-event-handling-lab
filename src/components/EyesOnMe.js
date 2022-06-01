// Code EyesOnMe Component Here
import React from 'react';

function onBlurHandler() {
  console.log('Hey! Eyes on me!');
}

function onFocusHandler() {
  console.log('Good!');
}

function EyesOnMe() {
  return (
    <div>
      <button onBlur={onBlurHandler} onFocus={onFocusHandler}>Eyes on me</button>
    </div>
  )
}

export default EyesOnMe;