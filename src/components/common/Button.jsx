import React from 'react';

function Button({category='primary', text='click me'}) {
  return (
    <button className={`btn btn--${category}`}>{text}</button>
  );
}

export default Button;